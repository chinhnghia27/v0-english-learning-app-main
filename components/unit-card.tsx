import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Unit } from "@/lib/data"

interface UnitCardProps {
  unit: Unit
  courseSlug: string
}

export function UnitCard({ unit, courseSlug }: UnitCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{unit.title}</CardTitle>
        <CardDescription className="font-semibold">{unit.description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="mb-4 flex flex-wrap gap-2">
          {unit.skills.map((skill) => (
            <span key={skill.id} className="flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-sm">
              <span>{skill.icon}</span>
              <span className="font-semibold">{skill.name}</span>
            </span>
          ))}
        </div>
        <Button asChild className="w-full font-bold">
          <Link href={`/course/${courseSlug}/${unit.slug}`}>Bắt Đầu Học</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
