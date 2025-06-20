'use client';

import { Product } from '@/types/product';

export interface CartItem extends Product {
  quantity: number;
}

class CartStore {
  private items: CartItem[] = [];
  private listeners: (() => void)[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.loadFromStorage();
    }
  }

  private loadFromStorage() {
    try {
      const stored = localStorage.getItem('lumiere-cart');
      if (stored) {
        this.items = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Failed to load cart from storage:', error);
    }
  }

  private saveToStorage() {
    try {
      localStorage.setItem('lumiere-cart', JSON.stringify(this.items));
    } catch (error) {
      console.error('Failed to save cart to storage:', error);
    }
  }

  private notify() {
    this.listeners.forEach(listener => listener());
  }

  addItem(product: Product) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
    
    this.saveToStorage();
    this.notify();
  }

  removeItem(productId: string) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveToStorage();
    this.notify();
  }

  updateQuantity(productId: string, quantity: number) {
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }

    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.saveToStorage();
      this.notify();
    }
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  getItemCount(): number {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  clearCart() {
    this.items = [];
    this.saveToStorage();
    this.notify();
  }

  subscribe(listener: () => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
}

export const cartStore = new CartStore();