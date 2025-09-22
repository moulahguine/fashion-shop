import { useCart } from "../../contexts/CartContext";

const AddToCartButton = ({ product, selectedSize, quantity }) => {
  const { addToCart, showNotification } = useCart();

  const handleAddToCart = () => {
    if (!selectedSize) {
      showNotification("Choose a Size before adding to Cart", "warning");
      return;
    }
    addToCart(product, selectedSize, quantity);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="px-8 py-3 bg-gray-900 text-white text-sm font-medium uppercase tracking-wider rounded-md hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
