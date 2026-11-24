import React from 'react'
import { useLang } from '../i18n.jsx'
import { useInView } from '../motion.jsx'

// Closing wordmark: letters rise out of the baseline when the footer comes into view.
export default function Footer() {
  const { t } = useLang()
  const [ref, inView] = useInView({ threshold: 0.25 })
  const word = 'Tsikalas'
  return (
    <footer className="site-footer" data-theme="dark">
      <div className="foot-row">
        <p>{t('footer_copy')}</p>
        <p className="mono">{t('hero_loc_plain')}</p>
        <a href="#top" className="mono to-top">{t('footer_top')} ↑</a>
      </div>
      <div ref={ref} className={`wordmark ${inView ? 'in' : ''}`} aria-hidden="true">
        {word.split('').map((ch, i) => <span key={i} style={{ '--i': i }}>{ch}</span>)}
      </div>
    </footer>
  )
}
