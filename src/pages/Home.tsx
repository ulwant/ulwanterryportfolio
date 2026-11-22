import { Link } from 'react-router-dom'
import { profile, homeStats } from '../data/content'

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

const heroDots = [
  { cls: 'hd1' }, { cls: 'hd2' }, { cls: 'hd3' },
  { cls: 'hd4' }, { cls: 'hd5' }, { cls: 'hd6' },
]

const valueProps = [
  {
    key: 'build',
    title: 'Builds technical solutions',
    desc: 'From Android tax tools to debate-prep web apps — turning course work and side ideas into systems that actually run.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    key: 'investigate',
    title: 'Investigates problems',
    desc: 'Computer vision research at the UNDIP Computer Lab and market research at Consult Advizo — data over assumptions.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    key: 'communicate',
    title: 'Communicates complex ideas',
    desc: 'Competitive debater (6th Best Speaker, AuNovice 2025) and NTHU outreach presenter — arguments that land.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <>
      <section id="home" className="hero-wrap">
        <div className="hero-split-bg" aria-hidden="true" />
        <div className="hero-bg-word" aria-hidden="true">
          ULWAN
        </div>
        <div className="hero-dots" aria-hidden="true">
          {heroDots.map((d) => (
            <span key={d.cls} className={`hd ${d.cls}`} />
          ))}
        </div>

        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-availability">
              <span className="avail-dot" />
              Open to internships &amp; collaborations
            </div>

            <h1 className="hero-h1">
              <span className="h1-line h1-first">Ulwan</span>
              <span className="h1-line h1-middle">
                <em>Terry</em>
              </span>
              <span className="h1-line h1-last">Attartsauri</span>
            </h1>

            <p className="hero-tagline">{profile.role}</p>

            <p className="hero-bio">{profile.bio}</p>

            <div className="hero-btns">
              <Link to="/about" className="btn-primary">
                About Me
              </Link>
              <Link to="/experience" className="btn-outline">
                Experience
                <ArrowIcon />
              </Link>
            </div>

            <div className="hero-stats-row">
              {homeStats.map((s, i) => (
                <div
                  key={s.label}
                  style={{ display: 'contents' }}
                  aria-label={s.label}
                >
                  {i > 0 && <div className="hs-div" aria-hidden="true" />}
                  <div className="hs-item">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-photo-stack">
              <div className="photo-card-back" aria-hidden="true" />
              <div className="photo-card-main">
                <div
                  className="photo-mono"
                  style={{ width: '100%', height: '100%' }}
                  role="img"
                  aria-label="Monogram placeholder portrait for Ulwan Terry Attartsauri"
                >
                  <span className="pm-ring" aria-hidden="true" />
                  <span className="pm-ring r2" aria-hidden="true" />
                  <span className="pm-letter" aria-hidden="true">
                    U.
                  </span>
                  <span className="pm-caption">UNDIP · Computer Engineering</span>
                </div>
              </div>
              <div className="photo-pill pill-top">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                CV / ML Research
              </div>
              <div className="photo-pill pill-bottom">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Semarang, ID
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="value-strip" aria-label="What I do">
        {valueProps.map((v) => (
          <div className="value-card" key={v.key}>
            <div className="vc-icon">{v.icon}</div>
            <h4>{v.title}</h4>
            <p>{v.desc}</p>
          </div>
        ))}
      </section>
    </>
  )
}
