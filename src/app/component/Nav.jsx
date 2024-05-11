import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="flex justify-end p-4 bg-[#333]">
      <div className="flex gap-4 text-white font-mono">
        <Link href="/quiz1" className="hover:text-red-500 transition">Quiz 1</Link>
        <Link href="/quiz2" className="hover:text-red-500 transition">Quiz 2</Link>
        <Link href="/quiz3" className="hover:text-red-500 transition">Quiz 3</Link>
        <Link href="/quiz4" className="hover:text-red-500 transition">Quiz 4</Link>
      </div>
    </nav>
  );
}
