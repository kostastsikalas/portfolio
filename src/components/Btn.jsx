import React, { useEffect, useRef } from 'react'
import { finePointer, prefersReduced } from '../motion.jsx'

export const Arrow = ({ down }) => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {down ? <path d="M12 5v14M6 13l6 6 6-6" /> : <path d="M7 17 17 7M8 7h9v9" />}
  </svg>
)

/** Pill button: text rolls on hover, arrow chip rotates, magnetic pull on fine pointers. */
export default function Btn({ href, children, variant = 'solid', small, external, as = 'a', down, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !finePointer() || prefersReduced()) return
    const move = (e) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - (r.left + r.width / 2)) * 0.22
      const y = (e.clientY - (r.top + r.height / 2)) * 0.32
      el.style.transform = `translate(${x}px, ${y}px)`
    }
    const leave = () => { el.style.transform = '' }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave) }
  }, [])

  const Tag = as
  const linkProps = as === 'a' ? { href, ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}) } : {}

  return (
    <Tag ref={ref} className={`btn btn-${variant} ${small ? 'btn-sm' : ''}`} {...linkProps} {...rest}>
      <span className="btn-roll">
        <span className="btn-t">{children}</span>
        <span className="btn-t" aria-hidden="true">{children}</span>
      </span>
      <span className="btn-ico"><Arrow down={down} /></span>
    </Tag>
  )
}
