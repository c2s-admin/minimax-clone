'use client'

import React from 'react'
import Slider from './Slider'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Play, Activity, Brain, Heart, Stethoscope } from 'lucide-react'
import { themeConfig } from '../../theme.config.js'

const ResearchSection = () => {
  const researchItems = [
    {
      id: 1,
      title: 'AI-Diagnostik 02',
      category: 'Diagnose-Modell',
      description: 'Präzise Diagnosestellung | Medizinische Bildanalyse | Evidenzbasierte Entscheidungen',
      image: 'https://ext.same-assets.com/235169353/3321711096.webp',
      isNew: true,
      hasVideo: true,
      gradient: 'from-primary-500 to-primary-700',
      icon: Activity
    },
    {
      id: 2,
      title: 'PflegeAssist M1',
      category: 'Pflege-KI',
      description: 'Intelligente Pflegepläne | Patientenüberwachung | Automatisierte Dokumentation',
      image: 'https://ext.same-assets.com/235169353/3395551096.webp',
      isNew: true,
      hasVideo: false,
      gradient: 'from-secondary-500 to-secondary-700',
      icon: Heart
    },
    {
      id: 3,
      title: 'MedSpeak 02',
      category: 'Sprach-KI',
      description: 'Medizinische Transkription | Mehrsprachige Kommunikation | Patientengespräche',
      image: 'https://ext.same-assets.com/235169353/3737711353.png',
      isNew: true,
      hasVideo: false,
      gradient: 'from-accent-500 to-accent-700',
      icon: Brain
    },
    {
      id: 4,
      title: 'HealthConnect API',
      category: 'Integration',
      description: 'Nahtlose Systemintegration | FHIR-kompatibel | Sichere Datenübertragung',
      image: 'https://ext.same-assets.com/235169353/4288870008.webp',
      isNew: true,
      hasVideo: false,
      gradient: 'from-primary-700 to-healthcare-deepBlue',
      icon: Stethoscope
    }
  ]

  const ResearchCard = ({ item }: { item: typeof researchItems[0] }) => (
    <div className="px-3">
      <Card className="relative overflow-hidden bg-white hover:shadow-xl transition-all duration-500 card-hover group">
        <div className="relative h-80">
          {/* Background with Healthcare Theme */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

          {/* Medical Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20h20v20H20V20zm-20 0h20v20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          {/* NEW Badge */}
          {item.isNew && (
            <Badge className="absolute top-4 right-4 bg-white text-primary-900 font-semibold">
              NEU
            </Badge>
          )}

          {/* Medical Icon */}
          <div className="absolute top-4 left-4">
            <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
              <item.icon className="h-6 w-6 text-white" />
            </div>
          </div>

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
              Forschung & Entwicklung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative AI-Lösungen für die nächste Generation der Gesundheitsversorgung
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
              Alle Lösungen entdecken
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResearchSection
