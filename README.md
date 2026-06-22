# Konstantinos Tsikalas — Portfolio (React + Vite)

Προσωπική ιστοσελίδα χτισμένη με **React** (Vite) — μοντέρνο, code-editor εμπνευσμένο design, με EL/EN toggle.

## Τοπική εκτέλεση (χρειάζεται Node.js 18+)

```bash
npm install
npm run dev
```

Άνοιξε το `http://localhost:5173`

## Production build

```bash
npm run build
```

Δημιουργεί φάκελο `dist/` έτοιμο για deploy.

## Deploy στο Vercel

**Μέσω GitHub (προτείνεται):**
1. Ανέβασε αυτόν τον φάκελο σε ένα νέο GitHub repo.
2. Vercel → "Add New… → Project" → "Import" → επίλεξε το repo.
3. Το Vercel αναγνωρίζει αυτόματα Vite (build: `npm run build`, output: `dist` — ήδη ρυθμισμένο στο `vercel.json`).
4. Πρόσθεσε τα environment variables της φόρμας (δες παρακάτω) και κάνε Deploy.

> Εναλλακτικά με το Vercel CLI: `npm i -g vercel` και μετά `vercel` μέσα στον φάκελο.

## Φόρμα επικοινωνίας

Η φόρμα ποστάρει στο serverless function `api/contact.js` (Vercel Functions), που στέλνει email μέσω [Resend](https://resend.com).

**Setup:**
1. Φτιάξε δωρεάν λογαριασμό στο [resend.com](https://resend.com) και πάρε ένα **API key**.
2. Στο Vercel → Project → **Settings → Environment Variables** πρόσθεσε:
   - `RESEND_API_KEY` → το key σου (υποχρεωτικό)
   - `CONTACT_TO` → πού φτάνουν τα μηνύματα (default: `konstantinostsikalas@gmail.com`)
   - `CONTACT_FROM` → ο αποστολέας· πρέπει να είναι σε **verified domain** στο Resend. Για δοκιμές δουλεύει το `onboarding@resend.dev`.
3. Re-deploy.

> ⚠️ Το serverless function **δεν τρέχει** με το `npm run dev` (Vite). Για τοπική δοκιμή της φόρμας χρησιμοποίησε `vercel dev`.

## Δομή project

```
src/
  components/   → ένα component ανά section (Hero, About, Services, Work, Process, Contact...)
  i18n.jsx      → λεξικό EL/EN + React context
  styles.css    → όλο το design
  App.jsx       → ενώνει τα components
  main.jsx      → entry point
```

## Επόμενα βήματα που μπορείς να προσθέσεις

- Δική σου φωτογραφία/avatar στο hero
- Σύνδεση domain name στο Vercel
- Verified domain στο Resend ώστε τα emails να φεύγουν από δική σου διεύθυνση (αντί για `onboarding@resend.dev`)
