'use client'

import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, MessageSquare, Hash, Activity, Heart } from 'lucide-react'
import { themeConfig } from '../../theme.config.js'

const Footer = () => {
  const footerSections = [
    {
      title: 'Lösungen',
      links: [
        { name: 'AI-Diagnostik 02', href: '#diagnostik' },
        { name: 'PflegeAssist M1', href: '#pflegeassist' },
        { name: 'MedSpeak 02', href: '#medspeak' },
        { name: 'HealthConnect API', href: '#healthconnect' },
      ]
    },
    {
      title: 'Produkte',
      links: [
        { name: 'PflegeAssist Chat', href: '#pflege-chat' },
        { name: 'MedAgent Pro', href: '#med-agent' },
        { name: 'DiagnoseVision', href: '#diagnose-vision' },
        { name: 'VitalSpeak', href: '#vital-speak' },
        { name: 'TherapieAgent', href: '#therapie-agent' },
        { name: 'PatientConnect', href: '#patient-connect' },
      ]
    },
    {
      title: 'Unternehmen',
      links: [
        { name: 'Über uns', href: '#ueber-uns' },
        { name: 'Neuigkeiten', href: '#news' },
        { name: 'Karriere', href: '#karriere' },
        { name: 'Kontakt', href: '#kontakt' },
      ]
    }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#github' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
    { name: 'E-Mail', icon: Mail, href: 'mailto:info@zweitmein.ng' },
    { name: 'Community', icon: Hash, href: '#community' },
    { name: 'Support', icon: MessageSquare, href: '#support' },
  ]

  return (
    <footer className="bg-healthcare-deepBlue text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="relative">
                    <Activity className="w-6 h-6 text-white" />
                    <Heart className="w-4 h-4 text-secondary-500 absolute -top-1 -right-1" />
                  </div>
                  <div className="absolute inset-0 bg-secondary-500/20 rounded-xl animate-ping"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">
                    {themeConfig.components.branding.companyName}
                  </span>
                  <span className="text-sm text-white/80">
                    {themeConfig.components.branding.tagline}
                  </span>
                </div>
              </div>

              <p className="text-lg font-medium text-white/90 mb-6">
                Gesundheit durch Intelligenz
              </p>

              <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                Innovative KI-Lösungen für die nächste Generation der Gesundheitsversorgung.
                Sichere, skalierbare und DSGVO-konforme Healthcare-Technologie für
                professionelle Pflegeeinrichtungen.
              </p>

              {/* Healthcare Certifications */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-white/60">
                  <Activity className="w-4 h-4 text-secondary-500" />
                  <span>Medizinprodukt CE-Kennzeichnung</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-white/60">
                  <Heart className="w-4 h-4 text-secondary-500" />
                  <span>ISO 27001 zertifiziert</span>
                </div>
              </div>
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
                        className="text-white/70 hover:text-white transition-colors duration-200 text-sm hover:text-secondary-500"
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
                    className="p-2 bg-white/10 hover:bg-secondary-500/20 rounded-lg transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-white/70 group-hover:text-secondary-500 transition-colors duration-200" />
                  </Link>
                )
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-white/60 text-sm">
                © 2025 zweitmein.ng - complex care solutions GmbH. Alle Rechte vorbehalten.
              </p>
              <p className="text-white/40 text-xs mt-1">
                Mit ❤️ für die Healthcare-Community entwickelt
              </p>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Link href="#datenschutz" className="text-white/60 hover:text-secondary-500 text-xs transition-colors duration-200">
                Datenschutz (DSGVO)
              </Link>
              <Link href="#agb" className="text-white/60 hover:text-secondary-500 text-xs transition-colors duration-200">
                AGB
              </Link>
              <Link href="#impressum" className="text-white/60 hover:text-secondary-500 text-xs transition-colors duration-200">
                Impressum
              </Link>
              <Link href="#cookies" className="text-white/60 hover:text-secondary-500 text-xs transition-colors duration-200">
                Cookie-Richtlinie
              </Link>
              <Link href="#support" className="text-white/60 hover:text-secondary-500 text-xs transition-colors duration-200">
                Support
              </Link>
            </div>
            <div className="text-white/40 text-xs">
              Letzte Aktualisierung: Januar 2025
            </div>
          </div>
        </div>

        {/* Healthcare Compliance Notice */}
        <div className="border-t border-white/10 py-4">
          <div className="text-center">
            <p className="text-white/50 text-xs">
              Diese Plattform ist als Medizinprodukt der Klasse I nach MDR zertifiziert.
              Alle Daten werden DSGVO-konform in Deutschland verarbeitet.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
