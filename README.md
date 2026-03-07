
# Agent Landing Page System — Prominent Properties Sotheby's International Realty

This project generates individual luxury landing pages for each agent in the office using a shared React template.

The original Figma design is available at https://www.figma.com/design/fQNc7pA0TbPQi5A93Jqend/Start-project-with-files.

---

## Running the code

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` for the default template page.  
Agent pages are served at `http://localhost:5173/agents/<slug>` (e.g. `/agents/laurie-rockoff`).

---

## File structure

```
agents-config.json          ← Master agent list (read by the web app)
agent-configs/
  laurie-rockoff.json       ← Per-agent config (one file per agent)
  ...
scripts/
  generate-agents.ts        ← CLI script: CSV → config files
src/
  types/agent.ts            ← AgentConfig TypeScript interface
  app/
    App.tsx                 ← Template component (accepts optional `agent` prop)
    AgentPage.tsx           ← Route wrapper: loads agent by URL slug
  main.tsx                  ← Router setup (/ and /agents/:slug)
```

---

## Adding an agent manually

1. Create `agent-configs/<slug>.json` (use `first-last` format for the slug):

```json
{
  "slug": "jane-smith",
  "name": "Jane Smith",
  "phone": "(201) 555-0199",
  "email": "jane.smith@sothebysrealty.com",
  "office": "Hoboken, NJ",
  "town": "Hudson County",
  "ctaText": "Schedule a Consultation",
  "bio": "Jane Smith has 15 years of luxury real estate experience...",
  "headshot": "",
  "headerBackground": ""
}
```

2. Add the agent to `agents-config.json` under the `"agents"` array.

3. The agent's page is now live at `/agents/jane-smith`.

---

## Generating agents from a CSV

The roster CSV must have these columns:

| Column          | Notes                                       |
| --------------- | ------------------------------------------- |
| Name            | Full agent name                             |
| Phone           | Agent phone number                          |
| Email           | Must end in `@sothebysrealty.com`           |
| Office          | Office location                             |
| Profile Picture | (optional — ignored; use `headshot` field)  |
| Start Date      | (optional — stored for reference)           |

Run the generator script:

```bash
npx tsx scripts/generate-agents.ts "path/to/Agent Roster Report.csv"
```

This will:
- Create `agent-configs/<slug>.json` for every agent with a `@sothebysrealty.com` email
- **Preserve** any existing fields you have edited (e.g. `headshot`, `bio`)
- Rebuild `agents-config.json` from the individual config files

---

## Customizing an agent's page

Open their `agent-configs/<slug>.json` and update any field:

| Field               | What it changes                                       |
| ------------------- | ----------------------------------------------------- |
| `headshot`          | Agent profile photo URL (replaces placeholder image)  |
| `headerBackground`  | Hero section background image URL                     |
| `bio`               | Biography paragraph shown in the profile section      |
| `town`              | City/region used in hero and lead-capture copy        |
| `ctaText`           | Label for the primary CTA button                      |

Then re-run the generator script (or manually copy the field into `agents-config.json`) and redeploy.

### Example — adding a headshot and background

```json
{
  "slug": "laurie-rockoff",
  "headshot": "https://your-cdn.com/photos/laurie-rockoff.jpg",
  "headerBackground": "https://images.unsplash.com/photo-XXXXXX?w=1080"
}
```

---

## Deployment

This is a client-side SPA built with Vite. When deploying to a static host (Netlify, Vercel, etc.) make sure all requests are routed to `index.html` so that React Router can handle `/agents/:slug`.

**Netlify** — add a `_redirects` file in `public/`:
```
/* /index.html 200
```

**Vercel** — add a `vercel.json` at the repo root:
```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```
