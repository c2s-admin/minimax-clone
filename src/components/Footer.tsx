'use client'

import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, MessageSquare, Hash } from 'lucide-react'
import { themeConfig } from '../../theme.config.js'

const Footer = () => {
  const footerSections = [
    {
      title: 'Research',
      links: [
        { name: 'MiniMax M1', href: '#m1' },
        { name: 'MiniMax Hailuo 02', href: '#hailuo' },
        { name: 'Speech-02-HD', href: '#speech-hd' },
        { name: 'Speech-02-Turbo', href: '#speech-turbo' },
      ]
    },
    {
      title: 'Product',
      links: [
        { name: 'Chat', href: '#chat' },
        { name: 'Agent', href: '#agent' },
        { name: 'Audio', href: '#audio' },
        { name: 'Hailuo Video', href: '#hailuo-video' },
        { name: 'Talkie', href: '#talkie' },
        { name: 'API Platform', href: '#api' },
      ]
    },
    {
      title: 'About Us',
      links: [
        { name: 'Company', href: '#company' },
        { name: 'What\'s New', href: '#news' },
      ]
    }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#github' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
    { name: 'Email', icon: Mail, href: '#email' },
    { name: 'Discord', icon: Hash, href: '#discord' },
    { name: 'Chat', icon: MessageSquare, href: '#chat' },
  ]

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-200 rounded-lg flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-[2px] w-5 h-5">
                    <div className="w-[8px] h-[8px] bg-primary-900 rounded-sm"></div>
                    <div className="w-[8px] h-[8px] bg-primary-700 rounded-sm"></div>
                    <div className="w-[8px] h-[8px] bg-primary-700 rounded-sm"></div>
                    <div className="w-[8px] h-[8px] bg-primary-900 rounded-sm"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold">MINIMAX</span>
              </div>
              <p className="text-lg font-medium text-white/90 mb-6">
                Intelligence with Everyone
              </p>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                Building next-generation AGI with Foundation AI models for text, audio, image, and video.
                Empowering 50K+ global businesses with scalable, secure AI solutions.
              </p>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-white/70 group-hover:text-white transition-colors duration-200" />
                  </Link>
                )
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                © 2025 MiniMax. All rights reserved.
              </p>
              <p className="text-white/40 text-xs mt-1">
                Built with ❤️ for the AI community
              </p>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Link href="#privacy" className="text-white/60 hover:text-white/80 text-xs transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-white/60 hover:text-white/80 text-xs transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#cookies" className="text-white/60 hover:text-white/80 text-xs transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link href="#support" className="text-white/60 hover:text-white/80 text-xs transition-colors duration-200">
                Support
              </Link>
            </div>
            <div className="text-white/40 text-xs">
              Last updated: January 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
