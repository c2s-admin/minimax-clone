'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, ExternalLink, Activity, Users, FileText, Brain, Heart, Monitor } from 'lucide-react'
import { themeConfig } from '../../theme.config.js'

const ProductSection = () => {
  const products = [
    {
      id: 1,
      title: 'PflegeAssist Chat',
      subtitle: 'Ihr intelligenter Pflege-Partner',
      description: 'Schnelle Antworten auf Pflegefragen mit unserem spezialisierten KI-Assistenten.',
      image: 'https://ext.same-assets.com/235169353/4029601173.webp',
      link: '#pflege-chat',
      color: 'bg-gradient-to-br from-primary-400 to-primary-600',
      textColor: 'text-white',
      icon: Activity
    },
    {
      id: 2,
      title: 'MedAgent Pro',
      subtitle: 'Automatisierte Pflegeprozesse',
      description: 'Intelligente Agenten für Dokumentation, Medikation und Patientenüberwachung.',
      image: 'https://ext.same-assets.com/235169353/1049270523.webp',
      link: '#med-agent',
      color: 'bg-gradient-to-br from-secondary-500 to-secondary-700',
      textColor: 'text-white',
      icon: Brain
    },
    {
      id: 3,
      title: 'DiagnoseVision',
      subtitle: 'KI-gestützte Bilddiagnostik',
      description: 'Präzise medizinische Bildanalyse mit fortschrittlicher KI-Technologie.',
      image: 'https://ext.same-assets.com/235169353/1751102680.webp',
      link: '#diagnose-vision',
      color: 'bg-gradient-to-br from-accent-500 to-accent-700',
      textColor: 'text-white',
      icon: Monitor
    },
    {
      id: 4,
      title: 'VitalSpeak',
      subtitle: 'Medizinische Spracherkennung',
      description: 'Professionelle Spracherkennung für Arztbriefe und Pflegeberichte.',
      image: 'https://ext.same-assets.com/235169353/2981949888.png',
      link: '#vital-speak',
      color: 'bg-gradient-to-br from-primary-600 to-primary-800',
      textColor: 'text-white',
      icon: FileText
    },
    {
      id: 5,
      title: 'TherapieAgent',
      subtitle: 'Therapieplanung automatisiert',
      description: 'Intelligente Therapieempfehlungen basierend auf Patientendaten.',
      image: 'https://ext.same-assets.com/235169353/132282913.webp',
      link: '#therapie-agent',
      color: 'bg-gradient-to-br from-healthcare-deepBlue to-primary-900',
      textColor: 'text-white',
      isNew: true,
      icon: Heart
    },
    {
      id: 6,
      title: 'PatientConnect',
      subtitle: 'Patientenkommunikation vereinfacht',
      description: 'Digitale Plattform für nahtlose Kommunikation zwischen Pflegepersonal und Patienten.',
      image: 'https://ext.same-assets.com/235169353/3968281544.png',
      link: '#patient-connect',
      color: 'bg-gradient-to-br from-secondary-600 to-accent-600',
      textColor: 'text-white',
      icon: Users
    }
  ]

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <Card className="relative overflow-hidden group cursor-pointer card-hover bg-white border-0 shadow-lg">
      <div className="relative h-80">
        {/* Background */}
        <div className={`absolute inset-0 ${product.color}`} />

        {/* Medical Cross Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M25 20h10v20H25V20zm-15 5h50v10H10V25z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* NEW Badge */}
        {product.isNew && (
          <Badge className="absolute top-4 right-4 bg-white text-primary-900 font-semibold">
            NEU
          </Badge>
        )}

        {/* Medical Icon */}
        <div className="absolute top-4 left-4">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30">
            <product.icon className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6">
          <div className="space-y-4">
            <div className="space-y-2 mt-12">
              <h3 className={`text-2xl font-bold ${product.textColor}`}>
                {product.title}
              </h3>
              <p className={`text-lg font-medium ${product.textColor} opacity-90`}>
                {product.subtitle}
              </p>
            </div>
            <p className={`text-sm ${product.textColor} opacity-80 leading-relaxed max-w-sm`}>
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              className={`${product.textColor} hover:bg-white/20 p-0 h-auto font-medium opacity-0 group-hover:opacity-100 transition-all duration-300`}
            >
              Mehr erfahren
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className={`${product.textColor} hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300`}
            >
              <ExternalLink className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Card>
  )

  return (
    <section id="product" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              Produkte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              KI-native Gesundheitslösungen für den professionellen Einsatz
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="bg-white hover:bg-primary-50 border-primary-200 text-primary-700 font-medium px-8 btn-hover-lift"
            >
              Alle Produkte entdecken
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection
