import { PRICE_FLOOR, PRICE_CEIL } from "../data/inventory.js";

/**
 * Combinatorial intersect filter.
 * Loops the master inventory once and keeps a product only if it satisfies
 * ALL active criteria at once (category AND price bounds AND min rating).
 *
 * Graceful null handling: a criterion that hasn't been touched by the user
 * (empty category list / full price range / no rating chosen) is bypassed
 * rather than treated as "match nothing" — so with no filters set, the
 * full base inventory passes through untouched.
 */
export function filterInventory(products, criteria) {
  const { categories = [], minPrice = PRICE_FLOOR, maxPrice = PRICE_CEIL, minRating = null } = criteria;

  const categoryFilterActive = categories.length > 0;
  const priceFilterActive = minPrice > PRICE_FLOOR || maxPrice < PRICE_CEIL;
  const ratingFilterActive = minRating !== null && minRating !== undefined;

  return products.filter((product) => {
    if (categoryFilterActive && !categories.includes(product.category)) return false;
    if (priceFilterActive && (product.price < minPrice || product.price > maxPrice)) return false;
    if (ratingFilterActive && product.rating < minRating) return false;
    return true;
  });
}

/**
 * Sort options exposed in the "Sort By" dropdown.
 */
export const SORT_OPTIONS = [
  { value: "relevance", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "top-rated", label: "Top Rated First" },
];

/**
 * Arranges presentation order of an already-filtered array.
 * Never mutates the input — always sorts a shallow copy.
 * Pipeline contract: callers must filter first, then sort the remainder.
 */
export function sortInventory(products, sortBy) {
  const sorted = [...products];

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "top-rated":
      return sorted.sort((a, b) => b.rating - a.rating || a.price - b.price);
    default:
      return sorted; // "relevance" — original catalog order
  }
}

/** Counts how many of the given criteria are actively narrowing the catalog. */
export function countActiveFilters({ categories = [], minPrice = PRICE_FLOOR, maxPrice = PRICE_CEIL, minRating = null }) {
  return (
    categories.length +
    (minRating ? 1 : 0) +
    (minPrice > PRICE_FLOOR || maxPrice < PRICE_CEIL ? 1 : 0)
  );
}