import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "../components/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nimak Media & Events - Professional Event Management",
  description: "Creating unforgettable experiences through professional event management, conference planning, and media services. Your vision, our expertise.",
  keywords: "event management, conference planning, corporate events, media services, event planning, professional events",
  authors: [{ name: "Nimak Media & Events" }],
  openGraph: {
    title: "Nimak Media & Events - Professional Event Management",
    description: "Creating unforgettable experiences through professional event management, conference planning, and media services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
