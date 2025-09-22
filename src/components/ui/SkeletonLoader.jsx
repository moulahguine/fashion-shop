import React from "react";

const SkeletonLoader = ({
  variant = "card",
  className = "",
  showText = true,
  textLines = 2,
}) => {
  const shimmerStyle = {
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    animation: "shimmer 1.5s infinite",
  };

  const renderCardSkeleton = () => (
    <div className={`bg-white group cursor-pointer ${className}`}>
      {/* Skeleton Image */}
      <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-3 relative">
        <div
          className="w-full h-full relative overflow-hidden"
          style={shimmerStyle}
        />
      </div>

      {/* Skeleton Text */}
      {showText && (
        <div className="space-y-2">
          {Array.from({ length: textLines }).map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded relative overflow-hidden ${
                index === textLines - 1 ? "w-16" : "w-full"
              }`}
              style={shimmerStyle}
            />
          ))}
        </div>
      )}
    </div>
  );

  const renderImageSkeleton = () => (
    <div
      className={`aspect-[4/5] bg-gray-100 overflow-hidden rounded-lg relative ${className}`}
    >
      <div
        className="w-full h-full relative overflow-hidden"
        style={shimmerStyle}
      />
    </div>
  );

  const renderTextSkeleton = () => (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: textLines }).map((_, index) => (
        <div
          key={index}
          className={`h-4 rounded relative overflow-hidden ${
            index === textLines - 1 ? "w-24" : "w-full"
          }`}
          style={shimmerStyle}
        />
      ))}
    </div>
  );

  return (
    <>
      {variant === "card" && renderCardSkeleton()}
      {variant === "image" && renderImageSkeleton()}
      {variant === "text" && renderTextSkeleton()}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </>
  );
};

export default SkeletonLoader;
