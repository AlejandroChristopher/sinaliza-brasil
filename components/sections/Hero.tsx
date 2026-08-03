"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  PackageCheck,
  RotateCcw,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/5519971190564?text=Olá%2C%20vim%20pelo%20site%20da%20Sinaliza%20Brasil%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

const benefits = [
  "Fabricação própria",
  "Grande estoque à pronta entrega",
  "Atendimento especializado para revendas",
];

export default function Hero() {
  const [showGlow, setShowGlow] = useState(false);

  return (
    <section className="relative overflow-hidden bg-slate-950 pb-20 pt-40 lg:pb-28 lg:pt-52">
      <div
        aria-hidden="true"
        className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-red-600/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-600/50 bg-red-950/30 px-4 py-2 text-sm font-bold text-red-400">
            <PackageCheck size={17} />
            Fabricante com pronta entrega
          </div>

          <h1 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl">
            Placas de sinalização{" "}
            <span className="text-red-500">fotoluminescentes</span> para
            empresas e revendas
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Fabricação própria, amplo estoque e atendimento comercial rápido.
            Enviamos placas de sinalização para todos os estados do Brasil.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 text-slate-200"
              >
                <CheckCircle2 size={21} className="shrink-0 text-emerald-400" />

                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-500 px-7 py-4 font-bold text-white shadow-lg shadow-green-500/15 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:bg-green-600 hover:shadow-green-500/30"
            >
              <FaWhatsapp size={24} />
              Solicitar orçamento
            </a>

            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-700 px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:text-red-400"
            >
              Conhecer produtos
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="group relative"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 0.4, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-[340px] w-full overflow-hidden sm:h-[500px] lg:h-[580px]"
          >
            <Image
              src="/produtos/placas-rota-fuga.png"
              alt="Placas fotoluminescentes de rota de fuga"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-contain mix-blend-multiply brightness-125 contrast-125 drop-shadow-2xl transition-all duration-500 ${
                showGlow ? "scale-105 opacity-0" : "opacity-100"
              } lg:group-hover:scale-105 lg:group-hover:opacity-0`}
            />

            <Image
              src="/produtos/placas-rota-fuga-fotoluminescente.png"
              alt="Placas de rota de fuga brilhando no escuro"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-contain mix-blend-screen drop-shadow-[0_0_35px_rgba(163,255,103,0.35)] transition-all duration-500 ${
                showGlow ? "scale-105 opacity-100" : "opacity-0"
              } lg:group-hover:scale-105 lg:group-hover:opacity-100`}
            />

            <motion.div
              aria-hidden="true"
              initial={{ x: "-180%", opacity: 0 }}
              animate={{
                x: ["-180%", "220%"],
                opacity: [0, 0.75, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatDelay: 6,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-y-[12%] z-20 w-28 rotate-12 bg-gradient-to-r from-transparent via-emerald-200/35 to-transparent blur-xl"
            />

            <motion.div
              aria-hidden="true"
              animate={{
                opacity: [0.15, 0.35, 0.15],
                scale: [0.96, 1.03, 0.96],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute inset-[16%] -z-10 rounded-full bg-emerald-400/20 blur-[70px]"
            />
          </motion.div>

          <button
            type="button"
            onClick={() => setShowGlow((current) => !current)}
            aria-pressed={showGlow}
            className="mx-auto mt-4 flex items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-3 font-bold text-emerald-300 transition active:scale-95 lg:hidden"
          >
            {showGlow ? (
              <>
                <RotateCcw size={20} />
                Ver placa com luz
              </>
            ) : (
              <>
                <Eye size={20} />
                Ver efeito fotoluminescente
              </>
            )}
          </button>

          <p className="mt-3 hidden text-center text-sm text-slate-500 lg:block">
            Passe o mouse sobre as placas para visualizar o efeito
            fotoluminescente.
          </p>

          <p className="mt-3 text-center text-sm text-slate-500 lg:hidden">
            Toque no botão para comparar a placa com e sem iluminação.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
