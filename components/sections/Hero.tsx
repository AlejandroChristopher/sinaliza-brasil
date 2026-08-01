"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  MapPinned,
  PackageCheck,
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
  return (
    <section className="relative overflow-hidden bg-slate-50 pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div
        aria-hidden="true"
        className="absolute -left-36 top-28 h-72 w-72 rounded-full bg-red-100 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-36 bottom-0 h-80 w-80 rounded-full bg-slate-200 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-bold text-red-700">
            <PackageCheck size={18} />
            Fabricante com pronta entrega
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Placas de sinalização{" "}
            <span className="text-red-600">fotoluminescentes</span> para
            empresas e revendas
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Produção própria, amplo estoque e atendimento comercial rápido.
            Enviamos placas de sinalização para todos os estados do Brasil.
          </p>

          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 font-medium text-slate-700"
              >
                <CheckCircle2 size={22} className="shrink-0 text-green-600" />

                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-500 px-7 py-4 font-bold text-white shadow-lg shadow-green-500/20 transition hover:-translate-y-0.5 hover:bg-green-600"
            >
              <FaWhatsapp size={24} />
              Solicitar orçamento
            </a>

            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-800 transition hover:border-red-300 hover:text-red-600"
            >
              Conhecer produtos
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-7 text-sm font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <MapPinned size={20} className="text-red-600" />
              Clientes em todos os estados
            </div>

            <div className="flex items-center gap-2">
              <Boxes size={20} className="text-red-600" />
              Grande variedade em estoque
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] bg-slate-950 p-6 shadow-2xl sm:p-10">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/30 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"
            />

            <div className="relative z-10 flex h-full min-h-[420px] items-center justify-center">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-12 w-52 -rotate-6 rounded-xl border-4 border-white bg-red-600 p-5 text-center text-white shadow-2xl sm:w-60"
              >
                <div className="text-sm font-black uppercase tracking-widest">
                  Extintor
                </div>

                <div className="mt-3 text-5xl">↓</div>

                <div className="mt-2 text-xs font-semibold uppercase">
                  Equipamento de combate a incêndio
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-0 top-40 w-60 rotate-6 rounded-xl border-4 border-white bg-green-600 p-5 text-white shadow-2xl sm:w-72"
              >
                <div className="flex items-center justify-center gap-4">
                  <span className="text-4xl">←</span>

                  <div>
                    <div className="text-xl font-black uppercase">Saída</div>

                    <div className="text-xs font-semibold uppercase">
                      Rota de fuga
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 left-12 w-56 -rotate-2 rounded-xl border-4 border-white bg-green-700 p-5 text-center text-white shadow-2xl sm:left-20 sm:w-64"
              >
                <div className="text-sm font-black uppercase tracking-wider">
                  Saída de emergência
                </div>

                <div className="mt-3 text-4xl">↑</div>
              </motion.div>
            </div>

            <div className="absolute bottom-5 right-5 z-20 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-xs font-bold uppercase tracking-wider text-red-600">
                Sinaliza Brasil
              </p>

              <p className="mt-1 text-sm font-bold text-slate-900">
                Estoque à pronta entrega
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
