import { useState } from 'react'
import { siteData } from '../data/siteData'

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="contact-icon"
      fill="currentColor"
    >
      <path d="M12 2C6.477 2 2 6.596 2 12.266c0 4.537 2.865 8.386 6.839 9.745.5.095.682-.223.682-.495 0-.245-.009-.894-.014-1.754-2.782.617-3.369-1.39-3.369-1.39-.455-1.183-1.11-1.498-1.11-1.498-.908-.637.069-.624.069-.624 1.004.072 1.532 1.056 1.532 1.056.893 1.568 2.341 1.115 2.91.852.091-.664.349-1.116.635-1.373-2.221-.261-4.556-1.14-4.556-5.074 0-1.121.39-2.038 1.029-2.756-.103-.262-.446-1.317.098-2.746 0 0 .84-.277 2.75 1.053A9.32 9.32 0 0 1 12 7.12c.85.004 1.705.117 2.504.344 1.909-1.33 2.748-1.053 2.748-1.053.546 1.429.202 2.484.1 2.746.64.718 1.027 1.635 1.027 2.756 0 3.944-2.339 4.81-4.567 5.066.359.32.679.949.679 1.913 0 1.381-.012 2.495-.012 2.834 0 .274.18.594.688.493C19.138 20.648 22 16.8 22 12.266 22 6.596 17.523 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="contact-icon"
      fill="currentColor"
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.17 3 3.3 3.89 3.3 4.98c0 1.08.87 1.96 1.95 1.96h.02c1.1 0 1.95-.88 1.95-1.96C7.22 3.89 6.36 3 5.27 3h-.02ZM20.7 12.84c0-3.46-1.84-5.07-4.29-5.07-1.98 0-2.87 1.11-3.37 1.89V8.5H9.66c.04.77 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.91-1.38 1.35 0 1.89 1.05 1.89 2.58V20H20.7v-7.16Z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="contact-icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function getIcon(label: string) {
  switch (label) {
    case 'Email':
      return <EmailIcon />
    case 'GitHub':
      return <GitHubIcon />
    case 'LinkedIn':
      return <LinkedInIcon />
    default:
      return null
  }
}

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const emailContact = siteData.contacts.find((contact) => contact.label === 'Email')

  const copyEmail = async () => {
    if (!emailContact) return

    try {
      await navigator.clipboard.writeText(emailContact.value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="contact-page">
      <p className="eyebrow">Contact</p>
      <h1 className="contact-title">Get in touch</h1>
      <p className="contact-description">
        Reach out for collaboration, projects, research, or just to say hello.
      </p>

      <div className="contact-card-list">
        {siteData.contacts.map((contact) => (
  <div key={contact.label} className="contact-item">
    <a
      href={contact.url}
      target={contact.label === 'Email' ? undefined : '_blank'}
      rel={contact.label === 'Email' ? undefined : 'noreferrer'}
      className="contact-card"
      aria-label={contact.ariaLabel}
    >
      <div className="contact-card-left">
        {getIcon(contact.label)}
        <div>
          <p className="contact-label">{contact.label}</p>
          <p className="contact-value">{contact.value}</p>
        </div>
      </div>
    </a>

    {contact.label === 'Email' && (
      <button
        type="button"
        onClick={copyEmail}
        className="copy-email-btn"
        aria-label="Copy email address"
      >
        {copied ? 'Copied!' : 'Copy email'}
      </button>
    )}
  </div>
))}
      </div>
    </section>
  )
}