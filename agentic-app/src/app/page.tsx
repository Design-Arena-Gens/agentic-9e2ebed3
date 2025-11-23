import Link from "next/link";
import {
  capabilities,
  workflow,
  scenarios,
  toolbelt,
} from "@/data/capabilities";
import { SectionHeader } from "@/components/SectionHeader";
import { CapabilityCard } from "@/components/CapabilityCard";
import { ScenarioExplorer } from "@/components/ScenarioExplorer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35)_0,_rgba(15,23,42,0.1)_50%,_rgba(10,10,10,1)_100%)]" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-20 sm:px-10 lg:px-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-indigo-300/40 bg-indigo-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-indigo-200">
              Agentic Operating System
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              I orchestrate research, creation, and automation from prompt to
              production.
            </h1>
            <p className="max-w-2xl text-base text-zinc-300 sm:text-lg">
              This agent pairs deep reasoning with reliable execution. I map
              ambiguous goals into structured plans, collaborate with your
              systems, and deliver outcomes that stay aligned with policy,
              governance, and measurable impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#capabilities"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-100"
              >
                Explore capabilities
              </Link>
              <Link
                href="#scenarios"
                className="flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-100"
              >
                Watch it in action
              </Link>
            </div>
          </div>

          <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
            <div className="absolute -top-20 right-0 h-60 w-60 rounded-full bg-indigo-500/40 blur-3xl" />
            <dl className="relative space-y-6">
              <div className="grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-2">
                <dt className="text-2xl font-semibold text-white">360+</dt>
                <dd className="text-sm text-zinc-300">
                  hours saved each quarter by automating research and reporting
                  loops.
                </dd>
              </div>
              <div className="grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-2">
                <dt className="text-2xl font-semibold text-white">95%</dt>
                <dd className="text-sm text-zinc-300">
                  compliance coverage through built-in guardrails and approval
                  routing.
                </dd>
              </div>
              <div className="grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-2">
                <dt className="text-2xl font-semibold text-white">15 min</dt>
                <dd className="text-sm text-zinc-300">
                  average time to spin up a new workflow with observability and
                  escalation paths.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="capabilities" className="space-y-12">
          <SectionHeader
            eyebrow="CORE MODULES"
            title="What I deliver end-to-end"
            description="Modular abilities layer into a cohesive agentic stack. Combine them to research, ideate, execute, and continuously improve without breaking trust."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.title} capability={capability} />
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <SectionHeader
            eyebrow="AUTONOMOUS WORKFLOW"
            title="How I navigate from brief to measurable impact"
            description="Every mission follows a transparent playbook. Each phase includes checkpoints, telemetry, and human touchpoints when needed."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {workflow.map((stage) => (
              <article
                key={stage.phase}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-zinc-900/60 p-6 shadow-inner shadow-black/20"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                  {stage.phase}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {stage.focus}
                </h3>
                <ul className="space-y-3 text-sm text-zinc-300">
                  {stage.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="scenarios" className="space-y-12">
          <SectionHeader
            eyebrow="INTERACTIVE DEMO"
            title="Choose a mission and see the action plan"
            description="Each scenario demonstrates how I prioritize, reason, and execute while keeping humans informed."
          />
          <ScenarioExplorer scenarios={scenarios} />
        </section>

        <section className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-10">
          <SectionHeader
            eyebrow="SYSTEM TOOLBELT"
            title="Why the agent stays dependable"
            description="Safety, observability, and collaboration are built in. Here is the toolkit that keeps workflows resilient."
          />
          <div className="flex flex-wrap gap-3">
            {toolbelt.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-200 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500 p-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">
              Ready for your next mission?
            </h2>
            <p className="text-sm sm:text-base">
              Drop a brief, connect tools, and I will deliver the plan, execution,
              and reporting loop automatically.
            </p>
          </div>
          <Link
            href="mailto:hello@agentic-os.dev"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
          >
            Initiate engagement
          </Link>
        </section>
      </main>
    </div>
  );
}
