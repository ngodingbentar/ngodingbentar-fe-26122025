"use client";

import { useEffect, useState, useMemo } from "react";
import { BookCard } from "./BookCard";
import SearchInput from "./SearchInput";
import EmptyState from "./EmptyState";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export const CatalogContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=12");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    const lowerQuery = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    );
  }, [products, searchQuery]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <SearchInput value={searchQuery} onChange={setSearchQuery} />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
          {filteredProducts.map((product) => (
            <BookCard
              key={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
              category={product.category}
              rating={product.rating}
              description={product.description}
            />
          ))}
        </div>
      ) : (
        <EmptyState query={searchQuery} />
      )}
    </div>
  );
};
