import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getCourse, getUnit, getSkill } from "@/lib/data"
import { ChevronLeft } from "lucide-react"
import { VocabularySidebar } from "@/components/vocabulary-sidebar"

export default function SkillPage({
  params,
}: {
  params: { courseId: string; unitId: string; skillId: string }
}) {
  const course = getCourse(params.courseId)
  const unit = getUnit(params.courseId, params.unitId)
  const skill = getSkill(params.courseId, params.unitId, params.skillId)

  if (!course || !unit || !skill) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <div className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-6">
            <Link href={`/course/${course.slug}/${unit.slug}`}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Quay lại {unit.title}
            </Link>
          </Button>
          <div className="mb-4 text-5xl">{skill.icon}</div>
          <h1 className="mb-4 text-4xl font-bold">{skill.name}</h1>
          <p className="text-lg text-muted-foreground">
            Luyện tập kỹ năng {skill.name.toLowerCase()} trong {unit.title}
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Exercise section - takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              {skill.exerciseUrls.map((url, index) => (
                <div key={index} className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold">Bài Tập Tương Tác {index + 1}</h2>
                  <div className="h-[800px] overflow-hidden rounded-lg border bg-muted">
                    <iframe
                      src={url}
                      className="h-full w-full overscroll-contain"
                      title={`${skill.name} Exercise ${index + 1}`}
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <Button asChild variant="outline">
                  <Link href={`/course/${course.slug}/${unit.slug}`}>Quay Lại</Link>
                </Button>
              </div>
            </div>

            {/* Vocabulary sidebar - takes 1 column on large screens */}
            <div className="hidden lg:block">
              <VocabularySidebar vocabulary={unit.vocabulary} unitTitle={unit.title} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
