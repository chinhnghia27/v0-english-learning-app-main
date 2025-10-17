# English Learning App - Project Documentation

## Project Overview

**English Learning App** is an interactive web-based platform designed for Vietnamese university students (specifically HAUI - Hanoi University of Industry) to review and practice English for Specific Purposes (ESP) courses. The application provides a structured learning experience with 6 ESP courses, each containing 8 units covering 5 essential language skills.

**Target Audience:** University students in Vietnam studying specialized English
**Primary Language:** Vietnamese (UI) with English content for learning
**Purpose:** Interactive review and practice of ESP courses with gamified exercises

---

## Technology Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4 with custom design tokens
- **UI Components:** shadcn/ui
- **Font:** Nunito Sans (Google Fonts)
- **Interactive Exercises:** Embedded from Quiz.com and WordWall.net
- **Deployment:** Vercel-ready

---

## Project Structure

\`\`\`
app/
├── page.tsx                                    # Homepage with hero section
├── layout.tsx                                  # Root layout with fonts
├── globals.css                                 # Global styles and design tokens
└── course/
    └── [courseId]/
        ├── page.tsx                            # Course units library page
        └── [unitId]/
            ├── page.tsx                        # Unit detail page with vocabulary
            └── [skillId]/
                └── page.tsx                    # Skill detail page with exercises

components/
├── hero-section.tsx                            # Homepage hero with smooth scroll
├── course-card.tsx                             # Course card component
├── unit-card.tsx                               # Unit card component
├── vocabulary-section.tsx                      # Vocabulary table with highlighting
├── vocabulary-sidebar.tsx                      # Sticky vocabulary sidebar for skills
└── ui/                                         # shadcn/ui components

lib/
├── data.ts                                     # All course, unit, skill, vocabulary data
└── utils.ts                                    # Utility functions

public/
└── [assets]                                    # Static assets and images
\`\`\`

---

## Data Structure

### Core Interfaces (lib/data.ts)

\`\`\`typescript
interface Vocabulary {
  term: string                    // English vocabulary term
  partOfSpeech: string           // adj, n, v, etc.
  translation: string            // Vietnamese translation
  example: string                // English example sentence
  exampleTranslation: string     // Vietnamese translation of example
}

interface Skill {
  id: string                     // Unique skill identifier (listening, reading, etc.)
  name: string                   // Display name
  icon: string                   // Emoji icon
  exerciseUrls: string[]         // Array of 2 exercise URLs (Quiz.com, WordWall)
}

interface Unit {
  id: number                     // Numeric ID
  slug: string                   // URL slug (unit-1, unit-2, etc.)
  title: string                  // Display title
  description: string            // Unit description
  skills: Skill[]                // 5 skills: Vocabulary, Reading, Listening, Writing, Speaking
  vocabulary: Vocabulary[]       // Vocabulary list for the unit
}

interface Course {
  id: string                     // Unique course identifier
  slug: string                   // URL slug (ta-tmcb01, ta-tm, etc.)
  name: string                   // Display name
  description: string            // Course description
  color: string                  // TailwindCSS color class
  units: Unit[]                  // 8 units per course
}
\`\`\`

### 6 ESP Courses

1. **Tiếng Anh TMCB 1** (ta-tmcb01) - Business English
2. **Tiếng Anh TMCB 2** (ta-tmcb02) - Technical English
3. **Tiếng Anh TMCB 3** (ta-tmcb03) - Medical English
4. **Tiếng Anh TMCB 4** (ta-tmcb04) - Tourism English
5. **Tiếng Anh TMCB 5** (ta-tmcb05) - IT English
6. **Tiếng Anh Thương Mại** (ta-tm) - Legal English

Each course has:
- 8 units with unique titles and descriptions
- 5 skills per unit (Vocabulary, Reading, Listening, Writing, Speaking)
- 2 interactive exercises per skill
- Vocabulary list (5+ terms per unit, with full Unit 1 of IT English having 20 terms)

---

## URL Structure

### Homepage
- `/` - Main page with hero section and course selection

### Course Pages
- `/course/[courseSlug]` - Course units library
  - Example: `/course/ta-tmcb01` (Tiếng Anh TMCB 1)

### Unit Pages
- `/course/[courseSlug]/[unitSlug]` - Unit detail with vocabulary section
  - Example: `/course/ta-tmcb01/unit-1`

### Skill Pages
- `/course/[courseSlug]/[unitSlug]/[skillId]` - Skill detail with exercises and vocabulary sidebar
  - Example: `/course/ta-tmcb01/unit-1/listening`

---

## Key Features

### 1. Homepage (Hero Section)
- Large centered title: "Nơi Ôn Tập Tiếng Anh Thương Mại - Dành Riêng Cho Sinh Viên HAUI"
- Single "Bắt Đầu Học Ngay" button with smooth scroll animation (1200ms)
- Scrolls to course selection section below

### 2. Course Selection
- 6 course cards in responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
- Each card shows course name, description, unit count, skill count
- "Xem Các Unit" button navigates to course units page
- Cards have consistent height with bottom content aligned

### 3. Unit Library Page
- Displays 8 units for selected course
- Each unit card shows title, description, and 5 skill icons
- "Bắt Đầu Học" button navigates to first skill (Vocabulary)

### 4. Unit Detail Page
- **Vocabulary Section:** 2-column card layout
  - Each card contains: English term, Vietnamese translation, part of speech, example sentences
  - Vocabulary terms and translations are highlighted in example sentences
  - Responsive: 1 column on mobile, 2 columns on desktop
- **Skill Cards:** 5 tabs/cards for each skill
  - Order: Vocabulary, Reading, Listening, Writing, Speaking
  - Each skill card shows icon and name
  - Clicking navigates to skill detail page

### 5. Skill Detail Page
- **2-Column Layout:**
  - Left (2/3 width): Interactive exercises section
  - Right (1/3 width): Sticky vocabulary sidebar
- **Exercise Section:**
  - 2 interactive exercises per skill
  - Numbered: "Bài Tập Tương Tác 1", "Bài Tập Tương Tác 2"
  - Embedded iframes from Quiz.com and WordWall.net
- **Vocabulary Sidebar:**
  - Sticky positioning (stays visible while scrolling)
  - Shows only English term and Vietnamese translation
  - Compact format for quick reference
  - Scrollable if vocabulary list is long

### 6. Design System
- **Colors:** 
  - Primary: Yellow (#D4A017)
  - Secondary: Blue (#0066CC)
  - Accent: Coral (#FF6B6B)
  - Neutrals: White, grays, black
- **Typography:** Nunito Sans for all text
- **Spacing:** TailwindCSS spacing scale
- **Responsive:** Mobile-first design with breakpoints at md (768px) and lg (1024px)

---

## Helper Functions (lib/data.ts)

\`\`\`typescript
getCourse(courseSlug: string): Course | undefined
// Get course by slug

getUnit(courseSlug: string, unitSlug: string): Unit | undefined
// Get unit by course slug and unit slug

getSkill(courseSlug: string, unitSlug: string, skillId: string): Skill | undefined
// Get skill by course slug, unit slug, and skill ID
\`\`\`

---

## Component Details

### HeroSection
- Smooth scroll to #courses section on button click
- 1200ms animation duration with easing
- Centered layout with large typography

### CourseCard
- Flexbox layout with `justify-between` for consistent height
- Bottom content (badges and button) always aligned at bottom
- Responsive grid layout

### UnitCard
- Shows unit title, description, and 5 skill icons
- "Bắt Đầu Học" button links to first skill (Vocabulary)

### VocabularySection
- 2-column grid layout with card components
- Each card has border and padding
- Vocabulary terms highlighted in yellow in example sentences
- Responsive: 1 column mobile, 2 columns desktop

### VocabularySidebar
- Sticky positioning on skill pages
- Compact display: English term + Vietnamese translation only
- Scrollable container for long vocabulary lists
- 1/3 width on desktop, hidden on mobile

---

## Customization Guide

### Adding New Vocabulary
Edit `lib/data.ts` and add to the `vocabulary` array in the desired unit:

\`\`\`typescript
{
  term: "Example",
  partOfSpeech: "n",
  translation: "Ví dụ",
  example: "This is an example sentence.",
  exampleTranslation: "Đây là một câu ví dụ."
}
\`\`\`

### Changing Exercise URLs
Update the `exerciseUrls` array in the skill object:

\`\`\`typescript
exerciseUrls: [
  "https://quizizz.com/embed/quiz/YOUR_QUIZ_ID",
  "https://wordwall.net/embed/YOUR_ACTIVITY_ID"
]
\`\`\`

### Modifying Colors
Update the `color` property in course objects or modify TailwindCSS classes in components.

### Adding New Units
Modify the `Array.from({ length: 8 }, ...)` to increase unit count and add new unit data.

---

## Future Enhancements

- [ ] User authentication and progress tracking
- [ ] Gamification elements (points, badges, leaderboards)
- [ ] Spaced repetition for vocabulary
- [ ] User-generated content and notes
- [ ] Mobile app version
- [ ] Offline mode support
- [ ] Admin dashboard for content management
- [ ] Analytics and learning insights
- [ ] Integration with learning management systems (LMS)

---

## Important Notes for Development

1. **URL Slugs:** All URLs use slug-based routing (not numeric IDs) for better SEO and readability
2. **Vocabulary Highlighting:** The highlighting function is case-insensitive and works for both English and Vietnamese
3. **Sticky Sidebar:** The vocabulary sidebar uses CSS `sticky` positioning; ensure parent container has proper overflow handling
4. **Responsive Design:** Always test on mobile (375px), tablet (768px), and desktop (1024px+)
5. **Exercise Embeds:** Quiz.com and WordWall.net URLs must be valid embed URLs (not regular URLs)
6. **Data Structure:** All data is currently static in `lib/data.ts`; consider migrating to a database for scalability

---

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` or `pnpm install`
3. Run development server: `npm run dev`
4. Open http://localhost:3000 in browser
5. Edit `lib/data.ts` to customize courses, units, and vocabulary

---

## Support & Maintenance

For questions or issues with the application structure, refer to this documentation or contact the development team.
