export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CreateProductRequest {
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  description: string;
  inStock?: boolean;
  rating?: number;
  reviews?: number;
}