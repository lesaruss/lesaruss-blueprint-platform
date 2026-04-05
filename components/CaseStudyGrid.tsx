"use client";

import { useState } from "react";
import Link from "next/link";
import { CASE_STUDIES, type CaseStudy, type CaseStudyStatus } from "@/lib/case-studies";

const ARROW = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-3 h-3 shrink-0"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function statusBadgeClasses(status: CaseStudyStatus): string {
  switch (status) {
    case "live":
      return "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30";
    case "soon":
      return "bg-[#F69820]/20 text-[#F69820] border border-[#F69820]/30";
    case "partnership":
      return "bg-purple-500/20 text-purple-300 border border-purple-500/30";
    default:
      return "bg-white/10 text-white/60 border border-white/20";
  }
}

function FlipCard({ card }: { card: CaseStudy }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${card.name} case study`}
      className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F69820]"
      style={{
        height: "520px",
        perspective: "1200px",
        gridColumn: card.widthSpan ? `span ${card.widthSpan}` : undefined,
      }}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
    >
      {/* Inner — rotates */}
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Photo */}
          <img
            src={card.img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable={false}
          />
          {/* Gradient matte */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.25) 100%)`,
            }}
          />
          {/* Top row */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
            <span
              className={`text-[9px] font-black uppercase tracking-[0.18em] px-2 py-1 ${statusBadgeClasses(card.status)}`}
            >
              {card.statusLabel}
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-white/40">
              Click to flip
            </span>
          </div>
          {/* Monogram */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <span className="text-5xl font-black text-white/15 tracking-tight select-none">
              {card.initials}
            </span>
          </div>
          {/* Name plate */}
          <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
            <div
              className="w-8 h-[2px] mb-3"
              style={{ background: "#F69820" }}
            />
            <div className="text-2xl font-black uppercase tracking-tight text-white leading-none mb-1">
              {card.nameParts[0]}
              <br />
              {card.nameParts[1]}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50 mt-1">
              {card.type}
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 bg-[#0d0d0d] border border-white/8 flex flex-col p-6 gap-4"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Brand row */}
          <div className="flex items-center gap-3 shrink-0">
            <div
              className="w-9 h-9 flex items-center justify-center text-[10px] font-black tracking-tight shrink-0"
              style={{ background: card.badgeBg, color: card.badgeText }}
            >
              {card.initials}
            </div>
            <div>
              <div className="text-sm font-black uppercase tracking-tight text-white leading-none">
                {card.name}
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/40 mt-0.5">
                {card.type}
              </div>
            </div>
          </div>

          {/* Headline */}
          <h3 className="text-base font-black uppercase tracking-tight text-white leading-tight shrink-0">
            {card.headline.replace(/\.$/, "")}
            <span className="text-[#F69820]">.</span>
          </h3>

          {/* Body */}
          <p className="text-[11px] font-normal text-white/55 leading-relaxed flex-1 overflow-hidden">
            {card.body}
          </p>

          {/* Stats */}
          <div className="flex gap-5 shrink-0">
            {card.stats.map((s) => (
              <div key={s.label}>
                <div className="text-xl font-black text-[#F69820] leading-none">
                  {s.num}
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/35 mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`/case-studies/${card.slug}`}
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#F69820] hover:bg-[#d4800c] transition-colors text-[9px] font-black uppercase tracking-[0.18em] text-[#1a1a1a] shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            {card.cta}
            {ARROW}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyGrid() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 md:px-14" style={{ paddingTop: "100px" }}>
      {/* Header */}
      <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F69820] mb-3">
        Case Studies
      </p>
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#1a1a1a] leading-none mb-4">
        One System<span className="text-[#F69820]">.</span>
        <br />
        Every Industry<span className="text-[#F69820]">.</span>
      </h2>
      <p className="text-sm font-normal text-[#555555] max-w-xl leading-relaxed mb-10">
        From youth sports to public schools, from beauty to anime, the LESARUSS
        operating model does not change. Only the brand does. Click any card to
        see inside the build.
      </p>

      {/* Grid */}
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
      >
        {CASE_STUDIES.map((card) => (
          <FlipCard key={card.slug} card={card} />
        ))}
      </div>
    </div>
  );
}
