"use client"

import type { Vocabulary } from "@/lib/data"

interface VocabularySidebarProps {
  vocabulary: Vocabulary[]
  unitTitle: string
}

export function VocabularySidebar({ vocabulary, unitTitle }: VocabularySidebarProps) {
  return (
    <aside className="sticky top-4 h-fit rounded-lg border bg-card p-6">
      <h3 className="mb-4 text-lg font-bold">Từ Vựng {unitTitle}</h3>
      <div className="space-y-3 max-h-[600px] overflow-y-auto overscroll-y-contain">
        {vocabulary.map((vocab, index) => (
          <div key={index} className="border-b pb-3 last:border-b-0">
            <p className="font-semibold text-foreground">{vocab.term}</p>
            <p className="text-sm text-muted-foreground">{vocab.translation}</p>
          </div>
        ))}
      </div>
    </aside>
  )
}
