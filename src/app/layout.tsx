import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Weight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'


const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight:['400','500','600','700'],
  variable: '--font-ibm-plex-san'
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables:{colorPrimary:"#624cf5"}
    }}>
        <html lang="en">
        <body className={cn("font-IBMPlex antialiaseed",IBMPlex.variable)}>{children}</body>
        </html>
    </ClerkProvider>
  );
}
