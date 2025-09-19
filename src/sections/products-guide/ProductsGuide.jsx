import productGuide1 from "../../assets/images/products-guide/product_guide1.jpg";
import productGuide2 from "../../assets/images/products-guide/product_guide2.jpg";
import productGuide3 from "../../assets/images/products-guide/product_guide3.jpg";

const ProductsGuide = () => {
  const products = [
    {
      id: 1,
      image: productGuide1,
      title: "modern sweaters",
      description:
        "Modern sweaters offer a fusion of contemporary design and comfort, providing stylish warmth for your wardrobe",
    },
    {
      id: 2,
      image: productGuide2,
      title: "built to last",
      description:
        "Discover enduring quality and style in our t-shirts and sweaters, where enduring style meets unmatched durability, ensuring your wardrobe stands the test of time",
    },
    {
      id: 3,
      image: productGuide3,
      title: "premium shirts",
      description:
        "Elevate your wardrobe with our premium shirts, meticulously crafted for timeless style and exceptional quality",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center my-24">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900">
            Products Guide
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="text-center group cursor-pointer">
              {/* Product Image */}
              <div className="mb-6 lg:mb-8 overflow-hidden rounded-lg">
                <img
                  alt={`product guide ${product.id}`}
                  loading="lazy"
                  width="400"
                  height="400"
                  decoding="async"
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-500 ease-out group-hover:scale-[1.2]"
                  style={{ color: "transparent" }}
                  src={product.image}
                />
              </div>

              {/* Product Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-sans font-semibold text-gray-900 mb-3 lg:mb-4 uppercase tracking-wide relative inline-block">
                <span className="relative z-10">{product.title}</span>
                <div className="absolute bottom-0 left-0 h-0.5 bg-gray-900 w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
              </h3>

              {/* Product Description */}
              <p className="text-gray-600 leading-relaxed text-xs max-w-xs sm:max-w-sm mx-auto px-2">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsGuide;
