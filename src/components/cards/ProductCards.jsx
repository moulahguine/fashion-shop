import { useState, useEffect } from "react";

const ProductCards = ({ filters, gender = "men" }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Mock product data
  useEffect(() => {
    const menProducts = [
      {
        id: 1,
        name: "Classic Cotton T-Shirt",
        category: "tshirts",
        price: 29.99,
        size: "m",
        color: "white",
        image: "/api/placeholder/300/400",
        description: "Premium cotton t-shirt with modern fit",
      },
      {
        id: 2,
        name: "Wool Blend Sweater",
        category: "sweaters",
        price: 89.99,
        size: "l",
        color: "navy",
        image: "/api/placeholder/300/400",
        description: "Soft wool blend sweater for comfort",
      },
      {
        id: 3,
        name: "Oxford Button-Down Shirt",
        category: "shirts",
        price: 79.99,
        size: "m",
        color: "blue",
        image: "/api/placeholder/300/400",
        description: "Classic oxford shirt with button-down collar",
      },
      {
        id: 4,
        name: "Denim Jacket",
        category: "jackets",
        price: 129.99,
        size: "l",
        color: "blue",
        image: "/api/placeholder/300/400",
        description: "Vintage-style denim jacket",
      },
      {
        id: 5,
        name: "Cashmere Sweater",
        category: "sweaters",
        price: 199.99,
        size: "xl",
        color: "gray",
        image: "/api/placeholder/300/400",
        description: "Luxurious cashmere sweater",
      },
      {
        id: 6,
        name: "Basic White T-Shirt",
        category: "tshirts",
        price: 24.99,
        size: "s",
        color: "white",
        image: "/api/placeholder/300/400",
        description: "Essential white t-shirt",
      },
    ];

    const womenProducts = [
      {
        id: 101,
        name: "Elegant Blouse",
        category: "shirts",
        price: 69.99,
        size: "m",
        color: "white",
        image: "/api/placeholder/300/400",
        description: "Sophisticated blouse with delicate details",
      },
      {
        id: 102,
        name: "Cashmere Cardigan",
        category: "sweaters",
        price: 149.99,
        size: "s",
        color: "pink",
        image: "/api/placeholder/300/400",
        description: "Luxurious cashmere cardigan for elegance",
      },
      {
        id: 103,
        name: "Vintage Denim Jacket",
        category: "jackets",
        price: 89.99,
        size: "m",
        color: "blue",
        image: "/api/placeholder/300/400",
        description: "Classic vintage-style denim jacket",
      },
      {
        id: 104,
        name: "Silk Camisole",
        category: "tshirts",
        price: 49.99,
        size: "s",
        color: "black",
        image: "/api/placeholder/300/400",
        description: "Luxurious silk camisole for layering",
      },
      {
        id: 105,
        name: "Wool Blend Sweater",
        category: "sweaters",
        price: 99.99,
        size: "l",
        color: "gray",
        image: "/api/placeholder/300/400",
        description: "Soft wool blend sweater with modern cut",
      },
      {
        id: 106,
        name: "Linen Shirt",
        category: "shirts",
        price: 79.99,
        size: "m",
        color: "beige",
        image: "/api/placeholder/300/400",
        description: "Breathable linen shirt for summer",
      },
      {
        id: 107,
        name: "Leather Jacket",
        category: "jackets",
        price: 199.99,
        size: "s",
        color: "black",
        image: "/api/placeholder/300/400",
        description: "Classic leather jacket for timeless style",
      },
      {
        id: 108,
        name: "Cotton Tank Top",
        category: "tshirts",
        price: 29.99,
        size: "m",
        color: "white",
        image: "/api/placeholder/300/400",
        description: "Essential cotton tank top",
      },
    ];

    const mockProducts = gender === "women" ? womenProducts : menProducts;
    setProducts(mockProducts);
  }, [gender]);

  // Filter products based on selected filters
  useEffect(() => {
    let filtered = products;

    if (filters.category !== "all") {
      filtered = filtered.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.size !== "all") {
      filtered = filtered.filter((product) => product.size === filters.size);
    }

    if (filters.color !== "all") {
      filtered = filtered.filter((product) => product.color === filters.color);
    }

    if (filters.price !== "all") {
      const [min, max] = filters.price.split("-").map(Number);
      if (max) {
        filtered = filtered.filter(
          (product) => product.price >= min && product.price <= max
        );
      } else {
        filtered = filtered.filter((product) => product.price >= min);
      }
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  return (
    <div>
      {/* Results Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
        </p>
        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            {/* Product Image */}
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {product.description}
              </p>

              {/* Product Details */}
              <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                <span className="capitalize">{product.color}</span>
                <span className="uppercase">{product.size}</span>
              </div>

              {/* Price and Add to Cart */}
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No products found matching your filters.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Try adjusting your filter criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCards;
