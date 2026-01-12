import type { Metadata } from "next";
import { Outfit, Cabin } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vjbiofuel - LDO Manufacturer &  Supplier",
  description: "High-quality Light Diesel Oil for industrial fuel applications. Assured purity, consistent performance, and nationwide delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cabin.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
