import React from 'react'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

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

export default function Marketing() {
  const { t } = useLang()
  const features = ['mkt_f1', 'mkt_f2', 'mkt_f3', 'mkt_f4']

  return (
    <Reveal as="section" id="marketing">
      <div className="eyebrow">{t('mkt_eyebrow')}</div>
      <h2 className="section-title mkt-heading">{t('mkt_title')}</h2>

      <div className="mkt-grid">
        <div className="mkt-copy">
          <p className="mkt-lead">{t('mkt_p1')}</p>
          <p className="mkt-lead">{t('mkt_p2')}</p>
          <ul className="mkt-features">
            {features.map((f) => (
              <li key={f}><span className="mkt-check">✓</span>{t(f)}</li>
            ))}
          </ul>
          <a className="btn btn-primary" href="#contact">{t('mkt_cta')}</a>
        </div>
        <div className="mkt-visual"><SearchMock /></div>
      </div>

      <div className="mkt-stats">
        <div className="mkt-stat">
          <span className="mkt-stat-num">{t('mkt_stat1_n')}</span>
          <span className="mkt-stat-label">{t('mkt_stat1_l')}</span>
        </div>
        <div className="mkt-stat">
          <span className="mkt-stat-num">{t('mkt_stat2_n')}</span>
          <span className="mkt-stat-label">{t('mkt_stat2_l')}</span>
        </div>
        <div className="mkt-stat">
          <span className="mkt-stat-num">{t('mkt_stat3_n')}</span>
          <span className="mkt-stat-label">{t('mkt_stat3_l')}</span>
        </div>
      </div>
    </Reveal>
  )
}
