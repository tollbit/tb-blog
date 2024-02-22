import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      <GoogleAnalytics gaId="G-K6QG2D80BD" />

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`antialiased min-h-screen bg-white font-medium text-slate-900 `}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* <div className="">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full fixed z-0"
              particleColor="#0000ff"
              speed={0.1}
            />
          </div> */}

          <Header />

          <div className="relative max-w-2xl mx-auto mt-16 py-16 px-4 z-10">
            <main>{children}</main>
          </div>
          <Analytics />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
