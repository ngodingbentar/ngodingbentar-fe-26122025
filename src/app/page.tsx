import { CatalogContainer } from "@/features/catalog/components/CatalogContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-8 pt-12 md:py-20 max-w-7xl">
        <header className="mb-12 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-blue-600">
            Toko Buku
          </h1>
        </header>
        <CatalogContainer />
      </div>
    </main>
  );
}
