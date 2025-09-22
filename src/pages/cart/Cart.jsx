import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../../components/ui/ConfirmationModal";

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    confirmDeleteItem,
    getTotalPrice,
    showDeleteModal,
    handleDeleteConfirm,
    handleDeleteCancel,
    showNotification,
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    showNotification(
      "Payment is disabled. This project is built for showcase purposes only, that's why the payment is disabled",
      "info"
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <h1 className="text-3xl font-light text-gray-900 mb-4">
              YOUR CART
            </h1>
            <div className="py-12">
              <svg
                className="w-24 h-24 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-gray-500 text-lg mb-2">Your cart is empty</p>
              <p className="text-gray-400 text-sm mb-8">
                Add some items to get started
              </p>
              <button
                onClick={() => navigate("/men")}
                className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <h1 className="text-3xl font-light text-gray-900 mb-8">YOUR CART</h1>

        {/* Cart Items */}
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex items-center space-x-6 p-6 bg-gray-50 rounded-lg"
            >
              {/* Product Image */}
              <div className="w-24 h-32 bg-gray-200 rounded-md overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">Size: {item.size}</p>
                <p className="text-lg font-semibold text-gray-900">
                  Price: ${item.price}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity - 1)
                  }
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <span className="w-8 text-center text-lg font-medium">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity + 1)
                  }
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => confirmDeleteItem(item.id, item.size)}
                className="p-3 text-gray-400 hover:text-red-500 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Checkout Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-semibold text-gray-900">Total:</span>
            <span className="text-3xl font-bold text-gray-900">
              ${getTotalPrice().toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-gray-900 text-white py-4 px-6 text-lg font-medium rounded-md hover:bg-gray-800 transition-colors"
          >
            Proceed to pay ${getTotalPrice().toFixed(2)}
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={showDeleteModal}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        message="Do you wanna delete this product?"
        confirmText="Delete"
        cancelText="Cancel"
      />
    </div>
  );
};

export default Cart;
