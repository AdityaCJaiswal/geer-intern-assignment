import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gem, Star, Shield, Award, Heart, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-rose-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Gem className="h-8 w-8 text-rose-600" />
              <span className="font-playfair text-2xl font-bold text-gray-900">Lumière</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/products" className="text-gray-700 hover:text-rose-600 transition-colors">Collections</Link>
              <Link href="/about" className="text-gray-700 hover:text-rose-600 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-rose-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="font-playfair text-6xl md:text-8xl font-bold text-gray-900 tracking-tight">
                Lumière
                <span className="block bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600 bg-clip-text text-transparent">
                  Jewelry
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover our exquisite collection of handcrafted fine jewelry. Each piece tells a story of 
                elegance, craftsmanship, and timeless beauty designed for life's most precious moments.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="text-lg px-8 py-4 gap-2 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800">
                  <Sparkles className="h-5 w-5" />
                  Explore Collection
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-rose-200 hover:bg-rose-50">
                Our Story
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-rose-400/20 to-amber-400/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-amber-400/20 to-rose-400/20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-rose-300/10 to-amber-300/10 blur-2xl"></div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From engagement rings to statement necklaces, discover jewelry that captures your unique style and celebrates life's special moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Rings', icon: '💍', description: 'Engagement & Wedding' },
              { name: 'Necklaces', icon: '📿', description: 'Pendants & Chains' },
              { name: 'Earrings', icon: '💎', description: 'Studs & Drops' },
              { name: 'Bracelets', icon: '✨', description: 'Tennis & Bangles' }
            ].map((category) => (
              <Link key={category.name} href="/products" className="group">
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-rose-50/50 border border-rose-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Lumière Promise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every piece in our collection represents our commitment to exceptional quality, ethical sourcing, and timeless design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/80 to-rose-50/50 backdrop-blur-sm border border-rose-100 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 text-rose-600 mb-6">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">Master Craftsmanship</h3>
              <p className="text-gray-600 leading-relaxed">
                Each piece is meticulously handcrafted by our skilled artisans using traditional techniques passed down through generations.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/80 to-amber-50/50 backdrop-blur-sm border border-amber-100 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 text-amber-600 mb-6">
                <Gem className="h-10 w-10" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">Finest Materials</h3>
              <p className="text-gray-600 leading-relaxed">
                We source only the highest quality diamonds, precious gemstones, and metals to ensure lasting beauty and value.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-white/80 to-emerald-50/50 backdrop-blur-sm border border-emerald-100 hover:shadow-xl transition-all duration-300">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600 mb-6">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">Lifetime Guarantee</h3>
              <p className="text-gray-600 leading-relaxed">
                Every purchase comes with our lifetime guarantee, including free cleaning, inspection, and minor repairs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-rose-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Perfect Piece
          </h2>
          <p className="text-xl text-rose-100 mb-8 leading-relaxed">
            Whether you're celebrating an engagement, anniversary, or simply treating yourself, 
            discover jewelry that will be treasured for generations.
          </p>
          <Link href="/products">
            <Button size="lg" className="text-lg px-8 py-4 gap-2 bg-white text-rose-600 hover:bg-rose-50">
              <Sparkles className="h-5 w-5" />
              Shop Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Gem className="h-8 w-8 text-rose-400" />
                <span className="font-playfair text-2xl font-bold">Lumière</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Creating timeless jewelry pieces that celebrate life's most precious moments. 
                Handcrafted with love, designed to last forever.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Collections</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products" className="hover:text-white transition-colors">Engagement Rings</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Wedding Bands</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Necklaces</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Earrings</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/size-guide" className="hover:text-white transition-colors">Size Guide</Link></li>
                <li><Link href="care-instructions" className="hover:text-white transition-colors">Care Instructions</Link></li>
                <li><Link href="returns" className="hover:text-white transition-colors">Returns</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Lumière Jewelry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}