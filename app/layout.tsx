import type React from "react"
import type { Metadata } from "next"
import { Nunito_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _nunitoSans = Nunito_Sans({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Website Giúp Ôn Tập Tiếng Anh Thương Mại Dành Cho Sinh Viên HAUI",
  description: "Website miễn phí giúp sinh viên Đại học Công Nghiệp Hà Nội ôn tập Tiếng Anh Thương Mại một cách nhanh chóng, hiệu quả, và tiện lợi.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased ${_nunitoSans.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
