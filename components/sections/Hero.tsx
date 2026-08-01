"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-slate-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Texto */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold">
            Fabricação Própria
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 mt-8 leading-tight">
            Fabricante de
            <span className="text-red-600"> Placas Fotoluminescentes</span>
          </h1>

          <p className="text-xl text-slate-600 mt-8 leading-9">
            Produzimos placas de sinalização para empresas, revendas e
            profissionais de todo o Brasil. Atendimento rápido e fabricação
            própria.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Fabricação própria
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Enviamos para todo Brasil
            </div>

            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500" />
              Atendimento especializado
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <a
              href="https://wa.me/5519971190564"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 transition text-white px-8 py-5 rounded-xl font-bold flex items-center gap-3"
            >
              <FaWhatsapp size={24} />
              Solicitar orçamento
            </a>
          </div>
        </motion.div>

        {/* Imagem */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-3xl bg-gradient-to-br from-red-600 to-red-700 h-[520px] flex items-center justify-center shadow-2xl">
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold">SUA IMAGEM</h2>

              <p className="mt-4 opacity-90">
                Depois colocaremos uma foto das placas.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
