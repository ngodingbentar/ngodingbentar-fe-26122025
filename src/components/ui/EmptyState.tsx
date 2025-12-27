import Image from "next/image";

const EmptyState = ({ query }: { query: string }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center animate-in fade-in zoom-in duration-500">
      <div className="bg-zinc-50 p-6 rounded-full mb-4">
        <Image
          src="/images/undraw_no-data_ig65.svg"
          alt="No Data"
          width={128}
          height={128}
        />
      </div>
      <div className="text-xl font-semibold text-zinc-900 mb-2">
        Tidak ada buku ditemukan
      </div>
      <p className="text-zinc-500 max-w-md">
        Coba cari buku lainnya
      </p>
    </div>
  );
};

export default EmptyState;
