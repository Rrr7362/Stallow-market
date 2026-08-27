import React from "react";
import { RotateCcw, SlidersHorizontal } from "lucide-react";
import { PRICE_FLOOR, PRICE_CEIL } from "../data/inventory.js";
import CategoryChecklist from "./CategoryChecklist.jsx";
import PriceRangeSlider from "./PriceRangeSlider.jsx";
import RatingFilter from "./Ratingfilter.jsx";

function SidebarSection({ title, children }) {
  return (
    <div className="py-5 border-b border-dashed border-dash">
      <h3 className="text-[11px] font-bold tracking-[0.16em] text-ink mb-2.5 uppercase font-mono">{title}</h3>
      {children}
    </div>
  );
}

export default function Sidebar({
  categories,
  categoryCounts,
  onToggleCategory,
  minPrice,
  maxPrice,
  onPriceChange,
  minRating,
  onRatingChange,
  activeFilterCount,
  onReset,
}) {
  return (
    <aside className="hidden md:block w-[248px] shrink-0 sticky top-[92px] self-start">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-1.5">
          <SlidersHorizontal size={14} strokeWidth={2.2} />
          <h2 className="text-[13px] font-bold tracking-wide font-display">Filters</h2>
        </div>
        {activeFilterCount > 0 && (
          <button
            onClick={onReset}
            className="flex items-center gap-1 text-[11px] font-semibold text-signal hover:text-[#c2481f] transition-colors"
          >
            <RotateCcw size={11} /> Reset ({activeFilterCount})
          </button>
        )}
      </div>

      <SidebarSection title="Category">
        <CategoryChecklist selected={categories} counts={categoryCounts} onToggle={onToggleCategory} />
      </SidebarSection>

      <SidebarSection title="Price Range">
        <PriceRangeSlider
          min={minPrice}
          max={maxPrice}
          floor={PRICE_FLOOR}
          ceil={PRICE_CEIL}
          onChange={onPriceChange}
        />
      </SidebarSection>

      <SidebarSection title="Minimum Rating">
        <RatingFilter selected={minRating} onSelect={onRatingChange} />
      </SidebarSection>
    </aside>
  );
}