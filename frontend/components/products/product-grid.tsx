'use client';

import { Product } from '@/types/product';
import { ProductCard } from './product-card';
import { Gem } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
  onAddToWishlist?: (product: Product) => void;
}

export function ProductGrid({ products, onAddToCart, onAddToWishlist }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="text-8xl mb-6">
          <Gem className="h-20 w-20 text-rose-300 mx-auto" />
        </div>
        <h3 className="font-playfair text-3xl font-semibold text-gray-900 mb-4">No jewelry found</h3>
        <p className="text-gray-600 text-center max-w-md leading-relaxed">
          We couldn't find any pieces matching your search criteria. Try adjusting your filters or explore our full collection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  );
}