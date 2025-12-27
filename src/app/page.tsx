import { Suspense } from "react";
import CatalogContent from "@/features/catalog/components/CatalogContent";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative z-0">
      <div className="container mx-auto p-8 max-w-7xl">
        <Suspense fallback={<div>Loading...</div>}>
          <CatalogContent />
        </Suspense>
      </div>
    </main>
  );
}
