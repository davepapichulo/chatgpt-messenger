import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/Sidebar";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <SessionProvider session={session}>
      <body className={inter.className}>
        <div className="flex">
          <div className=" bg-[#202123] max-w-xs h-screen overflow-y-auto-auto md:min-w-[20rem]">
            <SideBar />
          </div>

          {/* Client Provider => Notifications */}
          <div className="flex-1 bg-[#343541]">{children}</div>
        </div>
      </body>
      </SessionProvider>
    </html>
  );
}
