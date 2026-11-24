import React from 'react'
import { useLang } from '../i18n.jsx'
import { SectionHead, R } from '../motion.jsx'
import { Arrow } from './Btn.jsx'

const SERVICES = [
  ['svc1_title', 'svc1'],
  ['svc6_title', 'svc6'],
  ['svc7_title', 'svc7'],
  ['svc2_title', 'svc2'],
  ['svc3_title', 'svc3'],
  ['svc4_title', 'svc4'],
  ['svc5_title', 'svc5']
]

// Editorial index: each row floods with ink on hover.
export default function Services() {
  const { t } = useLang()
  return (
    <section id="services" className="services" data-theme="light">
      <SectionHead num="04" label={t('services_eyebrow')} html={t('services_head')} sub={t('services_sub')} />
      <ol className="svc-list">
        {SERVICES.map(([title, body], i) => (
          <R as="li" key={title} d={i * 0.05} className="svc">
            <a href="#contact">
              <span className="mono svc-i">{String(i + 1).padStart(2, '0')}</span>
              <span className="svc-t">{t(title)}</span>
              <span className="svc-b">{t(body)}</span>
              <span className="svc-go"><Arrow /></span>
            </a>
          </R>
        ))}
      </ol>
    </section>
  )
}
