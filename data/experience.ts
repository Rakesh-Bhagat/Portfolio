export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Crescentia One",
    location: "Remote",
    period: "December 2025 – Present",
    points: [
      "Architected full-stack e-commerce backends with Node.js / Express.js, designing secure RESTful APIs for payment gateway integration and inventory management across 3 client platforms, reducing API response time by 30%.",
      "Resolved a production WhatsApp integration failure where every business-initiated send returned a 500 error, tracing it to an approved template's dynamic URL button requiring a button component in the payload, restoring automated messaging.",
      "Diagnosed slow cross-page navigation from a Vercel↔Supabase region mismatch, then cut perceived load time with App-Router streaming skeletons and cookie-only session reads across 9 routes.",
      "Migrated client infrastructure from WordPress to Next.js + Express.js, re-engineering the database layer and SSR pipeline and improving Core Web Vitals scores by 40%.",
    ],
  },
];

export default experience;
