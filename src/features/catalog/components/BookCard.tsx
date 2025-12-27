import { IProduct } from "@/types";
import { formatRupiah } from "@/utils/formatRupiah";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useMemo } from "react";

interface BookCardProps {
  product: IProduct;
}

const BookCard = ({ product }: BookCardProps) => {
  const { title, price, discountPercentage, thumbnail, category, rating, description } = product;

  const originalPrice = useMemo(() => {
    return discountPercentage > 0
      ? price / (1 - discountPercentage / 100)
      : null;
  }, [discountPercentage, price])

  return (
    <div className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-zinc-100 flex flex-col h-full group">
      <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-zinc-900 shadow-sm flex items-center gap-1">
          <FaStar className="text-yellow-500" /> {rating}
        </div>
        {discountPercentage > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-sm">
            -{Math.round(discountPercentage)}%
          </div>
        )}
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
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-xs text-zinc-400 line-through">
                {formatRupiah(originalPrice)}
              </span>
            )}
            <span className="text-xl font-bold text-zinc-900">
              {formatRupiah(price)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;