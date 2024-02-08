import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import { NextResponse } from "next/server";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Some Thoughts From The Tollbit Team",
  description: "just a simple repository of notes and others",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Script src="https://tb-monitor.vercel.app/api/v1/1234-unique-id" />

      <body
        className={`antialiased min-h-screen bg-white font-medium dark:bg-black text-slate-900 dark:text-slate-50 tracking-tighter`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <div className="max-w-2xl mx-auto py-16 px-4">
            <main>{children}</main>
          </div>
          <Analytics />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
