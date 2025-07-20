'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { themeConfig } from '../../theme.config.js'

const ProductSection = () => {
  const products = [
    {
      id: 1,
      title: 'MiniMax Chat',
      subtitle: 'Your Ultimate AI Partner',
      description: 'Ask anything, get intelligent responses with our advanced language model.',
      image: 'https://ext.same-assets.com/235169353/4029601173.webp',
      link: '#chat',
      color: 'bg-gradient-to-br from-blue-400 to-blue-600',
      textColor: 'text-white'
    },
    {
      id: 2,
      title: 'MiniMax Agent',
      subtitle: 'Minimize Effort, Maximize Intelligence',
      description: 'Intelligent agents that understand context and execute complex tasks.',
      image: 'https://ext.same-assets.com/235169353/1049270523.webp',
      link: '#agent',
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      textColor: 'text-white'
    },
    {
      id: 3,
      title: 'Hailuo Video',
      subtitle: 'Your Stories, Amplified by AI',
      description: 'Create stunning videos with AI-powered generation and editing.',
      image: 'https://ext.same-assets.com/235169353/1751102680.webp',
      link: '#hailuo',
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      textColor: 'text-white'
    },
    {
      id: 4,
      title: 'MiniMax Audio',
      subtitle: 'Create Lifelike Speech',
      description: 'Advanced text-to-speech with natural voice synthesis.',
      image: 'https://ext.same-assets.com/235169353/2981949888.png',
      link: '#audio',
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      textColor: 'text-white'
    },
    {
      id: 5,
      title: 'Hailuo Video Agent',
      subtitle: 'Vibe Videoing with Zero-touch',
      description: 'Automated video creation with intelligent agent assistance.',
      image: 'https://ext.same-assets.com/235169353/132282913.webp',
      link: '#video-agent',
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      textColor: 'text-white',
      isNew: true
    },
    {
      id: 6,
      title: 'Talkie',
      subtitle: 'Create Characters You\'ve Imagined',
      description: 'Build and interact with AI characters for immersive conversations.',
      image: 'https://ext.same-assets.com/235169353/3968281544.png',
      link: '#talkie',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      textColor: 'text-white'
    }
  ]

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <Card className="relative overflow-hidden group cursor-pointer card-hover bg-white border-0 shadow-lg">
      <div className="relative h-80">
        {/* Background */}
        <div className={`absolute inset-0 ${product.color}`} />

        {/* Background Pattern/Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${product.image})`,
          }}
        />

        {/* NEW Badge */}
        {product.isNew && (
          <Badge className="absolute top-4 right-4 bg-white text-primary-900 font-semibold">
            NEW
          </Badge>
        )}

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-6">
          <div className="space-y-4">
            <div className="space-y-2">
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
              Learn more
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
              Product
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-native applications
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
              Explore All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection
