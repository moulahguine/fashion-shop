const QuantitySelector = ({ quantity, setQuantity }) => {
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-md">
      <button
        onClick={handleDecrease}
        disabled={quantity <= 1}
        className={`px-3 py-2 text-lg font-medium transition-colors duration-200 ${
          quantity <= 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
        }`}
        aria-label="Decrease quantity"
      >
        -
      </button>

      <div className="px-4 py-2 text-sm font-medium text-gray-900 border-x border-gray-300 min-w-[3rem] text-center">
        {quantity}
      </div>

      <button
        onClick={handleIncrease}
        className="px-3 py-2 text-lg font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
