import type { Metadata } from "next";
import Head from "next/head";
import { cn } from "@/lib/utils"
import Header from "../components/header.tsx";
import {fontSans} from "../fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sabrina Rey",
  description: "Creators. A Culture Made by All.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      ><Header/>{children}</body>
    </html>
  );
}
