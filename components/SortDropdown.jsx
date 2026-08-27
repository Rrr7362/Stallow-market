import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SORT_OPTIONS } from "../utils/filterSort.js";

export default function SortDropdown({ sortBy, onChange }) {
  const [open, setOpen] = useState(false);
  const activeLabel = SORT_OPTIONS.find((o) => o.value === sortBy)?.label;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        className="flex items-center gap-2 px-3.5 py-2 rounded-[8px] bg-card border border-line text-[12.5px] font-semibold hover:border-ink transition-colors"
      >
        Sort: {activeLabel}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-1.5 w-[200px] rounded-[8px] border border-line bg-card shadow-[0_10px_30px_rgba(28,27,24,0.12)] overflow-hidden z-20">
          {SORT_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onMouseDown={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full text-left px-3.5 py-2.5 text-[12.5px] hover:bg-[#F2ECDD] transition-colors ${
                sortBy === opt.value ? "font-bold text-signal" : "text-ink"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}