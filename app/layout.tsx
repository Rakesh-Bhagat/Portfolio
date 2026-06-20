import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
  weight: ["400", "500", "600", "700"], // choose weights you need
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
    "Portfolio of Rakesh Bhagat, a full stack developer from India building modern web applications using Next.js, React, Node.js, and TypeScript.",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Rakesh Bhagat",
    "bhagat.dev",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer India",
  ],

  authors: [{ name: "Rakesh Bhagat", url: "https://bhagat.dev" }],
  creator: "Rakesh Bhagat",

  openGraph: {
    title: "Rakesh Bhagat | Full Stack Developer",
    description:
      "21-year-old full stack developer building modern web applications with Next.js, React, and Node.js.",
    url: "https://bhagat.dev",
    siteName: "Rakesh Bhagat Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "Rakesh Bhagat Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rakesh Bhagat | Full Stack Developer",
    description:
      "Full stack developer building clean and scalable web applications.",
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
  name: "Rakesh Bhagat",
  url: "https://bhagat.dev",
  image: "https://bhagat.dev/dp.png",
  jobTitle: "Full Stack Developer",
  description:
    "Full stack developer from India building modern web applications using Next.js, React, Node.js, and TypeScript.",
  nationality: "Indian",
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Full Stack Web Development",
  ],
  sameAs: ["https://github.com/Rakesh-Bhagat"],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
