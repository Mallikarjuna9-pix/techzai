import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TECHZ AI - Learn • Practice • Prepare • Get Hired",
  description: "Engineering student platform with VTU 2025, AI assistant, mock interviews, and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#070b17] text-white`}>
        {children}
      </body>
    </html>
  );
}
