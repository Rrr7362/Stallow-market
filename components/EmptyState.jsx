import React from "react";
import { Ticket } from "lucide-react";

export default function EmptyState({ onReset }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-[#D8D1C0] rounded-[14px] bg-card">
      <div className="w-12 h-12 rounded-full bg-[#EFE9DB] flex items-center justify-center mb-4">
        <Ticket size={20} className="text-muted" />
      </div>
      <p className="text-[15px] font-bold mb-1 font-display">No items match your criteria.</p>
      <p className="text-[12.5px] text-muted mb-5">Try widening your price range or clearing a filter.</p>
      <button
        onClick={onReset}
        className="px-4 py-2 rounded-[8px] bg-ink text-paper text-[12.5px] font-semibold hover:bg-[#333029] transition-colors"
      >
        Reset filters
      </button>
    </div>
  );
}