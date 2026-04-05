import Link from "next/link";
import NavMenu from "@/components/NavMenu";
import CaseStudyGrid from "@/components/CaseStudyGrid";

const CIRCLE_URL =
  process.env.NEXT_PUBLIC_CIRCLE_URL || "https://lesaruss.circle.so";

export const metadata = {
  title: "Case Studies | LESARUSS",
  description:
    "One system, every industry. See how the LESARUSS operating model works across brands.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-14 py-4 bg-white border-b border-[#1a1a1a]/8">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-baseline gap-[3px] text-xl font-black uppercase tracking-tight text-[#1a1a1a] hover:opacity-80 transition-opacity"
            aria-label="LESARUSS"
          >
            LESARUSS
            <span
              className="block w-[7px] h-[7px] rounded-full shrink-0 relative"
              style={{ background: "#F69820", top: "2px" }}
              aria-hidden="true"
            />
          </Link>
        </div>
        <NavMenu circleLoginUrl={`${CIRCLE_URL}/sign_in`} />
      </nav>

      {/* Card Grid */}
      <CaseStudyGrid />

      {/* CTA */}
      <section className="max-w-[1100px] mx-auto px-6 md:px-14 py-16">
        <div className="border-t border-[#1a1a1a]/10 pt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#555555] mb-3">
              Ready to Build
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#1a1a1a] leading-none">
              Your Brand Is
              <br />
              Next in Line<span className="text-[#F69820]">.</span>
            </h2>
          </div>
          <Link
            href="/intake"
            className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white text-xs font-black uppercase tracking-[0.2em] px-10 py-4 hover:bg-[#F69820] hover:text-[#1a1a1a] transition-colors"
          >
            Start Your Intake
          </Link>
        </div>
      </section>

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
