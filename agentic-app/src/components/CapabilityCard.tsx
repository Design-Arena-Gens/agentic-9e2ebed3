import type { Capability } from "@/data/capabilities";

type CapabilityCardProps = {
  capability: Capability;
};

export function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <article className="group relative flex flex-col gap-4 rounded-3xl border border-transparent bg-white p-8 shadow-sm ring-1 ring-zinc-100 transition hover:-translate-y-1 hover:shadow-xl hover:ring-indigo-100">
      <div className="absolute inset-x-0 -top-px h-[2px] rounded-full bg-gradient-to-r from-indigo-400 via-sky-400 to-purple-400 opacity-0 transition group-hover:opacity-100" />
      <h3 className="text-xl font-semibold text-zinc-900">
        {capability.title}
      </h3>
      <p className="text-sm text-zinc-600">{capability.description}</p>
      <ul className="mt-auto space-y-2 text-sm text-zinc-600">
        {capability.highlights.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 rounded-2xl bg-zinc-50 px-3 py-2 text-left leading-relaxed"
          >
            <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
