import { projects, profile } from '../data/content'

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  )
}

const hlIcons = [
  <svg key="i0" width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M1 12h4M19 12h4" /></svg>,
  <svg key="i1" width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /></svg>,
  <svg key="i2" width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  <svg key="i3" width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  <svg key="i4" width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  <svg key="i5" width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>,
]

export default function Projects() {
  return (
    <>
      <section className="proj-intro">
        <p className="proj-eyebrow">What I've Built</p>
        <h1 className="proj-title">
            Projects &amp;
            <br />
            <em>Case Studies</em>
          </h1>
          <p className="proj-sub">
            A working collection of software, research and analysis — from
            computer vision pipelines to market intelligence, data kept honest
            by evaluation.
          </p>
          <div className="proj-banner-pills">
            <span>{projects.length} Projects</span>
            <span>ML · Web · Mobile · Research</span>
          </div>
      </section>

      <section className="proj-section">
        <div className="proj-grid">
          {projects.map((project) => (
            <article
              className={'proj-card proj-' + project.category}
              key={project.name}
            >
              <div className="proj-visual">
                <div
                  className="proj-visual-bg"
                  style={{ background: project.visual.gradient }}
                  aria-hidden="true"
                />
                <div className="proj-mono-stage" aria-hidden="true">
                  <span className="pms-ring" />
                  <span className="pms-ring r2" />
                  <span className="proj-mono">{project.visual.monogram}</span>
                  <span className="pms-chip">{project.visual.chip}</span>
                </div>
                {project.stack[0] && (
                  <div className="proj-float-chip fc1">
                    <LayersIcon />
                    {project.stack[0]}
                  </div>
                )}
                <div className="proj-float-chip fc2">
                  {project.category === 'research' ? 'Research' : 'Software'}
                </div>
              </div>

              <div className="proj-content">
                <div className="proj-content-top">
                  <div className="proj-badges">
                    {project.badges.map((b) => (
                      <span
                        className={`proj-badge ${b.variant}`}
                        key={b.label}
                      >
                        {b.label}
                      </span>
                    ))}
                  </div>
                  <h2 className="proj-name">{project.name}</h2>
                  <p className="proj-tagline">{project.tagline}</p>
                  <p className="proj-desc">{project.desc}</p>
                </div>

                <div className="proj-highlights">
                  {project.highlights.map((hl, i) => (
                    <div className="proj-hl" key={hl}>
                      <div className="proj-hl-icon">
                        {hlIcons[i % hlIcons.length]}
                      </div>
                      {hl}
                    </div>
                  ))}
                </div>

                <div className="proj-stack">
                  <span className="proj-stack-label">Tech Stack</span>
                  <div className="proj-tech-chips">
                    {project.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="proj-actions">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-btn-github"
                    >
                      <GithubIcon />
                      View on GitHub
                    </a>
                  ) : (
                    <span className="proj-no-demo">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      Confidential · Summary only
                    </span>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="proj-footnote">
          More coming soon — currently building in private repos · Say hi at{' '}
          <a
            href={`mailto:${profile.email}`}
            style={{ color: 'var(--pink)', fontWeight: 600 }}
          >
            {profile.email}
          </a>
        </p>
      </section>
    </>
  )
}
