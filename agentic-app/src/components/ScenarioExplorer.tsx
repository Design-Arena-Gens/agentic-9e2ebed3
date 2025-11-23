"use client";

import { useMemo, useState } from "react";
import type { Scenario } from "@/data/capabilities";

type ScenarioExplorerProps = {
  scenarios: Scenario[];
};

export function ScenarioExplorer({ scenarios }: ScenarioExplorerProps) {
  const [selectedId, setSelectedId] = useState(scenarios[0]?.id ?? "");

  const activeScenario = useMemo(
    () => scenarios.find((scenario) => scenario.id === selectedId) ?? scenarios[0],
    [scenarios, selectedId],
  );

  return (
    <section className="grid gap-6 rounded-3xl border border-zinc-100 bg-white/90 p-8 shadow-inner shadow-black/5 backdrop-blur">
      <div className="flex flex-wrap gap-3">
        {scenarios.map((scenario) => {
          const isActive = scenario.id === activeScenario?.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setSelectedId(scenario.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "border-indigo-500 bg-indigo-50 text-indigo-600 shadow-sm"
                  : "border-zinc-200 bg-white text-zinc-600 hover:border-indigo-200 hover:text-indigo-500"
              }`}
            >
              {scenario.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-5 rounded-3xl bg-zinc-50/80 p-6 shadow-sm">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
            {activeScenario?.label}
          </p>
          <h3 className="text-2xl font-semibold text-zinc-900">
            {activeScenario?.headline}
          </h3>
          <p className="text-sm text-zinc-600">{activeScenario?.narrative}</p>
        </div>

        <ol className="space-y-3 text-sm text-zinc-600">
          {activeScenario?.steps.map((step, index) => (
            <li
              key={step}
              className="flex gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-zinc-100"
            >
              <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-xs font-semibold text-white">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <p className="rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/70 px-4 py-3 text-sm font-medium text-indigo-700">
          Impact: {activeScenario?.impact}
        </p>
      </div>
    </section>
  );
}
