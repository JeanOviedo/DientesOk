'use client'

import { useEffect } from 'react'

export function Restrictions() {
  useEffect(() => {
    const handleContext = (e: MouseEvent) => e.preventDefault()
    const handleSelect = (e: Event) => e.preventDefault()
    
    document.addEventListener('contextmenu', handleContext)
    document.addEventListener('selectstart', handleSelect)
    document.addEventListener('dragstart', handleSelect)

    return () => {
      document.removeEventListener('contextmenu', handleContext)
      document.removeEventListener('selectstart', handleSelect)
      document.removeEventListener('dragstart', handleSelect)
    }
  }, [])

  return null
}
