import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#070b16",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://enwirecables.com"),
  title: "Nawaz Traders | Enwire Cables & Pipes - Pure Copper Wires & Bundles",
  description: "Official portal of Nawaz Traders, manufacturers and distributors of Enwire Cables & Pipes. Offering 99.9% pure copper flexible wires, industrial wire bundles, twin flat cables, and PVC conduit pipes. Call: 0322-4172149.",
  keywords: [
    "Nawaz Traders",
    "Enwire Cables & Pipes",
    "wire bundles",
    "flexible wires",
    "pure copper wires Pakistan",
    "conduit pipes",
    "electrical cables",
    "03224172149",
    "nawaztraders7866@gmail.com"
  ],
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "Nawaz Traders | Enwire Cables & Pipes",
    description: "Premium pure copper wire bundles, flexible wires & electrical conduit pipes. Contact 0322-4172149.",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
      </head>
      <body className="min-h-screen bg-[#070b16] text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
