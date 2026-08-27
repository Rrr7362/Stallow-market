import React, { useCallback } from "react";

/**
 * Dual-point price range slider built from two overlapping
 * <input type="range"> elements sharing one visual track.
 */
export default function PriceRangeSlider({ min, max, floor, ceil, onChange }) {
  const pctMin = ((min - floor) / (ceil - floor)) * 100;
  const pctMax = ((max - floor) / (ceil - floor)) * 100;

  const handleMin = useCallback(
    (e) => {
      const v = Math.min(Number(e.target.value), max - 1);
      onChange(v, max);
    },
    [max, onChange]
  );

  const handleMax = useCallback(
    (e) => {
      const v = Math.max(Number(e.target.value), min + 1);
      onChange(min, v);
    },
    [min, onChange]
  );

  return (
    <div className="pt-1 pb-2">
      <div className="relative h-[3px] rounded-full bg-[#DFD8C8] mt-4 mb-5">
        <div
          className="absolute h-[3px] rounded-full bg-ink"
          style={{ left: `${pctMin}%`, right: `${100 - pctMax}%` }}
        />
        <input
          type="range"
          min={floor}
          max={ceil}
          value={min}
          onChange={handleMin}
          aria-label="Minimum price"
          className="range-thumb absolute w-full top-1/2 -translate-y-1/2 appearance-none bg-transparent pointer-events-none"
          style={{ zIndex: min > ceil - 30 ? 5 : 3 }}
        />
        <input
          type="range"
          min={floor}
          max={ceil}
          value={max}
          onChange={handleMax}
          aria-label="Maximum price"
          className="range-thumb absolute w-full top-1/2 -translate-y-1/2 appearance-none bg-transparent pointer-events-none"
          style={{ zIndex: 4 }}
        />
      </div>
      <div className="flex items-center justify-between text-[12px] font-mono">
        <span className="px-2 py-1 rounded bg-[#EFE9DB] text-ink font-semibold">${min}</span>
        <span className="text-muted">to</span>
        <span className="px-2 py-1 rounded bg-[#EFE9DB] text-ink font-semibold">
          ${max}
          {max === ceil ? "+" : ""}
        </span>
      </div>
    </div>
  );
}