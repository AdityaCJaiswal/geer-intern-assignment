'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Gem, ArrowLeft, Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    toast.success('Thank you for your message! We\'ll get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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

        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 text-rose-600 mb-6">
            <MessageCircle className="h-10 w-10" />
          </div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you find the perfect piece or answer any questions about our jewelry collection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h2 className="font-playfair text-2xl font-semibold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-700">+91 8177984057</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-700">hello@lumierejewelry.com</p>
                      <p className="text-gray-700">support@lumierejewelry.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-700">123 Diamond District</p>
                      <p className="text-gray-700">Nagpur - 440002</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Hours</h3>
                      <p className="text-gray-700">Mon-Fri: 9AM-7PM IST</p>
                      <p className="text-gray-700">Sat-Sun: 10AM-6PM IST</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-rose-50 to-amber-50 shadow-xl">
              <CardContent className="p-8">
                <h3 className="font-playfair text-xl font-semibold mb-4">Why Choose Lumière?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 mt-1">•</span>
                    <span>Expert jewelry consultations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 mt-1">•</span>
                    <span>Lifetime warranty and service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 mt-1">•</span>
                    <span>Certified gemstones and metals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 mt-1">•</span>
                    <span>Custom design services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 mt-1">•</span>
                    <span>30-day return guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h2 className="font-playfair text-2xl font-semibold mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="border-rose-200 focus:border-rose-400"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        className="border-rose-200 focus:border-rose-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        className="border-rose-200 focus:border-rose-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger className="border-rose-200 focus:border-rose-400">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="product">Product Question</SelectItem>
                          <SelectItem value="sizing">Sizing Help</SelectItem>
                          <SelectItem value="custom">Custom Design</SelectItem>
                          <SelectItem value="repair">Repair Service</SelectItem>
                          <SelectItem value="return">Return/Exchange</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      className="border-rose-200 focus:border-rose-400"
                      required
                    />
                  </div>

                  <Separator className="bg-rose-100" />

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit"
                      className="flex-1 gap-2 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      className="flex-1 border-rose-200 hover:bg-rose-50"
                      onClick={() => setFormData({ name: '', email: '', phone: '', subject: '', message: '' })}
                    >
                      Clear Form
                    </Button>
                  </div>

                  <p className="text-sm text-gray-600 text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card className="border-0 bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
                <p className="text-rose-100">Quick answers to common questions</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Do you offer custom jewelry design?</h3>
                    <p className="text-rose-100 text-sm">Yes! Our master jewelers can create custom pieces tailored to your vision and budget.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">What is your return policy?</h3>
                    <p className="text-rose-100 text-sm">We offer a 30-day return policy with free return shipping on all orders.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Do you provide certificates for diamonds?</h3>
                    <p className="text-rose-100 text-sm">All diamonds over 0.5 carats come with GIA or similar certification.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">How long does shipping take?</h3>
                    <p className="text-rose-100 text-sm">Standard shipping is 3-5 business days. Express options available.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Do you offer financing?</h3>
                    <p className="text-rose-100 text-sm">Yes, we offer flexible financing options with approved credit.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Can I schedule an appointment?</h3>
                    <p className="text-rose-100 text-sm">Absolutely! Call us to schedule a private consultation at our showroom.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}