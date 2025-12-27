import { FiSearch, FiX } from "react-icons/fi";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="relative w-full max-w-xl mx-auto mb-8">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FiSearch className="h-5 w-5 text-zinc-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-3 border border-zinc-200 rounded-2xl leading-5 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 shadow-sm"
        placeholder="Cari judul buku..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors cursor-pointer"
        >
          <FiX className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;