import { notFound } from "next/navigation";
import Link from "next/link";
import NavMenu from "@/components/NavMenu";
import CaseStudyVideoPlayer from "@/components/CaseStudyVideoPlayer";
import { getCaseStudyBySlug, CASE_STUDIES } from "@/lib/case-studies";

const CIRCLE_URL =
  process.env.NEXT_PUBLIC_CIRCLE_URL || "https://lesaruss.circle.so";

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: `${cs.name} Case Study | LESARUSS`,
    description: cs.heroTagline,
  };
}

// Icon map for system components
function ComponentIcon({ name }: { name: string }) {
  switch (name) {
    case "globe":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "edit":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      );
    case "credit-card":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
  }
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const others = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-4 bg-transparent">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-baseline gap-[3px] text-xl font-black uppercase tracking-tight text-white hover:opacity-80 transition-opacity"
            aria-label="LESARUSS"
          >
            LESARUSS
            <span
              className="block w-[7px] h-[7px] rounded-full shrink-0 relative"
              style={{ background: "#F69820", top: "2px" }}
              aria-hidden="true"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest">
            <Link href="/case-studies" className="hover:text-white transition-colors">
              Case Studies
            </Link>
            <span>/</span>
            <span className="text-white/80">{cs.name}</span>
          </nav>
        </div>
        <NavMenu circleLoginUrl={`${CIRCLE_URL}/sign_in`} />
      </nav>

      {/* HERO */}
      <section
        className="relative overflow-hidden flex flex-row items-stretch gap-12"
        style={{
          marginTop: "62px",
          minHeight: "640px",
          padding: "68px 56px",
        }}
        aria-label={`${cs.name} case study hero`}
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={cs.heroBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ opacity: 0.35 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: cs.heroOverlay }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(7,7,7,0.95) 0%, rgba(7,7,7,0.5) 50%, rgba(7,7,7,0.15) 100%)",
            }}
          />
        </div>

        {/* Back button - floats, outside content flow */}
        <Link
          href="/case-studies"
          className="absolute z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
          style={{ top: "28px", left: "56px" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
          </svg>
          All Case Studies
        </Link>

        {/* Left content — status at top, stats at bottom */}
        <div
          className="relative z-10 flex-1 min-w-0 flex flex-col"
          style={{ justifyContent: "space-between" }}
        >
          {/* Status row */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 border border-white/20 text-white/80">
              {cs.heroStatusLabel}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
              {cs.heroIndustry}
            </span>
          </div>

          {/* Brand name */}
          <h1
            className="font-black uppercase tracking-tight text-white leading-none"
            style={{ fontSize: "clamp(48px, 6vw, 86px)" }}
          >
            {cs.nameParts[0]}
            <br />
            {cs.nameParts[1]}
            <span style={{ color: "#F69820" }}>.</span>
          </h1>

          {/* Tagline */}
          <p className="text-sm font-light text-white/60 leading-relaxed max-w-md">
            {cs.heroTagline}
          </p>

          {/* Stats row */}
          <div className="flex gap-10 flex-wrap">
            {cs.heroStats.map((s) => (
              <div key={s.label}>
                <div
                  className="font-black leading-none"
                  style={{ fontSize: "28px", color: "#F69820" }}
                >
                  {s.num}
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — 16:9 video player */}
        <div className="relative z-10 flex-none self-center" style={{ width: "46%" }}>
          <CaseStudyVideoPlayer />
        </div>
      </section>

      {/* BODY */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-14">

        {/* Overview bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#1a1a1a]/10">
          {[
            { label: "Industry", value: cs.industry, orange: false },
            { label: "Platform", value: cs.platform ?? "In Build", orange: !!cs.platform },
            { label: "Stack", value: cs.stack, orange: false },
            { label: "Timeline", value: cs.timeline, orange: false },
          ].map((cell) => (
            <div
              key={cell.label}
              className="py-6 pr-6 border-r border-[#1a1a1a]/10 last:border-r-0"
            >
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#555555] mb-1">
                {cell.label}
              </div>
              <div
                className="text-sm font-black uppercase tracking-tight"
                style={{ color: cell.orange ? "#F69820" : "#1a1a1a" }}
              >
                {cell.value}
              </div>
            </div>
          ))}
        </div>

        {/* Problem + Approach */}
        <div className="grid md:grid-cols-2 gap-12 py-16 border-b border-[#1a1a1a]/10">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#555555] mb-4">
              01 — The Problem
            </p>
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#1a1a1a] leading-tight mb-6">
              {cs.problemTitle.replace(/\.$/, "")}
              <span style={{ color: "#F69820" }}>.</span>
            </h2>
            <div className="flex flex-col gap-4">
              {cs.problemBody.map((p, i) => (
                <p key={i} className="text-sm font-normal text-[#555555] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#555555] mb-4">
              02 — The Approach
            </p>
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#1a1a1a] leading-tight mb-6">
              {cs.approachTitle.replace(/\.$/, "")}
              <span style={{ color: "#F69820" }}>.</span>
            </h2>
            <div className="flex flex-col gap-4">
              {cs.approachBody.map((p, i) => (
                <p key={i} className="text-sm font-normal text-[#555555] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="py-16 border-b border-[#1a1a1a]/10">
          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#555555] mb-4">
            03 — The Results
          </p>
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#1a1a1a] mb-10">
            What the System Built<span style={{ color: "#F69820" }}>.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]/8">
            {cs.results.map((r) => (
              <div key={r.label} className="bg-white py-10 px-8">
                <div
                  className="font-black leading-none mb-2"
                  style={{ fontSize: "clamp(36px, 4vw, 52px)", color: "#F69820" }}
                >
                  {r.num}
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#555555] leading-snug">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System components */}
        <div className="py-16 border-b border-[#1a1a1a]/10">
          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#555555] mb-4">
            04 — What Was Built
          </p>
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#1a1a1a] mb-8">
            The Full Stack<span style={{ color: "#F69820" }}>.</span>
          </h2>
          <ul className="flex flex-col divide-y divide-[#1a1a1a]/8">
            {cs.systemComponents.map((item) => (
              <li key={item.name} className="flex items-center gap-5 py-5">
                <div className="w-10 h-10 flex items-center justify-center shrink-0 bg-[#f5f5f5] text-[#555555]">
                  <ComponentIcon name={item.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-black uppercase tracking-tight text-[#1a1a1a]">
                    {item.name}
                  </div>
                  <div className="text-xs font-normal text-[#555555] mt-0.5">
                    {item.desc}
                  </div>
                </div>
                <span
                  className="text-[9px] font-black uppercase tracking-[0.16em] px-3 py-1 shrink-0"
                  style={
                    item.status === "live"
                      ? { background: "#d1fae5", color: "#065f46" }
                      : { background: "#f3f4f6", color: "#6b7280" }
                  }
                >
                  {item.status === "live" ? "Live" : "In Build"}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Screenshots rail */}
        <div className="py-16 border-b border-[#1a1a1a]/10">
          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#555555] mb-4">
            05 — Platform Preview
          </p>
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#1a1a1a] mb-8">
            Inside the Build<span style={{ color: "#F69820" }}>.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Home - Dark", "Community Feed", "Member Dashboard"].map((label) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-3 border border-[#1a1a1a]/10 bg-[#f9f9f9]"
                style={{ aspectRatio: "16/10" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="#cccccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaaaaa]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* More case studies */}
        <div className="py-16 border-b border-[#1a1a1a]/10">
          <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#555555] mb-3">
            More Case Studies
          </p>
          <h2 className="text-2xl font-black uppercase tracking-tight text-[#1a1a1a] mb-8">
            Same System. Every Industry<span style={{ color: "#F69820" }}>.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/case-studies/${other.slug}`}
                className="flex flex-col gap-3 p-5 border border-[#1a1a1a]/10 hover:border-[#F69820] hover:bg-[#F69820]/5 transition-all"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center text-[10px] font-black tracking-tight"
                  style={{ background: other.badgeBg, color: other.badgeText }}
                >
                  {other.initials}
                </div>
                <div>
                  <div className="text-sm font-black uppercase tracking-tight text-[#1a1a1a] leading-tight">
                    {other.name}
                  </div>
                  <div className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#555555] mt-0.5">
                    {other.type}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="py-16">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#555555] mb-3">
                Ready to Build
              </p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#1a1a1a] leading-none">
                Your Brand.
                <br />
                Our System<span style={{ color: "#F69820" }}>.</span>
              </h2>
            </div>
            <Link
              href="/intake"
              className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white text-xs font-black uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#F69820] hover:text-[#1a1a1a] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a]/8 px-6 md:px-14 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-baseline gap-[3px]"
            aria-label="LESARUSS"
          >
            <span className="text-sm font-black uppercase tracking-tight text-[#1a1a1a]">
              LESARUSS
            </span>
            <span
              className="block w-[6px] h-[6px] rounded-full shrink-0 relative"
              style={{ background: "#F69820", top: "1px" }}
              aria-hidden="true"
            />
          </Link>
          <p className="text-xs font-normal text-[#555555] tracking-wide">
            &copy; {new Date().getFullYear()} LESARUSS. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
