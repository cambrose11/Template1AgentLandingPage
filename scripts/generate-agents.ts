/**
 * scripts/generate-agents.ts
 *
 * Reads an agent CSV file exported from the roster and generates:
 *   - Individual config files in agent-configs/<slug>.json
 *   - The master agents-config.json used by the web app
 *
 * Usage:
 *   npx tsx scripts/generate-agents.ts <path-to-csv>
 *
 * CSV columns expected:
 *   Profile Picture, Name, Phone, Email, Office, Start Date
 *
 * Only rows with @sothebysrealty.com emails are included.
 * Existing agent-configs/<slug>.json files are preserved and merged, so
 * hand-edited fields like `headshot` and `headerBackground` are never lost.
 */

import fs from 'fs';
import path from 'path';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface AgentConfig {
  slug: string;
  name: string;
  phone: string;
  email: string;
  office: string;
  bio?: string;
  town?: string;
  ctaText?: string;
  headshot?: string;
  headerBackground?: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/**
 * Minimal CSV parser that handles quoted fields and escaped quotes ("").
 * Returns an array of objects keyed by the header row.
 */
function parseCsv(raw: string): Record<string, string>[] {
  const lines = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n');
  if (lines.length < 2) return [];

  const headers = splitCsvLine(lines[0]);
  const rows: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const values = splitCsvLine(line);
    const row: Record<string, string> = {};
    headers.forEach((h, idx) => {
      row[h.trim()] = (values[idx] ?? '').trim();
    });
    rows.push(row);
  }

  return rows;
}

function splitCsvLine(line: string): string[] {
  const fields: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i];

    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          // escaped quote
          current += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        fields.push(current);
        current = '';
      } else {
        current += ch;
      }
    }
  }
  fields.push(current);
  return fields;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const csvPath = process.argv[2];
if (!csvPath) {
  console.error('Usage: npx tsx scripts/generate-agents.ts <path-to-csv>');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');
const agentConfigsDir = path.join(rootDir, 'agent-configs');
const masterConfigPath = path.join(rootDir, 'agents-config.json');

if (!fs.existsSync(agentConfigsDir)) {
  fs.mkdirSync(agentConfigsDir, { recursive: true });
}

const rawCsv = fs.readFileSync(csvPath, 'utf-8');
const rows = parseCsv(rawCsv);

const filteredRows = rows.filter((row) => {
  const email = (row['Email'] ?? '').toLowerCase();
  return email.endsWith('@sothebysrealty.com');
});

console.log(`Found ${filteredRows.length} agents with @sothebysrealty.com emails.`);

const agents: AgentConfig[] = [];

for (const row of filteredRows) {
  const name = row['Name'] ?? '';
  if (!name) continue;

  const slug = toSlug(name);
  const configPath = path.join(agentConfigsDir, `${slug}.json`);

  // Load existing config to preserve hand-edited fields (headshot, headerBackground, bio, etc.)
  let existing: Partial<AgentConfig> = {};
  if (fs.existsSync(configPath)) {
    try {
      existing = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    } catch {
      console.warn(`  Warning: could not parse existing config for ${slug}, overwriting.`);
    }
  }

  const config: AgentConfig = {
    slug,
    name,
    phone: row['Phone'] ?? '',
    email: row['Email'] ?? '',
    office: row['Office'] ?? '',
    // Preserve hand-edited overrides; fall back to empty strings
    bio: existing.bio ?? '',
    town: existing.town ?? '',
    ctaText: existing.ctaText ?? 'Schedule a Consultation',
    headshot: existing.headshot ?? '',
    headerBackground: existing.headerBackground ?? '',
  };

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
  console.log(`  ✓ agent-configs/${slug}.json`);

  agents.push(config);
}

// Write master config
const masterConfig = { agents };
fs.writeFileSync(masterConfigPath, JSON.stringify(masterConfig, null, 2) + '\n');
console.log(`\n✓ agents-config.json updated with ${agents.length} agents.`);
console.log('\nNext steps:');
console.log('  • To add a headshot, set the "headshot" URL in agent-configs/<slug>.json');
console.log('  • To change the hero background, set "headerBackground" in agent-configs/<slug>.json');
console.log('  • Re-run this script after editing individual configs to rebuild agents-config.json');
