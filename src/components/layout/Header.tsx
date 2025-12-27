"use client";

import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import SearchInput from "@/components/ui/SearchInput";
import { FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "");
  }, [searchParams]);

  const handleSearch = (term: string) => {
    setSearchQuery(term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-zinc-100 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl h-16 md:h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex-shrink-0">
          <h1 className="text-2xl font-black text-blue-600 flex items-center gap-2">
            <span className="text-4xl">B</span>
            <span className="hidden md:inline">buku</span>
          </h1>
        </Link>

        <div className="flex-1 max-w-2xl">
          <SearchInput
            value={searchQuery}
            onChange={handleSearch}
            className="w-full !mb-0"
            placeholder="Cari judul buku..."
          />
        </div>

        <div className="flex-shrink-0 flex items-center gap-3 md:gap-4">
          <button className="p-2 text-zinc-600 hover:text-blue-600 transition-colors">
            <FiShoppingCart className="w-6 h-6" />
          </button>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-zinc-700 font-bold border border-zinc-300 rounded hover:bg-zinc-50 transition-colors">
              Masuk
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors shadow-sm">
              Daftar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
