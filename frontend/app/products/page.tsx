'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { ProductGrid } from '@/components/products/product-grid';
import { ProductSearch } from '@/components/products/product-search';
import { Button } from '@/components/ui/button';
import { Gem, ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '@/hooks/use-cart';
import Link from 'next/link';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  
  const { addItem, itemCount } = useCart();

  // Fetch products and categories
  const fetchProducts = async (search?: string, category?: string) => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (category && category !== 'All') params.append('category', category);
      
      const response = await fetch(`/api/products?${params.toString()}`);
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.data);
      } else {
        toast.error('Failed to fetch jewelry collection');
      }
    } catch (error) {
      toast.error('Failed to fetch jewelry collection');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      
      if (data.success) {
        const allCategories = Array.from(new Set(data.data.map((p: Product) => p.category)));
        setCategories(['All', ...allCategories.sort()]);
      }
    } catch (error) {
      console.error('Failed to fetch categories');
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const handleSearch = (query: string, category: string) => {
    fetchProducts(query, category);
  };

  const handleAddToCart = (product: Product) => {
    if (!product.inStock) {
      toast.error('This piece is currently unavailable');
      return;
    }
    
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = (product: Product) => {
    setWishlistItems(prev => [...prev, product]);
    toast.success(`${product.name} added to wishlist!`);
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
            <div className="flex items-center gap-4">
              <Button variant="outline" className="gap-2 border-rose-200 hover:bg-rose-50">
                <Heart className="h-4 w-4" />
                Wishlist ({wishlistItems.length})
              </Button>
              <Link href="/cart">
                <Button variant="outline" className="gap-2 border-rose-200 hover:bg-rose-50">
                  <ShoppingBag className="h-4 w-4" />
                  Cart ({itemCount})
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-rose-600/10 to-amber-600/10 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link href="/" className="inline-flex items-center gap-2 text-rose-600 hover:text-rose-700 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Jewelry Collection
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our exquisite selection of handcrafted fine jewelry, featuring diamonds, 
              precious gemstones, and timeless designs that celebrate life's most precious moments.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Search Section */}
        <ProductSearch
          onSearch={handleSearch}
          categories={categories}
        />

        {/* Results Summary */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            {products.length} Exquisite Pieces
          </h2>
          <div className="text-sm text-gray-600">
            Handcrafted with precision and care
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-rose-100 rounded w-3/4"></div>
                  <div className="h-4 bg-rose-100 rounded w-1/2"></div>
                  <div className="h-6 bg-rose-100 rounded w-1/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ProductGrid 
            products={products} 
            onAddToCart={handleAddToCart}
            onAddToWishlist={handleAddToWishlist}
          />
        )}
      </div>
    </div>
  );
}