"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Factory,
  Headphones,
  MapPinned,
  PackageCheck,
  Truck,
} from "lucide-react";

const differentials = [
  {
    icon: Factory,
    title: "Fabricação própria",
    description:
      "Produção própria para oferecer atendimento direto, agilidade e melhor controle de qualidade.",
  },
  {
    icon: MapPinned,
    title: "Presença nacional",
    description: "Atendemos clientes e revendas em todos os estados do Brasil.",
  },
  {
    icon: Truck,
    title: "Envio para todo o Brasil",
    description:
      "Separamos e enviamos os pedidos para empresas de todas as regiões do país.",
  },
  {
    icon: PackageCheck,
    title: "Atendimento para revendas",
    description:
      "Condições e atendimento direcionados para revendedores e compradores empresariais.",
  },
  {
    icon: BadgeCheck,
    title: "Qualidade e durabilidade",
    description:
      "Placas produzidas com atenção ao acabamento, à legibilidade e à durabilidade.",
  },
  {
    icon: Headphones,
    title: "Orçamento rápido",
    description:
      "Atendimento direto pelo WhatsApp para facilitar cotações e pedidos.",
  },
];

export default function WhyUs() {
  return (
    <section id="empresa" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-wider text-red-600">
            Por que escolher a Sinaliza Brasil?
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Uma fabricante preparada para atender empresas e revendas
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Produção própria, atendimento comercial rápido e experiência em
            pedidos enviados para todos os estados do Brasil.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-100">
                <item.icon className="text-red-600" size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
