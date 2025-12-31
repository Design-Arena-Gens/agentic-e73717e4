import type { VisualPrompt } from "@/lib/generator";

type VisualPromptCardProps = {
  prompt: VisualPrompt;
};

export function VisualPromptCard({ prompt }: VisualPromptCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-black/40 to-black/80 p-5">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-neutral-400">
        <span>{prompt.engine} Visual Persona</span>
        <span className="text-brand-secondary">{prompt.persona}</span>
      </div>
      <p className="text-sm leading-relaxed text-neutral-100">{prompt.prompt}</p>
      <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-300">
        Output · 4K 9:16 talking head, ready for lip-sync ingest
      </div>
    </div>
  );
}
