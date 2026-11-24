import React, { useRef } from 'react'
import { useLang } from '../i18n.jsx'
import { SectionHead, R, clamp, useScrollFrame } from '../motion.jsx'
import { PROJECTS, projectTitle } from '../projects.js'
import Btn from './Btn.jsx'

// Sticky stacking cards: each project slides up over the last, which sinks back and dims.
export default function Work() {
  const { t } = useLang()
  const stackRef = useRef(null)
  const n = PROJECTS.length

  useScrollFrame(() => {
    const stack = stackRef.current
    if (!stack) return
    const cards = [...stack.querySelectorAll('.card')]
    const vh = window.innerHeight
    const sticky = window.innerWidth > 900
    cards.forEach((c, i) => {
      const next = cards[i + 1]
      let p = 0
      if (sticky && next) {
        const top = parseFloat(getComputedStyle(c).top) || 0
        const r = next.getBoundingClientRect().top
        p = clamp(1 - (r - top) / (vh - top))
      }
      c.style.setProperty('--p', p.toFixed(3))
    })
  })

  return (
    <section id="work" className="work" data-theme="tint">
      <SectionHead num="03" label={t('work_eyebrow')} html={t('work_head')} sub={t('work_sub')} />

      <div className="stack" ref={stackRef}>
        {PROJECTS.map((p, i) => (
          <article className="card" key={p.id} style={{ '--i': i }}>
            <div className="card-in">
              <div className="card-copy">
                <div className="card-meta">
                  <span className="mono">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
                  <span className={`badge ${p.internal ? 'muted' : ''}`}>
                    <i />{p.internal ? t('work_internal') : t('work_live')}
                  </span>
                </div>
                <div>
                  <span className="card-cat">{t(p.cat)}</span>
                  <h3 className="card-title">{projectTitle(p, t)}</h3>
                  <p className="card-desc">{t(p.desc)}</p>
                  <div className="tags">{p.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="card-act">
                  {p.internal
                    ? <span className="card-note">{t('work4_note')}</span>
                    : <Btn href={p.url} external>{t('work_visit')}</Btn>}
                </div>
              </div>
              <a
                className={`card-shot ${p.internal ? 'is-internal' : ''}`}
                href={p.url || undefined}
                target={p.url ? '_blank' : undefined}
                rel="noopener noreferrer"
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className="reel-chrome"><i /><i /><i /><span>{p.host}</span></div>
                <div className="shot-frame"><img src={p.img} alt={p.alt || projectTitle(p, t)} loading="lazy" /></div>
              </a>
            </div>
            <div className="card-dim" />
          </article>
        ))}
      </div>

      <R className="work-more">
        <span className="mono">{t('work_more')}</span>
        <a href="https://www.cretanescapes.com/" target="_blank" rel="noopener noreferrer">Cretan Escapes ↗</a>
        <a href="https://www.ionos.com.gr/" target="_blank" rel="noopener noreferrer">IONOS ↗</a>
      </R>
    </section>
  )
}
