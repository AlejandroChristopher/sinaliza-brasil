"use client";

import { motion } from "framer-motion";
import { FileText, MessageCircle, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Entre em contato",
    description:
      "Envie uma mensagem pelo WhatsApp informando os produtos e as quantidades desejadas.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Receba o orçamento",
    description:
      "Nossa equipe prepara rapidamente uma cotação para sua empresa ou revenda.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Separação e embalagem",
    description:
      "Com um amplo estoque à pronta entrega, separamos e embalamos seu pedido com agilidade.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Despacho no mesmo dia",
    description:
      "Após a confirmação, seu pedido é separado, embalado e despachado para qualquer estado do Brasil.",
  },
];

const whatsappUrl =
  "https://wa.me/5519971190564?text=Olá%2C%20vim%20pelo%20site%20da%20Sinaliza%20Brasil%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

export default function Process() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-wider text-red-400">
            Processo simples
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Veja como fazer seu pedido
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Amplo estoque à pronta entrega, atendimento rápido e envio para
            empresas e revendedores de todo o Brasil.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="relative rounded-2xl border border-slate-800 bg-slate-900 p-8"
            >
              <span className="absolute right-6 top-5 text-5xl font-black text-slate-800">
                {step.number}
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-600">
                <step.icon size={27} />
              </div>

              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>

              <p className="mt-3 leading-7 text-slate-300">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-green-500 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-green-600"
          >
            Iniciar pedido pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
