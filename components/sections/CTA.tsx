"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/5519971190564?text=Olá%2C%20vim%20pelo%20site%20da%20Sinaliza%20Brasil%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

const highlights = [
  "Grande estoque à pronta entrega",
  "Atendimento para empresas e revendas",
  "Envio para todos os estados do Brasil",
];

export default function CTA() {
  return (
    <section id="contato" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-3xl bg-red-600 px-6 py-16 text-white shadow-2xl md:px-12 lg:px-16"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-slate-950/10" />

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                <MessageCircle size={18} />
                Atendimento comercial pelo WhatsApp
              </div>

              <h2 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
                Precisa de placas de sinalização para sua empresa ou revenda?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-red-50">
                Fale diretamente com a Sinaliza Brasil, informe os produtos e
                quantidades desejadas e receba seu orçamento.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 text-red-50"
                  >
                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0 text-white"
                    />

                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white p-7 text-slate-900 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                Solicite uma cotação
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Atendimento rápido e direto
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Clique no botão abaixo para iniciar uma conversa com nossa
                equipe comercial.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-green-500 px-6 py-4 font-bold text-white transition hover:scale-[1.02] hover:bg-green-600"
              >
                <FaWhatsapp size={25} />
                Pedir orçamento no WhatsApp
              </a>

              <div className="mt-5 border-t border-slate-200 pt-5 text-sm text-slate-600">
                <p>
                  <strong>WhatsApp:</strong> (19) 97119-0564
                </p>

                <p className="mt-2">
                  <strong>Localização:</strong> Campinas – SP
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
