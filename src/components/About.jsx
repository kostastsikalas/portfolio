import React from 'react'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  const { t } = useLang()

  return (
    <Reveal as="section" id="about">
      <div className="eyebrow">{t('about_eyebrow')}</div>
      <h2 className="section-title">{t('about_title')}</h2>

      <div className="about-grid">
        <div>
          <p className="bio-text">{t('about_p1')}</p>
          <p className="bio-text">{t('about_p2')}</p>

          <h3 className="skills-title">{t('about_skills_title')}</h3>
          <div className="skills-list">
            <span className="chip">HTML / CSS / JavaScript</span>
            <span className="chip">React / Node</span>
            <span className="chip">WordPress</span>
            <span className="chip">UX / UI Design</span>
            <span className="chip">{t('about_skill5')}</span>
          </div>
        </div>

        <div>
          <div className="side-block">
            <h3>{t('exp_title')}</h3>
            <div className="timeline-item">
              <span className="t-date">2025 — {t('exp_now')}</span>
              <strong>{t('exp0_role')}</strong>
            </div>
            <div className="timeline-item">
              <span className="t-date">2024 — {t('exp_now')}</span>
              <strong>{t('exp1_role')}</strong>
            </div>
            <div className="timeline-item">
              <span className="t-date">12/2023 – 05/2024</span>
              <span>{t('exp2_role')}</span>
            </div>
          </div>

          <div className="side-block">
            <h3>{t('edu_title')}</h3>
            <div className="timeline-item">
              <span className="t-date">Φεβ 2026</span>
              <span>{t('edu_azure')}</span>
            </div>
            <div className="timeline-item">
              <span className="t-date">2024</span>
              <span>{t('edu1')}</span>
            </div>
            <div className="timeline-item">
              <span className="t-date">2024</span>
              <span>{t('edu2')}</span>
            </div>
            <div className="timeline-item">
              <span className="t-date">2022 – 2023</span>
              <span>{t('edu3')}</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
