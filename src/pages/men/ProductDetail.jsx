import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductImage from "../../components/product-detail/ProductImage";
import ProductInfo from "../../components/product-detail/ProductInfo";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock product data - same as in ProductCards
  const menProducts = [
    {
      id: 1,
      name: "CASHMERE SWEATER",
      category: "sweaters",
      price: 59,
      size: "m",
      color: "beige",
      image: new URL(`../../assets/images/men/product-1-1.jpg`, import.meta.url)
        .href,
      hoverImage: new URL(
        `../../assets/images/men/product-1-2.jpg`,
        import.meta.url
      ).href,
      description:
        "Sweater made of spun cashmere wool fabric. Round neckline and long sleeves. Ribbed trims.",
      details: "Premium cashmere wool, machine washable, made in Italy",
      stock: 5,
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      id: 2,
      name: "LINEN T-SHIRT",
      category: "tshirts",
      price: 29,
      size: "l",
      color: "brown",
      image: new URL(`../../assets/images/men/product-2-1.jpg`, import.meta.url)
        .href,
      hoverImage: new URL(
        `../../assets/images/men/product-2-2.jpg`,
        import.meta.url
      ).href,
      description:
        "Comfortable linen t-shirt with modern fit and breathable fabric.",
      details: "100% linen, machine washable, made in Portugal",
      stock: 8,
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    // Add more products as needed...
  ];

  useEffect(() => {
    // Find product by ID
    const foundProduct = menProducts.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      // Product not found, redirect to men page
      navigate("/men");
    }
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Product not found
          </h1>
          <button
            onClick={() => navigate("/men")}
            className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            Back to Men's Collection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Product Image */}
          <div className="lg:pr-8">
            <ProductImage
              image={product.image}
              hoverImage={product.hoverImage}
              name={product.name}
            />
          </div>

          {/* Right Side - Product Information */}
          <div className="lg:pl-8">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
