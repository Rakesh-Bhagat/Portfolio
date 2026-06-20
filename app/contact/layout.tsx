import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rakesh Bhagat for freelance work, career opportunities, or collaboration on web development projects.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Rakesh Bhagat",
    description:
      "Get in touch with Rakesh Bhagat for freelance work, career opportunities, or collaboration on web development projects.",
    url: "https://bhagat.dev/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
