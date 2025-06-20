# Lumière Jewelry - E-commerce Website

A luxury jewelry e-commerce website built with Next.js, featuring an elegant design, shopping cart functionality, and comprehensive product management.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd geer-intern-assignment/frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 13.5.1** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript** - Type safety and better developer experience

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components built on Radix UI
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & consistent icon library
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Utility for merging Tailwind classes

### Fonts
- **Playfair Display** - Elegant serif font for headings
- **Inter** - Modern sans-serif font for body text

### State Management
- **Custom Cart Store** - Client-side cart management with localStorage
- **React Hooks** - useState, useEffect for component state

### Data & API
- **In-memory data store** - Mock product data for demonstration
- **Next.js API Routes** - RESTful API endpoints for products
- **JSON** - Data format for product information

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
geer-intern-assignment/
├── frontend/   
│   ├── app/                          # Next.js App Router pages
│   │   ├── about/                    # About us page
│   │   ├── api/                      # API routes
│   │   │   └── products/             # Product API endpoints
│   │   ├── care-instructions/        # Jewelry care guide
│   │   ├── cart/                     # Shopping cart page
│   │   ├── contact/                  # Contact form page
│   │   ├── products/                 # Product listing and details
│   │   ├── returns/                  # Return policy page
│   │   ├── size-guide/               # Sizing guide page
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout component
│   │   └── page.tsx                  # Homepage
│   ├── components/                   # Reusable React components
│   │   ├── products/                 # Product-specific components
│   │   │   ├── product-card.tsx      # Individual product card
│   │   │   ├── product-grid.tsx      # Product grid layout
│   │   │   └── product-search.tsx    # Search and filter component
│   │   └── ui/                       # shadcn/ui components
│   ├── hooks/                        # Custom React hooks
│   │   └── use-cart.ts               # Shopping cart hook
│   ├── lib/                          # Utility functions and data
│   │   ├── cart-store.ts             # Cart state management
│   │   ├── products-data.ts          # Mock product data
│   │   └── utils.ts                  # Utility functions
│   ├── types/                        # TypeScript type definitions
│   │   └── product.ts                # Product interface
│   └── public/                       # Static assets           
└─── readme.md
```

## 🎨 Design System

### Color Palette
- **Primary**: Rose (rose-600, rose-700)
- **Secondary**: Amber (amber-500, amber-600)
- **Neutral**: Gray scale for text and backgrounds
- **Success**: Green for positive actions
- **Error**: Red for warnings and errors

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Weights**: 400 (regular), 600 (semibold), 700 (bold)

### Spacing
- **Base unit**: 8px
- **Consistent spacing scale**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

## 🛍️ Features

### Core Functionality
- ✅ **Product Catalog** - Browse jewelry collections
- ✅ **Product Details** - Detailed product information
- ✅ **Search & Filter** - Find products by name, category
- ✅ **Shopping Cart** - Add, remove, update quantities
- ✅ **Responsive Design** - Mobile-first approach

### Pages
- ✅ **Homepage** - Hero section, featured categories, company values
- ✅ **Products** - Product listing with search and filters
- ✅ **Product Details** - Individual product pages
- ✅ **Shopping Cart** - Cart management and checkout preview
- ✅ **About Us** - Company story and team information
- ✅ **Contact** - Contact form and business information
- ✅ **Care Instructions** - Jewelry maintenance guide
- ✅ **Size Guide** - Sizing information for rings, bracelets, necklaces
- ✅ **Returns** - Return and exchange policy

### User Experience
- ✅ **Toast Notifications** - User feedback for actions
- ✅ **Loading States** - Skeleton loaders and spinners
- ✅ **Error Handling** - Graceful error messages
- ✅ **Accessibility** - ARIA labels and keyboard navigation
- ✅ **SEO Optimized** - Meta tags and semantic HTML

## 📝 API Endpoints

### Products API
- `GET /api/products` - Get all products with optional search/filter
- `GET /api/products/[id]` - Get single product by ID
- `POST /api/products` - Create new product
- `DELETE /api/products/[id]` - Delete product by ID

### Query Parameters
- `search` - Search products by name/description
- `category` - Filter by product category

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality. The app uses in-memory data storage for demonstration purposes.

### Next.js Configuration
- **Image Optimization**: Disabled for static export compatibility
- **ESLint**: Configured to ignore build warnings
- **Output**: Static export ready

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🎯 Notes & Assumptions

### Data Storage
- **Mock Data**: Uses in-memory storage for product data
- **Cart Persistence**: Shopping cart data persists in localStorage
- **No Database**: No backend database required for demo

### Images
- **Stock Photos**: Uses Pexels images for product photos
- **Placeholder Content**: All product descriptions are sample content
- **No Image Upload**: No functionality for uploading custom images

### Authentication
- **No User Auth**: No user registration or login system
- **Guest Checkout**: Cart functionality works without user accounts

### Payment Processing
- **No Payment Gateway**: Checkout is simulated, no real payment processing
- **Demo Purpose**: Built for demonstration and portfolio use

### Performance
- **Static Generation**: Optimized for static site generation
- **Image Optimization**: Disabled for compatibility
- **Bundle Size**: Optimized with tree shaking and code splitting

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **JavaScript Required**: App requires JavaScript to function

### Accessibility
- **WCAG 2.1**: Follows accessibility guidelines
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and semantic HTML
- **Color Contrast**: Meets AA contrast requirements

## 🚀 Deployment

The application is configured for static export and can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **Any static hosting service**

### Build Command
```bash
npm run build
```

### Output
Static files will be generated in the `out/` directory (if using static export).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for demonstration purposes. Please check with the repository owner for licensing information.

---

**Built with ❤️ for luxury jewelry enthusiasts**