import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const getRoboto = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Projekt 2 - Algorytmy",
  description: "Projekt wykorzytujący programowanie dynamiczne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${getRoboto.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
