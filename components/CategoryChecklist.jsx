import React from "react";
import { CATEGORIES } from "../data/inventory.js";
import Checkbox from "./Checkbox.jsx";

export default function CategoryChecklist({ selected, counts, onToggle }) {
  return (
    <div>
      {CATEGORIES.map((cat) => (
        <Checkbox
          key={cat}
          label={cat}
          count={counts[cat]}
          checked={selected.includes(cat)}
          onChange={() => onToggle(cat)}
        />
      ))}
    </div>
  );
}