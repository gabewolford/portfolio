'use client'

import { useEffect } from 'react'

export default function Observer() {
  useEffect(() => {

    const cards = document.querySelectorAll('.fade-in')
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('show', entry.isIntersecting)
            if (entry.isIntersecting) {
                observer.unobserve(entry.target)
            }
        })
    },
    {
        threshold: .25,
    }
    )

    cards.forEach(card => {
        observer.observe(card)
    })
  }, [])

  return (
    <></>
  )
}