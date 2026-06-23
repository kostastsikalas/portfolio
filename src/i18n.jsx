import React, { createContext, useContext, useState, useEffect } from 'react'

export const dict = {
  hero_title: { el: 'Η ψηφιακή σου παρουσία, φτιαγμένη να <span class="hl">ξεχωρίζει</span>.', en: 'Your digital presence, built to <span class="hl">stand out</span>.' },
  hero_sub: { el: 'Σχεδιασμός & ανάπτυξη ιστοσελίδων και web εφαρμογών στο Ηράκλειο Κρήτης — από την ιδέα μέχρι το production.', en: 'Design & development of websites and web apps in Heraklion, Crete — from idea to production.' },
  hero_status: { el: 'Διαθέσιμος για νέα projects', en: 'Available for new projects' },
  hero_loc: { el: '📍 Ηράκλειο, Κρήτη', en: '📍 Heraklion, Crete' },
  hero_cta1: { el: 'Δες τη δουλειά μου', en: 'See my work' },
  hero_cta2: { el: 'Επικοινωνία', en: 'Get in touch' },

  hero_ph: { el: 'Η φωτογραφία σου εδώ', en: 'Your photo here' },
  hstat1_n: { el: '6+', en: '6+' },
  hstat1_l: { el: 'Ολοκληρωμένα έργα', en: 'Projects delivered' },
  hstat2_n: { el: '100%', en: '100%' },
  hstat2_l: { el: 'Responsive & γρήγορα', en: 'Responsive & fast' },
  hstat3_n: { el: 'Άμεση', en: 'Direct' },
  hstat3_l: { el: 'Υποστήριξη μετά', en: 'After-launch support' },

  nav_home: { el: 'Αρχική', en: 'Home' },
  nav_about: { el: 'Σχετικά', en: 'About' },
  nav_services: { el: 'Υπηρεσίες', en: 'Services' },
  nav_work: { el: 'Δουλειά', en: 'Work' },
  nav_contact: { el: 'Επικοινωνία', en: 'Contact' },

  card_role: { el: 'Web Designer & App Developer', en: 'Web Designer & App Developer' },
  card_stack: { el: 'React · Node · WordPress', en: 'React · Node · WordPress' },

  about_title: { el: 'Σχετικά με εμένα', en: 'About me' },
  about_eyebrow: { el: 'Σχετικά', en: 'About' },
  about_p1: { el: 'Είμαι web designer & developer με έδρα το Ηράκλειο. Σχεδιάζω και χτίζω ιστοσελίδες αλλά και web εφαρμογές που δείχνουν επαγγελματισμό από την πρώτη ματιά — γρήγορες, καθαρές, φτιαγμένες να μετατρέπουν επισκέπτες σε πελάτες.', en: 'I am a web designer & developer based in Heraklion. I design and build websites and web apps that look professional from the first glance — fast, clean, made to turn visitors into clients.' },
  about_p2: { el: 'Έχω δουλέψει σε projects από premium tattoo studio μέχρι μεγάλο εκπαιδευτικό όμιλο με τρία παραρτήματα, και ξέρω να προσαρμόζω το ύφος της σελίδας στο brand κάθε πελάτη — όχι το αντίστροφο.', en: "I have worked on projects ranging from a premium tattoo studio to a large educational group with three locations, and I know how to adapt the site to each client's brand — not the other way around." },
  about_skills_title: { el: 'Βασικές δεξιότητες', en: 'Core skills' },
  about_skill5: { el: 'Συνεργασία με πελάτες', en: 'Client collaboration' },

  exp_title: { el: 'Εμπειρία', en: 'Experience' },
  exp_now: { el: 'σήμερα', en: 'present' },
  exp0_role: { el: 'IT, Τεχνικές Σχολές Επιμελητηρίου', en: 'IT, Chamber Technical Schools' },
  exp1_role: { el: 'Freelance Web Designer & Developer', en: 'Freelance Web Designer & Developer' },
  exp2_role: { el: 'Πρακτική άσκηση, MultiApp Solutions — Web Designer', en: 'Internship, MultiApp Solutions — Web Designer' },

  edu_title: { el: 'Εκπαίδευση & Πιστοποιήσεις', en: 'Education & Certifications' },
  edu_azure: { el: 'Microsoft Azure AI Essentials Professional Certificate (Microsoft & LinkedIn)', en: 'Microsoft Azure AI Essentials Professional Certificate (Microsoft & LinkedIn)' },
  edu1: { el: 'FreeCodeCamp — JavaScript Algorithms & Data Structures', en: 'FreeCodeCamp — JavaScript Algorithms & Data Structures' },
  edu2: { el: 'FreeCodeCamp — Responsive Web Design', en: 'FreeCodeCamp — Responsive Web Design' },
  edu3: { el: 'IEK AKMI — Ανάπτυξη Εφαρμογών & Παιχνιδιών Web', en: 'IEK AKMI — Web & Game Application Development' },

  services_title: { el: 'Τι κάνω', en: 'What I do' },
  services_eyebrow: { el: 'Υπηρεσίες', en: 'Services' },
  services_sub: { el: 'Οι βασικές μου υπηρεσίες — όλες χτισμένες γύρω από ένα πράγμα: ένα προϊόν που δουλεύει για σένα.', en: 'My core services — all built around one thing: a product that works for you.' },
  svc1_title: { el: 'Σχεδιασμός Ιστοσελίδων', en: 'Web Design' },
  svc6_title: { el: 'Web Εφαρμογές', en: 'Web Applications' },
  svc2_title: { el: 'Ανάπτυξη', en: 'Development' },
  svc3_title: { el: 'WordPress', en: 'WordPress' },
  svc4_title: { el: 'Βάσεις Δεδομένων', en: 'Databases' },
  svc5_title: { el: 'Συντήρηση & Υποστήριξη', en: 'Maintenance & Support' },
  svc1: { el: 'Σχεδιασμός responsive ιστοσελίδων με focus στην εμπειρία χρήστη και στο brand σου.', en: 'Responsive website design focused on user experience and your brand.' },
  svc2: { el: 'Ανάπτυξη με καθαρό, γρήγορο κώδικα — HTML, CSS, JavaScript, χωρίς περιττό βάρος.', en: 'Clean, fast code — HTML, CSS, JavaScript, no unnecessary bloat.' },
  svc3: { el: 'Custom WordPress themes, plugins και εύκολη διαχείριση περιεχομένου για σένα.', en: 'Custom WordPress themes, plugins, and easy content management for you.' },
  svc4: { el: 'Σχεδιασμός και βελτιστοποίηση βάσεων δεδομένων, με ασφάλεια και σταθερότητα.', en: 'Database design and optimization, built for security and stability.' },
  svc5: { el: 'Συντήρηση, ενημερώσεις και υποστήριξη μετά την παράδοση — δεν μένεις μόνος.', en: 'Maintenance, updates, and support after launch — you are never on your own.' },
  svc6: { el: 'Δυναμικές web εφαρμογές με logins, dashboards, βάσεις δεδομένων και real-time λειτουργίες — πέρα από στατικές σελίδες.', en: 'Dynamic web apps with logins, dashboards, databases, and real-time features — beyond static sites.' },

  work_title: { el: 'Επιλεγμένη δουλειά', en: 'Selected work' },
  work_eyebrow: { el: 'Δουλειά', en: 'Work' },
  work_sub: { el: 'Δύο πρόσφατα projects, δύο εντελώς διαφορετικά brands.', en: 'Two recent projects, two completely different brands.' },
  work1_cat: { el: 'Tattoo Studio', en: 'Tattoo Studio' },
  work2_cat: { el: 'Εκπαίδευση', en: 'Education' },
  work3_cat: { el: 'Κατάρτιση', en: 'Training' },
  work3_desc: { el: 'Ιστότοπος για προγράμματα επαγγελματικής κατάρτισης και σεμινάρια — καθαρή δομή και εύκολη πλοήγηση για τους εκπαιδευόμενους.', en: 'Website for vocational training programs and seminars — clean structure and easy navigation for learners.' },
  work_live: { el: 'Ενεργό', en: 'Live' },
  work_visit: { el: 'Δες τη σελίδα', en: 'Visit site' },
  work1_desc: { el: 'Premium tattoo & piercing studio στο Ηράκλειο. Σκούρο, μοντέρνο design φτιαγμένο να αναδεικνύει fine line, geometric και micro-realism δουλειές.', en: 'Premium tattoo & piercing studio in Heraklion. Dark, modern design built to showcase fine line, geometric, and micro-realism work.' },
  work2_title: { el: 'Φροντιστηριακός Όμιλος ΕΝΑ', en: 'Frontistirio ENA' },
  work2_desc: { el: 'Μεγάλο, πολυσέλιδο site για τρία παραρτήματα σε Ηράκλειο & Αθήνα — με υπολογιστή μορίων, βάσεις εισαγωγής και αρχείο επιτυχόντων.', en: 'A large, multi-page site for three locations in Heraklion & Athens — featuring a grade calculator, admission base scores, and a success-story archive.' },

  process_eyebrow: { el: 'πώς δουλεύω', en: 'how I work' },
  process_title: { el: 'Από την ιδέα στο production', en: 'From idea to production' },
  step1_h: { el: 'Discovery', en: 'Discovery' },
  step1_p: { el: 'Συζητάμε τις ανάγκες σου, το κοινό σου και τους στόχους της σελίδας.', en: "We talk through your needs, your audience, and the site's goals." },
  step2_h: { el: 'Design', en: 'Design' },
  step2_p: { el: 'Σχεδιάζω το look & feel που ταιριάζει στο brand σου.', en: 'I design the look and feel that fits your brand.' },
  step3_h: { el: 'Build', en: 'Build' },
  step3_p: { el: 'Χτίζω την ιστοσελίδα — καθαρός κώδικας, responsive, γρήγορη.', en: 'I build the site — clean code, responsive, fast.' },
  step4_h: { el: 'Launch', en: 'Launch' },
  step4_p: { el: 'Παράδοση, σύντομη εκπαίδευση και συνεχής υποστήριξη.', en: 'Launch, a short walkthrough, and ongoing support.' },

  contact_title: { el: 'Πάμε να φτιάξουμε κάτι', en: "Let's build something" },
  contact_eyebrow: { el: 'Επικοινωνία', en: 'Contact' },
  contact_sub: { el: 'Πες μου λίγα λόγια για το project σου — απαντάω συνήθως μέσα στην ίδια μέρα.', en: 'Tell me a bit about your project — I usually reply the same day.' },
  contact_intro: { el: 'Είτε ξεκινάς από το μηδέν είτε θες ανανέωση της υπάρχουσας σελίδας σου, στείλε μου ένα μήνυμα και τα λέμε.', en: "Whether you're starting from scratch or refreshing an existing site, drop me a message and let's talk." },
  contact_reply: { el: 'Απαντώ συνήθως μέσα στην ίδια μέρα', en: 'I usually reply the same day' },
  form_name: { el: 'Όνομα', en: 'Name' },
  form_email: { el: 'Email', en: 'Email' },
  form_message: { el: 'Μήνυμα', en: 'Message' },
  form_submit: { el: 'Στείλε μήνυμα', en: 'Send message' },
  form_sending: { el: 'Αποστολή...', en: 'Sending...' },
  form_success: { el: 'Ευχαριστώ! Θα επικοινωνήσω σύντομα μαζί σου.', en: "Thanks! I'll get back to you shortly." },
  form_error: { el: 'Κάτι πήγε στραβά — δοκίμασε ξανά ή στείλε μου email απευθείας.', en: 'Something went wrong — please try again or email me directly.' },

  footer_copy: { el: '© 2026 Konstantinos Tsikalas. Όλα τα δικαιώματα διατηρούνται.', en: '© 2026 Konstantinos Tsikalas. All rights reserved.' }
}

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => localStorage.getItem('kt-lang') || 'el')

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('kt-lang', lang)
  }, [lang])

  const setLang = (l) => setLangState(l)
  const t = (key) => (dict[key] ? dict[key][lang] : key)

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
