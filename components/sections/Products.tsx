"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const featuredProducts = [
  {
    title: "Placas de incêndio",
    description:
      "Sinalização para extintores, hidrantes e equipamentos de combate a incêndio.",
    image: "/produtos/Extintor.png",
    alt: "Placas de sinalização para extintor",
  },
  {
    title: "Placas de rota de fuga",
    description:
      "Sinalização fotoluminescente para orientar rotas e saídas de emergência.",
    image: "/produtos/Nova_S1.png",
    alt: "Placa fotoluminescente de rota de fuga",
  },
  {
    title: "Placas de saída",
    description:
      "Modelos de sinalização de saída disponíveis em diferentes formatos e medidas.",
    image: "/produtos/S12.png",
    alt: "Placas fotoluminescentes de saída",
  },
  {
    title: "Placas de risco elétrico",
    description:
      "Sinalização de advertência para áreas, equipamentos e instalações com risco elétrico.",
    image: "/produtos/Choque.png",
    alt: "Placas de advertência para risco de choque elétrico",
  },
  {
    title: "Placas de direção da rota de fuga",
    description:
      "Placas fotoluminescentes para indicar a direção correta durante uma evacuação.",
    image: "/produtos/Rodape.png",
    alt: "Placas de direção para rota de fuga",
  },
  {
    title: "Outros modelos e personalizados",
    description:
      "Consulte outros modelos, medidas e placas personalizadas de acordo com a necessidade da sua empresa.",
    image: "/produtos/Outros.png",
    alt: "Outros modelos e placas de sinalização personalizadas",
  },
];

function createWhatsappUrl(product: string) {
  const message = `Olá, vim pelo site da Sinaliza Brasil e gostaria de solicitar um orçamento de ${product}.`;

  return `https://wa.me/5519971190564?text=${encodeURIComponent(message)}`;
}

export default function Products() {
  return (
    <section id="produtos" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-wider text-red-600">
            Nossos produtos
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Placas de sinalização à pronta entrega
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Grande variedade de placas fotoluminescentes para empresas,
            revendas, condomínios, indústrias e profissionais de todo o Brasil.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <motion.article
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-72 overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-contain p-6 transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="border-t border-slate-100 p-7">
                <h3 className="text-2xl font-bold text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {product.description}
                </p>

                <a
                  href={createWhatsappUrl(product.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-bold text-white transition hover:bg-green-600"
                >
                  <FaWhatsapp size={21} />
                  Solicitar orçamento
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-slate-950 px-6 py-12 text-center text-white md:px-12">
          <h3 className="text-3xl font-bold">
            Não encontrou o modelo que procura?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Produzimos outros modelos, tamanhos e placas personalizadas. Informe
            o código, a medida, a quantidade ou envie uma referência para nossa
            equipe.
          </p>

          <a
            href={createWhatsappUrl("outros modelos ou placas personalizadas")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-xl bg-green-500 px-7 py-4 font-bold text-white transition hover:scale-[1.02] hover:bg-green-600"
          >
            <FaWhatsapp size={24} />
            Consultar outros modelos
          </a>
        </div>
      </div>
    </section>
  );
}
