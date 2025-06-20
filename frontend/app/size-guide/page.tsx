'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Gem, ArrowLeft, Ruler, Info, Download } from 'lucide-react';
import Link from 'next/link';

export default function SizeGuidePage() {
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
            <Ruler className="h-10 w-10" />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Size Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find your perfect fit with our comprehensive sizing guide for rings, bracelets, and necklaces.
          </p>
        </div>

        <div className="space-y-12">
          {/* Ring Sizing */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <h2 className="font-playfair text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-4xl">💍</span>
                Ring Sizing
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">How to Measure Your Ring Size</h3>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                      <span>Wrap a piece of string or paper around your finger</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                      <span>Mark where the string or paper overlaps</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                      <span>Measure the length with a ruler in millimeters</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                      <span>Use the chart below to find your size</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Ring Size Chart</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between font-semibold border-b border-rose-200 pb-1">
                        <span>US Size</span>
                        <span>Circumference (mm)</span>
                      </div>
                      <div className="flex justify-between"><span>5</span><span>49.3</span></div>
                      <div className="flex justify-between"><span>5.5</span><span>51.2</span></div>
                      <div className="flex justify-between"><span>6</span><span>51.9</span></div>
                      <div className="flex justify-between"><span>6.5</span><span>52.8</span></div>
                      <div className="flex justify-between"><span>7</span><span>54.4</span></div>
                      <div className="flex justify-between"><span>7.5</span><span>55.7</span></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between font-semibold border-b border-rose-200 pb-1">
                        <span>US Size</span>
                        <span>Circumference (mm)</span>
                      </div>
                      <div className="flex justify-between"><span>8</span><span>57.0</span></div>
                      <div className="flex justify-between"><span>8.5</span><span>58.3</span></div>
                      <div className="flex justify-between"><span>9</span><span>59.5</span></div>
                      <div className="flex justify-between"><span>9.5</span><span>60.8</span></div>
                      <div className="flex justify-between"><span>10</span><span>62.1</span></div>
                      <div className="flex justify-between"><span>10.5</span><span>63.4</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bracelet Sizing */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <h2 className="font-playfair text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-4xl">✨</span>
                Bracelet Sizing
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Measuring Your Wrist</h3>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                      <span>Use a flexible measuring tape or string</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                      <span>Wrap around your wrist where you'd wear the bracelet</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                      <span>Add 0.5-1 inch for comfortable fit</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Bracelet Size Guide</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between font-semibold border-b border-rose-200 pb-1">
                      <span>Wrist Size</span>
                      <span>Bracelet Length</span>
                    </div>
                    <div className="flex justify-between"><span>6.0" - 6.5"</span><span>7.0"</span></div>
                    <div className="flex justify-between"><span>6.5" - 7.0"</span><span>7.5"</span></div>
                    <div className="flex justify-between"><span>7.0" - 7.5"</span><span>8.0"</span></div>
                    <div className="flex justify-between"><span>7.5" - 8.0"</span><span>8.5"</span></div>
                    <div className="flex justify-between"><span>8.0" - 8.5"</span><span>9.0"</span></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Necklace Sizing */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <h2 className="font-playfair text-3xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-4xl">📿</span>
                Necklace Lengths
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Standard Necklace Lengths</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-rose-50 to-amber-50 rounded-lg">
                      <span className="font-semibold">Choker</span>
                      <span>14" - 16"</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-rose-50 to-amber-50 rounded-lg">
                      <span className="font-semibold">Princess</span>
                      <span>17" - 19"</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-rose-50 to-amber-50 rounded-lg">
                      <span className="font-semibold">Matinee</span>
                      <span>20" - 24"</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-rose-50 to-amber-50 rounded-lg">
                      <span className="font-semibold">Opera</span>
                      <span>28" - 34"</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gradient-to-r from-rose-50 to-amber-50 rounded-lg">
                      <span className="font-semibold">Rope</span>
                      <span>35"+ </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Style Guide</h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <span className="font-semibold">Choker (14"-16"):</span>
                      <p className="text-sm">Sits at the base of the neck, perfect for off-shoulder tops</p>
                    </div>
                    <div>
                      <span className="font-semibold">Princess (17"-19"):</span>
                      <p className="text-sm">Most popular length, works with most necklines</p>
                    </div>
                    <div>
                      <span className="font-semibold">Matinee (20"-24"):</span>
                      <p className="text-sm">Falls at or below the collarbone, great for business attire</p>
                    </div>
                    <div>
                      <span className="font-semibold">Opera (28"-34"):</span>
                      <p className="text-sm">Dramatic length, perfect for evening wear</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips and Contact */}
          <Card className="border-0 bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-xl">
            <CardContent className="p-8 text-center">
              <Info className="h-12 w-12 mx-auto mb-4" />
              <h2 className="font-playfair text-2xl font-semibold mb-4">Need Help?</h2>
              <p className="text-rose-100 mb-6 leading-relaxed">
                Still unsure about sizing? Our jewelry experts are here to help you find the perfect fit. 
                We also offer complimentary resizing within 30 days of purchase.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-rose-600 hover:bg-rose-50">
                    Contact Our Experts
                  </Button>
                </Link>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <Download className="h-4 w-4 mr-2" />
                  Download Size Guide PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}