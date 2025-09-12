import React from "react";
import "./ProductCard.css";

const ProductCard = ({
  id,
  name,
  image,
  price,
  originalPrice,
  meta,
  badge,
  badgeColor = "primary",
  onClick,
  className = "",
  ...props
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  const cardClasses = [
    "product-card",
    onClick ? "product-card-clickable" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const badgeClasses = ["product-badge", `product-badge-${badgeColor}`]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClasses} onClick={handleClick} {...props}>
      {/* Product Image */}
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        {badge && <div className={badgeClasses}>{badge}</div>}
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-name">{name}</h3>

        {meta && (
          <div className="product-meta">
            {meta.map((item, index) => (
              <span key={index} className="product-meta-item">
                {item}
              </span>
            ))}
          </div>
        )}

        <div className="product-price-container">
          <span className="product-price">${price}</span>
          {originalPrice && (
            <span className="product-original-price">${originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
