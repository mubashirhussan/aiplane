'use client';

import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-end p-4 gap-6">
      <Link href="/about" className="hover:text-cyan-400">About</Link>
      <Link href="/blog" className="hover:text-cyan-400">Blog</Link>
      <Link href="/help" className="hover:text-cyan-400">Help</Link>
      <Link href="/contact" className="hover:text-cyan-400">Contact</Link>
    </header>
  );
}
