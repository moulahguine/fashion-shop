const AsideFilter = ({ filters, onFilterChange }) => {
  const categories = [
    { value: "all", label: "All" },
    { value: "sweaters", label: "Sweaters" },
    { value: "tshirts", label: "T-shirts" },
  ];

  const priceOptions = [
    { value: "all", label: "All" },
    { value: "high", label: "High to Low" },
    { value: "low", label: "Low to High" },
  ];

  return (
    <div className="space-y-6">
      {/* Price Filter */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Price</h4>
        <select
          value={filters.price}
          onChange={(e) => onFilterChange("price", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
        >
          {priceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Categories Filter */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Categories</h4>
        <select
          value={filters.category}
          onChange={(e) => onFilterChange("category", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm"
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AsideFilter;
