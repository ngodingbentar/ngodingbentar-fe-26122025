"use client";

import { useEffect, useState, useRef } from "react";
import { CategoryPill } from "./CategoryPill";

interface CategoryListProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryList = ({
  selectedCategory,
  onSelectCategory,
}: CategoryListProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category-list"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  if (!categories || categories.length === 0) return null;

  return (
    <div className="relative w-full mb-8 group1s">
      <div
        ref={scrollContainerRef}
        className="grid grid-rows-2 grid-flow-col gap-3 overflow-x-auto pb-4 scrollbar-hide py-2 px-1"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <CategoryPill
          label="Semua Kategori"
          isActive={selectedCategory === ""}
          onClick={() => onSelectCategory("")}
        />
        {categories.map((category) => (
          <CategoryPill
            key={category}
            label={category
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
            isActive={selectedCategory === category}
            onClick={() => onSelectCategory(category)}
          />
        ))}
      </div>

      <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  );
};
