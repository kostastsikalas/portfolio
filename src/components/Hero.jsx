import React, { useEffect, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { Lines, useReady, prefersReduced } from '../motion.jsx'
import { PROJECTS, projectTitle } from '../projects.js'
import Btn from './Btn.jsx'

const REEL = PROJECTS.filter((p) => !p.internal)

function useLocalTime() {
  const fmt = () => new Intl.DateTimeFormat('el-GR', { timeZone: 'Europe/Athens', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date())
  const [time, setTime] = useState(fmt)
  useEffect(() => { const id = setInterval(() => setTime(fmt()), 15000); return () => clearInterval(id) }, [])
  return time
}

export default function Hero() {
  const { t } = useLang()
  const ready = useReady()
  const time = useLocalTime()
  const [cur, setCur] = useState({ i: 0, prev: -1 })

  // Work reel: each shot wipes in over the last one.
  useEffect(() => {
    if (!ready || prefersReduced()) return
    const id = setInterval(() => setCur(({ i }) => ({ i: (i + 1) % REEL.length, prev: i })), 3400)
    return () => clearInterval(id)
  }, [ready])

  const p = REEL[cur.i]

  return (
    <section id="top" className="hero" data-theme="light">
      <div className="hero-top">
        <span className="mono enter" style={{ '--d': '.1s' }}>{t('hero_eyebrow')}</span>
        <span className="mono enter hide-sm" style={{ '--d': '.18s' }}>35.34°N — 25.13°E</span>
      </div>

      <Lines as="h1" html={t('hero_lines')} className="hero-title" show={ready} start={0.12} step={0.1} />

      <div className="hero-bottom">
        <div className="hero-copy">
          <p className="enter" style={{ '--d': '.55s' }}>{t('hero_sub')}</p>
          <div className="btn-row enter" style={{ '--d': '.68s' }}>
            <Btn href="#work" down>{t('hero_cta1')}</Btn>
            <Btn href="#contact" variant="ghost">{t('hero_cta2')}</Btn>
          </div>
        </div>

        <a href="#work" className="hero-reel enter" style={{ '--d': '.45s' }} aria-label={t('hero_cta1')}>
          <div className="reel-chrome"><i /><i /><i /><span>{p.host}</span></div>
          <div className="reel-frame">
            {REEL.map((r, i) => (
              <img
                key={r.id}
                src={r.img}
                alt={i === cur.i ? projectTitle(r, t) : ''}
                className={i === cur.i ? 'on' : i === cur.prev ? 'prev' : ''}
                loading={i < 2 ? 'eager' : 'lazy'}
              />
            ))}
          </div>
          <div className="reel-cap">
            <span className="mono">{String(cur.i + 1).padStart(2, '0')} / {String(REEL.length).padStart(2, '0')}</span>
            <span key={p.id} className="reel-name">{projectTitle(p, t)}</span>
          </div>
        </a>
      </div>

      <div className="hero-strip enter" style={{ '--d': '.85s' }}>
        <span className="status"><i className="live-dot" />{t('hero_status')}</span>
        <span className="mono hide-sm">{t('hero_time')} {time}</span>
        <a href="#manifesto" className="mono scroll-cue">{t('hero_scroll')} <span className="cue-line" /></a>
      </div>
    </section>
  )
}
