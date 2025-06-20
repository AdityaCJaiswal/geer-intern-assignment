'use client';

import { Product } from '@/types/product';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, Heart, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onAddToWishlist }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <Link href={`/products/${product.id}`}>
          <div className="aspect-square relative bg-gradient-to-br from-rose-50 to-amber-50">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </Link>
        
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant={product.inStock ? "default" : "destructive"} className="text-xs bg-white/90 text-gray-800 border-0">
            {product.inStock ? 'Available' : 'Sold Out'}
          </Badge>
          <Badge variant="secondary" className="text-xs bg-rose-100/90 text-rose-700 border-0">
            {product.category}
          </Badge>
        </div>

        {product.rating > 0 && (
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-semibold text-gray-800">{product.rating}</span>
          </div>
        )}

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onAddToWishlist?.(product)}
          className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 hover:bg-white shadow-lg"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-3">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-playfair text-xl font-semibold leading-tight hover:text-rose-600 transition-colors duration-200 line-clamp-2">
              {product.name}
            </h3>
          </Link>
          
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-gray-900">
              ${product.price.toLocaleString()}
            </div>
            {product.reviews > 0 && (
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Gem className="h-3 w-3" />
                {product.reviews} reviews
              </div>
            )}
          </div>

          <Button
            onClick={() => onAddToCart?.(product)}
            disabled={!product.inStock}
            className="gap-2 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 disabled:from-gray-400 disabled:to-gray-500"
            size="sm"
          >
            <ShoppingCart className="h-4 w-4" />
            {product.inStock ? 'Add to Cart' : 'Sold Out'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}