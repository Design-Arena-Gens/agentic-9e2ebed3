type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <header className="max-w-xl space-y-3">
      <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 shadow-sm">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
        {title}
      </h2>
      <p className="text-sm text-zinc-600 sm:text-base">{description}</p>
    </header>
  );
}
