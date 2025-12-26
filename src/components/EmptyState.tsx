import Image from "next/image";

const EmptyState = ({ query }: { query: string }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center animate-in fade-in zoom-in duration-500">
      <div className="bg-zinc-50 p-6 rounded-full mb-4">
        {/* <svg
          className="h-12 w-12 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg> */}
        <Image
          src="/images/undraw_no-data_ig65.svg"
          alt="No Data"
          width={128}
          height={128}
        />
      </div>
      <div className="text-xl font-semibold text-zinc-900 mb-2">
        Produk Tidak Tersedia
      </div>
      <p className="text-zinc-500 max-w-md">
        Coba cari produk lainnya
      </p>
    </div>
  );
};

export default EmptyState;
