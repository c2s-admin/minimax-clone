'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Activity, Heart, Users, Shield, Brain } from 'lucide-react'
import { themeConfig } from '../../theme.config.js'

const Hero = () => {
  const MorphingShape = ({
    size,
    className,
    delay
  }: {
    size: string
    className: string
    delay: string
  }) => (
    <div
      className={`absolute rounded-full opacity-30 animate-morphing ${className}`}
      style={{
        width: size,
        height: size,
        animationDelay: delay,
        background: 'linear-gradient(135deg, rgba(18, 120, 179, 0.3) 0%, rgba(0, 65, 102, 0.4) 50%, rgba(0, 145, 189, 0.3) 100%)',
      }}
    />
  )

  const FloatingIcon = ({
    Icon,
    className,
    delay
  }: {
    Icon: any
    className: string
    delay: string
  }) => (
    <div
      className={`absolute ${className} floating-icon`}
      style={{ animationDelay: delay }}
    >
      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
        <Icon className="w-6 h-6 text-secondary-500" />
      </div>
    </div>
  )

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Healthcare Background Gradient */}
      <div className="absolute inset-0 healthcare-bg"></div>

      {/* Morphing Background Shapes */}
      <div className="absolute inset-0">
        <MorphingShape
          size="400px"
          className="top-10 left-10"
          delay="0s"
        />
        <MorphingShape
          size="300px"
          className="top-32 right-20"
          delay="2s"
        />
        <MorphingShape
          size="200px"
          className="bottom-20 left-32"
          delay="4s"
        />
        <MorphingShape
          size="150px"
          className="bottom-32 right-10"
          delay="6s"
        />
        <MorphingShape
          size="250px"
          className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          delay="3s"
        />
      </div>

      {/* Floating Healthcare Icons */}
      <FloatingIcon Icon={Activity} className="top-20 left-20" delay="0s" />
      <FloatingIcon Icon={Heart} className="top-40 right-32" delay="1s" />
      <FloatingIcon Icon={Users} className="bottom-32 left-16" delay="2s" />
      <FloatingIcon Icon={Shield} className="bottom-20 right-20" delay="3s" />
      <FloatingIcon Icon={Brain} className="top-1/3 left-1/4" delay="1.5s" />

      {/* EKG Line Animation */}
      <div className="absolute top-1/4 left-0 right-0 h-0.5 ekg-line opacity-60"></div>
      <div className="absolute bottom-1/4 left-0 right-0 h-0.5 ekg-line opacity-40" style={{ animationDelay: '1.5s' }}></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-primary-600/30 to-primary-900/40" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Company Badge */}
          <div className="flex justify-center mb-6">
            <div className="glass-effect px-6 py-3 rounded-full border border-white/30">
              <div className="flex items-center space-x-2 text-white/90">
                <Activity className="w-5 h-5 text-secondary-500" />
                <span className="font-medium">Healthcare AI Solutions</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            <span className="block">zweitmein.ng</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-medium text-secondary-500 mt-2">
              complex care solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium max-w-4xl mx-auto leading-relaxed">
            Innovative Gesundheitstechnologie für professionelle Pflege.
            <span className="block mt-2 text-lg md:text-xl lg:text-2xl text-white/80">
              Sichere, skalierbare AI-Lösungen für Healthcare-Professionals.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="glass-effect text-white border-white/30 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 px-8 py-6 text-lg font-medium btn-hover-lift"
            >
              Lösungen entdecken
            </Button>
            <Button
              size="lg"
              className="bg-secondary-500 text-white hover:bg-secondary-600 transition-all duration-300 px-8 py-6 text-lg font-medium btn-healthcare-secondary shadow-lg"
            >
              Jetzt starten
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 pt-12">
            <div className="flex items-center space-x-2 text-white/80">
              <Shield className="w-5 h-5 text-secondary-500" />
              <span className="font-medium">DSGVO-konform</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Heart className="w-5 h-5 text-secondary-500" />
              <span className="font-medium">Medizinisch zertifiziert</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Users className="w-5 h-5 text-secondary-500" />
              <span className="font-medium">Für Pflegeprofis</span>
            </div>
          </div>
        </div>

        {/* Pulse Elements */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-secondary-500/60 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-16 w-4 h-4 bg-secondary-500/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Side Navigation Dots - Healthcare themed */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4">
        <div className="w-3 h-3 bg-secondary-500/80 rounded-full animate-pulse" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white/30 rounded-full" />
        <div className="w-2 h-2 bg-white/30 rounded-full" />
      </div>

      {/* Healthcare Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0h20v20H30V30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
    </section>
  )
}

export default Hero
