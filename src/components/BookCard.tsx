"use client";
import Image from "next/image";

interface BookCardProps {
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  rating: number;
  description: string;
}

export const BookCard = ({
  title,
  price,
  thumbnail,
  category,
  rating,
  description,
}: BookCardProps) => {
  return (
    <div className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-zinc-100 flex flex-col h-full group">
      <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-zinc-900 shadow-sm">
          ★ {rating}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs font-medium text-blue-600 mb-1 uppercase tracking-wider">
          {category}
        </div>
        <h3 className="text-lg font-bold text-zinc-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-zinc-500 line-clamp-2 mb-4 flex-grow">
          {description}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100">
          <span className="text-xl font-bold text-zinc-900">
            Rp {price}
          </span>
          <button className="px-4 py-2 bg-zinc-900 text-white text-sm font-semibold rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};
