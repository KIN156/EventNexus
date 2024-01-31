import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

const Header = () => {
  return (
    <header className='w-full border-b'>
        <div  className="wrapper flex items-center justify-between">
        <Link href="/" className='w-36'>
            <Image src="./assets/images/logo.svg" height={38} width={128}
            alt="Event nexus logo"/>
        </Link>
          

          <div>
            <nav className='md:flex-between hidden w-full max-w-xs'>
              <Navbar />
            </nav>
          </div>
        
          <div className='flex w-36 justify-end gap-3'>

            <SignedIn>
              <UserButton afterSignOutUrl='/'/>
            </SignedIn>
            <MobileNav />
            <SignedOut>
              <Button asChild className='rounded-full' size="lg">
                <Link href="/sign-in">
                  Login
                </Link>
              </Button>
            </SignedOut>
        </div>
        </div>

    </header>
  )
}

export default Header