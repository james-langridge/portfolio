'use client'

import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useMediaQuery} from '@/app/hooks/useMediaQuery'

export default function Nav() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen)
    }
  }

  return (
    <div>
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="bg-transparent px-10 py-10 md:px-20">
          <div className="flex justify-between">
            <Link className="text-white hover:text-yellow-300 text-xl" href="/">
              JL
            </Link>
            {isMobile && (
              <button onClick={toggleMenu} className="cursor-pointer z-30">
                {isMenuOpen ? (
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-px mb-2 transform rotate-45 bg-white"></div>
                    <div className="w-6 h-px -mt-2 transform -rotate-45 bg-white"></div>
                  </div>
                ) : (
                  <>
                    <div className="w-6 h-px mb-2 bg-white"></div>
                    <div className="w-6 h-px mb-2 bg-white"></div>
                    <div className="w-6 h-px bg-white"></div>
                  </>
                )}
              </button>
            )}

            {isMenuOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-10 md:hidden"></div>
            )}
            <div
              className={`${
                isMobile ? (isMenuOpen ? 'fixed' : 'hidden') : 'flex'
              } top-0 left-0 w-full h-full items-start md:items-center md:space-x-24 text-white justify-end md:space-y-0 space-y-4 pt-32 md:pt-0 md:relative z-20 flex-col md:flex-row`}
            >
              <ul className="flex flex-col items-center md:items-end space-y-10 md:space-y-0 md:flex-row md:space-x-24">
                <li>
                  <Link
                    href={'/work'}
                    className="hover:text-yellow-300 text-xl"
                    onClick={toggleMenu}
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/about'}
                    className="text-white hover:text-yellow-300 text-xl"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/contact'}
                    className="text-white hover:text-yellow-300 text-xl"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/james-langridge"
                    className="text-white hover:text-yellow-300"
                  >
                    <Image
                      src="/github.svg"
                      alt="Github Logo"
                      className="dark:invert"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/james-langridge/"
                    className="text-white hover:text-yellow-300"
                  >
                    <Image
                      src="/linkedin.svg"
                      alt="LinkedIn Logo"
                      className="text-white hover:text-yellow-300"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
