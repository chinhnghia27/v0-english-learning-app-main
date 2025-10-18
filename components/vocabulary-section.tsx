import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
function highlightTerm(text: string, term: string) {
  if (!text || !term) return text

  const regex = new RegExp(`(${term})`, "gi")
  const parts = text.split(regex)

  return parts.map((part, index) => {
    if (part.toLowerCase() === term.toLowerCase()) {
      return (
        <mark key={index} className="rounded bg-yellow-200 px-1 font-semibold dark:bg-yellow-700">
          {part}
        </mark>
      )
    }
    return part
  })
}

interface VocabularySectionProps {
  vocabulary: any[] // <UPDATE> Declare the Vocabulary type or import it before using it
}

export function VocabularySection({ vocabulary }: VocabularySectionProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl font-extrabold">Từ Vựng Chính</h2>
          <p className="text-lg text-muted-foreground font-semibold">Danh sách các từ vựng quan trọng trong unit này</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left column */}
          <div className="space-y-4">
            {vocabulary.slice(0, Math.ceil(vocabulary.length / 2)).map((item, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-foreground">{item.term}</span>
                          <span className="font-bold shrink-0 text-[12px] uppercase tracking-wide text-primary/80 bg-primary/10 px-1.5 py-0.5 rounded">
                            {item.partOfSpeech}
                          </span>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground font-semibold">{item.translation}</div>
                      </div>
                    </div>
                  </div>

                  {/* Example sentence in English */}
                  <div className="mb-3 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
                    <p className="text-sm italic text-foreground font-semibold">{highlightTerm(item.example, item.term)}</p>
                  </div>

                  {/* Example translation in Vietnamese */}
                  <div className="rounded-lg bg-green-50 p-3 dark:bg-green-950">
                    <p className="text-sm text-muted-foreground font-semibold">
                      {highlightTerm(item.exampleTranslation, item.translation)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-4">
            {vocabulary.slice(Math.ceil(vocabulary.length / 2)).map((item, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold text-foreground">{item.term}</span>
                          <span className="font-bold shrink-0 text-[12px] uppercase tracking-wide text-primary/80 bg-primary/10 px-1.5 py-0.5 rounded">
                            {item.partOfSpeech}
                          </span>
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">{item.translation}</div>
                      </div>
                    </div>
                  </div>

                  {/* Example sentence in English */}
                  <div className="mb-3 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
                    <p className="text-sm italic text-foreground">{highlightTerm(item.example, item.term)}</p>
                  </div>

                  {/* Example translation in Vietnamese */}
                  <div className="rounded-lg bg-green-50 p-3 dark:bg-green-950">
                    <p className="text-sm text-muted-foreground">
                      {highlightTerm(item.exampleTranslation, item.translation)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
