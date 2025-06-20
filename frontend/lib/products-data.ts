import { Product } from '@/types/product';

export const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Diamond Solitaire Engagement Ring',
    price: 2899.99,
    imageUrl: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Rings',
    description: 'Exquisite 1.5 carat diamond solitaire ring set in 18k white gold. Features a brilliant round-cut diamond with exceptional clarity and fire. Perfect for engagements and special occasions.',
    inStock: true,
    rating: 4.9,
    reviews: 247
  },
  {
    id: '2',
    name: 'Pearl Drop Earrings',
    price: 599.99,
    imageUrl: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Earrings',
    description: 'Elegant freshwater pearl drop earrings with 14k gold settings. These timeless pieces feature lustrous pearls that catch the light beautifully, perfect for both formal and casual wear.',
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: '3',
    name: 'Vintage Gold Chain Necklace',
    price: 1299.99,
    imageUrl: 'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Necklaces',
    description: 'Handcrafted vintage-inspired gold chain necklace in 18k yellow gold. Features intricate link design with antique finish. A statement piece that adds elegance to any outfit.',
    inStock: false,
    rating: 4.7,
    reviews: 89
  },
  {
    id: '4',
    name: 'Sapphire Tennis Bracelet',
    price: 1899.99,
    imageUrl: 'https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bracelets',
    description: 'Stunning sapphire tennis bracelet featuring 20 brilliant blue sapphires set in platinum. Each stone is carefully selected for color consistency and brilliance.',
    inStock: true,
    rating: 4.9,
    reviews: 134
  },
  {
    id: '5',
    name: 'Rose Gold Wedding Band',
    price: 899.99,
    imageUrl: 'https://images.pexels.com/photos/1454174/pexels-photo-1454174.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Rings',
    description: 'Classic rose gold wedding band in 14k gold with brushed finish. Comfort fit design ensures all-day wearability. Timeless elegance for your special day.',
    inStock: true,
    rating: 4.6,
    reviews: 203
  },
  {
    id: '6',
    name: 'Emerald Pendant Necklace',
    price: 1599.99,
    imageUrl: 'https://images.pexels.com/photos/1454175/pexels-photo-1454175.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Necklaces',
    description: 'Breathtaking emerald pendant featuring a 2-carat natural emerald surrounded by diamonds. Set in 18k white gold with an 18-inch chain included.',
    inStock: true,
    rating: 4.8,
    reviews: 67
  },
  {
    id: '7',
    name: 'Diamond Stud Earrings',
    price: 1199.99,
    imageUrl: 'https://images.pexels.com/photos/1454176/pexels-photo-1454176.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Earrings',
    description: 'Classic diamond stud earrings featuring 1-carat total weight of brilliant round diamonds. Set in 14k white gold with secure screw-back settings.',
    inStock: true,
    rating: 4.9,
    reviews: 312
  },
  {
    id: '8',
    name: 'Art Deco Brooch',
    price: 799.99,
    imageUrl: 'https://images.pexels.com/photos/1454177/pexels-photo-1454177.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Brooches',
    description: 'Vintage-inspired Art Deco brooch with geometric design. Features diamonds and onyx in platinum setting. A unique piece that adds sophistication to any ensemble.',
    inStock: true,
    rating: 4.5,
    reviews: 45
  }
];

// In-memory storage for demo purposes
let products: Product[] = [...initialProducts];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function createProduct(productData: Omit<Product, 'id'>): Product {
  const newProduct: Product = {
    ...productData,
    id: Math.random().toString(36).substr(2, 9)
  };
  products.push(newProduct);
  return newProduct;
}

export function deleteProduct(id: string): boolean {
  const initialLength = products.length;
  products = products.filter(product => product.id !== id);
  return products.length < initialLength;
}

export function searchProducts(query: string, category?: string): Product[] {
  let filtered = products;
  
  if (category && category !== 'All') {
    filtered = filtered.filter(product => product.category === category);
  }
  
  if (query) {
    const lowercaseQuery = query.toLowerCase();
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
    );
  }
  
  return filtered;
}

export function getCategories(): string[] {
  const categories = Array.from(new Set(products.map(product => product.category)));
  return ['All', ...categories.sort()];
}