import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Merge PDFs Side by Side (Free, Private, No Uploads)",
  description: "Merge two PDFs side by side directly in your browser. No uploads, no tracking, and completely free. Ideal for comparing documents and dual-language PDFs.",
  keywords: ["PDF merger", "side-by-side PDF", "merge PDFs", "PDF comparison", "dual language PDF", "online PDF tool"],
  authors: [{ name: "PDF Side-by-Side Merger" }],
  creator: "PDF Side-by-Side Merger",
  publisher: "PDF Side-by-Side Merger",
  metadataBase: new URL(siteUrl),
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Merge PDFs Side by Side (Free, Private, No Uploads)",
    description: "Merge two PDFs side by side directly in your browser. No uploads, no tracking, and completely free. Ideal for comparing documents and dual-language PDFs.",
    url: siteUrl,
    siteName: "PDF Side-by-Side Merger",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merge PDFs Side by Side (Free, Private, No Uploads)",
    description: "Merge two PDFs side by side directly in your browser. No uploads, no tracking, and completely free. Ideal for comparing documents and dual-language PDFs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "PDF Side-by-Side Merger",
    "description": "Free online tool to merge two PDF files side by side directly in your browser. No uploads, no tracking, 100% private and secure.",
    "url": siteUrl,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Privacy-first: All processing happens in your browser",
      "No file uploads to servers",
      "100% free with no limits or watermarks",
      "Side-by-side page merging",
      "Multiple page size handling modes",
      "Support for PDFs with different page counts"
    ],
    "browserRequirements": "Requires JavaScript. Works on Chrome 90+, Firefox 88+, Safari 14+, Edge 90+",
    "softwareVersion": "1.0.0",
    "author": {
      "@type": "Organization",
      "name": "PDF Side-by-Side Merger Contributors"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
