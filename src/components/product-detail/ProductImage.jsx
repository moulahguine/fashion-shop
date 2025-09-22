import { useState } from "react";

const ProductImage = ({ image, hoverImage, name }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [image, hoverImage];

  return (
    <div className="space-y-4">
      {/* Main Product Image */}
      <div className="aspect-[4/5] bg-gray-100 overflow-hidden rounded-lg">
        <img
          src={images[currentImage]}
          alt={name}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      {/* Image Navigation Dots */}
      <div className="flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              currentImage === index
                ? "bg-gray-900"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
