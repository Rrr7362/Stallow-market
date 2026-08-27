import React from "react";
import StarRow from "./StarRow.jsx";

export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-card rounded-[10px] overflow-hidden border border-[#E4DECD] shadow-[0_1px_2px_rgba(28,27,24,0.04)] hover:shadow-[0_8px_20px_rgba(28,27,24,0.10)] hover:-translate-y-[2px] transition-all duration-200">
      <div className="relative aspect-square overflow-hidden bg-[#EFE9DB]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
          loading="lazy"
        />
        <span className="absolute top-2.5 left-2.5 px-2 py-[3px] rounded-[4px] bg-ink/85 text-paper text-[10px] font-bold tracking-wider uppercase font-mono">
          {product.category}
        </span>
      </div>

      {/* die-cut perforation between image and details */}
      <div className="relative h-0">
        <div className="absolute left-0 right-0 -top-[1px] border-t border-dashed border-[#D8D1C0]" />
        <div className="absolute -left-[7px] -top-[7px] w-[14px] h-[14px] rounded-full bg-paper" />
        <div className="absolute -right-[7px] -top-[7px] w-[14px] h-[14px] rounded-full bg-paper" />
      </div>

      <div className="p-3.5">
        <p className="text-[13.5px] font-semibold text-ink leading-snug mb-1.5">{product.name}</p>
        <div className="flex items-center justify-between">
          <StarRow rating={product.rating} />
          <span className="text-[14px] font-bold text-signal font-mono">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}