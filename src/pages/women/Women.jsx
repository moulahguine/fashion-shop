import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AsideFilter from "../../components/aside/AsideFilter";
import ProductCards from "../../components/cards/ProductCards";

const Women = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: "all",
    price: "all",
  });

  useEffect(() => {
    const category = searchParams.get("category") || "all";
    const price = searchParams.get("price") || "all";

    // Valid categories for women
    const validCategories = ["all", "shirts", "sweaters", "tshirts", "jackets"];
    const validPrices = ["all", "high", "low"];

    // Validate category
    const validCategory = validCategories.includes(category) ? category : "all";
    const validPrice = validPrices.includes(price) ? price : "all";

    console.log("Women page - Category:", category, "Valid:", validCategory);
    console.log("Women page - Price:", price, "Valid:", validPrice);

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
          <aside className="lg:w-1/5 lg:pt-16">
            <AsideFilter
              filters={filters}
              onFilterChange={handleFilterChange}
              gender="women"
            />
          </aside>

          <main className="lg:w-4/5">
            <ProductCards filters={filters} gender="women" />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Women;
