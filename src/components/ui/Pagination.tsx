import React from "react";
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const handlePageClick = (event: { selected: number }) => {
    onPageChange(event.selected + 1);
  };

  return (
    <div className="flex mt-8 justify-center">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FiChevronRight className="w-5 h-5" />}
        previousLabel={<FiChevronLeft className="w-5 h-5" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}

        pageClassName="block"
        containerClassName="flex items-center gap-2"
        activeClassName="!border-transparent"
        pageLinkClassName="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent text-sm font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-200 transition-all cursor-pointer"
        previousClassName="mr-2"
        activeLinkClassName="!bg-blue-600 !text-white shadow-lg shadow-blue-600/20 hover:!bg-blue-700 cursor-pointer"
        previousLinkClassName="px-3 py-2 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        disabledLinkClassName="opacity-50 cursor-not-allowed hover:bg-transparent !cursor-not-allowed"
        nextLinkClassName="px-3 py-2 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        breakClassName="w-10 h-10 flex items-center justify-center text-gray-400"
        nextClassName="ml-2"
      />
    </div>
  );
};
