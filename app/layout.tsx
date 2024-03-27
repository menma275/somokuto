import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Shippori_Mincho } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const shippori = Shippori_Mincho({ subsets: ["latin", "latin-ext"],  weight: ["400", "500", "600", "700"]});

const siteName = "種田山頭火 草木塔";
const description = "種田山頭火 草木塔 / Fire on the Mountain by Taneda Santoka";
const url = "https://somokuto.vercel.app/";

export const metadata: Metadata = {
  title:{
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description: description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: `${url}og.jpg`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@menma275',
    creator: '@menma275',
    images: {
      url: `${url}og.jpg`,
      width: 1200,
      height: 630,
      alt: siteName,
    },
  },
  alternates: {
    canonical: url,
  },
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
