import Link from "next/link";
import { StarIcon } from "./icons";
import { GITHUB_URL, DOCS_URL, NPM_URL } from "@/lib/constants";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center bg-bg/80 backdrop-blur-md border-b border-border">
      <Link href="/" className="font-bold text-base  tracking-tight -">
        zeroreg
      </Link>

      <ul className="hidden md:flex gap-10">
        <li>
          <Link
            href={DOCS_URL}
            className="text-text-muted text-sm hover:text-text transition-colors"
          >
            Docs
          </Link>
        </li>
        <li>
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted text-sm hover:text-text transition-colors"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            href={NPM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted text-sm hover:text-text transition-colors"
          >
            npm
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <Link
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium border border-gold text-gold bg-gold-dim hover:bg-gold hover:text-bg transition-all"
        >
          <StarIcon />
          <span className="hidden sm:inline">Star on GitHub</span>
        </Link>
        <Link
          href={DOCS_URL}
          className="px-5 py-2.5 rounded-md text-sm font-medium border border-border text-text hover:bg-accent hover:text-bg hover:border-accent transition-all"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
