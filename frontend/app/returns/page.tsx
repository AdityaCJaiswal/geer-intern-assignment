'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Gem, ArrowLeft, RotateCcw, Shield, Clock, CheckCircle, XCircle, Package } from 'lucide-react';
import Link from 'next/link';

export default function ReturnsPage() {
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
            <RotateCcw className="h-10 w-10" />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Returns & Exchanges
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your satisfaction is our priority. Learn about our flexible return and exchange policy.
          </p>
        </div>

        <div className="space-y-12">
          {/* Return Policy Overview */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <h2 className="font-playfair text-3xl font-semibold mb-6 flex items-center gap-3">
                <Shield className="h-8 w-8 text-rose-600" />
                Our Return Policy
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">30-Day Returns</h3>
                  <p className="text-gray-700 text-sm">Full refund within 30 days of purchase</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                  <Package className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Free Returns</h3>
                  <p className="text-gray-700 text-sm">Complimentary return shipping on all orders</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
                  <RotateCcw className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Easy Exchanges</h3>
                  <p className="text-gray-700 text-sm">Hassle-free size and style exchanges</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-amber-50 p-6 rounded-xl">
                <h3 className="font-semibold text-lg mb-4">Return Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Items must be in original condition with all tags and packaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Include original receipt or order confirmation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Return within 30 days of delivery date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Items must not show signs of wear or damage</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Return Process */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <h2 className="font-playfair text-3xl font-semibold mb-8">How to Return Your Item</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Initiate Your Return</h3>
                    <p className="text-gray-700 mb-3">Contact our customer service team or use our online return portal to start your return process.</p>
                    <Button variant="outline" className="border-rose-200 hover:bg-rose-50">
                      Start Return Process
                    </Button>
                  </div>
                </div>

                <Separator className="bg-rose-100" />

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Package Your Item</h3>
                    <p className="text-gray-700">Carefully package your jewelry in the original box with all accessories, certificates, and documentation.</p>
                  </div>
                </div>

                <Separator className="bg-rose-100" />

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Ship Your Return</h3>
                    <p className="text-gray-700">Use the prepaid return label we provide. Drop off at any authorized shipping location or schedule a pickup.</p>
                  </div>
                </div>

                <Separator className="bg-rose-100" />

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Receive Your Refund</h3>
                    <p className="text-gray-700">Once we receive and inspect your return, we'll process your refund within 3-5 business days.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exchange Policy */}
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
            <CardContent className="p-8">
              <h2 className="font-playfair text-3xl font-semibold mb-6">Exchange Policy</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">What Can Be Exchanged</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Ring sizes (within 2 sizes up or down)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Bracelet lengths</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Necklace lengths</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Style variations of the same piece</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Exchange Timeline</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                      <div className="font-semibold">Standard Exchanges</div>
                      <div className="text-sm text-gray-700">5-7 business days processing</div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg">
                      <div className="font-semibold">Custom Sizing</div>
                      <div className="text-sm text-gray-700">10-14 business days processing</div>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg">
                      <div className="font-semibold">Special Orders</div>
                      <div className="text-sm text-gray-700">2-4 weeks processing</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Non-Returnable Items */}
          <Card className="border-0 bg-gradient-to-r from-amber-100 to-orange-100 shadow-xl">
            <CardContent className="p-8">
              <h2 className="font-playfair text-3xl font-semibold mb-6 flex items-center gap-3">
                <XCircle className="h-8 w-8 text-amber-600" />
                Non-Returnable Items
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Items We Cannot Accept</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Custom or personalized jewelry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Engraved items</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Pierced earrings (for hygiene reasons)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Items damaged by customer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Items returned after 30 days</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Special Circumstances</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>Wedding Sets:</strong> Must be returned as a complete set. Individual pieces cannot be returned separately.
                    </p>
                    <p>
                      <strong>Sale Items:</strong> Final sale items are clearly marked and cannot be returned or exchanged.
                    </p>
                    <p>
                      <strong>Gift Purchases:</strong> Gifts can be returned by the recipient with gift receipt for store credit.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-0 bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-xl">
            <CardContent className="p-8 text-center">
              <Gem className="h-12 w-12 mx-auto mb-4" />
              <h2 className="font-playfair text-2xl font-semibold mb-4">Need Help with Your Return?</h2>
              <p className="text-rose-100 mb-6 leading-relaxed">
                Our customer service team is here to assist you with any questions about returns, exchanges, or refunds. 
                We're committed to making your experience as smooth as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-rose-600 hover:bg-rose-50">
                    Contact Customer Service
                  </Button>
                </Link>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Start Return Process
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}