'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ModeToggle } from './ModeToggel'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className=" shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">MonSite</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Accueil</Link>
            <Link href="/services" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</Link>
            <Link href="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">À propos</Link>
            <Link href="/register" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Register</Link>
            <ModeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6 text-gray-500" /> : <Menu className="h-6 w-6 text-gray-500" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mobile-menu md:hidden">
          <ul className="">
            <li><Link href="/" className="block text-sm px-2 py-4 text-gray-500 hover:bg-green-500 hover:text-white transition duration-300">Accueil</Link></li>
            <li><Link href="/services" className="block text-sm px-2 py-4 text-gray-500 hover:bg-green-500 hover:text-white transition duration-300">Services</Link></li>
            <li><Link href="/about" className="block text-sm px-2 py-4 text-gray-500 hover:bg-green-500 hover:text-white transition duration-300">À propos</Link></li>
            <li><Link href="/register" className="block text-sm px-2 py-4 text-gray-500 hover:bg-green-500 hover:text-white transition duration-300">Register</Link></li>
          </ul>
          <ModeToggle />
        </div>
      )}
    </nav>
  )
}

export default Navbar

