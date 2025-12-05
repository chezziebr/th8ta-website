import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Ridge Merino style - Use Inter for everything
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TH8TA | Recovery Wear for Endurance Athletes",
  description: "Not activewear. Afterwear. Curated recovery gear for endurance athletes who know that what you wear after matters just as much.",
  keywords: ["recovery wear", "endurance athletes", "athletic recovery", "post-workout clothing", "athleisure"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
