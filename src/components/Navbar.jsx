import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
   <div className='flex gap-4 dark:bg-lime-500 bg-lime-300 p-4 lg:text-lg justify-center'>
    <NavbarItem title= "Trending" param ="fetchTrending"/>
    <NavbarItem title = "Top Rated" param = "fetchTopRated"/>
   </div>
  )
}
