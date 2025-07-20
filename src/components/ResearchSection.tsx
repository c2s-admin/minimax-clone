'use client'

import React from 'react'
import Slider from './Slider'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Play } from 'lucide-react'
import { themeConfig } from '../../theme.config.js'

const ResearchSection = () => {
  const researchItems = [
    {
      id: 1,
      title: 'MiniMax Hailuo 02',
      category: 'Video Model',
      description: 'Native 1080p | SOTA Instruction Following | Extreme Physics Mastery',
      image: 'https://ext.same-assets.com/235169353/3321711096.webp',
      isNew: true,
      hasVideo: true,
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      title: 'MiniMax M1',
      category: 'Text Model',
      description: 'Global Leading: 80K CoT Length x 1M Token Input. Top-Tier Model Performance.',
      image: 'https://ext.same-assets.com/235169353/3395551096.webp',
      isNew: true,
      hasVideo: false,
      gradient: 'from-red-500 to-red-700'
    },
    {
      id: 3,
      title: 'MiniMax Speech 02',
      category: 'Audio Model',
      description: 'Intrinsic Zero-shot: Pioneering a New Era of AI Speech Generation',
      image: 'https://ext.same-assets.com/235169353/3737711353.png',
      isNew: true,
      hasVideo: false,
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      id: 4,
      title: 'MiniMax MCP Server',
      category: 'MCP',
      description: 'Video, Image, Speech generation and Voice Cloning Tools Now Available for Developers',
      image: 'https://ext.same-assets.com/235169353/4288870008.webp',
      isNew: true,
      hasVideo: false,
      gradient: 'from-purple-500 to-purple-700'
    }
  ]

  const ResearchCard = ({ item }: { item: typeof researchItems[0] }) => (
    <div className="px-3">
      <Card className="relative overflow-hidden bg-white hover:shadow-xl transition-all duration-500 card-hover group">
        <div className="relative h-80">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          />

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80`} />

          {/* NEW Badge */}
          {item.isNew && (
            <Badge className="absolute top-4 right-4 bg-white text-primary-900 font-semibold">
              NEW
            </Badge>
          )}

          {/* Video Play Button */}
          {item.hasVideo && (
            <Button
              size="icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 backdrop-blur-sm"
            >
              <Play className="h-6 w-6 text-white" />
            </Button>
          )}

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm font-medium opacity-90">{item.category}</p>
              <p className="text-sm opacity-80 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )

  return (
    <section id="research" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Research
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The new generation full-stack self-developed model family
            </p>
          </div>

          {/* Research Cards Slider */}
          <div className="relative">
            <div className="hidden lg:block">
              <Slider
                slidesToShow={3}
                slidesToScroll={1}
                autoPlay={true}
                autoPlayInterval={6000}
                className="research-slider"
              >
                {researchItems.map((item) => (
                  <ResearchCard key={item.id} item={item} />
                ))}
              </Slider>
            </div>
            <div className="hidden md:block lg:hidden">
              <Slider
                slidesToShow={2}
                slidesToScroll={1}
                autoPlay={true}
                autoPlayInterval={6000}
                className="research-slider"
              >
                {researchItems.map((item) => (
                  <ResearchCard key={item.id} item={item} />
                ))}
              </Slider>
            </div>
            <div className="block md:hidden">
              <Slider
                slidesToShow={1}
                slidesToScroll={1}
                autoPlay={true}
                autoPlayInterval={6000}
                className="research-slider"
              >
                {researchItems.map((item) => (
                  <ResearchCard key={item.id} item={item} />
                ))}
              </Slider>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="bg-white hover:bg-primary-50 border-primary-200 text-primary-700 font-medium px-8 btn-hover-lift"
            >
              Explore All Research
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .research-slider {
            --slides-to-show: 2;
          }
        }
        @media (max-width: 640px) {
          .research-slider {
            --slides-to-show: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default ResearchSection
