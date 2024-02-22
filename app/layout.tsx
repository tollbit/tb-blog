import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts From The Tollbit Team",
  description: "What we're building at Tollbit and why",
  openGraph: {
    title: "Thoughts From The Tollbit Team",
    description: "What we're building at Tollbit and why.",
    url: "https://why.tollbit.com",
    siteName: "Why Tollbit",
    images: [
      {
        url: "https://why.tollbit.com/ogimage.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thoughts From The Tollbit Team",
    description: "What we're building at Tollbit and why.",
    images: ["https://why.tollbit.com/ogimage.png"],
  },
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
