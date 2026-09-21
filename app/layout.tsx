import type { Metadata } from "next";

import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";

import "./globals.css";

import { Providers } from "./providers";
import StarField from "@/components/StarField";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bhagat.dev"),

  title: {
    default: "Rakesh Bhagat | Full Stack Developer",
    template: "%s | Rakesh Bhagat",
  },

  description:
    "Portfolio of Rakesh Bhagat, a full stack developer from India building modern web applications with Next.js, React, Node.js, TypeScript, and PostgreSQL.",

  alternates: {
    canonical: "/",
  },

  authors: [
    {
      name: "Rakesh Bhagat",
      url: "https://bhagat.dev",
    },
  ],

  creator: "Rakesh Bhagat",

  openGraph: {
    title: "Rakesh Bhagat | Full Stack Developer",
    description:
      "Rakesh Bhagat is a full stack developer building modern web applications with Next.js, React, Node.js, TypeScript, and PostgreSQL.",
    url: "https://bhagat.dev",
    siteName: "Rakesh Bhagat",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Rakesh Bhagat — Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rakesh Bhagat | Full Stack Developer",
    description:
      "Full stack developer building modern and scalable web applications.",
    images: ["/preview.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://bhagat.dev/#person",

  name: "Rakesh Bhagat",
  url: "https://bhagat.dev",
  image: "https://bhagat.dev/dp.png",

  jobTitle: "Full Stack Developer",

  description:
    "Rakesh Bhagat is a full stack developer building modern web applications with Next.js, React, Node.js, TypeScript, and PostgreSQL.",

  knowsAbout: [
    "Full Stack Web Development",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Supabase",
    "Web Development",
  ],

  sameAs: [
    "https://github.com/Rakesh-Bhagat",
    "https://www.linkedin.com/in/irakesh-bhagat/",
    "https://x.com/irakesh_bhagat",
    "https://www.instagram.com/irakesh_bhagat/",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  "@id": "https://bhagat.dev/#website",
  url: "https://bhagat.dev",

  name: "Rakesh Bhagat",
  description:
    "Portfolio of Rakesh Bhagat, a full stack developer building modern web applications.",

  publisher: {
    "@id": "https://bhagat.dev/#person",
  },

  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} antialiased selection:bg-green-100 selection:text-neutral-600 dark:bg-[#0a0a0a]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

        <Providers>
          <CustomCursor />
          <StarField />
          {children}
        </Providers>
      </body>
    </html>
  );
}