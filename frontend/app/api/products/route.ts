import { NextRequest, NextResponse } from 'next/server';
import { getAllProducts, createProduct, searchProducts } from '@/lib/products-data';
import { CreateProductRequest } from '@/types/product';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';

    const products = query || category ? searchProducts(query, category) : getAllProducts();

    return NextResponse.json({
      success: true,
      data: products,
      count: products.length
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreateProductRequest = await request.json();
    
    // Validate required fields
    if (!body.name || !body.price || !body.imageUrl || !body.category) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, price, imageUrl, category' },
        { status: 400 }
      );
    }

    const productData = {
      name: body.name,
      price: body.price,
      imageUrl: body.imageUrl,
      category: body.category,
      description: body.description || '',
      inStock: body.inStock ?? true,
      rating: body.rating ?? 0,
      reviews: body.reviews ?? 0
    };

    const newProduct = createProduct(productData);

    return NextResponse.json({
      success: true,
      data: newProduct,
      message: 'Product created successfully'
    }, { status: 201 });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}