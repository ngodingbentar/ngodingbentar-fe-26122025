"use client";

import { useSearchParams } from "next/navigation";
import { BookCard } from "./BookCard";
import EmptyState from "@/components/ui/EmptyState";
import { CategoryList } from "./CategoryList";
import { Pagination } from "@/components/ui/Pagination";
import { useCatalog } from "../hooks/useCatalog";

const CatalogContent = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const {
    loading,
    products,
    paginatedProducts,
    totalPages,
    currentPage,
    selectedCategory,
    setSelectedCategory,
    handlePageChange,
  } = useCatalog({ searchQuery });

  return (
    <div className="space-y-8">
      <div className="">
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : products && products.length > 0 ? (
        <>
          <div>Menampilkan {products.length} Produk</div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
            {paginatedProducts.map((product) => (
              <BookCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <EmptyState query={searchQuery || (selectedCategory ? `category: ${selectedCategory}` : "")} />
      )}
    </div>
  );
};

export default CatalogContent;