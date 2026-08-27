import React from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import { useProductFilters } from "./hooks/useProductFilters.js";

export default function App() {
  const {
    categories,
    minPrice,
    maxPrice,
    minRating,
    sortBy,
    visibleProducts,
    activeFilterCount,
    categoryCounts,
    totalCount,
    toggleCategory,
    setPriceRange,
    setMinRating,
    setSortBy,
    resetFilters,
  } = useProductFilters();

  return (
    <div className="min-h-screen w-full bg-paper text-ink font-body">
      <Header totalCount={totalCount} />

      <div className="max-w-[1280px] mx-auto px-6 py-7 flex gap-8 items-start">
        <Sidebar
          categories={categories}
          categoryCounts={categoryCounts}
          onToggleCategory={toggleCategory}
          minPrice={minPrice}
          maxPrice={maxPrice}
          onPriceChange={setPriceRange}
          minRating={minRating}
          onRatingChange={setMinRating}
          activeFilterCount={activeFilterCount}
          onReset={resetFilters}
        />

        <ProductGrid
          products={visibleProducts}
          totalCount={totalCount}
          sortBy={sortBy}
          onSortChange={setSortBy}
          activeFilterCount={activeFilterCount}
          onReset={resetFilters}
        />
      </div>
    </div>
  );
}