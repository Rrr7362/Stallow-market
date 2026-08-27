import { useMemo, useState } from "react";
import { INVENTORY, PRICE_FLOOR, PRICE_CEIL, CATEGORIES } from "../data/inventory.js";
import { filterInventory, sortInventory, countActiveFilters } from "../../utils/filterSort.js";

export function useProductFilters() {
  const [categories, setCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(PRICE_FLOOR);
  const [maxPrice, setMaxPrice] = useState(PRICE_CEIL);
  const [minRating, setMinRating] = useState(null);
  const [sortBy, setSortBy] = useState("relevance");

  const toggleCategory = (cat) => {
    setCategories((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));
  };

  const setPriceRange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const resetFilters = () => {
    setCategories([]);
    setMinPrice(PRICE_FLOOR);
    setMaxPrice(PRICE_CEIL);
    setMinRating(null);
  };

  // Pipeline: filter the master dataset first, THEN order the remainder for display.
  const filtered = useMemo(
    () => filterInventory(INVENTORY, { categories, minPrice, maxPrice, minRating }),
    [categories, minPrice, maxPrice, minRating]
  );

  const visibleProducts = useMemo(() => sortInventory(filtered, sortBy), [filtered, sortBy]);

  const activeFilterCount = countActiveFilters({ categories, minPrice, maxPrice, minRating });

  const categoryCounts = useMemo(() => {
    const counts = {};
    CATEGORIES.forEach((c) => {
      counts[c] = INVENTORY.filter((p) => p.category === c).length;
    });
    return counts;
  }, []);

  return {
    // state
    categories,
    minPrice,
    maxPrice,
    minRating,
    sortBy,
    // derived
    visibleProducts,
    activeFilterCount,
    categoryCounts,
    totalCount: INVENTORY.length,
    // actions
    toggleCategory,
    setPriceRange,
    setMinRating,
    setSortBy,
    resetFilters,
  };
}