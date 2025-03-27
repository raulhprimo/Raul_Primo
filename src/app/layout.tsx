import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Moon_Dance } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const moonDance = Moon_Dance({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Raul Primo",
  description: "Portfolio pessoal de Raul Primo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${moonDance.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
