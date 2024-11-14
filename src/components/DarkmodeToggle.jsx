"use client"
import React, { useEffect, useState } from 'react'

import {MdLightMode,MdDarkMode} from 'react-icons/md'
import { useTheme } from 'next-themes'
export default function DarkmodeToggle() {

    const {setTheme,theme,systemTheme} = useTheme()
    const [mounted , setMounted] = React.useState(false)
    useEffect(() => setMounted(true),[])
    const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div className='text-2xl cursor-pointer hover:text-lime-500'>
        {
            mounted && currentTheme === 'dark' ? (
                <MdLightMode onClick={() => setTheme('light')}/>
            ):(
                <MdDarkMode onClick={() => setTheme('dark')}/>
            )
        }
    </div>
  )
}
