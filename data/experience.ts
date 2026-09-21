export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Crescentia One",
    location: "Remote",
    period: "December 2025 – Present",
    points: [
      "Migrated a client's production website (ProfitMaster) off company-owned infrastructure onto the client's own accounts with zero customer-facing downtime during cutover - transferred the GitHub repository, moved the Supabase Postgres database, copied Cloudflare R2 object storage via rclone, transferred the profitmaster.in domain, and redeployed the Next.js app as a Cloudflare Worker on the client's account.",
      "Diagnosed slow cross-page navigation in production by identifying a Vercel↔Supabase region mismatch from response headers (~250 ms round-trips per query), then cut perceived load time by adding App-Router streaming skeletons and replacing per-page auth.getUser() network calls with cookie-only session reads across 9 routes.",
      "Owned Leopardol, the company's e-commerce platform, as sole full-stack engineer across 3 services (API, admin panel, storefront) from system design through production deployment.",
      "Migrated client infrastructure from WordPress to Next.js on Cloudflare Workers, re-engineering the database layer and SSR pipeline, and integrating a Razorpay payment gateway for event registrations that processed Rs 3,00,000 in transactions from a single event.",
    ],
  },
];

export default experience;
