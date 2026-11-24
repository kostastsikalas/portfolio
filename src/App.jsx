import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { LangProvider } from './i18n.jsx'
import { ReadyContext, prefersReduced } from './motion.jsx'
import Loader from './components/Loader.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import Work from './components/Work.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Marketing from './components/Marketing.jsx'
import Process from './components/Process.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function shouldPlayIntro() {
  if (prefersReduced()) return false
  try { return !sessionStorage.getItem('kt-intro') } catch { return false }
}

export default function App() {
  const [intro] = useState(shouldPlayIntro)
  const [ready, setReady] = useState(!intro)

  // Intro bookkeeping + fail-safe: never leave the hero hidden.
  useEffect(() => {
    try { sessionStorage.setItem('kt-intro', '1') } catch { /* private mode */ }
    const t = setTimeout(() => setReady(true), 2600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('ready', ready)
  }, [ready])

  // Smooth scroll + in-page anchors.
  useEffect(() => {
    if (prefersReduced()) return
    const lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    window.__lenis = lenis
    let raf = requestAnimationFrame(function loop(time) { lenis.raf(time); raf = requestAnimationFrame(loop) })
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      const target = id === '#top' ? 0 : document.querySelector(id)
      if (target === null) return
      e.preventDefault()
      lenis.scrollTo(target, { offset: 0 })
      history.replaceState(null, '', id === '#top' ? location.pathname : id)
    }
    document.addEventListener('click', onClick)
    return () => { cancelAnimationFrame(raf); document.removeEventListener('click', onClick); lenis.destroy(); window.__lenis = null }
  }, [])

  // The page colour follows whichever section sits in the middle of the viewport.
  useEffect(() => {
    const root = document.documentElement
    const sections = [...document.querySelectorAll('[data-theme]')]
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) root.dataset.theme = e.target.dataset.theme })
    }, { rootMargin: '-50% 0px -50% 0px' })
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <LangProvider>
      <ReadyContext.Provider value={ready}>
        {intro && <Loader onLift={() => setReady(true)} />}
        <div className="grain" aria-hidden="true" />
        <Header />
        <main>
          <Hero />
          <Manifesto />
          <Work />
          <About />
          <Services />
          <Marketing />
          <Process />
          <Contact />
        </main>
        <Footer />
      </ReadyContext.Provider>
    </LangProvider>
  )
}
