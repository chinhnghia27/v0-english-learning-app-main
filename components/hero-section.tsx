"use client"
import { Button } from "@/components/ui/button"
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal"

export function HeroSection() {
  const handleScrollToCourses = () => {
    const coursesSection = document.getElementById("courses")
    if (coursesSection) {
      const targetPosition = coursesSection.getBoundingClientRect().top + window.scrollY
      const startPosition = window.scrollY
      const distance = targetPosition - startPosition
      const duration = 1200
      let start: number | null = null

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const elapsed = currentTime - start
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth deceleration
        const easeInOutCubic =
          progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2

        window.scrollTo(0, startPosition + distance * easeInOutCubic)

        if (progress < 1) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 flex flex-col items-center text-5xl font-extrabold leading-[1.3] tracking-tight md:text-7xl">
            <VerticalCutReveal containerClassName="flex justify-center whitespace-nowrap" transition={{ type: "spring", stiffness: 100, damping: 22 }}>Nơi Ôn Tập Tiếng Anh Thương Mại</VerticalCutReveal>
            <span className="block text-primary">
              <VerticalCutReveal transition={{ type: "spring", stiffness: 100, damping: 22 }}>Dành Riêng Cho Sinh Viên HAUI</VerticalCutReveal>
            </span>
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            Nền tảng học tập tương tác dành cho sinh viên đại học Việt Nam. Ôn luyện 5 kỹ năng: Nghe, Nói, Đọc, Viết, Từ
            vựng với bài tập thú vị.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="w-full sm:w-auto" onClick={handleScrollToCourses}>
              Bắt Đầu Học Ngay
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/30 blur-3xl" />
    </section>
  )
}
