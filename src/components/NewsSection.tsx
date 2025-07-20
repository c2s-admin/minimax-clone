'use client'

import React from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar } from 'lucide-react'
import Slider from './Slider'
import { themeConfig } from '../../theme.config.js'

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'MiniMax-M1 Technical Seminar',
      category: 'News',
      date: 'Jul 13, 2025',
      image: 'https://ext.same-assets.com/235169353/528416877.png',
      description: 'Join our technical deep-dive into the MiniMax-M1 model architecture and capabilities.',
      link: '#news-1'
    },
    {
      id: 2,
      title: 'AI Education for Underprivileged Youth in HK',
      category: 'News',
      date: 'Jul 09, 2025',
      image: 'https://ext.same-assets.com/235169353/527930148.png',
      description: 'Expanding AI education access and opportunities for underserved communities.',
      link: '#news-2'
    },
    {
      id: 3,
      title: 'Hailuo-02 is Now Integrated into Envato\'s VideoGen',
      category: 'Partner',
      date: 'Jul 02, 2025',
      image: 'https://ext.same-assets.com/235169353/1268124673.png',
      description: 'Strategic partnership brings advanced video generation to Envato\'s platform.',
      link: '#news-3'
    },
    {
      id: 4,
      title: 'MiniMax Meetup in Japan',
      category: 'News',
      date: 'Jun 20, 2025',
      image: 'https://ext.same-assets.com/235169353/1430159194.png',
      description: 'Community gathering showcasing latest developments and networking opportunities.',
      link: '#news-4'
    },
    {
      id: 5,
      title: 'AWS x MiniMax MCP Agents Hackathon',
      category: 'News',
      date: 'Jun 12, 2025',
      image: 'https://ext.same-assets.com/235169353/1123515446.png',
      description: 'Collaborative hackathon developing innovative MCP agent solutions.',
      link: '#news-5'
    },
    {
      id: 6,
      title: 'Monks and MiniMax Partner to Advance AI Innovation',
      category: 'Partner',
      date: 'Jun 11, 2025',
      image: 'https://ext.same-assets.com/235169353/1777711761.webp',
      description: 'New partnership driving AI innovation in creative industries.',
      link: '#news-6'
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'news':
        return 'bg-blue-100 text-blue-800'
      case 'partner':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const NewsCard = ({ item }: { item: typeof newsItems[0] }) => (
    <div className="px-3">
      <Card className="overflow-hidden bg-white hover:shadow-xl transition-all duration-500 card-hover group cursor-pointer">
        <div className="relative">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Category Badge */}
          <Badge className={`absolute top-4 left-4 ${getCategoryColor(item.category)} font-medium`}>
            {item.category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Date */}
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            {item.date}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-primary-900 line-clamp-2 group-hover:text-primary-700 transition-colors duration-300">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
            {item.description}
          </p>

          {/* Read More */}
          <div className="flex items-center justify-between pt-2">
            <Button
              variant="ghost"
              className="text-primary-600 hover:text-primary-700 hover:bg-primary-50 p-0 h-auto font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              Read more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )

  return (
    <section id="news" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
              What's New
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              News, Partners, Articles and more.
            </p>
          </div>

          {/* News Cards Slider */}
          <div className="relative">
            <div className="hidden lg:block">
              <Slider
                slidesToShow={3}
                slidesToScroll={1}
                autoPlay={true}
                autoPlayInterval={7000}
                className="news-slider"
              >
                {newsItems.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </Slider>
            </div>
            <div className="hidden md:block lg:hidden">
              <Slider
                slidesToShow={2}
                slidesToScroll={1}
                autoPlay={true}
                autoPlayInterval={7000}
                className="news-slider"
              >
                {newsItems.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </Slider>
            </div>
            <div className="block md:hidden">
              <Slider
                slidesToShow={1}
                slidesToScroll={1}
                autoPlay={true}
                autoPlayInterval={7000}
                className="news-slider"
              >
                {newsItems.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </Slider>
            </div>
          </div>

          {/* More News Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="bg-white hover:bg-primary-50 border-primary-200 text-primary-700 font-medium px-8 py-3 btn-hover-lift"
            >
              More News
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .news-slider {
            --slides-to-show: 2;
          }
        }
        @media (max-width: 640px) {
          .news-slider {
            --slides-to-show: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default NewsSection
