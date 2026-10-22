import React from 'react'
import { LangProvider } from './i18n.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Marketing from './components/Marketing.jsx'
import Work from './components/Work.jsx'
import Process from './components/Process.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import AnimatedBackground from './components/AnimatedBackground.jsx'

export default function App() {
  return (
    <LangProvider>
      <AnimatedBackground />
      <Header />
      <main className="wrap">
        <Hero />
        <Work />
        <About />
        <Services />
        <Marketing />
        <Process />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
