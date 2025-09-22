import { Link } from "react-router-dom";
import variety1 from "../../assets/images/variety/variety1.jpg";
import variety2 from "../../assets/images/variety/variety2.jpg";
import variety3 from "../../assets/images/variety/variety3.jpg";
import variety4 from "../../assets/images/variety/variety4.jpg";

const VarietyOfFashion = () => {
  const categories = [
    {
      id: 1,
      image: variety1,
      title: "MEN-",
      subtitle: "SWEATERS",
      href: "/men?category=sweaters",
      alt: "Men's sweaters collection",
    },
    {
      id: 2,
      image: variety2,
      title: "MEN-",
      subtitle: "TSHIRTS",
      href: "/men?category=tshirts",
      alt: "Men's t-shirts collection",
    },
    {
      id: 3,
      image: variety3,
      title: "WOMEN-",
      subtitle: "SWEATERS",
      href: "/women?category=sweaters",
      alt: "Women's sweaters collection",
    },
    {
      id: 4,
      image: variety4,
      title: "WOMEN-",
      subtitle: "TSHIRTS",
      href: "/women?category=tshirts",
      alt: "Women's t-shirts collection",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-900">
            Variety of fashion
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-5">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.href}
              className="group h-[450px] relative overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors duration-200"
            >
              {/* Background Image */}
              <img
                alt={category.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                style={{ color: "transparent" }}
                src={category.image}
              />

              {/* Text Overlay */}
              <div className="absolute bottom-2 left-2 text-black group-hover:underline">
                <p
                  className="text-3xl font-bold drop-shadow-lg"
                  style={{ textShadow: "0 0  5px  white" }}
                >
                  {category.title}
                </p>
                <p
                  className="text-3xl font-bold drop-shadow-lg"
                  style={{ textShadow: "0 0  5px  white" }}
                >
                  {category.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VarietyOfFashion;
