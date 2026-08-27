import React from "react";
import StarRow from "./StarRow.jsx";

function RatingRadio({ value, selected, onSelect }) {
  const active = selected === value;
  return (
    <label className="group flex items-center gap-2.5 py-1.5 cursor-pointer select-none">
      <span
        className={`flex items-center justify-center w-[16px] h-[16px] rounded-full border-[1.5px] transition-colors ${
          active ? "border-ink" : "border-[#B9B2A0] group-hover:border-ink"
        }`}
      >
        {active && <span className="w-[8px] h-[8px] rounded-full bg-ink" />}
      </span>
      <StarRow rating={value} size={13} />
      <span className="text-[12.5px] text-[#79725f]">&amp; up</span>
      <input type="radio" checked={active} onChange={() => onSelect(value)} className="sr-only" />
    </label>
  );
}

export default function RatingFilter({ selected, onSelect }) {
  return (
    <div>
      <label className="group flex items-center gap-2.5 py-1.5 cursor-pointer select-none">
        <span
          className={`flex items-center justify-center w-[16px] h-[16px] rounded-full border-[1.5px] transition-colors ${
            selected === null ? "border-ink" : "border-[#B9B2A0] group-hover:border-ink"
          }`}
        >
          {selected === null && <span className="w-[8px] h-[8px] rounded-full bg-ink" />}
        </span>
        <span className="text-[12.5px] text-[#79725f]">Any rating</span>
        <input type="radio" checked={selected === null} onChange={() => onSelect(null)} className="sr-only" />
      </label>
      {[5, 4, 3, 2, 1].map((n) => (
        <RatingRadio key={n} value={n} selected={selected} onSelect={onSelect} />
      ))}
    </div>
  );
}