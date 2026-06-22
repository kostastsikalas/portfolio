import React, { useEffect, useState } from 'react'
import { useLang } from '../i18n.jsx'

const SECTIONS = ['hero', 'about', 'services', 'work', 'contact']
const LABELS = {
  hero: 'nav_home',
  about: 'nav_about',
  services: 'nav_services',
  work: 'nav_work',
  contact: 'nav_contact'
}

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const els = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header>
      <div className="nav-inner">
        <div className="logo">
          <span className="dot"></span>
          <span className="logo-full">Konstantinos Tsikalas</span>
          <span className="logo-short">K. Tsikalas</span>
        </div>

        <nav className={`tabs ${open ? 'open' : ''}`}>
          {SECTIONS.map((id) => (
            <a
              key={id}
              className={`tab ${active === id ? 'active' : ''}`}
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {t(LABELS[id])}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <div className="lang-toggle">
            <button className={lang === 'el' ? 'active' : ''} onClick={() => setLang('el')}>EL</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
