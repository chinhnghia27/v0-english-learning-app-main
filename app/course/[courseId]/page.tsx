import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { UnitCard } from "@/components/unit-card"
import { getCourse } from "@/lib/data"
import { ChevronLeft } from "lucide-react"

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = getCourse(params.courseId)

  if (!course) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <div className="relative overflow-hidden py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg)`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative mx-auto px-4">
          <Button asChild variant="outline" className="mb-6 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Về Trang Chủ
            </Link>
          </Button>
          <h1 className="mb-4 text-5xl font-extrabold text-white">{course.name}</h1>
          <p className="text-xl text-white/90 font-semibold">{course.description}</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-extrabold">8 Units Học Tập</h2>
            <p className="text-lg text-muted-foreground font-semibold">
              Chọn unit bạn muốn ôn luyện. Mỗi unit bao gồm 5 kỹ năng: Từ vựng, Nghe, Nói, Đọc, Viết.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {course.units.map((unit) => (
              <UnitCard key={unit.id} unit={unit} courseSlug={course.slug} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
