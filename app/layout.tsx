import type React from "react"
import type { Metadata } from "next"
import { Nunito_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _nunitoSans = Nunito_Sans({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ôn Tập Tiếng Anh Thương Mại Dành Cho Sinh Viên HAUI",
  description: "Website miễn phí giúp sinh viên Đại học Công Nghiệp Hà Nội ôn tập Tiếng Anh Thương Mại một cách nhanh chóng, hiệu quả, và tiện lợi.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicon-70x70.png", sizes: "70x70", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [
      { url: "/favicon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicon-60x60.png", sizes: "60x60", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased bg-texture-pattern ${_nunitoSans.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
