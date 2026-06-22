import React from 'react'
import { useLang } from '../i18n.jsx'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="hero" id="hero">
      <div className="hero-bold">
        <div className="eyebrow">{t('hero_loc')}</div>
        <h1 className="hero-headline hero-headline-huge" dangerouslySetInnerHTML={{ __html: t('hero_title') }} />
        <p className="hero-sub">{t('hero_sub')}</p>
        <div className="btn-row">
          <a className="btn btn-primary" href="#work">{t('hero_cta1')}</a>
          <a className="btn btn-ghost" href="#contact">{t('hero_cta2')}</a>
        </div>
      </div>
    </section>
  )
}
