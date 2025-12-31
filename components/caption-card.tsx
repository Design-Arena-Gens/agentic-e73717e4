import type { ViralPackage } from "@/lib/generator";

type CaptionCardProps = Pick<ViralPackage, "caption" | "keyword" | "toolName">;

export function CaptionCard({ caption, keyword, toolName }: CaptionCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
        Distribution Payload
      </h3>
      <div className="mt-3 space-y-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-neutral-400">
            Caption Body
          </p>
          <pre className="mt-1 whitespace-pre-wrap rounded-xl bg-white/5 p-4 text-sm leading-relaxed text-neutral-100">
            {caption.caption}
          </pre>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-neutral-400">
            Hashtags
          </p>
          <div className="mt-1 flex flex-wrap gap-2">
            {caption.hashtags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-brand-primary/30 bg-brand-primary/10 px-4 py-3 text-sm text-brand-primary">
          CTA Keyword locked to: <span className="font-semibold">{keyword}</span> · Tool:{" "}
          <span className="font-semibold">{toolName}</span>
        </div>
      </div>
    </div>
  );
}
