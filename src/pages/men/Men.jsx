import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import AsideFilter from "../../components/aside/AsideFilter";
import ProductCards from "../../components/cards/ProductCards";

const Men = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "all",
    price: "all",
  });

  // Read URL parameters on component mount
  useEffect(() => {
    const category = searchParams.get("category") || "all";
    const price = searchParams.get("price") || "all";

    // Valid categories for men
    const validCategories = ["all", "sweaters", "tshirts"];
    const validPrices = ["all", "high", "low"];

    // Validate category
    const validCategory = validCategories.includes(category) ? category : "all";
    const validPrice = validPrices.includes(price) ? price : "all";

    console.log("Men page - Category:", category, "Valid:", validCategory);
    console.log("Men page - Price:", price, "Valid:", validPrice);

    setFilters({
      category: validCategory,
      price: validPrice,
    });
  }, [searchParams]);

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...filters,
      [filterType]: value,
    };

    setFilters(newFilters);

    // Update URL parameters
    const newSearchParams = new URLSearchParams();

    if (newFilters.category !== "all") {
      newSearchParams.set("category", newFilters.category);
    }

    if (newFilters.price !== "all") {
      newSearchParams.set("price", newFilters.price);
    }

    setSearchParams(newSearchParams);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Aside Filter */}
          <aside className="lg:w-1/5 lg:pt-16">
            <AsideFilter
              filters={filters}
              onFilterChange={handleFilterChange}
              gender="men"
            />
          </aside>

          {/* Main Content */}
          <main className="lg:w-4/5">
            <ProductCards filters={filters} gender="men" />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Men;
