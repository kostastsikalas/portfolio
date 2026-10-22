import React from 'react'

// Στατικό φόντο: λεπτό πλέγμα από τελείες που σβήνει προς τα κάτω + απαλή πορτοκαλί λάμψη στην κορυφή.
// Καθαρό CSS — χωρίς canvas/JS, οπότε μηδενικό κόστος σε κινητά.
export default function Backdrop() {
  return <div className="bg-layer" aria-hidden="true" />
}
