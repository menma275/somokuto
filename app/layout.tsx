import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const shippori = Shippori_Mincho({ subsets: ["latin", "latin-ext"],  weight: ["400", "500", "600", "700"]});

export const metadata: Metadata = {
  title: "種田山頭火 草木塔",
  description: "種田山頭火 草木塔 / Fire on the Mountain by Taneda Santoka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={shippori.className}>{children}</body>
    </html>
  );
}
