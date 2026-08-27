import React from "react";
import { Star } from "lucide-react";

export default function StarRow({ rating, size = 13 }) {
  return (
    <div className="flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={size}
          strokeWidth={1.5}
          className={n <= rating ? "fill-signal text-signal" : "fill-none text-[#C9C2B4]"}
        />
      ))}
    </div>
  );
}