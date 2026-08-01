"use client";

import { motion } from "framer-motion";
import {
  Flame,
  DoorOpen,
  ShieldAlert,
  TriangleAlert,
  CircleSlash,
  ClipboardCheck,
} from "lucide-react";

const products = [
  {
    title: "Placas de Incêndio",
    icon: Flame,
    description: "Sinalização para extintores, hidrantes e equipamentos.",
  },
  {
    title: "Rota de Fuga",
    icon: DoorOpen,
    description: "Placas de saída e orientação de emergência.",
  },
  {
    title: "Obrigação",
    icon: ClipboardCheck,
    description: "Uso obrigatório de EPIs e procedimentos.",
  },
  {
    title: "Perigo",
    icon: TriangleAlert,
    description: "Áreas de risco e avisos de segurança.",
  },
  {
    title: "Proibição",
    icon: CircleSlash,
    description: "Proibições conforme normas técnicas.",
  },
  {
    title: "Equipamentos",
    icon: ShieldAlert,
    description: "Identificação de equipamentos de emergência.",
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Produtos
          </span>

          <h2 className="text-4xl font-bold mt-3 text-slate-900">
            Conheça nossa linha de sinalização
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Fabricamos placas fotoluminescentes para atender empresas, revendas,
            indústrias, condomínios e profissionais de todo o Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300 border border-slate-100"
            >
              <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center">
                <item.icon className="text-red-600" size={28} />
              </div>

              <h3 className="text-xl font-bold mt-6 text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600">{item.description}</p>

              <a
                href="https://wa.me/5519971190564"
                target="_blank"
                className="inline-block mt-6 text-red-600 font-semibold hover:underline"
              >
                Solicitar orçamento →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
