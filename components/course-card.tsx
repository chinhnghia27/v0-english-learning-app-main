import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Course } from "@/lib/data"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group h-full flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <div className={`h-2 ${course.color}`} />
      <CardHeader className="flex-1">
        <CardTitle className="text-2xl font-bold">{course.name}</CardTitle>
        <CardDescription className="text-base">{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <span className="rounded-full bg-muted px-3 py-1">8 Units</span>
          <span className="rounded-full bg-muted px-3 py-1">5 Skills</span>
        </div>
        <Button asChild className="w-full">
          <Link href={`/course/${course.slug}`}>Xem Các Unit</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
