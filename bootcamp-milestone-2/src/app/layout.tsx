import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#00111C]">
        <div className="flex">
          <div className="w-1/2 h-screen flex justify-center py-24 fixed aboslute left-0">
            <Navbar />
          </div>
          <div className="w-1/2 h-screen flex justify-center absolute right-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
