import type { Metadata } from "next";
import Script from "next/script";
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
      <body className="antialiased">
        {children}
        <Script
          id="elfsight"
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />
        <Script
          id="metricool"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"895a644dd8a75da118357ea0888e92bf"})});`,
          }}
        />
      </body>
    </html>
  );
}
