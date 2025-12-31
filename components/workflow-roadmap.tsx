import type { WorkflowNode } from "@/lib/generator";
import { motion } from "framer-motion";

type WorkflowRoadmapProps = {
  nodes: WorkflowNode[];
};

export function WorkflowRoadmap({ nodes }: WorkflowRoadmapProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-wide text-neutral-500">
            <span>{node.title}</span>
            <span className="text-brand-primary">Step {index + 1}</span>
          </div>
          <p className="mt-3 text-sm text-neutral-200">{node.description}</p>
          <div className="mt-4 space-y-2 text-sm text-neutral-100">
            <p>
              <span className="text-neutral-400">Action · </span>
              {node.action}
            </p>
            <p>
              <span className="text-neutral-400">Output · </span>
              {node.output}
            </p>
          </div>
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-[1px] rounded-2xl border border-brand-primary/50 blur-md" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
