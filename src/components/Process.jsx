import React from 'react'
import { useLang } from '../i18n.jsx'
import { SectionHead, useInView } from '../motion.jsx'

const STEPS = [
  ['01', 'step1_h', 'step1_p'],
  ['02', 'step2_h', 'step2_p'],
  ['03', 'step3_h', 'step3_p'],
  ['04', 'step4_h', 'step4_p']
]

// A single rule draws across the four steps; each step lands as the line reaches it.
export default function Process() {
  const { t } = useLang()
  const [ref, inView] = useInView({ threshold: 0.35 })
  return (
    <section id="process" className="process" data-theme="light">
      <SectionHead num="06" label={t('process_eyebrow')} html={t('process_head')} />
      <ol ref={ref} className={`steps ${inView ? 'in' : ''}`}>
        <span className="steps-line" aria-hidden="true" />
        {STEPS.map(([num, h, p], i) => (
          <li key={num} className="step" style={{ '--i': i }}>
            <span className="step-dot" aria-hidden="true" />
            <span className="step-n">{num}</span>
            <h3>{t(h)}</h3>
            <p>{t(p)}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
