"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-slate-900">
          Sinaliza <span className="text-red-600">Brasil</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-slate-700 font-medium">
          <a href="#produtos" className="hover:text-red-600 transition">
            Produtos
          </a>

          <a href="#empresa" className="hover:text-red-600 transition">
            Empresa
          </a>

          <a href="#contato" className="hover:text-red-600 transition">
            Contato
          </a>
        </nav>

        <a
          href="https://wa.me/5519971190564"
          target="_blank"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          <FaWhatsapp size={22} />
          WhatsApp
        </a>
      </div>
    </header>
  );
}
