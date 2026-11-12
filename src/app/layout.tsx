import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cendra.dev"),
  title: "Cendra — Your Infrastructure, One Centre | SSH Client · Developer Tools",
  description:
    "A focused workspace for every server, connection and terminal. Minimal. Technical. Built for uncompromising engineering focus.",
  keywords: [
    "SSH client",
    "developer tools",
    "terminal emulator",
    "infrastructure management",
    "server manager",
    "SFTP client",
    "macOS SSH",
    "devops",
  ],
  authors: [{ name: "Cendra Team" }],
  icons: {
    icon: "/cendra-logo-dark.png",
    apple: "/cendra-logo-dark.png",
  },
  openGraph: {
    title: "Cendra — Your Infrastructure, One Centre",
    description: "A focused workspace for every server, connection and terminal.",
    url: "https://cendra.dev",
    siteName: "Cendra",
    images: [
      {
        url: "/cendra-logo-dark.png",
        width: 1200,
        height: 1200,
        alt: "Cendra — SSH Client & Developer Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cendra — Your Infrastructure, One Centre",
    description: "A focused workspace for every server, connection and terminal.",
    images: ["/cendra-logo-dark.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0C0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-theme="dark">
      <body className="bg-[#0B0C0F] text-[#F3EEE5] font-sans selection:bg-[#F3EEE5]/20 selection:text-[#F3EEE5]">
        {children}
      </body>
    </html>
  );
}
