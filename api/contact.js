import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Πού φτάνουν τα μηνύματα της φόρμας
const TO = process.env.CONTACT_TO || 'konstantinostsikalas@gmail.com'
// Αποστολέας — πρέπει να είναι σε verified domain στο Resend.
// Για δοκιμές δουλεύει το onboarding@resend.dev.
const FROM = process.env.CONTACT_FROM || 'Portfolio <onboarding@resend.dev>'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' })
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: 'Email service not configured' })
  }

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `Νέο μήνυμα από το portfolio — ${name}`,
      text: `Όνομα: ${name}\nEmail: ${email}\n\n${message}`
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Failed to send' })
  }
}
