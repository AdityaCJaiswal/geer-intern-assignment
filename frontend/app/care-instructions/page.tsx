'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Gem, ArrowLeft, Shield, Droplets, Sun, AlertTriangle, Sparkles, Heart } from 'lucide-react';
import Link from 'next/link';

export default function CareInstructionsPage() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/">
          <Button variant="outline" className="mb-8 gap-2 border-rose-200 hover:bg-rose-50">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 text-rose-600 mb-6">
            <Sparkles className="h-10 w-10" />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Care Instructions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep your precious jewelry looking beautiful for generations with our expert care guide.
          </p>
        </div>

        <div className="space-y-12">
          {/* General Care */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <h2 className="font-playfair text-3xl font-semibold mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-rose-600" />
                General Care Guidelines
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Store Properly</h3>
                      <p className="text-gray-700">Keep jewelry in individual soft pouches or lined jewelry boxes to prevent scratching and tangling.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <Droplets className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Clean Regularly</h3>
                      <p className="text-gray-700">Gently clean with a soft cloth after each wear to remove oils, lotions, and everyday buildup.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center">
                      <Sun className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Avoid Exposure</h3>
                      <p className="text-gray-700">Keep away from harsh chemicals, perfumes, lotions, and extreme temperatures.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-lg mb-4">Quick Care Tips</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>Put jewelry on last when getting dressed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>Remove jewelry first when undressing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>Remove before swimming, showering, or exercising</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>Have pieces professionally cleaned annually</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 mt-1">•</span>
                      <span>Inspect clasps and settings regularly</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Metal-Specific Care */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <h2 className="font-playfair text-3xl font-semibold mb-8">Metal-Specific Care</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl">
                  <div className="text-3xl mb-4">🥇</div>
                  <h3 className="font-semibold text-lg mb-3">Gold Jewelry</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Clean with warm soapy water</li>
                    <li>• Use soft-bristled toothbrush for details</li>
                    <li>• Polish with jewelry cloth</li>
                    <li>• Store in anti-tarnish pouches</li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl">
                  <div className="text-3xl mb-4">🥈</div>
                  <h3 className="font-semibold text-lg mb-3">Silver Jewelry</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Use silver polishing cloth regularly</li>
                    <li>• Store with anti-tarnish strips</li>
                    <li>• Clean with silver-specific cleaners</li>
                    <li>• Wear frequently to prevent tarnishing</li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl">
                  <div className="text-3xl mb-4">⚪</div>
                  <h3 className="font-semibold text-lg mb-3">Platinum Jewelry</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Most durable precious metal</li>
                    <li>• Clean with mild soap solution</li>
                    <li>• Professional polishing recommended</li>
                    <li>• Develops natural patina over time</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gemstone Care */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <h2 className="font-playfair text-3xl font-semibold mb-8">Gemstone Care</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <span className="text-2xl">💎</span>
                      Diamonds
                    </h3>
                    <p className="text-gray-700 text-sm">Most durable gemstone. Clean with warm soapy water and soft brush. Professional cleaning recommended every 6 months.</p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <span className="text-2xl">💚</span>
                      Emeralds
                    </h3>
                    <p className="text-gray-700 text-sm">Delicate stone. Avoid ultrasonic cleaners. Clean gently with soft cloth and mild soap. Store separately.</p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <span className="text-2xl">❤️</span>
                      Rubies & Sapphires
                    </h3>
                    <p className="text-gray-700 text-sm">Very durable. Can be cleaned with warm soapy water. Safe for ultrasonic cleaning unless fracture-filled.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <span className="text-2xl">🟣</span>
                      Amethyst & Quartz
                    </h3>
                    <p className="text-gray-700 text-sm">Avoid prolonged sun exposure which can fade color. Clean with mild soap and water.</p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <span className="text-2xl">🤍</span>
                      Pearls
                    </h3>
                    <p className="text-gray-700 text-sm">Very delicate. Wipe with damp cloth only. Avoid chemicals, perfumes, and hairspray. Store in breathable pouches.</p>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <span className="text-2xl">🔷</span>
                      Opals & Turquoise
                    </h3>
                    <p className="text-gray-700 text-sm">Porous stones. Avoid water and chemicals. Clean with dry soft cloth only. Store in humid environment.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warning Signs */}
          <Card className="border-0 bg-gradient-to-r from-amber-100 to-orange-100 shadow-xl">
            <CardContent className="p-8">
              <h2 className="font-playfair text-3xl font-semibold mb-6 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
                When to Seek Professional Help
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Warning Signs</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Loose or missing stones</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Bent or damaged prongs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Worn or damaged clasps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Scratches on precious metals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 mt-1">⚠️</span>
                      <span>Discoloration or tarnishing</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Professional Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Annual professional cleaning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Prong tightening and inspection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Rhodium plating for white gold</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Stone replacement and repair</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Resizing and adjustments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="border-0 bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-xl">
            <CardContent className="p-8 text-center">
              <Gem className="h-12 w-12 mx-auto mb-4" />
              <h2 className="font-playfair text-2xl font-semibold mb-4">Expert Care Services</h2>
              <p className="text-rose-100 mb-6 leading-relaxed">
                Our certified jewelers provide professional cleaning, inspection, and repair services. 
                Schedule your complimentary jewelry consultation today.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-rose-600 hover:bg-rose-50">
                  Schedule Consultation
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}