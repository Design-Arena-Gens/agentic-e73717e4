import { ReactNode } from "react";
import clsx from "clsx";

type SectionProps = {
  title: string;
  subtitle?: string;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({
  title,
  subtitle,
  aside,
  children,
  className
}: SectionProps) {
  return (
    <section
      className={clsx(
        "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur",
        className
      )}
    >
      <div className="flex flex-col gap-3 border-b border-white/10 pb-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-white">{title}</h2>
          {subtitle ? (
            <p className="mt-1 max-w-2xl text-sm text-neutral-300">{subtitle}</p>
          ) : null}
        </div>
        {aside ? <div className="text-sm text-neutral-200">{aside}</div> : null}
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}
