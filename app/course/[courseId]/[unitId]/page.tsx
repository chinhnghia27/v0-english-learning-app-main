import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getCourse, getUnit } from "@/lib/data"
import { VocabularySection } from "@/components/vocabulary-section"
import { ChevronLeft } from "lucide-react"

export default function UnitPage({
  params,
}: {
  params: { courseId: string; unitId: string }
}) {
  const course = getCourse(params.courseId)
  const unit = getUnit(params.courseId, params.unitId)

  if (!course || !unit) {
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="container relative mx-auto px-4">
          <Button asChild variant="outline" className="mb-6 border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20">
            <Link href={`/course/${course.slug}`}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Về {course.name}
            </Link>
          </Button>
          <h1 className="mb-4 text-5xl font-bold text-white">{unit.title}</h1>
          <p className="text-xl text-white/90">{unit.description}</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold">Chọn Kỹ Năng Để Luyện Tập</h2>
            <p className="text-lg text-muted-foreground">
              Mỗi kỹ năng có bài tập tương tác giúp bạn cải thiện khả năng tiếng Anh chuyên ngành.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {unit.skills.map((skill) => (
              <Card key={skill.id} className="group overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 text-5xl">{skill.icon}</div>
                  <CardTitle className="text-2xl">{skill.name}</CardTitle>
                  <CardDescription>Luyện tập kỹ năng {skill.name.toLowerCase()} với bài tập tương tác</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={`/course/${course.slug}/${unit.slug}/${skill.id}`}>Bắt Đầu Luyện Tập</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <VocabularySection vocabulary={unit.vocabulary} />
    </main>
  )
}
