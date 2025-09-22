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
  const getImagePaths = (productId, gender = "men") => ({
    image: new URL(
      `../../assets/images/${gender}/product-${productId}-1.jpg`,
      import.meta.url
    ).href,
    hoverImage: new URL(
      `../../assets/images/${gender}/product-${productId}-2.jpg`,
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
        ...getImagePaths(1, gender),
        description: "Premium cashmere sweater",
      },
      {
        id: 2,
        name: "LINEN T-SHIRT",
        category: "tshirts",
        price: 29,
        size: "l",
        color: "brown",
        ...getImagePaths(2, gender),
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
        name: "RIB-KNIT SWEATER",
        category: "sweaters",
        price: 29,
        size: "m",
        color: "beige",
        ...getImagePaths(1, gender),
        description: "Comfortable rib-knit sweater in light beige",
        sizes: ["S", "M", "L", "XL"],
        stock: 8,
      },
      {
        id: 102,
        name: "OVERSIZED T-SHIRT",
        category: "tshirts",
        price: 22,
        size: "l",
        color: "cream",
        ...getImagePaths(2, gender),
        description: "Relaxed fit oversized t-shirt in cream",
        sizes: ["S", "M", "L", "XL"],
        stock: 12,
      },
      {
        id: 103,
        name: "RIB-KNIT JUMPER",
        category: "sweaters",
        price: 25,
        size: "m",
        color: "mustard",
        ...getImagePaths(3, gender),
        description: "Mustard yellow rib-knit jumper",
        sizes: ["S", "M", "L", "XL"],
        stock: 6,
      },
      {
        id: 104,
        name: "OVERSIZED PRINTED T-SHIRT",
        category: "tshirts",
        price: 30,
        size: "l",
        color: "blue",
        ...getImagePaths(4, gender),
        description: "Light blue printed t-shirt with graphic design",
        sizes: ["S", "M", "L", "XL"],
        stock: 10,
      },
      {
        id: 105,
        name: "JACQUARD-KNIT JUMPER",
        category: "sweaters",
        price: 40,
        size: "m",
        color: "red",
        ...getImagePaths(5, gender),
        description: "Red and white patterned jacquard jumper",
        sizes: ["S", "M", "L", "XL"],
        stock: 7,
      },
      {
        id: 106,
        name: "SIMPLE T-SHIRT",
        category: "tshirts",
        price: 45,
        size: "m",
        color: "black",
        ...getImagePaths(6, gender),
        description: "Classic black simple t-shirt",
        sizes: ["S", "M", "L", "XL"],
        stock: 15,
      },
      {
        id: 107,
        name: "JACQUARD-KNIT SWEATER",
        category: "sweaters",
        price: 30,
        size: "l",
        color: "cream",
        ...getImagePaths(7, gender),
        description: "Cream and red fair isle patterned sweater",
        sizes: ["S", "M", "L", "XL"],
        stock: 9,
      },
      {
        id: 108,
        name: "WHITE T-SHIRT",
        category: "tshirts",
        price: 19,
        size: "s",
        color: "white",
        ...getImagePaths(8, gender),
        description: "Essential white t-shirt",
        sizes: ["S", "M", "L", "XL"],
        stock: 20,
      },
      {
        id: 109,
        name: "BEADED JUMPER",
        category: "sweaters",
        price: 27,
        size: "m",
        color: "sage",
        ...getImagePaths(9, gender),
        description: "Light sage green beaded jumper",
        sizes: ["S", "M", "L", "XL"],
        stock: 5,
      },
      {
        id: 110,
        name: "MOTIF-DETAIL T-SHIRT",
        category: "tshirts",
        price: 35,
        size: "l",
        color: "peach",
        ...getImagePaths(10, gender),
        description: "Peach colored t-shirt with motif details",
        sizes: ["S", "M", "L", "XL"],
        stock: 8,
      },
      {
        id: 111,
        name: "MOHAIR-BLEND FINE-KNIT JUMPER",
        category: "sweaters",
        price: 29,
        size: "m",
        color: "red",
        ...getImagePaths(11, gender),
        description: "Red mohair-blend fine-knit jumper",
        sizes: ["S", "M", "L", "XL"],
        stock: 6,
      },
      {
        id: 112,
        name: "OXFORD PRINTED T-SHIRT",
        category: "tshirts",
        price: 35,
        size: "l",
        color: "blue",
        ...getImagePaths(12, gender),
        description: "Light blue Oxford University printed t-shirt",
        sizes: ["S", "M", "L", "XL"],
        stock: 11,
      },
      {
        id: 113,
        name: "RIB-KNIT SWEATER",
        category: "sweaters",
        price: 27,
        size: "m",
        color: "black",
        ...getImagePaths(13, gender),
        description: "Black and white striped rib-knit sweater",
        sizes: ["S", "M", "L", "XL"],
        stock: 7,
      },
      {
        id: 114,
        name: "FITTED T-SHIRT",
        category: "tshirts",
        price: 10,
        size: "s",
        color: "navy",
        ...getImagePaths(14, gender),
        description: "Navy fitted t-shirt with Marseille text",
        sizes: ["S", "M", "L", "XL"],
        stock: 18,
      },
      {
        id: 115,
        name: "LIME GREEN SWEATER",
        category: "sweaters",
        price: 35,
        size: "l",
        color: "lime",
        ...getImagePaths(15, gender),
        description: "Bright lime green sweater",
        sizes: ["S", "M", "L", "XL"],
        stock: 4,
      },
      {
        id: 116,
        name: "BLUR PRINTED T-SHIRT",
        category: "tshirts",
        price: 40,
        size: "m",
        color: "grey",
        ...getImagePaths(16, gender),
        description: "Dark grey t-shirt with faded graphic print",
        sizes: ["S", "M", "L", "XL"],
        stock: 9,
      },
      {
        id: 117,
        name: "FINE-KNIT CASHMERE SWEATER",
        category: "sweaters",
        price: 49,
        size: "m",
        color: "blue",
        ...getImagePaths(17, gender),
        description: "Blue turtleneck cashmere sweater",
        sizes: ["S", "M", "L", "XL"],
        stock: 3,
      },
      {
        id: 118,
        name: "MIKEY T-SHIRT",
        category: "tshirts",
        price: 18,
        size: "s",
        color: "pink",
        ...getImagePaths(18, gender),
        description: "Light pink Mikey t-shirt",
        sizes: ["S", "M", "L", "XL"],
        stock: 14,
      },
      {
        id: 119,
        name: "FINE-KNIT CASHMERE SWEATER",
        category: "sweaters",
        price: 30,
        size: "l",
        color: "grey",
        ...getImagePaths(19, gender),
        description: "Light grey crew neck cashmere sweater",
        sizes: ["S", "M", "L", "XL"],
        stock: 5,
      },
      {
        id: 120,
        name: "INHALE EXHALE T-SHIRT",
        category: "tshirts",
        price: 25,
        size: "m",
        color: "green",
        ...getImagePaths(20, gender),
        description: "Light green t-shirt with text design",
        sizes: ["S", "M", "L", "XL"],
        stock: 13,
      },
      {
        id: 121,
        name: "FINE-KNIT CASHMERE SWEATER",
        category: "sweaters",
        price: 60,
        size: "l",
        color: "black",
        ...getImagePaths(21, gender),
        description: "Black fine-knit cashmere sweater",
        sizes: ["S", "M", "L", "XL"],
        stock: 2,
      },
      {
        id: 122,
        name: "NEVANA PRINTED T-SHIRT",
        category: "tshirts",
        price: 45,
        size: "m",
        color: "cream",
        ...getImagePaths(22, gender),
        description: "Cream colored t-shirt with Nevana graphic print",
        sizes: ["S", "M", "L", "XL"],
        stock: 6,
      },
      {
        id: 123,
        name: "KNITTED JUMPER",
        category: "sweaters",
        price: 20,
        size: "s",
        color: "grey",
        ...getImagePaths(23, gender),
        description: "Dark grey knitted jumper",
        sizes: ["S", "M", "L", "XL"],
        stock: 16,
      },
      {
        id: 124,
        name: "LONG PRINTED T-SHIRT",
        category: "tshirts",
        price: 25,
        size: "l",
        color: "olive",
        ...getImagePaths(24, gender),
        description: "Olive green t-shirt with AC/DC logo",
        sizes: ["S", "M", "L", "XL"],
        stock: 10,
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
    const genderTitle = gender === "women" ? "Women" : "Men";

    if (filters.category === "sweaters") {
      return `${genderTitle} Sweaters`;
    } else if (filters.category === "tshirts") {
      return `${genderTitle} T-shirts`;
    } else if (filters.category === "shirts") {
      return `${genderTitle} Shirts`;
    } else if (filters.category === "jackets") {
      return `${genderTitle} Jackets`;
    }
    return genderTitle;
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
                onClick={() => navigate(`/${gender}/${product.id}`)}
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
