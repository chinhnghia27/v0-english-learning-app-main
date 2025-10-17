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
      <div className={`${course.color} py-16 md:py-24`}>
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6 text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Về Trang Chủ
            </Link>
          </Button>
          <h1 className="mb-4 text-5xl font-bold text-foreground">{course.name}</h1>
          <p className="text-xl text-primary-foreground/90">{course.description}</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">8 Units Học Tập</h2>
            <p className="text-lg text-muted-foreground">
              Chọn unit bạn muốn ôn luyện. Mỗi unit bao gồm 5 kỹ năng: Nghe, Nói, Đọc, Viết, Từ vựng.
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
