import React, { createContext, useContext, useEffect, useRef, useState } from 'react'

export const prefersReduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const finePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v))

// "ready" flips once the intro curtain lifts; hero entrances key off it.
export const ReadyContext = createContext(true)
export const useReady = () => useContext(ReadyContext)

export function useInView({ threshold = 0.18, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReduced() || !('IntersectionObserver' in window)) { setInView(true); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect() }
    }, { threshold, rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin])
  return [ref, inView]
}

// Runs `fn` at most once per frame while the page scrolls or resizes.
export function useScrollFrame(fn) {
  const fnRef = useRef(fn)
  fnRef.current = fn
  useEffect(() => {
    let raf = 0
    const run = () => { raf = 0; fnRef.current() }
    const queue = () => { if (!raf) raf = requestAnimationFrame(run) }
    queue()
    window.addEventListener('scroll', queue, { passive: true })
    window.addEventListener('resize', queue)
    return () => {
      window.removeEventListener('scroll', queue)
      window.removeEventListener('resize', queue)
      cancelAnimationFrame(raf)
    }
  }, [])
}

/** Masked line-rise headline. `html` uses "|" for hand-set line breaks and may contain <em>. */
export function Lines({ html, as: Tag = 'h2', className = '', show, start = 0, step = 0.09 }) {
  const [ref, inView] = useInView({ threshold: 0.3 })
  const on = show === undefined ? inView : show
  return (
    <Tag ref={ref} className={`lines ${on ? 'in' : ''} ${className}`} aria-label={html.replace(/<[^>]+>/g, '').replace(/\|/g, ' ')}>
      {html.split('|').map((l, i) => (
        <span className="ln" key={i} aria-hidden="true">
          <span className="ln-i" style={{ '--d': `${start + i * step}s` }} dangerouslySetInnerHTML={{ __html: l }} />
        </span>
      ))}
    </Tag>
  )
}

/** Fade-rise on first view. `d` = delay in seconds. */
export function R({ as: Tag = 'div', d = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView()
  return (
    <Tag ref={ref} className={`rv ${inView ? 'in' : ''} ${className}`} style={{ ...style, '--d': `${d}s` }} {...rest}>
      {children}
    </Tag>
  )
}

export function SectionHead({ num, label, html, sub, children }) {
  return (
    <div className="sec-head">
      <R className="sec-label"><span className="mono">[ {num} ]</span><span className="mono">{label}</span></R>
      <Lines html={html} className="sec-title" />
      {sub && <R as="p" d={0.25} className="sec-sub">{sub}</R>}
      {children}
    </div>
  )
}
