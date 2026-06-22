import React from 'react'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

const SERVICES = [
  { title: 'svc1_title', key: 'svc1' },
  { title: 'svc6_title', key: 'svc6' },
  { title: 'svc2_title', key: 'svc2' },
  { title: 'svc3_title', key: 'svc3' },
  { title: 'svc4_title', key: 'svc4' },
  { title: 'svc5_title', key: 'svc5' }
]

export default function Services() {
  const { t } = useLang()

  return (
    <Reveal as="section" id="services">
      <div className="eyebrow">{t('services_eyebrow')}</div>
      <h2 className="section-title">{t('services_title')}</h2>
      <p className="section-sub">{t('services_sub')}</p>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <div className="svc-card" key={s.title}>
            <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
            <div className="svc-fn">{t(s.title)}</div>
            <p>{t(s.key)}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
