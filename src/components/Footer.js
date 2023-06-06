import React from 'react'
import SocialLinks from './subComponents/SocialLinks'

export default function Footer() {
  return (
    <div className='bg-black flex flex-col py-10 justify-center items-center gap-5'>
      <h1 className='text-white text-xl text-center font-bold'>Dayniel 2023, Habana Cuba</h1>
      <SocialLinks/>
    </div>
  )
}
