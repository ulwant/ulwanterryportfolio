import { useState } from 'react'
import { experiences, education } from '../data/content'
import type { Experience } from '../data/content'
import { IconCalendar, IconStar } from '../components/Icons'

type FilterKey = 'all' | 'professional' | 'student'

const filters: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All Experience' },
  { key: 'professional', label: 'Professional' },
  { key: 'student', label: 'Student & Global' },
]

// Grouping mirrors the filter semantics: professional employment
// first, then academic outreach and extracurricular involvement.
const categoryOf = (exp: Experience): Exclude<FilterKey, 'all'> =>
  exp.category === 'professional' ? 'professional' : 'student'

const groups: { key: Exclude<FilterKey, 'all'>; title: string }[] = [
  { key: 'professional', title: 'Professional Experience' },
  { key: 'student', title: 'Student & Global Experience' },
]

function ExperienceCard({ exp, startDelay }: { exp: Experience; startDelay: number }) {
  return (
    <article
      className={'experience-card' + (exp.featured ? ' is-featured' : '')}
      style={{ animationDelay: `${startDelay}s` }}
    >
      <span className="experience-marker" aria-hidden="true" />

      <header className="experience-header">
        {exp.featured && (
          <span className="experience-flag">
            <IconStar />
            Featured research work
          </span>
        )}
        <p className="experience-role">{exp.role}</p>
        <p className="experience-organization">
          {exp.org}
          {exp.location ? ` — ${exp.location}` : ''}
        </p>
        <p className="experience-date">
          <IconCalendar />
          {exp.period}
        </p>
      </header>

      {exp.summary && <p className="experience-summary">{exp.summary}</p>}

      {exp.bullets && exp.bullets.length > 0 && (
        <ul className="experience-responsibilities">
          {exp.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {exp.tags.length > 0 && (
        <div className="experience-tags">
          {exp.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      )}
    </article>
  )
}

function TimelineGroup({
  group,
  entries,
  startIndex,
}: {
  group: { key: string; title: string }
  entries: Experience[]
  startIndex: number
}) {
  if (entries.length === 0) return null
  return (
    <>
      <h2 className="experience-group-heading">{group.title}</h2>
      {entries.map((exp, i) => (
        <ExperienceCard key={exp.role} exp={exp} startDelay={startIndex + i * 0.05} />
      ))}
    </>
  )
}

export default function Experience() {
  const [filter, setFilter] = useState<FilterKey>('all')
  const [renderSeed, setRenderSeed] = useState(0)

  // Remount the timeline when the filter changes so the
  // entrance animation replays and markers stay aligned.
  const applyFilter = (key: FilterKey) => {
    if (key === filter) return
    setFilter(key)
    setRenderSeed((n) => n + 1)
  }

  const shownGroups = groups.filter((g) => filter === 'all' || g.key === filter)

  return (
    <>
      <section className="exp-intro">
        <p className="exp-eyebrow">Trajectory</p>
        <h1>Experience &amp; Involvement</h1>
        <p className="exp-intro-text">
          My work sits across machine-learning research, professional
          internships, international outreach, and university activities —
          here is how it fits together, in the order each role happened.
        </p>
        <p className="exp-meta-line">
          6 roles · Indonesia &amp; Taiwan · 2022 — 2026
        </p>
      </section>

      <nav className="exp-filters" aria-label="Filter experience entries">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={'filt' + (filter === f.key ? ' is-active' : '')}
            aria-pressed={filter === f.key}
            onClick={() => applyFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </nav>

      <section className="exp-body" key={renderSeed}>
        <div className="experience-timeline">
          {shownGroups.map((group, gi) => {
            const entries = experiences.filter((e) => categoryOf(e) === group.key)
            const priorCount = shownGroups
              .slice(0, gi)
              .reduce((n, g2) => n + experiences.filter((e) => categoryOf(e) === g2.key).length, 0)
            return (
              <TimelineGroup
                key={group.key}
                group={group}
                entries={entries}
                startIndex={priorCount * 0.05}
              />
            )
          })}
        </div>

        <aside className="education-strip">
          <div className="education-card">
            <div className="education-step">
              <strong>{education.school}</strong>
              <span>
                {education.degree} · {education.period}
              </span>
            </div>
            <span className="education-arrow" aria-hidden="true">
              ←
            </span>
            <div className="education-step">
              <strong>NTHU · Hsinchu, Taiwan</strong>
              <span>Electrical Eng. &amp; CS (IBP Scholarship) · 2020–2023</span>
            </div>
          </div>
        </aside>
      </section>
    </>
  )
}
