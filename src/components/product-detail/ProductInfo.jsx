import { useState } from "react";
import Tabs from "./Tabs";
import QuantitySelector from "./QuantitySelector";
import AddToCartButton from "./AddToCartButton";

const ProductInfo = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="space-y-6">
      {/* Product Title */}
      <h1 className="text-3xl font-light text-gray-900">{product.name}</h1>

      {/* Price and Rating */}
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-semibold text-gray-900">
          ${product.price}
        </span>
        <div className="flex items-center space-x-1">
          <svg
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm text-gray-600">4.2</span>
        </div>
      </div>

      {/* Size Selector */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-gray-900">Size</h3>
        <div className="flex space-x-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 border text-sm font-medium transition-all duration-200 ${
                selectedSize === size
                  ? "border-gray-900 bg-gray-900 text-white"
                  : "border-gray-300 text-gray-900 hover:border-gray-400"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Stock Information */}
      <div className="flex items-center space-x-2">
        <svg
          className="w-4 h-4 text-green-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm text-gray-600">{product.stock} in stock</span>
      </div>

      {/* Tabs for Description/Details */}
      <Tabs description={product.description} details={product.details} />

      {/* Quantity Selector and Add to Cart */}
      <div className="flex items-center space-x-4">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <AddToCartButton
          product={product}
          selectedSize={selectedSize}
          quantity={quantity}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
