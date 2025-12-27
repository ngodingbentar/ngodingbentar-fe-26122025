interface CategoryPillProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryPill = ({
  label,
  isActive,
  onClick,
}: CategoryPillProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border
        ${isActive
          ? "bg-zinc-900 text-white border-zinc-900 shadow-md transform scale-105"
          : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
        }
      `}
    >
      {label}
    </button>
  );
};

export default CategoryPill;