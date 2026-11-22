import type { ReactElement } from 'react'
import { profile, skillGroups } from '../data/content'

const things = [
  {
    num: '01',
    title: 'Build technical solutions',
    desc: 'Software and ML projects taken from problem statement to working system — mobile apps, web tools and vision pipelines.',
  },
  {
    num: '02',
    title: 'Investigate problems analytically',
    desc: 'Trained by lab research and market analysis to define the question first, then let data and evidence drive the answer.',
  },
  {
    num: '03',
    title: 'Communicate complex ideas',
    desc: 'Competitive debate, international outreach and choir — explaining technical work in language different audiences grasp.',
  },
]

const skillIcons: Record<string, ReactElement> = {
  cv: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  research: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  servers: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
}

export default function About() {
  return (
    <div className="about-wrap">
      <div className="about-grid">
        <div className="about-photo-col">
          <div className="about-photo-stack">
            <div className="ap-back" aria-hidden="true" />
            <div className="ap-frame">
              <div
                className="photo-mono"
                role="img"
                aria-label="Monogram placeholder portrait for Ulwan Terry Attartsauri"
              >
                <span className="pm-ring" aria-hidden="true" />
                <span className="pm-ring r2" aria-hidden="true" />
                <span className="pm-letter" aria-hidden="true">
                  U.
                </span>
                <span className="pm-caption">Ulwan Terry A.</span>
              </div>
            </div>
            <div className="ap-card">
              <div className="ap-card-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.2">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Based in {profile.location}
              </div>
              <div className="ap-card-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {profile.email}
              </div>
              <div className="ap-card-divider" />
              <div className="ap-card-gpa">
                <span className="ap-gpa-val">IELTS 7.5</span>
                <span className="ap-gpa-label">English — Advanced</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-content-col">
          <p className="about-eyebrow">About Me</p>
          <h1 className="about-title">
            Building solutions, <em>reasoning</em> through problems
          </h1>

          <p className="about-body">
            I'm a Computer Engineering student at Universitas Diponegoro
            (2024–2027), working across applied machine learning, computer
            vision and full-stack development. My interest is the full
            pipeline: from framing a problem properly, to building the system,
            to evaluating whether it actually works.
          </p>
          <p className="about-body">
            Before UNDIP, I studied Electrical Engineering &amp; Computer
            Science at National Tsing Hua University in Taiwan (2020–2023, IBP
            Scholarship) — an experience that shaped how I study, collaborate
            and present in international settings, and later led to acting as
            an NTHU outreach representative for prospective international
            students.
          </p>
          <p className="about-body">
            Outside pure engineering, competitive debating with the Undip
            Debating Forum, quality-control and warehouse work at an industrial
            coating company, and market research internships have taught me to
            work across disciplines — and to explain technical things clearly
            to non-technical audiences.
          </p>

          <div className="three-things" aria-label="Three things I bring">
            {things.map((t) => (
              <div className="thing-card" key={t.num}>
                <div className="tt-num">{t.num}</div>
                <h4>{t.title}</h4>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>

          {skillGroups.map((group) => (
            <section className="skill-section" key={group.title}>
              <p className="skill-section-label">{group.title}</p>
              <div className="skill-cards">
                <div className="sk-card">
                  <div className={`sk-icon ${group.colorClass}`}>
                    {skillIcons[group.icon]}
                  </div>
                  <div className="sk-body">
                    <h4>{group.title}</h4>
                    <p>{group.desc}</p>
                  </div>
                  <div className="sk-chips">
                    {group.chips.map((chip) => (
                      <span key={chip}>{chip}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
