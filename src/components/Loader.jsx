import React, { useEffect, useState } from 'react'

// One-per-session intro: a counter runs to 100, then the curtain lifts off the hero.
export default function Loader({ onLift }) {
  const [n, setN] = useState(0)
  const [phase, setPhase] = useState('count') // count | lift | gone

  useEffect(() => {
    let raf
    const t0 = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / 950)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else {
        setPhase('lift')
        onLift()
        setTimeout(() => setPhase('gone'), 1100)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  if (phase === 'gone') return null
  return (
    <div className={`loader ${phase === 'lift' ? 'lift' : ''}`} aria-hidden="true">
      <div className="loader-top">
        <span className="mono">Konstantinos Tsikalas</span>
        <span className="mono">Web design &amp; development</span>
      </div>
      <div className="loader-n">{String(n).padStart(3, '0')}</div>
    </div>
  )
}
