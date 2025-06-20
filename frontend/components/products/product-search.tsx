'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Gem } from 'lucide-react';

interface ProductSearchProps {
  onSearch: (query: string, category: string) => void;
  categories: string[];
  initialSearch?: string;
  initialCategory?: string;
}

export function ProductSearch({ 
  onSearch, 
  categories, 
  initialSearch = '', 
  initialCategory = 'All' 
}: ProductSearchProps) {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const handleSearch = () => {
    onSearch(searchQuery, selectedCategory);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onSearch(searchQuery, category);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-8 bg-gradient-to-r from-white/90 to-rose-50/90 backdrop-blur-sm rounded-2xl border border-rose-100 shadow-xl">
      <div className="flex-1 relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-rose-400 h-5 w-5" />
        <Input
          placeholder="Search for rings, necklaces, earrings..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-12 h-12 bg-white/80 border-rose-200 focus:border-rose-400 text-lg"
        />
      </div>
      
      <div className="flex gap-3">
        <Select value={selectedCategory} onValueChange={handleCategoryChange}>
          <SelectTrigger className="w-[200px] h-12 bg-white/80 border-rose-200 focus:border-rose-400">
            <Gem className="h-4 w-4 mr-2 text-rose-500" />
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Button 
          onClick={handleSearch} 
          className="px-8 h-12 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800"
        >
          Search
        </Button>
      </div>
    </div>
  );
}