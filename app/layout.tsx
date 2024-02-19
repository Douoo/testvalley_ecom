import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css"; // Import Swiper styles

register();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Testvalley",
  description: "Assessment Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
