"use client"

import type { Vocabulary } from "@/lib/data"

interface VocabularySidebarProps {
  vocabulary: Vocabulary[]
  unitTitle: string
}

export function VocabularySidebar({ vocabulary, unitTitle }: VocabularySidebarProps) {
  return (
    <aside className="sticky top-4 h-fit rounded-xl border bg-card/80 p-6 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-card/70">
      <h3 className="mb-5 text-lg font-extrabold tracking-tight">Từ Vựng {unitTitle}</h3>
      <div className="space-y-3 max-h-[600px] overflow-y-auto overscroll-y-contain pr-1">
        {vocabulary.map((vocab, index) => (
          <div
            key={index}
            className="group rounded-md border bg-background/50 px-3 py-2 transition-colors hover:bg-accent/10"
          >
            <div className="flex items-baseline justify-between gap-2">
              <div className="flex items-baseline gap-2 min-w-0">
                <span className="truncate font-extrabold text-foreground">{vocab.term}</span>
                {vocab.phonetic ? (
                  <span className="shrink-0 text-xs font-semibold text-muted-foreground/80">[{vocab.phonetic}]</span>
                ) : null}
                <span className="font-semibold shrink-0 text-[10px] uppercase tracking-wide text-primary/80 bg-primary/10 px-1.5 py-0.5 rounded">
                  {vocab.partOfSpeech}
                </span>
              </div>
            </div>
            <p className="mt-1 text-sm text-muted-foreground font-semibold">{vocab.translation}</p>
          </div>
        ))}
      </div>
    </aside>
  )
}
