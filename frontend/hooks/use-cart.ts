'use client';

import { useState, useEffect } from 'react';
import { cartStore, CartItem } from '@/lib/cart-store';
import { Product } from '@/types/product';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const updateCart = () => {
      setItems(cartStore.getItems());
      setItemCount(cartStore.getItemCount());
      setTotalPrice(cartStore.getTotalPrice());
    };

    updateCart();
    const unsubscribe = cartStore.subscribe(updateCart);

    return unsubscribe;
  }, []);

  const addItem = (product: Product) => {
    cartStore.addItem(product);
  };

  const removeItem = (productId: string) => {
    cartStore.removeItem(productId);
  };

  const updateQuantity = (productId: string, quantity: number) => {
    cartStore.updateQuantity(productId, quantity);
  };

  const clearCart = () => {
    cartStore.clearCart();
  };

  return {
    items,
    itemCount,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  };
}