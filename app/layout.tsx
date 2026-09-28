import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway", weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "EchoGPT — One prompt, every model",
  description: "A single continuous showcase of the EchoGPT web app and Chrome extension redesign.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme:dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={raleway.variable} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="relative min-h-screen overflow-x-hidden font-sans">{children}</body>
    </html>
  );
}
