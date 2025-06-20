'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Gem, ArrowLeft, Heart, Award, Users, Sparkles, Shield, Star, Clock, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-rose-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Gem className="h-8 w-8 text-rose-600" />
              <span className="font-playfair text-2xl font-bold text-gray-900">Lumière</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/">
          <Button variant="outline" className="mb-8 gap-2 border-rose-200 hover:bg-rose-50">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-rose-100 to-amber-200 text-rose-600 mb-8">
            <Heart className="h-12 w-12" />
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            For over three decades, Lumière has been crafting extraordinary jewelry that captures 
            the essence of life's most precious moments.
          </p>
        </div>

        <div className="space-y-16">
          {/* Our Heritage */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-12 space-y-6">
                  <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">
                    A Legacy of Excellence
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Founded in 1990 by master jeweler Aditya Jaiswal, Lumière began as a small atelier 
                    in the heart of Nagpur's Diamond District. Aditya's vision was simple yet profound: 
                    to create jewelry that would become treasured heirlooms, passed down through generations.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    What started as a passion project has grown into one of the most respected names 
                    in fine jewelry, known for our unwavering commitment to craftsmanship, ethical 
                    sourcing, and timeless design.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-rose-600">35+</div>
                      <div className="text-sm text-gray-600">Years of Excellence</div>
                    </div>
                    <Separator orientation="vertical" className="h-12 bg-rose-200" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-rose-600">50K+</div>
                      <div className="text-sm text-gray-600">Happy Customers</div>
                    </div>
                    <Separator orientation="vertical" className="h-12 bg-rose-200" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-rose-600">100K+</div>
                      <div className="text-sm text-gray-600">Pieces Crafted</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-rose-100 to-amber-100 p-12 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="text-8xl">💎</div>
                    <h3 className="font-playfair text-2xl font-semibold text-gray-900">
                      "Every piece tells a story"
                    </h3>
                    <p className="text-gray-700 italic">- Aditya Jaiswal, Founder</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Values */}
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every decision we make is guided by our core values, ensuring that each piece 
              we create meets the highest standards of quality and ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 text-rose-600">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold">Craftsmanship</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every piece is meticulously handcrafted by our master artisans using time-honored techniques.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold">Ethical Sourcing</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We source only conflict-free diamonds and responsibly mined precious metals and gemstones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold">Customer Care</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your satisfaction is our priority, with lifetime service and personalized attention.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 text-amber-600">
                  <Sparkles className="h-8 w-8" />
                </div>
                <h3 className="font-playfair text-xl font-semibold">Innovation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We blend traditional techniques with modern innovation to create timeless designs.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Process */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">
                  Our Craftsmanship Process
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From concept to creation, every piece undergoes our meticulous 6-step process 
                  to ensure perfection in every detail.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 text-rose-600 font-bold text-xl">
                    1
                  </div>
                  <h3 className="font-semibold text-lg">Design & Concept</h3>
                  <p className="text-gray-600 text-sm">Our designers create detailed sketches and 3D models for each unique piece.</p>
                </div>

                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 text-rose-600 font-bold text-xl">
                    2
                  </div>
                  <h3 className="font-semibold text-lg">Material Selection</h3>
                  <p className="text-gray-600 text-sm">We carefully select the finest diamonds, gemstones, and precious metals.</p>
                </div>

                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 text-rose-600 font-bold text-xl">
                    3
                  </div>
                  <h3 className="font-semibold text-lg">Handcrafting</h3>
                  <p className="text-gray-600 text-sm">Master artisans shape and form each piece using traditional techniques.</p>
                </div>

                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 text-rose-600 font-bold text-xl">
                    4
                  </div>
                  <h3 className="font-semibold text-lg">Stone Setting</h3>
                  <p className="text-gray-600 text-sm">Precious stones are carefully set by hand with precision and care.</p>
                </div>

                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 text-rose-600 font-bold text-xl">
                    5
                  </div>
                  <h3 className="font-semibold text-lg">Finishing</h3>
                  <p className="text-gray-600 text-sm">Each piece is polished and finished to achieve the perfect luster and shine.</p>
                </div>

                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 text-rose-600 font-bold text-xl">
                    6
                  </div>
                  <h3 className="font-semibold text-lg">Quality Assurance</h3>
                  <p className="text-gray-600 text-sm">Final inspection ensures every piece meets our exacting standards.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Section */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">
                  Meet Our Team
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our passionate team of designers, craftspeople, and gemologists work together 
                  to bring your jewelry dreams to life.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center text-6xl">
                    👩‍🎨
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold">Aditya Jaiswal</h3>
                    <p className="text-rose-600 font-medium">Founder & Master Jeweler</p>
                    <p className="text-gray-600 text-sm mt-2">35+ years of experience in fine jewelry design and craftsmanship.</p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center text-6xl">
                    👨‍🔬
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold">James Chen</h3>
                    <p className="text-rose-600 font-medium">Chief Gemologist</p>
                    <p className="text-gray-600 text-sm mt-2">GIA certified gemologist specializing in diamond grading and authentication.</p>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-rose-100 to-amber-100 rounded-full flex items-center justify-center text-6xl">
                    👩‍💼
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold">Sarah Williams</h3>
                    <p className="text-rose-600 font-medium">Head of Customer Experience</p>
                    <p className="text-gray-600 text-sm mt-2">Dedicated to ensuring every customer receives exceptional service and care.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Awards & Recognition */}
          <Card className="border-0 bg-gradient-to-r from-rose-100 to-amber-100 shadow-xl">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-6">
                  Awards & Recognition
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Our commitment to excellence has been recognized by industry leaders and customers alike.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center space-y-3">
                  <Star className="h-12 w-12 text-amber-500 mx-auto" />
                  <h3 className="font-semibold">Best Jewelry Store</h3>
                  <p className="text-sm text-gray-700">Delhi Business Awards 2023</p>
                </div>

                <div className="text-center space-y-3">
                  <Award className="h-12 w-12 text-rose-500 mx-auto" />
                  <h3 className="font-semibold">Excellence in Craftsmanship</h3>
                  <p className="text-sm text-gray-700">Jewelry Industry Council 2022</p>
                </div>

                <div className="text-center space-y-3">
                  <Users className="h-12 w-12 text-blue-500 mx-auto" />
                  <h3 className="font-semibold">Customer Choice Award</h3>
                  <p className="text-sm text-gray-700">Luxury Retail Association 2023</p>
                </div>

                <div className="text-center space-y-3">
                  <Globe className="h-12 w-12 text-emerald-500 mx-auto" />
                  <h3 className="font-semibold">Ethical Business Leader</h3>
                  <p className="text-sm text-gray-700">Responsible Jewelry Council 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="border-0 bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-xl">
            <CardContent className="p-12 text-center">
              <Gem className="h-16 w-16 mx-auto mb-6" />
              <h2 className="font-playfair text-4xl font-bold mb-6">
                Begin Your Journey
              </h2>
              <p className="text-xl text-rose-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Whether you're celebrating an engagement, anniversary, or simply want to treat yourself, 
                let us help you find the perfect piece that will become part of your story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-4 text-lg">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Explore Collection
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                    <Clock className="h-5 w-5 mr-2" />
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}