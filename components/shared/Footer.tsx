import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='flex wrapper flex-between flex-col flex-center gap-4 text-center sm:flex-row'>
        <Image src="./assets/images/logo.svg" alt='logo' width={128} height={38}/>

        <p>EventNexus 2023. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer