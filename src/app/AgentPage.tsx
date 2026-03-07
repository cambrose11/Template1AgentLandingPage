import { useParams } from 'react-router';
import App from './App';
import agentsConfig from '../../agents-config.json';
import type { AgentConfig } from '../types/agent';

const agents: AgentConfig[] = agentsConfig.agents as AgentConfig[];

export default function AgentPage() {
  const { slug } = useParams<{ slug: string }>();

  const agentData = agents.find((a) => a.slug === slug);

  if (!agentData) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-white text-[#002349]"
        style={{ fontFamily: 'var(--font-sans)' }}
      >
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', fontWeight: 'normal' }}>
          Agent Not Found
        </h1>
        <p className="mt-4 text-[#666666]" style={{ fontSize: '18px' }}>
          No agent page exists for <strong>{slug}</strong>.
        </p>
        <a
          href="/"
          className="mt-8 text-[#C29B40] underline"
          style={{ fontSize: '16px' }}
        >
          ← Back to home
        </a>
      </div>
    );
  }

  return <App agent={agentData} />;
}
