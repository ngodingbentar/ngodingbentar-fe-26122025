import { CatalogContainer } from "@/components/CatalogContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
        <header className="mb-12 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Toko Buku
          </h1>
        </header>

        <CatalogContainer />
      </div>
    </main>
  );
}
