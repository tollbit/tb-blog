import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";

export const metadata = {
  title: "Some Thoughts From Josh Mayer",
  description: "just a simple repository of notes and others from Josh Mayer",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-50 font-serif tracking-tighter`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between font-bold tracking-tighter">
                <nav className="text-md space-x-6">
                  <Link href="/">Home</Link>
                  {/* <Link href="/about">About</Link> */}
                </nav>
                <div className="">
                  <h3 className="dark:text-gray-800">Josh Mayer</h3>
                </div>
                <ModeToggle />
              </div>
            </header>
            <main>{children}</main>
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
