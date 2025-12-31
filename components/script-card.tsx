import type { ScriptSegment } from "@/lib/generator";

type ScriptCardProps = {
  segment: ScriptSegment;
};

const labelColors: Record<ScriptSegment["label"], string> = {
  Hook: "text-brand-secondary",
  Content: "text-brand-primary",
  CallToAction: "text-brand-secondary"
};

export function ScriptCard({ segment }: ScriptCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/60 p-5">
      <header className="flex items-center justify-between text-xs uppercase tracking-wide text-neutral-400">
        <span className={labelColors[segment.label] ?? "text-white"}>
          {segment.label}
        </span>
        <span>
          {segment.start.toFixed(0)}s &rarr; {segment.end.toFixed(0)}s
        </span>
      </header>
      <p className="text-base font-medium leading-relaxed text-neutral-100">
        {segment.transcript}
      </p>
    </article>
  );
}
