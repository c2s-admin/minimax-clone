'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ExternalLink } from 'lucide-react'
import { themeConfig } from '../../theme.config.js'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'Research', href: '#research' },
    { name: 'Product', href: '#product' },
    { name: 'About Us', href: '#about' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
      style={{ height: themeConfig.components.navigation.height }}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-2 gap-[2px] w-4 h-4">
                  <div className="w-[6px] h-[6px] bg-white rounded-sm"></div>
                  <div className="w-[6px] h-[6px] bg-white/70 rounded-sm"></div>
                  <div className="w-[6px] h-[6px] bg-white/70 rounded-sm"></div>
                  <div className="w-[6px] h-[6px] bg-white rounded-sm"></div>
                </div>
              </div>
              <span className="ml-2 text-xl font-semibold text-primary-900">MINIMAX</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#api-platform">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium"
              >
                API Platform
                <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#start-chat">
              <Button
                className="bg-primary-900 hover:bg-primary-800 text-white font-medium px-6 btn-hover-lift"
                style={{
                  backgroundColor: themeConfig.components.buttons.primary.bg,
                }}
              >
                Start Chat
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-[2px] w-4 h-4">
                      <div className="w-[6px] h-[6px] bg-white rounded-sm"></div>
                      <div className="w-[6px] h-[6px] bg-white/70 rounded-sm"></div>
                      <div className="w-[6px] h-[6px] bg-white/70 rounded-sm"></div>
                      <div className="w-[6px] h-[6px] bg-white rounded-sm"></div>
                    </div>
                  </div>
                  <span className="text-xl font-semibold text-primary-900">MINIMAX</span>
                </div>

                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                  <Link href="#api-platform">
                    <Button
                      variant="outline"
                      className="w-full justify-center text-gray-700 hover:text-primary-600 font-medium"
                    >
                      API Platform
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#start-chat">
                    <Button
                      className="w-full bg-primary-900 hover:bg-primary-800 text-white font-medium"
                      style={{
                        backgroundColor: themeConfig.components.buttons.primary.bg,
                      }}
                    >
                      Start Chat
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
