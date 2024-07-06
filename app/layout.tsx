import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "../context/index"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PPA Assignment",
  description: "This is Ronak Surana Submission for PPA",
};

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
