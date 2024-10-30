import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Book Search | 書籍検索アプリ",
  description: "Google Books APIを使用した書籍検索アプリケーション",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="min-h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <footer className="border-t py-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Book Search. Powered by Google Books API.</p>
        </footer>
      </body>
    </html>
  );
}
