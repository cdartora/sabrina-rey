import {
  Inter as FontSans,
  Playfair_Display as FontSerif
} from "next/font/google"

export const fontSans = FontSerif({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSerif = FontSans({
  subsets: ["latin"],
  variable: "--font-serif"
});