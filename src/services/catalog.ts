import { IProduct } from "@/types";

export const getProducts = async (category?: string): Promise<IProduct[]> => {
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products?limit=100";

  const response = await fetch(url);
  const data = await response.json();
  return data.products || [];
};

export const getCategories = async (): Promise<string[]> => {
  const response = await fetch("https://dummyjson.com/products/category-list");
  const data = await response.json();
  return data || [];
};
