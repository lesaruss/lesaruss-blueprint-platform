"use client";

import { useState } from "react";

const PLAY_VIDEO_ID = "LESARUSS_CASE_STUDY_PLACEHOLDER";

export default function CaseStudyVideoPlayer({ videoId = PLAY_VIDEO_ID }: { videoId?: string }) {
  const [playing, setPlaying] = useState(false);

  const isPlaceholder =
    !videoId || videoId.includes("PLACEHOLDER");

  return (
    <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
      {playing && !isPlaceholder ? (
        <iframe
          className="absolute inset-0 w-full h-full rounded-2xl"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Brand Explainer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <button
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#F69820] transition-all duration-300 group"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
          }}
          onClick={() => setPlaying(true)}
          aria-label="Play 15-second brand explainer video"
        >
          {/* Play button */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200"
            style={{ background: "#F69820" }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7"
              style={{ fill: "#1a1a1a", marginLeft: "3px" }}
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>

          {/* Label */}
          <div className="text-center">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-white mb-1">
              Brand Explainer
            </div>
            <div className="text-[10px] font-normal text-white/45 tracking-wide">
              15-second overview
            </div>
          </div>

          {/* Duration bar */}
          <div className="absolute bottom-4 left-5 right-5">
            <div className="text-[9px] font-bold text-white/30 uppercase tracking-[0.14em] mb-1">
              0:15
            </div>
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: "0%", background: "#F69820" }}
              />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
