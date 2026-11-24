import React, { useRef, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { useScrollFrame, prefersReduced } from '../motion.jsx'

const R = 25
const C = 2 * Math.PI * R

// Floating "back to top": appears after the hero, its ring tracks scroll progress.
export default function BackToTop() {
  const { t } = useLang()
  const [show, setShow] = useState(false)
  const ringRef = useRef(null)

  useScrollFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    const p = max > 0 ? window.scrollY / max : 0
    setShow(window.scrollY > window.innerHeight * 0.8)
    if (ringRef.current) ringRef.current.style.strokeDashoffset = String(C * (1 - p))
  })

  const toTop = () => {
    const l = window.__lenis
    if (l) l.scrollTo(0, { duration: 1.6 })
    else window.scrollTo({ top: 0, behavior: prefersReduced() ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className={`to-top-btn ${show ? 'show' : ''}`}
      onClick={toTop}
      aria-label={t('back_top')}
      title={t('back_top')}
      tabIndex={show ? 0 : -1}
    >
      <svg className="ttb-ring" viewBox="0 0 56 56" aria-hidden="true">
        <circle cx="28" cy="28" r={R} className="ttb-track" />
        <circle ref={ringRef} cx="28" cy="28" r={R} className="ttb-prog" style={{ strokeDasharray: C, strokeDashoffset: C }} />
      </svg>
      <svg className="ttb-arrow" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  )
}
