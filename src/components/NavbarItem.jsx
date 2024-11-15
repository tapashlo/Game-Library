"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function NavbarItem({title, param}) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
  return (
    <div>
        <Link className={`hover:text-amber-500 font-semibold ${genre === param ? 'underline decoration-6 decoration-amber-500 rounded-lg text-amber-500' : 'text-black'}`} 
        href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
