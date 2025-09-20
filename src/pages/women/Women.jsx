import { useState } from "react";
import AsideFilter from "../../components/aside/AsideFilter";
import ProductCards from "../../components/cards/ProductCards";

const Women = () => {
  const [filters, setFilters] = useState({
    category: "all",
    size: "all",
    price: "all",
    color: "all",
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-2">
            Women's Collection
          </h1>
          <p className="text-gray-600">
            Discover our elegant collection of women's fashion
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Aside Filter */}
          <aside className="lg:w-1/4">
            <AsideFilter
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <ProductCards filters={filters} gender="women" />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Women;

