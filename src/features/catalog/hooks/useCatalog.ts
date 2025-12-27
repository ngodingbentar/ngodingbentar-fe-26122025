import { useState, useEffect, useMemo } from "react";
import { IProduct } from "@/types";

interface UseCatalogProps {
  searchQuery: string;
}

export const useCatalog = ({ searchQuery }: UseCatalogProps) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    const lowerQuery = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery)
    );
  }, [products, searchQuery]);

  // Pagination calculations
  const totalPages = useMemo(() => {
    return Math.ceil(filteredProducts.length / itemsPerPage);
  }, [filteredProducts, itemsPerPage]);

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredProducts, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const url = selectedCategory
          ? `https://dummyjson.com/products/category/${selectedCategory}`
          : "https://dummyjson.com/products?limit=100";

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

  return {
    loading,
    products: filteredProducts, // Return filtered products as the main list for counting
    paginatedProducts,
    totalPages,
    currentPage,
    selectedCategory,
    setSelectedCategory,
    handlePageChange,
  };
};
