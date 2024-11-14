import React from 'react'
import MenuItem from '@/components/MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'

export default function Header() {
  return (
    <div className='flex justify-between items-center p-2 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
            <MenuItem title='home' address='/' Icon ={AiFillHome} />
            <MenuItem title='about' address='/about' Icon ={BsFillInfoCircleFill} />

        </div>

        <div className=''>
            <span className='text-2xl font-bold bg-lime-400 text-black rounded-lg py-1 px-2'>
                Game Lib
                </span>

        </div>
    </div>
  )
}
