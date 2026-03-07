export interface AgentConfig {
  /** URL-friendly identifier, e.g. "laurie-rockoff" */
  slug: string;
  name: string;
  phone: string;
  email: string;
  office: string;
  /** Short biography shown in the profile section */
  bio?: string;
  /** City / region served, used in hero and lead-capture copy */
  town?: string;
  /** Hero call-to-action button label */
  ctaText?: string;
  /** Absolute URL for the agent's headshot photo */
  headshot?: string;
  /** Absolute URL for the hero section background image */
  headerBackground?: string;
}
