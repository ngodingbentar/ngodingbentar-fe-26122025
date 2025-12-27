"use client";

import { useEffect, useState, useMemo } from "react";
import { BookCard } from "./BookCard";
import SearchInput from "./SearchInput";
import EmptyState from "./EmptyState";
import { CategoryList } from "./CategoryList";
import { IProduct } from "@/types";

export const CatalogContainer = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url = selectedCategory
          ? `https://dummyjson.com/products/category/${selectedCategory}`
          : "https://dummyjson.com/products?limit=12";

        const response = await fetch(url);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    const lowerQuery = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    );
  }, [products, searchQuery]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4">
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
          {filteredProducts.map((product) => (
            <BookCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <EmptyState query={searchQuery || (selectedCategory ? `category: ${selectedCategory}` : "")} />
      )}
    </div>
  );
};
