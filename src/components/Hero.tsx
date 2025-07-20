'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
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
      className={`absolute rounded-full opacity-80 animate-morphing ${className}`}
      style={{
        width: size,
        height: size,
        animationDelay: delay,
        background: 'linear-gradient(135deg, rgba(71, 162, 248, 0.3) 0%, rgba(19, 37, 60, 0.4) 50%, rgba(160, 187, 213, 0.3) 100%)',
      }}
    />
  )

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-400 via-primary-500 to-primary-800">
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 via-primary-600/30 to-primary-900/40" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="space-y-8">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            MiniMax Agent
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium max-w-3xl mx-auto">
            Minimize Effort, Maximize Intelligence
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary-900 backdrop-blur-sm transition-all duration-300 px-8 py-6 text-lg font-medium btn-hover-lift"
            >
              Learn more
            </Button>
            <Button
              size="lg"
              className="bg-white text-primary-900 hover:bg-white/90 transition-all duration-300 px-8 py-6 text-lg font-medium btn-hover-lift"
            >
              Try Now
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-white/15 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Bottom Arrow Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Side Navigation Dots */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4">
        <div className="w-3 h-3 bg-white/80 rounded-full" />
        <div className="w-2 h-2 bg-white/50 rounded-full" />
        <div className="w-2 h-2 bg-white/30 rounded-full" />
        <div className="w-2 h-2 bg-white/30 rounded-full" />
      </div>
    </section>
  )
}

export default Hero
