"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/5519971190564?text=Olá%2C%20vim%20pelo%20site%20da%20Sinaliza%20Brasil%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Voltar para o início"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logo-sinaliza-brasil-branca.png"
            alt="Logo da Sinaliza Brasil"
            width={320}
            height={320}
            priority
            className="h-24 w-24 object-contain sm:h-28 sm:w-28"
          />
        </Link>

        <nav className="hidden items-center gap-8 font-medium text-slate-300 md:flex">
          <a href="#produtos" className="transition-colors hover:text-red-500">
            Produtos
          </a>

          <a href="#empresa" className="transition-colors hover:text-red-500">
            Empresa
          </a>

          <a href="#duvidas" className="transition-colors hover:text-red-500">
            Dúvidas
          </a>

          <a href="#contato" className="transition-colors hover:text-red-500">
            Contato
          </a>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Solicitar orçamento pelo WhatsApp"
          className="flex shrink-0 items-center gap-2 rounded-xl bg-green-500 px-4 py-3 font-bold text-white transition hover:bg-green-600 sm:px-5"
        >
          <FaWhatsapp size={22} />

          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
