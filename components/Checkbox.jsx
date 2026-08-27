import React from "react";

export default function Checkbox({ checked, onChange, label, count }) {
  return (
    <label className="group flex items-center justify-between py-1.5 cursor-pointer select-none">
      <span className="flex items-center gap-2.5">
        <span
          className={`relative flex items-center justify-center w-[16px] h-[16px] border-[1.5px] rounded-[3px] transition-colors ${
            checked ? "bg-ink border-ink" : "border-[#B9B2A0] group-hover:border-ink"
          }`}
        >
          {checked && (
            <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
              <path d="M1 3.3L3.2 5.5L8 1" stroke="#FAF7EF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        <span className="text-[13.5px] tracking-wide text-ink font-medium font-mono">{label}</span>
      </span>
      <span className="text-[11px] text-muted tabular-nums">{count}</span>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" />
    </label>
  );
}