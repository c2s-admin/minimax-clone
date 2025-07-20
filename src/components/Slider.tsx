'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { themeConfig } from '../../theme.config.js'

interface SliderProps {
  children: React.ReactNode[]
  className?: string
  showArrows?: boolean
  autoPlay?: boolean
  autoPlayInterval?: number
  slidesToShow?: number
  slidesToScroll?: number
}

const Slider: React.FC<SliderProps> = ({
  children,
  className = '',
  showArrows = true,
  autoPlay = false,
  autoPlayInterval = 5000,
  slidesToShow = 1,
  slidesToScroll = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  const totalSlides = children.length
  const maxIndex = Math.max(0, totalSlides - slidesToShow)

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return

      const newIndex = Math.max(0, Math.min(index, maxIndex))
      if (newIndex === currentIndex) return

      setIsTransitioning(true)
      setCurrentIndex(newIndex)

      setTimeout(() => {
        setIsTransitioning(false)
      }, parseInt(themeConfig.animations.slider.duration) * 1000)
    },
    [isTransitioning, maxIndex, currentIndex]
  )

  const nextSlide = useCallback(() => {
    const nextIndex = currentIndex + slidesToScroll
    if (nextIndex > maxIndex) {
      goToSlide(0) // Loop back to start
    } else {
      goToSlide(nextIndex)
    }
  }, [currentIndex, slidesToScroll, maxIndex, goToSlide])

  const prevSlide = useCallback(() => {
    const prevIndex = currentIndex - slidesToScroll
    if (prevIndex < 0) {
      goToSlide(maxIndex) // Loop to end
    } else {
      goToSlide(prevIndex)
    }
  }, [currentIndex, slidesToScroll, maxIndex, goToSlide])

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(nextSlide, autoPlayInterval)
      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current)
        }
      }
    }
  }, [autoPlay, autoPlayInterval, nextSlide])

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  const handleMouseLeave = () => {
    if (autoPlay) {
      autoPlayRef.current = setInterval(nextSlide, autoPlayInterval)
    }
  }

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
            width: `${(totalSlides * 100) / slidesToShow}%`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / totalSlides}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > slidesToShow && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 shadow-lg z-10 btn-hover-lift"
            onClick={prevSlide}
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border-gray-200 shadow-lg z-10 btn-hover-lift"
            onClick={nextSlide}
            disabled={isTransitioning}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {totalSlides > slidesToShow && (
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: Math.ceil(totalSlides / slidesToShow) }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / slidesToScroll) === index
                  ? 'bg-primary-600 scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => goToSlide(index * slidesToScroll)}
              disabled={isTransitioning}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Slider
