import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import Btn from './Btn.jsx'

const NAV = [
  ['work', 'nav_work'],
  ['about', 'nav_about'],
  ['services', 'nav_services'],
  ['contact', 'nav_contact']
]

export default function Header() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)
  const [pill, setPill] = useState(null)

  // Active section for the sliding nav indicator.
  useEffect(() => {
    const els = NAV.map(([id]) => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, { rootMargin: '-45% 0px -50% 0px' })
    els.forEach((el) => io.observe(el))
    const top = document.getElementById('top')
    const io2 = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive('') }, { rootMargin: '-45% 0px -50% 0px' })
    if (top) io2.observe(top)
    return () => { io.disconnect(); io2.disconnect() }
  }, [])

  // Hide on scroll down, return on scroll up.
  useEffect(() => {
    let last = window.scrollY
    const on = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      if (Math.abs(y - last) > 6) { setHidden(y > last && y > 400); last = y }
    }
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useLayoutEffect(() => {
    const a = navRef.current?.querySelector(`a[data-id="${active}"]`)
    setPill(a ? { x: a.offsetLeft, w: a.offsetWidth } : null)
  }, [active, lang])

  // Menu: lock scroll, close on Esc / resize.
  useEffect(() => {
    const l = window.__lenis
    if (open) { l ? l.stop() : (document.body.style.overflow = 'hidden') }
    else { l ? l.start() : (document.body.style.overflow = '') }
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    const rs = () => window.innerWidth > 900 && setOpen(false)
    window.addEventListener('keydown', esc)
    window.addEventListener('resize', rs)
    return () => { window.removeEventListener('keydown', esc); window.removeEventListener('resize', rs) }
  }, [open])

  return (
    <header className={`site-header ${hidden && !open ? 'is-hidden' : ''} ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <a href="#top" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-dot" />
        <span>Konstantinos Tsikalas</span>
      </a>

      <nav className="nav-pill" ref={navRef} aria-label={lang === 'el' ? 'Κύριο μενού' : 'Main menu'}>
        <span className="nav-ind" style={pill ? { transform: `translateX(${pill.x}px)`, width: pill.w, opacity: 1 } : { opacity: 0 }} />
        {NAV.map(([id, key]) => (
          <a key={id} data-id={id} href={`#${id}`} className={active === id ? 'on' : ''}>{t(key)}</a>
        ))}
      </nav>

      <div className="hdr-right">
        <div className="lang" role="group" aria-label="Language">
          <button className={lang === 'el' ? 'on' : ''} onClick={() => setLang('el')}>EL</button>
          <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
        <span className="hdr-cta"><Btn href="#contact" small>{t('nav_cta')}</Btn></span>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span /><span />
        </button>
      </div>

      <div className="menu" aria-hidden={!open}>
        <nav className="menu-links">
          {NAV.map(([id, key], i) => (
            <a key={id} href={`#${id}`} style={{ '--i': i }} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <span className="mono">0{i + 1}</span>{t(key)}
            </a>
          ))}
        </nav>
        <div className="menu-foot">
          <a href="mailto:konstantinostsikalas@gmail.com" tabIndex={open ? 0 : -1}>konstantinostsikalas@gmail.com</a>
          <span className="mono">{t('hero_loc_plain')}</span>
        </div>
      </div>
    </header>
  )
}
