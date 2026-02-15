import Link from "next/link";
import { StarIcon } from "./icons";
import { GITHUB_URL, DOCS_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 pb-16 max-w-4xl mx-auto">
      <p className="text-xs tracking-[0.15em] uppercase text-text-muted mb-8 font-medium">
        A JavaScript library
      </p>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
        Regex was a mistake,
        <br />
        <span className="text-text-muted">just like your ex.</span>
      </h1>

      <p className="text-lg text-text-muted max-w-md mb-10 leading-relaxed">
        Meet <strong className="text-text font-semibold">zeroReg</strong> — write
        regex without{" "}
        <em className="italic font-semibold text-text underline decoration-wavy decoration-red decoration-2 underline-offset-4">
          tears
        </em>{" "}
        or{" "}
        <em className="italic font-semibold text-text underline decoration-wavy decoration-red decoration-2 underline-offset-4">
          confusion
        </em>
        .
      </p>

      <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
        <Link
          href={DOCS_URL}
          className="px-8 py-3.5 rounded-md font-medium text-base bg-accent text-bg border border-accent hover:opacity-90 hover:-translate-y-0.5 transition-all"
        >
          Get Started
        </Link>
        <Link
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 py-3.5 rounded-md font-medium text-base border border-gold text-gold bg-gold-dim hover:bg-gold hover:text-bg transition-all"
        >
          <StarIcon />
          Star on GitHub
        </Link>
      </div>

      <div className="flex items-center justify-center gap-6 flex-wrap">
        <span className="text-text-muted text-sm">91.1kb gzipped</span>
        <span className="text-text-muted text-sm before:content-[''] before:w-1 before:h-1 before:bg-zinc-700 before:rounded-full before:inline-block before:mr-6">
          Zero dependencies
        </span>
        <span className="text-text-muted text-sm before:content-[''] before:w-1 before:h-1 before:bg-zinc-700 before:rounded-full before:inline-block before:mr-6">
          TypeScript ready
        </span>
      </div>
    </section>
  );
}
