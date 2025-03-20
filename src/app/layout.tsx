import type { Metadata } from "next";
import "./globals.css";
import { WeatherProvider } from "@/contexts/weatherContext";

export const metadata: Metadata = {
  title: "Weather Application",
  description: "Designed by Yusuf Eren Elmas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <WeatherProvider>{children}</WeatherProvider>
      </body>
    </html>
  );
}
