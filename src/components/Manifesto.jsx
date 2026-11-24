import React, { useRef } from 'react'
import { useLang } from '../i18n.jsx'
import { R, clamp, prefersReduced, useScrollFrame } from '../motion.jsx'

// Words light up in reading order as the statement scrolls through the viewport.
export default function Manifesto() {
  const { t } = useLang()
  const ref = useRef(null)
  const words = t('manifesto').split(' ')

  useScrollFrame(() => {
    const el = ref.current
    if (!el) return
    const spans = el.querySelectorAll('.w')
    if (prefersReduced()) { spans.forEach((s) => { s.style.opacity = 1 }); return }
    const r = el.getBoundingClientRect()
    const vh = window.innerHeight
    const p = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.3))
    const n = spans.length
    spans.forEach((s, i) => { s.style.opacity = 0.16 + 0.84 * clamp((p * (n + 4) - i) / 4) })
  })

  return (
    <section id="manifesto" className="manifesto" data-theme="dark">
      <R className="sec-label"><span className="mono">[ 01 ]</span><span className="mono">{t('manifesto_label')}</span></R>
      <p className="manifesto-text" ref={ref}>
        {words.map((w, i) => {
          const em = w.startsWith('*')
          const clean = w.replace(/\*/g, '')
          return <span key={i} className={`w ${em ? 'em' : ''}`}>{clean} </span>
        })}
      </p>
      <R as="p" d={0.1} className="manifesto-sub" >
        <span dangerouslySetInnerHTML={{ __html: t('manifesto_sub') }} />
      </R>
    </section>
  )
}
