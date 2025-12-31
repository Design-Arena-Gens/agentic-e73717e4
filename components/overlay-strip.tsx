import type { OverlayInstruction } from "@/lib/generator";

type OverlayStripProps = {
  overlays: OverlayInstruction[];
};

const colorClasses: Record<OverlayInstruction["color"], string> = {
  yellow: "bg-brand-secondary text-black",
  green: "bg-brand-primary text-black",
  white: "bg-white text-black"
};

export function OverlayStrip({ overlays }: OverlayStripProps) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
      {overlays.map((overlay, index) => (
        <div
          key={`${overlay.timestamp}-${index}`}
          className={`flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4`}
        >
          <span className="text-sm text-neutral-300">
            {overlay.timestamp.toFixed(0)}s
          </span>
          <span
            className={`inline-flex h-16 items-center justify-center rounded-lg px-3 text-center text-sm font-semibold uppercase tracking-tight ${colorClasses[overlay.color]}`}
          >
            {overlay.caption}
          </span>
          <span className="text-[11px] uppercase tracking-widest text-neutral-500">
            Safe Zone Locked
          </span>
        </div>
      ))}
    </div>
  );
}
