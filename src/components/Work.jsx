import React from 'react'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

export default function Work() {
  const { t } = useLang()

  return (
    <Reveal as="section" id="work">
      <div className="eyebrow">{t('work_eyebrow')}</div>
      <h2 className="section-title">{t('work_title')}</h2>
      <p className="section-sub">{t('work_sub')}</p>

      <div className="work-grid">
        <div className="work-card">
          <div className="work-thumb"><img src="/work/maze.png" alt="Maze Tattoo Studio" loading="lazy" /></div>
          <div className="work-top">
            <span className="wname">{t('work1_cat')}</span>
            <span className="wstatus">{t('work_live')}</span>
          </div>
          <div className="work-body">
            <h3>Maze Tattoo Studio</h3>
            <p>{t('work1_desc')}</p>
            <div className="work-tags">
              <span>Web Design</span><span>Development</span><span>Dark UI</span>
            </div>
            <a className="work-link" href="https://mazetattoostudio.gr/" target="_blank" rel="noopener noreferrer">
              <span>{t('work_visit')}</span> →
            </a>
          </div>
        </div>

        <div className="work-card">
          <div className="work-thumb"><img src="/work/1na.png" alt="Φροντιστηριακός Όμιλος ΕΝΑ" loading="lazy" /></div>
          <div className="work-top">
            <span className="wname">{t('work2_cat')}</span>
            <span className="wstatus">{t('work_live')}</span>
          </div>
          <div className="work-body">
            <h3>{t('work2_title')}</h3>
            <p>{t('work2_desc')}</p>
            <div className="work-tags">
              <span>Web Design</span><span>Development</span><span>Multi-page</span>
            </div>
            <a className="work-link" href="https://www.1na.gr/" target="_blank" rel="noopener noreferrer">
              <span>{t('work_visit')}</span> →
            </a>
          </div>
        </div>

        <div className="work-card">
          <div className="work-thumb"><img src="/work/katartisi.png" alt="Τεχνικές Σχολές Επιμελητηρίου Ηρακλείου" loading="lazy" /></div>
          <div className="work-top">
            <span className="wname">{t('work3_cat')}</span>
            <span className="wstatus">{t('work_live')}</span>
          </div>
          <div className="work-body">
            <h3>katartisi.gr</h3>
            <p>{t('work3_desc')}</p>
            <div className="work-tags">
              <span>Web Design</span><span>Development</span><span>WordPress</span>
            </div>
            <a className="work-link" href="https://katartisi.gr/" target="_blank" rel="noopener noreferrer">
              <span>{t('work_visit')}</span> →
            </a>
          </div>
        </div>

        <div className="work-card">
          <div className="work-thumb"><img src="/work/iek.png" alt="Ι.Ι.Ε.Κ. Επιμελητηρίου Ηρακλείου" loading="lazy" /></div>
          <div className="work-top">
            <span className="wname">{t('work5_cat')}</span>
            <span className="wstatus">{t('work_live')}</span>
          </div>
          <div className="work-body">
            <h3>{t('work5_title')}</h3>
            <p>{t('work5_desc')}</p>
            <div className="work-tags">
              <span>Web Design</span><span>WordPress</span><span>Development</span>
            </div>
            <a className="work-link" href="https://iek.katartisi.gr/" target="_blank" rel="noopener noreferrer">
              <span>{t('work_visit')}</span> →
            </a>
          </div>
        </div>

        <div className="work-card">
          <div className="work-thumb"><img src="/work/isaekcms.png" alt="ISAEK — Σύστημα Διαχείρισης ΙΕΚ (mockup, θολωμένα προσωπικά δεδομένα)" loading="lazy" /></div>
          <div className="work-top">
            <span className="wname">{t('work4_cat')}</span>
            <span className="wstatus wstatus-internal">{t('work_internal')}</span>
          </div>
          <div className="work-body">
            <h3>{t('work4_title')}</h3>
            <p>{t('work4_desc')}</p>
            <div className="work-tags">
              <span>React</span><span>Supabase</span><span>Dashboard</span>
            </div>
            <span className="work-note">{t('work4_note')}</span>
          </div>
        </div>
      </div>

      <div className="work-secondary">
        <a href="https://www.cretanescapes.com/" target="_blank" rel="noopener noreferrer">Cretan Escapes ↗</a>
        <a href="https://www.ionos.com.gr/" target="_blank" rel="noopener noreferrer">IONOS ↗</a>
      </div>
    </Reveal>
  )
}
