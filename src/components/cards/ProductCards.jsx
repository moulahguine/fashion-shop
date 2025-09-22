import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SkeletonLoader from "../ui/SkeletonLoader";
import useImageLoading from "../../hooks/useImageLoading";

const ProductCards = ({ filters, gender = "men" }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Get all product images for preloading
  const allImages = products
    .flatMap((product) => [product.image, product.hoverImage])
    .filter(Boolean);
  const { handleImageLoad, isImageLoaded: checkImageLoaded } =
    useImageLoading(allImages);

  // Helper function to generate image paths
  const getImagePaths = (productId) => ({
    image: new URL(
      `../../assets/images/men/product-${productId}-1.jpg`,
      import.meta.url
    ).href,
    hoverImage: new URL(
      `../../assets/images/men/product-${productId}-2.jpg`,
      import.meta.url
    ).href,
  });

  // Handle image loading
  const onImageLoad = (productId) => {
    handleImageLoad(productId);
  };

  // Mock product data
  useEffect(() => {
    const menProducts = [
      {
        id: 1,
        name: "CASHMERE SWEATER",
        category: "sweaters",
        price: 59,
        size: "m",
        color: "beige",
        ...getImagePaths(1),
        description: "Premium cashmere sweater",
      },
      {
        id: 2,
        name: "LINEN T-SHIRT",
        category: "tshirts",
        price: 29,
        size: "l",
        color: "brown",
        ...getImagePaths(2),
        description: "Comfortable linen t-shirt",
      },
      {
        id: 3,
        name: "PRINTED SWEATSHIRT",
        category: "sweaters",
        price: 39,
        size: "m",
        color: "blue",
        ...getImagePaths(3),
        description: "Stylish printed sweatshirt",
      },
      {
        id: 4,
        name: "OVERSIZED T-SHIRT",
        category: "tshirts",
        price: 42,
        size: "l",
        color: "yellow",
        ...getImagePaths(4),
        description: "Comfortable oversized t-shirt",
      },
      {
        id: 5,
        name: "TEXTURED SWEATER",
        category: "sweaters",
        price: 23,
        size: "xl",
        color: "brown",
        ...getImagePaths(5),
        description: "Textured knit sweater",
      },
      {
        id: 6,
        name: "TEXTURED T-SHIRT",
        category: "tshirts",
        price: 33,
        size: "s",
        color: "green",
        ...getImagePaths(6),
        description: "Textured cotton t-shirt",
      },
      {
        id: 7,
        name: "CONTRAST PRINT SWEATSHIRT",
        category: "sweaters",
        price: 49,
        size: "m",
        color: "mint",
        ...getImagePaths(16),
        description: "Contrast print sweatshirt",
      },
      {
        id: 8,
        name: "PREMIUM SWEATSHIRT",
        category: "sweaters",
        price: 32,
        size: "l",
        color: "navy",
        ...getImagePaths(8),
        description: "Premium quality sweatshirt",
      },
      {
        id: 9,
        name: "PURL KNIT SWEATER",
        category: "sweaters",
        price: 21,
        size: "xl",
        color: "white",
        ...getImagePaths(9),
        description: "Purl knit sweater",
      },
      {
        id: 10,
        name: "SOFT TOP",
        category: "tshirts",
        price: 27,
        size: "s",
        color: "olive",
        ...getImagePaths(10),
        description: "Soft cotton top",
      },
      {
        id: 11,
        name: "TEXTURED COTTON SWEATER",
        category: "sweaters",
        price: 49,
        size: "m",
        color: "gray",
        ...getImagePaths(16),
        description: "Textured cotton sweater",
      },
      {
        id: 12,
        name: "BASIC HEAVYWEIGHT T-SHIRT",
        category: "tshirts",
        price: 29,
        size: "l",
        color: "white",
        ...getImagePaths(12),
        description: "Basic heavyweight t-shirt",
      },
      {
        id: 13,
        name: "ROUND NECK SWEATSHIRT",
        category: "sweaters",
        price: 22,
        size: "xl",
        color: "green",
        ...getImagePaths(13),
        description: "Round neck sweatshirt",
      },
      {
        id: 14,
        name: "TEXTURED KNIT T-SHIRT",
        category: "tshirts",
        price: 15,
        size: "s",
        color: "gray",
        ...getImagePaths(14),
        description: "Textured knit t-shirt",
      },
      {
        id: 15,
        name: "ROUND NECK SWEATSHIRT",
        category: "sweaters",
        price: 26,
        size: "m",
        color: "brown",
        ...getImagePaths(15),
        description: "Round neck sweatshirt",
      },
      {
        id: 16,
        name: "TOWEL SWEATSHIRT",
        category: "sweaters",
        price: 29,
        size: "l",
        color: "orange",
        ...getImagePaths(16),
        description: "Towel material sweatshirt",
      },
      {
        id: 17,
        name: "CREW NECK SWEATSHIRT",
        category: "sweaters",
        price: 39,
        size: "xl",
        color: "black",
        ...getImagePaths(17),
        description: "Crew neck sweatshirt",
      },
      {
        id: 18,
        name: "TEXTURED JACQUARD T-SHIRT",
        category: "tshirts",
        price: 25,
        size: "s",
        color: "beige",
        ...getImagePaths(18),
        description: "Textured jacquard t-shirt",
      },
      {
        id: 19,
        name: "HEAT REACTIVE COLOURED SWEATSHIRT",
        category: "sweaters",
        price: 49,
        size: "m",
        color: "pink",
        ...getImagePaths(19),
        description: "Heat reactive sweatshirt",
      },
      {
        id: 20,
        name: "RIB NECK T-SHIRT",
        category: "tshirts",
        price: 19,
        size: "l",
        color: "purple",
        ...getImagePaths(20),
        description: "Rib neck t-shirt",
      },
      {
        id: 21,
        name: "STRUCTURED SOFT SWEATER",
        category: "sweaters",
        price: 33,
        size: "xl",
        color: "blue",
        ...getImagePaths(21),
        description: "Structured soft sweater",
      },
      {
        id: 22,
        name: "WORN TANK TOP",
        category: "tshirts",
        price: 39,
        size: "s",
        color: "gray",
        ...getImagePaths(22),
        description: "Worn vintage tank top",
      },
      {
        id: 23,
        name: "CONTRAST PRINT SWEATER",
        category: "sweaters",
        price: 59,
        size: "m",
        color: "purple",
        ...getImagePaths(23),
        description: "Contrast print sweater",
      },
      {
        id: 24,
        name: "VINTAGE FADED DENIM T-SHIRT",
        category: "tshirts",
        price: 27,
        size: "l",
        color: "blue",
        ...getImagePaths(24),
        description: "Vintage faded denim t-shirt",
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
        ...getImagePaths(16),
        description: "Sophisticated blouse with delicate details",
      },
      {
        id: 102,
        name: "Cashmere Cardigan",
        category: "sweaters",
        price: 149.99,
        size: "s",
        color: "pink",
        ...getImagePaths(16),
        description: "Luxurious cashmere cardigan for elegance",
      },
      {
        id: 103,
        name: "Vintage Denim Jacket",
        category: "jackets",
        price: 89.99,
        size: "m",
        color: "blue",
        ...getImagePaths(16),
        description: "Classic vintage-style denim jacket",
      },
      {
        id: 104,
        name: "Silk Camisole",
        category: "tshirts",
        price: 49.99,
        size: "s",
        color: "black",
        ...getImagePaths(16),
        description: "Luxurious silk camisole for layering",
      },
      {
        id: 105,
        name: "Wool Blend Sweater",
        category: "sweaters",
        price: 99.99,
        size: "l",
        color: "gray",
        ...getImagePaths(16),
        description: "Soft wool blend sweater with modern cut",
      },
      {
        id: 106,
        name: "Linen Shirt",
        category: "shirts",
        price: 79.99,
        size: "m",
        color: "beige",
        ...getImagePaths(16),
        description: "Breathable linen shirt for summer",
      },
      {
        id: 107,
        name: "Leather Jacket",
        category: "jackets",
        price: 199.99,
        size: "s",
        color: "black",
        ...getImagePaths(16),
        description: "Classic leather jacket for timeless style",
      },
      {
        id: 108,
        name: "Cotton Tank Top",
        category: "tshirts",
        price: 29.99,
        size: "m",
        color: "white",
        ...getImagePaths(16),
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

    // Handle price sorting
    if (filters.price === "high") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    } else if (filters.price === "low") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  // Generate dynamic title based on category filter
  const getPageTitle = () => {
    if (filters.category === "sweaters") {
      return "Men Sweaters";
    } else if (filters.category === "tshirts") {
      return "Men T-shirts";
    }
    return "Men";
  };

  return (
    <div>
      {/* Page Title - Centered above grid */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-light text-gray-900">
          {getPageTitle()}
        </h1>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => {
          const isImageLoaded = checkImageLoaded(product.id);

          return (
            <div key={product.id} className="relative">
              {/* Skeleton Loader - Show while image is loading */}
              {!isImageLoaded && <SkeletonLoader variant="card" />}

              {/* Product Card - Show when image is loaded */}
              <div
                className={`bg-white group cursor-pointer transition-opacity duration-300 ease-in-out ${
                  isImageLoaded
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => navigate(`/men/${product.id}`)}
              >
                {/* Product Image */}
                <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-3 relative group">
                  {/* Default Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-opacity duration-200 ease-in-out ${
                      hoveredProduct === product.id
                        ? "opacity-0"
                        : "opacity-100"
                    }`}
                    loading="eager"
                    fetchPriority="high"
                    onLoad={() => onImageLoad(product.id)}
                  />
                  {/* Hover Image */}
                  {product.hoverImage && (
                    <img
                      src={product.hoverImage}
                      alt={`${product.name} hover`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ease-in-out ${
                        hoveredProduct === product.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      loading="lazy"
                    />
                  )}

                  {/* Add to Cart Button - Hover Effect */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-3 transition-all duration-300 ease-in-out transform ${
                      hoveredProduct === product.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                    }`}
                  >
                    <span className="text-sm font-medium">Add to Cart</span>
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <h3
                    className={`text-xs font-medium text-gray-900 mb-1 transition-all duration-300 ease-in-out ${
                      hoveredProduct === product.id
                        ? "underline decoration-gray-900 decoration-1 underline-offset-2"
                        : "no-underline"
                    }`}
                  >
                    {product.name}
                  </h3>
                  <p className="text-xs font-bold text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
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
