import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Course } from "@/lib/data"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card 
      className="group h-full min-h-[230px] flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative"
      style={{
        backgroundImage: `url(${course.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 flex flex-col h-full">
        <CardHeader className="flex-1 pb-4">
          <CardTitle className="text-2xl font-extrabold text-white mb-1">{course.name}</CardTitle>
          <CardDescription className="text-base font-bold text-white/90">{course.description}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="mb-4 flex items-center gap-2 text-sm text-white/80">
            <span className="rounded-full bg-white/20 px-3 py-1 font-semibold text-white">8 Units</span>
            <span className="rounded-full bg-white/20 px-3 py-1 font-semibold text-white">5 Skills</span>
          </div>
          <Button asChild className="w-full font-bold">
            <Link href={`/course/${course.slug}`}>Xem Các Unit</Link>
          </Button>
        </CardContent>
      </div>
    </Card>
  )
}
