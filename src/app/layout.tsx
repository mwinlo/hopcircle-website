import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "HopCircle — Playdates without the awkward ask",
  description:
    "Your kid wants to play. Someone nearby wants to host. HopCircle makes the match — so you never have to cold-text a parent again. Free on iOS.",
  icons: {
    icon: "/images/logo-mark.png",
    apple: "/images/logo-mark.png",
  },
  openGraph: {
    title: "HopCircle — Playdates without the awkward ask",
    description:
      "Your kid wants to play. Someone nearby wants to host. HopCircle makes the match.",
    type: "website",
    locale: "en_AU",
    siteName: "HopCircle",
  },
  twitter: {
    card: "summary_large_image",
    title: "HopCircle — Playdates without the awkward ask",
    description:
      "Your kid wants to play. Someone nearby wants to host. HopCircle makes the match.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
