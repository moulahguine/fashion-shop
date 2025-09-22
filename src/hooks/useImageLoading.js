import { useState, useEffect } from "react";

const useImageLoading = (images) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  // Preload images for better performance
  useEffect(() => {
    const preloadImage = (src) => {
      if (!preloadedImages.has(src)) {
        const img = new Image();
        img.src = src;
        setPreloadedImages((prev) => new Set([...prev, src]));
      }
    };

    if (Array.isArray(images)) {
      images.forEach((imageSrc) => {
        if (imageSrc) preloadImage(imageSrc);
      });
    } else if (images) {
      preloadImage(images);
    }
  }, [images, preloadedImages]);

  const handleImageLoad = (imageId) => {
    setLoadedImages((prev) => new Set([...prev, imageId]));
  };

  const isImageLoaded = (imageId) => {
    return loadedImages.has(imageId);
  };

  const resetLoadingStates = () => {
    setLoadedImages(new Set());
    setPreloadedImages(new Set());
  };

  return {
    loadedImages,
    preloadedImages,
    handleImageLoad,
    isImageLoaded,
    resetLoadingStates,
  };
};

export default useImageLoading;
