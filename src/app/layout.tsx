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
  title: "PDF Side-by-Side Merger - Merge PDFs Horizontally Online",
  description: "Free online tool to merge two PDF files side-by-side. Place corresponding pages horizontally for document comparison, dual-language materials, and more. 100% browser-based, secure, and private.",
  keywords: ["PDF merger", "side-by-side PDF", "merge PDFs", "PDF comparison", "dual language PDF", "online PDF tool"],
  authors: [{ name: "PDF Side-by-Side Merger" }],
  creator: "PDF Side-by-Side Merger",
  publisher: "PDF Side-by-Side Merger",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PDF Side-by-Side Merger - Merge PDFs Horizontally",
    description: "Free online tool to merge two PDF files side-by-side. Secure, private, and browser-based.",
    url: siteUrl,
    siteName: "PDF Side-by-Side Merger",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Side-by-Side Merger",
    description: "Free online tool to merge two PDF files side-by-side",
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
