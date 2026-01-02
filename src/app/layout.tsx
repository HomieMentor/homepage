import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homie Mentor - 你的AI行動計劃夥伴",
  description:
    "Homie Mentor 是一款為使用者生成行動計劃，並持續動態調整計畫的強度以及時程配置，以及給予情緒支持和進度回顧的 AI 夥伴。",
  keywords: ["AI助手", "行動計劃", "目標達成", "情緒支持", "生產力工具", "個人成長"],
  authors: [{ name: "Homie Mentor Team" }],
  creator: "Homie Mentor",
  publisher: "Homie Mentor",
  openGraph: {
    title: "Homie Mentor - 你的AI行動計劃夥伴",
    description: "智慧生成個人化行動計劃，提供溫暖的情緒支持，讓你在達成目標的路上不再孤單。",
    url: "https://homie-mentor.com",
    siteName: "Homie Mentor",
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homie Mentor - 你的AI行動計劃夥伴",
    description: "智慧生成個人化行動計劃，提供溫暖的情緒支持，讓你在達成目標的路上不再孤單。",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
