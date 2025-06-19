interface CategoryButtonProps {
  text: string;
  onClick: () => void;
  isSelected: boolean; // New prop to indicate if the button is selected
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  text,
  onClick,
  isSelected,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 mt-3 rounded-md font-medium transition-colors ${
        isSelected ? "bg-blue text-white" : "bg-slate-100 text-black"
      }`}
    >
      {text}
    </button>
  );
};

export default CategoryButton;
