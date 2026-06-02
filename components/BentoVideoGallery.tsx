"use client";

import { useEffect, useRef } from "react";
import { bentoVideos } from "@/lib/site";

/**
 * Dual-column vertical video marquee (Ripz Tattoo interior slider pattern).
 * Left column scrolls up, right column scrolls down — infinite autoplay loop.
 */

const COL_LEFT = bentoVideos.filter((_, i) => i % 2 === 0);
const COL_RIGHT = bentoVideos.filter((_, i) => i % 2 === 1);

function VideoCard({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.play().catch(() => undefined);
  }, [src]);

  return (
    <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden border border-white/15 bg-ink-800">
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-label={label}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-ink-900/10"
        aria-hidden="true"
      />
    </div>
  );
}

function MarqueeColumn({
  videos,
  direction,
}: {
  videos: typeof COL_LEFT;
  direction: "up" | "down";
}) {
  // Duplicate list so translateY(-50%) loops seamlessly.
  const track = [...videos, ...videos];

  return (
    <div className="video-marquee-viewport h-full min-h-0 overflow-hidden">
      <div
        className={`video-marquee-track flex flex-col gap-3 ${
          direction === "up" ? "video-marquee-up" : "video-marquee-down"
        }`}
      >
        {track.map((video, i) => (
          <VideoCard key={`${video.src}-${i}`} src={video.src} label={video.label} />
        ))}
      </div>
    </div>
  );
}

export default function BentoVideoGallery() {
  return (
    <div
      className="video-marquee-card w-full overflow-hidden rounded-none border border-white/12 bg-ink-800/80 p-3 sm:p-4"
      aria-label="Training highlights video gallery"
    >
      <div className="grid h-[min(72vh,560px)] grid-cols-2 gap-3 sm:gap-4">
        <MarqueeColumn videos={COL_LEFT} direction="up" />
        <MarqueeColumn videos={COL_RIGHT} direction="down" />
      </div>
    </div>
  );
}
