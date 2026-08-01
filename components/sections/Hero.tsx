"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PackageCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/5519971190564?text=Olá%2C%20vim%20pelo%20site%20da%20Sinaliza%20Brasil%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

const benefits = [
  "Fabricação própria",
  "Grande estoque à pronta entrega",
  "Atendimento especializado para revendas",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent pb-20 pt-44 lg:pb-28 lg:pt-52">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-600/50 bg-red-950/30 px-4 py-2 text-sm font-bold text-red-400">
            <PackageCheck size={17} />
            Fabricante com pronta entrega
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-[1.12] text-white sm:text-6xl lg:text-7xl">
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
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-500 px-7 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-green-600"
            >
              <FaWhatsapp size={24} />
              Solicitar orçamento
            </a>

            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-700 px-7 py-4 font-bold text-white transition hover:border-red-500 hover:text-red-400"
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
              y: [0, -13, 0],
              rotate: [0, 0.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-[390px] w-full sm:h-[500px] lg:h-[580px]"
          >
            <Image
              src="/produtos/placas-rota-fuga.png"
              alt="Placas fotoluminescentes de rota de fuga"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain mix-blend-multiply brightness-125 contrast-125 drop-shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:opacity-0"
            />

            <Image
              src="/produtos/placas-rota-fuga-fotoluminescente.png"
              alt="Placas de rota de fuga brilhando no escuro"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain opacity-0 mix-blend-screen drop-shadow-[0_0_35px_rgba(163,255,103,0.35)] transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
          </motion.div>

          <p className="mt-2 text-center text-sm text-slate-500">
            Passe o mouse sobre as placas para visualizar o efeito
            fotoluminescente.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
