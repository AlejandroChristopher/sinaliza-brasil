import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";

type LegalPageLayoutProps = {
  title: string;
  description: string;
  updatedAt: string;
  children: ReactNode;
};

export default function LegalPageLayout({
  title,
  description,
  updatedAt,
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            aria-label="Voltar para a página inicial"
            className="inline-flex items-center"
          >
            <Image
              src="/logo-sinaliza-brasil-branca.png"
              alt="Logo da Sinaliza Brasil"
              width={220}
              height={120}
              priority
              className="h-20 w-32 object-contain sm:w-40"
            />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-red-500 hover:text-red-400"
          >
            <ArrowLeft size={18} />
            Voltar ao site
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden px-6 py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute left-0 top-20 h-80 w-80 rounded-full bg-red-600/10 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="text-center">
            <span className="font-semibold uppercase tracking-[0.2em] text-red-400">
              Sinaliza Brasil
            </span>

            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {description}
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Última atualização: {updatedAt}
            </p>
          </div>

          <article className="mt-12 rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur sm:p-10">
            <div className="legal-content space-y-10 text-slate-300">
              {children}
            </div>
          </article>

          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">Entre em contato</h2>

            <p className="mt-2 text-slate-400">
              Em caso de dúvidas sobre este documento, fale com a Sinaliza
              Brasil.
            </p>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="mailto:Sinaliza.brasil@icloud.com"
                className="inline-flex items-center gap-3 text-slate-300 transition hover:text-white"
              >
                <Mail size={20} className="text-red-500" />
                Sinaliza.brasil@icloud.com
              </a>

              <a
                href="tel:+5519971190564"
                className="inline-flex items-center gap-3 text-slate-300 transition hover:text-white"
              >
                <Phone size={20} className="text-red-500" />
                (19) 97119-0564
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
