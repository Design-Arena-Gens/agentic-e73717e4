"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { generateViralPackage } from "@/lib/generator";
import { Section } from "@/components/section";
import { ScriptCard } from "@/components/script-card";
import { VisualPromptCard } from "@/components/visual-prompt-card";
import { OverlayStrip } from "@/components/overlay-strip";
import { WorkflowRoadmap } from "@/components/workflow-roadmap";
import { CaptionCard } from "@/components/caption-card";

const presets = [
  "Kinetic Canvas",
  "NeuroSketch",
  "PromptPilot",
  "RenderFlux",
  "AudioWeave"
];

export default function Home() {
  const [toolName, setToolName] = useState("PromptPilot");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const viralPackage = useMemo(() => generateViralPackage(toolName), [toolName]);

  return (
    <main className="grid-overlay relative mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-5 pb-16 pt-14">
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-white/10 bg-black/40 p-8 shadow-glow backdrop-blur"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-secondary">
              Design Arena Stack
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              AI Viral Video Architect
            </h1>
            <p className="mt-4 max-w-2xl text-base text-neutral-300">
              Drop any AI tool name and spin up a hyper-real Instagram Reel automation—script to scheduling—wired for 15s retention.
            </p>
          </div>
          <div className="w-full max-w-sm">
            <label className="text-xs uppercase tracking-wide text-neutral-400">
              Target AI Tool
            </label>
            <div className="mt-2 flex gap-2">
              <input
                value={toolName}
                onChange={(event) => setToolName(event.target.value)}
                className="flex-1 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/40"
                placeholder="Enter AI tool name"
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setToolName(preset)}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200 transition hover:border-brand-primary/60 hover:text-white"
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.header>

      <Section
        title="Phase 01 — Strategic Scripting"
        subtitle="Pattern interrupt hook, AI magic moment, and CTA engineered for Instagram retention physics."
        aside={
          <span className="rounded-full border border-brand-primary/40 bg-brand-primary/10 px-3 py-1 text-xs text-brand-primary">
            Runtime 15s · 3 beats
          </span>
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          {viralPackage.script.map((segment, index) => (
            <motion.div
              key={segment.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <ScriptCard segment={segment} />
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        title="Phase 02 — Hyper-Real Generation"
        subtitle="Lock persona prompts for Kling / Luma, pair with ElevenLabs voice spec, and auto-sync via lip-sync module."
        aside="Design Arena → Video & Audio Nodes"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {viralPackage.visualPrompts.map((prompt, index) => (
            <motion.div
              key={prompt.engine}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <VisualPromptCard prompt={prompt} />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-black/60 p-5"
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
              ElevenLabs Voice Spec
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-200">
              <li>Voice: Atlas · Clarity 92 · Stability 86 · Exaggeration 0</li>
              <li>Delivery: Conversational hype, 148 WPM, -2 LU match</li>
              <li>Output: 48k WAV, broadcast chain preset “CreatorBright”</li>
            </ul>
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-neutral-300">
              Lip-Sync Module: Auto ingest WAV + MP4 → Align visemes in 1 pass
            </div>
          </motion.div>
        </div>
      </Section>

      <Section
        title="Phase 03 — Viral Post-Production"
        subtitle="Retention edits, Hormozi captions, and motion cadence ready for Reel export."
        aside="Overlay Engine Ops"
      >
        <OverlayStrip overlays={viralPackage.overlays} />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/60 p-5 text-sm text-neutral-200">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
              Retention Automation
            </h3>
            <ul className="mt-3 space-y-2">
              <li>Apply 1.1x digital zoom every 3s, easing in-out 160ms.</li>
              <li>Caption engine: Hormozi layout, center safe-zone, drop shadow 45°.</li>
              <li>Background track: Trending “Ambient Pulse 128bpm” at -18dB.</li>
              <li>Mix bus limiter: -1dB ceiling, -12 LUFS integrated target.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/60 p-5 text-sm text-neutral-200">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
              Export Settings
            </h3>
            <ul className="mt-3 space-y-2">
              <li>Codec: H.265 · 1080x1920 · 23.98fps · Target 18 Mbps.</li>
              <li>Color: Rec.709, apply subtle teal/orange LUT @ 28% mix.</li>
              <li>Deliverable: MP4 &lt; 20 MB with baked captions + audio stem.</li>
              <li>Upload: Signed URL to Instagram Graph API /reels endpoint.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Phase 04 — Automated Distribution"
        subtitle="Webhook payload primes caption, hashtags, and posting window."
        aside="Scheduler Edge Function"
      >
        <CaptionCard
          caption={viralPackage.caption}
          keyword={viralPackage.keyword}
          toolName={viralPackage.toolName}
        />
      </Section>

      <Section
        title="Design Arena Flow Blueprint"
        subtitle="Node-by-node automation path. Plug into orchestrator or export as JSON DSL."
        aside={
          mounted ? (
            <code className="rounded-full bg-white/5 px-3 py-1 text-xs text-brand-secondary">
              Keyword · {viralPackage.keyword}
            </code>
          ) : null
        }
      >
        <WorkflowRoadmap nodes={viralPackage.workflow} />
      </Section>
    </main>
  );
}
