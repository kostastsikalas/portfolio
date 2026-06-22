import React from 'react'
import { useLang } from '../i18n.jsx'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer>
      <div className="wrap footer-row">
        <p>{t('footer_copy')}</p>
        <p style={{ color: 'var(--text-muted)' }}>Ηράκλειο, Κρήτη</p>
      </div>
    </footer>
  )
}
