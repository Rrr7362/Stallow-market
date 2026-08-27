// The "master product item inventory array" — in a real app this would come
// from an API/DB call instead of being generated client-side.

export const CATEGORIES = ["Electronics", "Apparel", "Footwear", "Home", "Accessories"];

export const PRICE_FLOOR = 0;
export const PRICE_CEIL = 300;

const NAMES = {
  Electronics: ["Wireless Earbuds", "4K Monitor", "Mechanical Keyboard", "Bluetooth Speaker", "Action Camera", "Smart Watch"],
  Apparel: ["Denim Jacket", "Wool Sweater", "Linen Shirt", "Cargo Pants", "Puffer Vest", "Graphic Tee"],
  Footwear: ["Trail Runners", "Canvas Sneakers", "Leather Boots", "Slide Sandals", "High-Top Sneakers", "Running Shoes"],
  Home: ["Ceramic Mug Set", "Table Lamp", "Throw Blanket", "Cutting Board", "Wall Clock", "Storage Bin"],
  Accessories: ["Leather Wallet", "Canvas Tote", "Sunglasses", "Beanie", "Belt", "Crossbody Bag"],
};

// Deterministic pseudo-random generator so the catalog is stable across reloads.
function seedRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function buildInventory() {
  const rnd = seedRandom(42);
  const items = [];
  let id = 1;

  CATEGORIES.forEach((cat) => {
    NAMES[cat].forEach((name, i) => {
      const price = Math.round((15 + rnd() * (PRICE_CEIL - 20)) * 100) / 100;
      const rating = 1 + Math.floor(rnd() * 5);
      items.push({
        id: id++,
        name,
        category: cat,
        price,
        rating,
        img: `https://picsum.photos/seed/${cat}-${i}-shop/400/400`,
      });
    });
  });

  return items;
}

export const INVENTORY = buildInventory();