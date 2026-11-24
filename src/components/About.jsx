import React from 'react'
import { useLang } from '../i18n.jsx'
import { SectionHead, R } from '../motion.jsx'

export default function About() {
  const { t } = useLang()

  const exp = [
    ['2025 — ' + t('exp_now'), t('exp0_role')],
    ['2024 — ' + t('exp_now'), t('exp1_role')],
    ['12/2023 – 05/2024', t('exp2_role')]
  ]
  const edu = [
    [t('edu_azure_date'), t('edu_azure')],
    ['2024', t('edu1')],
    ['2024', t('edu2')],
    ['2022 – 2023', t('edu3')]
  ]
  const skills = ['HTML / CSS / JavaScript', 'React / Node', 'WordPress', 'UX / UI Design', t('about_skill5')]

  return (
    <section id="about" className="about" data-theme="light">
      <SectionHead num="04" label={t('about_eyebrow')} html={t('about_head')} />

      <div className="about-grid">
        <div className="about-bio">
          <R as="p" className="lede">{t('about_p1')}</R>
          <R as="p" d={0.08}>{t('about_p2')}</R>
          <R d={0.16} className="skills">
            <span className="mono">{t('about_skills_title')}</span>
            <ul>{skills.map((s) => <li key={s}>{s}</li>)}</ul>
          </R>
        </div>

        <div className="about-lists">
          {[[t('exp_title'), exp], [t('edu_title'), edu]].map(([title, rows], b) => (
            <R key={title} d={0.1 + b * 0.1} className="tl">
              <h3 className="mono">{title}</h3>
              <ul>
                {rows.map(([date, text]) => (
                  <li key={text}><span className="tl-date">{date}</span><span>{text}</span></li>
                ))}
              </ul>
            </R>
          ))}
        </div>
      </div>
    </section>
  )
}
