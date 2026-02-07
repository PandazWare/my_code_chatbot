import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GameDev AI Chatbot",
  description: "AI-powered assistant für Game Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}