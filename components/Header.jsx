import React from "react";
import { Ticket } from "lucide-react";

export default function Header({ totalCount }) {
  return (
    <header className="border-b border-line bg-card/90 backdrop-blur sticky top-0 z-30">
      <div className="max-w-[1280px] mx-auto px-6 py-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-[6px] bg-ink flex items-center justify-center">
          <Ticket size={16} className="text-paper" strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-[18px] font-bold tracking-tight leading-none font-display">
            STALLROW MARKET
          </h1>
          <p className="text-[11px] text-muted tracking-widest uppercase mt-0.5 font-mono">
            {totalCount} items in inventory
          </p>
        </div>
      </div>
    </header>
  );
}