import { HeroSection } from "@/components/hero-section"
import { CourseCard } from "@/components/course-card"
import { courses } from "@/lib/data"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <section id="courses" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Chọn Học Phần Của Bạn</h2>
            <p className="text-lg text-muted-foreground">6 học phần tiếng Anh chuyên ngành phổ biến nhất</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
