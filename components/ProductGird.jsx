import React from "react";
import SortDropdown from "./SortDropdown.jsx";
import ProductCard from "./ProductCard.jsx";
import EmptyState from "./EmptyState.jsx";

export default function ProductGrid({ products, totalCount, sortBy, onSortChange, activeFilterCount, onReset }) {
  return (
    <main className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-5">
        <p className="text-[13px] text-[#79725f] font-mono">
          Showing <span className="font-bold text-ink">{products.length}</span> of {totalCount}
        </p>
        <SortDropdown sortBy={sortBy} onChange={onSortChange} />
      </div>

      {activeFilterCount > 0 && (
        <div className="md:hidden mb-4">
          <button onClick={onReset} className="text-[12px] font-semibold text-signal">
            Reset {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""}
          </button>
        </div>
      )}

      {products.length === 0 ? (
        <EmptyState onReset={onReset} />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}