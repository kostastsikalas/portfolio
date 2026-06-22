import React from 'react'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

const STEPS = [
  { num: '01', h: 'step1_h', p: 'step1_p' },
  { num: '02', h: 'step2_h', p: 'step2_p' },
  { num: '03', h: 'step3_h', p: 'step3_p' },
  { num: '04', h: 'step4_h', p: 'step4_p' }
]

export default function Process() {
  const { t } = useLang()

  return (
    <Reveal as="section" id="process">
      <div className="eyebrow">{t('process_eyebrow')}</div>
      <h2 className="section-title">{t('process_title')}</h2>

      <div className="process-grid">
        {STEPS.map((s) => (
          <div className="step" key={s.num}>
            <span className="num">{s.num}</span>
            <h3>{t(s.h)}</h3>
            <p>{t(s.p)}</p>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
