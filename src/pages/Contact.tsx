import { useState } from 'react'
import { profile } from '../data/content'

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GithubMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const facts = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.2">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: 'Based in Semarang, Central Java — open to remote or on-site',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    text: 'Computer Engineering student at Universitas Diponegoro',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    text: 'Open to internships, research assistance & collaborations',
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      // clipboard unavailable — still show feedback so the user can retry manually
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="contact-main">
      <div className="ct-dotfield" aria-hidden="true" />

      <div className="ct-layout">
        <div className="ct-left">
          <p className="ct-eyebrow">Get In Touch</p>
          <h1 className="ct-heading">
            Let's build
            <em>something</em>
          </h1>
          <p className="ct-desc">
            Looking for a research assistant, an engineering intern, or just
            want to talk about computer vision, debating or where the two
            overlap? My inbox is always open — I reply fast and I like
            sharp questions.
          </p>

          <div className="ct-profile-card">
            <div className="ct-avatar">UT</div>
            <div>
              <strong>{profile.fullName}</strong>
              <span>Computer Engineering · UNDIP</span>
            </div>
          </div>

          <div className="ct-facts">
            {facts.map((f) => (
              <div className="ct-fact" key={f.text}>
                <span className="ct-fact-icon">{f.icon}</span>
                {f.text}
              </div>
            ))}
          </div>
        </div>

        <div className="ct-right">
          <div
            className={'ct-card ct-email-card' + (copied ? ' copied' : '')}
            onClick={copyEmail}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') copyEmail()
            }}
          >
            <span className="ct-card-accent" aria-hidden="true" />
            <span className="ct-copied-toast">Copied!</span>
            <div className="ct-card-body">
              <div className="ct-card-icon-wrap ct-email-icon">
                <span className="icon-copy">{MailIcon()}</span>
                <span className="icon-check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
              </div>
              <div className="ct-card-info">
                <span className="ct-card-platform">Email</span>
                <span className="ct-card-handle">{profile.email}</span>
              </div>
              <div className="ct-card-action" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="ct-card ct-li-card"
          >
            <span className="ct-card-accent" aria-hidden="true" />
            <div className="ct-card-body">
              <div className="ct-card-icon-wrap ct-li-icon">
                <LinkedInIcon />
              </div>
              <div className="ct-card-info">
                <span className="ct-card-platform">LinkedIn</span>
                <span className="ct-card-handle">Ulwan Terry Attartsauri</span>
              </div>
              <div className="ct-card-action" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="ct-card ct-gh-card"
          >
            <span className="ct-card-accent" aria-hidden="true" />
            <div className="ct-card-body">
              <div className="ct-card-icon-wrap ct-gh-icon">
                <GithubMark />
              </div>
              <div className="ct-card-info">
                <span className="ct-card-platform">GitHub</span>
                <span className="ct-card-handle">@ulwant</span>
              </div>
              <div className="ct-card-action" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
