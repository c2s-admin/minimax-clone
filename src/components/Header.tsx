'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, ExternalLink, Activity, Heart } from 'lucide-react'
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
    { name: 'Lösungen', href: '#research' },
    { name: 'Produkte', href: '#product' },
    { name: 'Über uns', href: '#about' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'nav-glass shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
      style={{ height: themeConfig.components.navigation.height }}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Healthcare Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center">
              {/* Medical Cross Logo */}
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                <div className="relative">
                  <Activity className="w-5 h-5 text-white" />
                  <Heart className="w-3 h-3 text-secondary-500 absolute -top-1 -right-1" />
                </div>
                {/* Pulse animation */}
                <div className="absolute inset-0 bg-secondary-500/20 rounded-xl animate-ping"></div>
              </div>

              {/* Company Name */}
              <div className="ml-3 flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">
                  {themeConfig.components.branding.companyName}
                </span>
                <span className="text-xs text-white/80 leading-tight">
                  {themeConfig.components.branding.tagline}
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#api-platform">
              <Button
                variant="ghost"
                className="text-white/90 hover:text-white hover:bg-white/10 font-medium glass-effect border-white/20"
              >
                API Plattform
                <ExternalLink className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#start-chat">
              <Button
                className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-6 btn-healthcare-secondary shadow-lg"
                style={{
                  borderRadius: themeConfig.components.buttons.primary.borderRadius,
                }}
              >
                Jetzt starten
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-primary-900/95 backdrop-blur-lg border-l border-white/10">
              <div className="flex flex-col space-y-6 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-3">
                  <div className="relative w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                    <div className="relative">
                      <Activity className="w-4 h-4 text-white" />
                      <Heart className="w-2 h-2 text-secondary-500 absolute -top-0.5 -right-0.5" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white">
                      {themeConfig.components.branding.companyName}
                    </span>
                    <span className="text-xs text-white/80">
                      {themeConfig.components.branding.tagline}
                    </span>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg text-white/90 hover:text-white transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA Buttons */}
                <div className="flex flex-col space-y-3 pt-6 border-t border-white/20">
                  <Link href="#api-platform">
                    <Button
                      variant="outline"
                      className="w-full justify-center text-white/90 hover:text-white border-white/30 hover:bg-white/10 font-medium"
                    >
                      API Plattform
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#start-chat">
                    <Button
                      className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-medium"
                      style={{
                        borderRadius: themeConfig.components.buttons.primary.borderRadius,
                      }}
                    >
                      Jetzt starten
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Glassmorphism overlay effect */}
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/70 to-primary-900/80 backdrop-blur-md -z-10"></div>
      )}
    </header>
  )
}

export default Header
