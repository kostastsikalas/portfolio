import React, { useEffect, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { SectionHead, R, useInView, prefersReduced } from '../motion.jsx'
import Btn from './Btn.jsx'

function SearchMock() {
  const { t } = useLang()
  return (
    <svg className="mkt-svg" viewBox="0 0 520 380" role="img" aria-label="Google search result">
      <rect x="0" y="0" width="520" height="380" rx="18" fill="var(--bg-elevated)" stroke="var(--border)" />

      <rect x="28" y="28" width="464" height="46" rx="23" fill="var(--surface)" stroke="var(--border)" />
      <g transform="translate(52,44)" stroke="var(--accent)" strokeWidth="2.4" fill="none">
        <circle cx="7" cy="7" r="7" />
        <line x1="12" y1="12" x2="18" y2="18" strokeLinecap="round" />
      </g>
      <text x="86" y="56" fontFamily="Inter, sans-serif" fontSize="16" fill="var(--text)">{t('mkt_search')}</text>

      <rect x="20" y="98" width="480" height="104" rx="14" fill="var(--accent-soft)" />
      <rect x="20" y="98" width="4" height="104" rx="2" fill="var(--accent)" />
      <rect x="330" y="110" width="162" height="26" rx="13" fill="var(--accent)" />
      <text x="411" y="127" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="12" fill="#fff">{t('mkt_result_tag')}</text>
      <text x="44" y="132" fontFamily="Inter, sans-serif" fontSize="12" fill="var(--text-muted)">ktdigital.dev</text>
      <text x="44" y="160" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="19" fill="var(--accent)">Konstantinos Tsikalas — Web &amp; Marketing</text>
      <text x="44" y="184" fontFamily="Arial, sans-serif" fontSize="16" fill="#f5a623">★★★★★</text>
      <text x="150" y="184" fontFamily="Inter, sans-serif" fontSize="13" fill="var(--text-muted)">5,0 · 38 κριτικές</text>

      <g fill="var(--surface-2)">
        <rect x="24" y="226" width="150" height="11" rx="5" />
        <rect x="24" y="246" width="330" height="9" rx="4" />
        <rect x="24" y="262" width="270" height="9" rx="4" />
      </g>
      <g fill="var(--surface-2)">
        <rect x="24" y="300" width="130" height="11" rx="5" />
        <rect x="24" y="320" width="340" height="9" rx="4" />
        <rect x="24" y="336" width="250" height="9" rx="4" />
      </g>

      <g transform="translate(392,236)">
        <rect x="0" y="0" width="104" height="118" rx="12" fill="var(--bg-elevated)" stroke="var(--border)" />
        <polyline points="16,92 40,70 62,80 88,34" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="88" cy="34" r="4.5" fill="var(--accent)" />
        <text x="16" y="30" fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="15" fill="var(--text)">#1</text>
      </g>
    </svg>
  )
}

function CountUp({ value }) {
  const [ref, inView] = useInView({ threshold: 0.5 })
  const target = parseInt(value, 10)
  const suffix = value.replace(/^[0-9]+/, '')
  const [n, setN] = useState(prefersReduced() ? target : 0)
  useEffect(() => {
    if (!inView || prefersReduced()) return
    let raf
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / 1400)
      setN(Math.round((1 - Math.pow(1 - p, 4)) * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])
  return <span ref={ref} className="stat-n">{n}{suffix}</span>
}

export default function Marketing() {
  const { t } = useLang()
  const features = ['mkt_f1', 'mkt_f2', 'mkt_f3', 'mkt_f4']

  return (
    <section id="marketing" className="marketing" data-theme="light">
      <SectionHead num="02" label={t('mkt_eyebrow')} html={t('mkt_head')} />

      <div className="mkt-grid">
        <div className="mkt-copy">
          <R as="p" className="lede">{t('mkt_p1')}</R>
          <R as="p" d={0.08}>{t('mkt_p2')}</R>
          <R as="ul" d={0.16} className="mkt-features">
            {features.map((f, i) => (
              <li key={f}><span className="mono">0{i + 1}</span>{t(f)}</li>
            ))}
          </R>
          <R d={0.24}><Btn href="#contact">{t('mkt_cta')}</Btn></R>
        </div>
        <R d={0.1} className="mkt-visual"><SearchMock /></R>
      </div>

      <div className="stats">
        {[1, 2, 3].map((k, i) => (
          <R key={k} d={i * 0.1} className="stat">
            <CountUp value={t(`mkt_stat${k}_n`)} />
            <span className="stat-l">{t(`mkt_stat${k}_l`)}</span>
          </R>
        ))}
      </div>
    </section>
  )
}
