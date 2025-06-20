'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Gem, Shield, Award } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'sonner';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`);
        const data = await response.json();
        
        if (data.success) {
          setProduct(data.data);
        } else {
          toast.error('Jewelry piece not found');
        }
      } catch (error) {
        toast.error('Failed to fetch jewelry details');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product?.inStock) {
      toast.error('This piece is currently unavailable');
      return;
    }
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = () => {
    toast.success(`${product?.name} added to wishlist!`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-md border-b border-rose-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2">
                <Gem className="h-8 w-8 text-rose-600" />
                <span className="font-playfair text-2xl font-bold text-gray-900">Lumière</span>
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-rose-100 rounded w-32"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="aspect-square bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl"></div>
              <div className="space-y-6">
                <div className="h-8 bg-rose-100 rounded w-3/4"></div>
                <div className="h-4 bg-rose-100 rounded w-1/2"></div>
                <div className="h-6 bg-rose-100 rounded w-1/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-rose-100 rounded w-full"></div>
                  <div className="h-4 bg-rose-100 rounded w-full"></div>
                  <div className="h-4 bg-rose-100 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <Gem className="h-16 w-16 text-rose-300 mx-auto mb-4" />
          <h1 className="font-playfair text-3xl font-bold text-gray-900 mb-4">Jewelry Not Found</h1>
          <p className="text-gray-600 mb-6">The piece you're looking for doesn't exist in our collection.</p>
          <Link href="/products">
            <Button className="gap-2 bg-gradient-to-r from-rose-600 to-rose-700">
              <ArrowLeft className="h-4 w-4" />
              Back to Collection
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/products">
          <Button variant="outline" className="mb-8 gap-2 border-rose-200 hover:bg-rose-50">
            <ArrowLeft className="h-4 w-4" />
            Back to Collection
          </Button>
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <div className="space-y-6">
            <Card className="overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-2xl">
              <div className="aspect-square relative bg-gradient-to-br from-rose-50 to-amber-50">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-rose-100 text-rose-700 border-0">
                  {product.category}
                </Badge>
                <Badge variant={product.inStock ? "default" : "destructive"} className="border-0">
                  {product.inStock ? 'Available' : 'Sold Out'}
                </Badge>
              </div>
              
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {product.name}
              </h1>

              {product.rating > 0 && (
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < Math.floor(product.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xl font-semibold">{product.rating}</span>
                  <span className="text-gray-600">
                    ({product.reviews} reviews)
                  </span>
                </div>
              )}

              <div className="text-5xl font-bold text-gray-900 mb-8">
                ${product.price.toLocaleString()}
              </div>
            </div>

            <Separator className="bg-rose-100" />

            <div>
              <h3 className="font-playfair text-2xl font-semibold mb-4">Description</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <Separator className="bg-rose-100" />

            {/* Action Buttons */}
            <div className="space-y-6">
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="w-full gap-3 h-14 text-lg bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 disabled:from-gray-400 disabled:to-gray-500"
                size="lg"
              >
                <ShoppingCart className="h-6 w-6" />
                {product.inStock ? 'Add to Cart' : 'Currently Unavailable'}
              </Button>

              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="flex-1 gap-2 h-12 border-rose-200 hover:bg-rose-50"
                  onClick={handleAddToWishlist}
                >
                  <Heart className="h-5 w-5" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" className="flex-1 gap-2 h-12 border-rose-200 hover:bg-rose-50">
                  <Share2 className="h-5 w-5" />
                  Share
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <Card className="p-8 bg-gradient-to-br from-white/90 to-rose-50/50 backdrop-blur-sm border-rose-100">
              <h3 className="font-playfair text-xl font-semibold mb-6">Product Details</h3>
              <div className="grid grid-cols-2 gap-6 text-base">
                <div className="flex items-center gap-3">
                  <Gem className="h-5 w-5 text-rose-500" />
                  <div>
                    <span className="text-gray-600">Category:</span>
                    <span className="ml-2 font-semibold">{product.category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-emerald-500" />
                  <div>
                    <span className="text-gray-600">Availability:</span>
                    <span className="ml-2 font-semibold">
                      {product.inStock ? 'In Stock' : 'Sold Out'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-amber-500" />
                  <div>
                    <span className="text-gray-600">Rating:</span>
                    <span className="ml-2 font-semibold">{product.rating}/5</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-blue-500" />
                  <div>
                    <span className="text-gray-600">Reviews:</span>
                    <span className="ml-2 font-semibold">{product.reviews}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Guarantee Section */}
            <Card className="p-8 bg-gradient-to-r from-rose-600 to-amber-600 text-white border-0">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="h-8 w-8" />
                <h3 className="font-playfair text-2xl font-semibold">Lumière Guarantee</h3>
              </div>
              <p className="text-rose-100 leading-relaxed">
                Every piece comes with our lifetime guarantee including free cleaning, inspection, 
                and minor repairs. We stand behind the quality and craftsmanship of every jewelry piece.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}