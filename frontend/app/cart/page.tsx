'use client';

import { useCart } from '@/hooks/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Gem, ArrowLeft, Plus, Minus, Trash2, ShoppingBag, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'sonner';

export default function CartPage() {
  const { items, itemCount, totalPrice, updateQuantity, removeItem, clearCart } = useCart();

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(productId);
      toast.success('Item removed from cart');
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleRemoveItem = (productId: string, productName: string) => {
    removeItem(productId);
    toast.success(`${productName} removed from cart`);
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Cart cleared');
  };

  const handleCheckout = () => {
    toast.success('Checkout functionality would be implemented here');
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link href="/products">
          <Button variant="outline" className="mb-8 gap-2 border-rose-200 hover:bg-rose-50">
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Button>
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shopping Cart
          </h1>
          <p className="text-xl text-gray-600">
            {itemCount === 0 ? 'Your cart is empty' : `${itemCount} item${itemCount !== 1 ? 's' : ''} in your cart`}
          </p>
        </div>

        {items.length === 0 ? (
          /* Empty Cart */
          <div className="text-center py-20">
            <ShoppingBag className="h-24 w-24 text-rose-300 mx-auto mb-6" />
            <h2 className="font-playfair text-3xl font-semibold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Discover our exquisite collection of handcrafted jewelry and find the perfect piece for you.
            </p>
            <Link href="/products">
              <Button className="gap-2 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800">
                <Heart className="h-4 w-4" />
                Explore Collection
              </Button>
            </Link>
          </div>
        ) : (
          /* Cart Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-playfair text-2xl font-semibold">Cart Items</h2>
                <Button 
                  variant="outline" 
                  onClick={handleClearCart}
                  className="gap-2 border-rose-200 hover:bg-rose-50 text-rose-600"
                >
                  <Trash2 className="h-4 w-4" />
                  Clear Cart
                </Button>
              </div>

              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 relative bg-gradient-to-br from-rose-50 to-amber-50 rounded-lg overflow-hidden">
                          <Image
                            src={item.imageUrl}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-3">
                        <div>
                          <Link href={`/products/${item.id}`}>
                            <h3 className="font-playfair text-xl font-semibold hover:text-rose-600 transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-gray-600 text-sm">{item.category}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-gray-900">
                            ${item.price.toLocaleString()}
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="h-8 w-8 p-0 border-rose-200 hover:bg-rose-50"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0 border-rose-200 hover:bg-rose-50"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleRemoveItem(item.id, item.name)}
                            className="text-rose-600 hover:text-rose-700 hover:bg-rose-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <span className="text-lg font-semibold text-gray-900">
                            Subtotal: ${(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-0 bg-gradient-to-br from-white/90 to-rose-50/50 backdrop-blur-sm shadow-xl">
                <CardContent className="p-8 space-y-6">
                  <h2 className="font-playfair text-2xl font-semibold">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Items ({itemCount})</span>
                      <span className="font-semibold">${totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-semibold text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-semibold">${(totalPrice * 0.08).toLocaleString()}</span>
                    </div>
                  </div>

                  <Separator className="bg-rose-100" />

                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>${(totalPrice * 1.08).toLocaleString()}</span>
                  </div>

                  <Button 
                    onClick={handleCheckout}
                    className="w-full h-12 text-lg bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800"
                  >
                    Proceed to Checkout
                  </Button>

                  <div className="text-center text-sm text-gray-600">
                    <p>Free shipping on all orders</p>
                    <p>30-day return policy</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}