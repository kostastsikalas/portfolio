import React, { useState } from 'react'
import { useLang } from '../i18n.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <Reveal as="section" id="contact">
      <div className="eyebrow">{t('contact_eyebrow')}</div>
      <h2 className="section-title">{t('contact_title')}</h2>
      <p className="section-sub">{t('contact_sub')}</p>

      <div className="contact-grid">
        <div>
          <div className="contact-intro">
            <p>{t('contact_intro')}</p>
            <div className="contact-reply"><span className="pulse"></span>{t('contact_reply')}</div>
          </div>

          <div className="contact-links">
            <a href="mailto:konstantinostsikalas@gmail.com">✉ konstantinostsikalas@gmail.com</a>
            <a href="tel:+306947227002">☎ +30 694 722 7002</a>
          </div>

          <div className="social-row">
            <a href="https://www.facebook.com/kostas.tsikalas" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M13 22v-9h3l1-4h-4V7c0-1.1.3-1.9 2-1.9h2V1.1C16.6 1 15.4 1 14 1c-3 0-5 1.8-5 5.2V9H6v4h3v9h4z" /></svg>
            </a>
            <a href="https://www.instagram.com/kostas_tsik/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2c2.7 0 3 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.5 1.4.5 2.5.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.7.3-1.4.5-2.5.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.7-.5-1.4-.5-2.5C2 15 2 14.7 2 12s0-3 .1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.5-.5C9 2 9.3 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.2-8.4a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/%CE%BAostas-tsikalas-475310265/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8.25h4.6V23H.2V8.25zM8.4 8.25h4.4v2.01h.06c.6-1.13 2.1-2.33 4.3-2.33 4.6 0 5.45 3.03 5.45 6.97V23h-4.6v-6.93c0-1.65-.03-3.78-2.3-3.78-2.3 0-2.65 1.8-2.65 3.66V23H8.4V8.25z" /></svg>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">{t('form_name')}</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="email">{t('form_email')}</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="message">{t('form_message')}</label>
            <textarea id="message" name="message" required value={form.message} onChange={handleChange}></textarea>
          </div>
          <button className="btn btn-primary" type="submit" style={{ alignSelf: 'flex-start' }} disabled={status === 'sending'}>
            {status === 'sending' ? t('form_sending') : t('form_submit')}
          </button>

          {status === 'success' && <p style={{ color: 'var(--accent)', fontSize: 14 }}>{t('form_success')}</p>}
          {status === 'error' && <p style={{ color: '#f87171', fontSize: 14 }}>{t('form_error')}</p>}
        </form>
      </div>
    </Reveal>
  )
}
