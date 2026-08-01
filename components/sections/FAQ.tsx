"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const questions = [
  {
    question: "A Sinaliza Brasil é fabricante?",
    answer:
      "Sim. Somos fabricantes de placas de sinalização e atendemos empresas, revendas e profissionais de todo o Brasil.",
  },
  {
    question: "Vocês possuem produtos à pronta entrega?",
    answer:
      "Sim. Mantemos um grande estoque com diversos modelos de placas à pronta entrega, permitindo separação e envio com rapidez.",
  },
  {
    question: "O pedido pode ser despachado no mesmo dia?",
    answer:
      "Pedidos confirmados dentro do horário operacional podem ser separados, embalados e despachados no mesmo dia. O prazo também pode variar conforme a quantidade e a disponibilidade dos modelos solicitados.",
  },
  {
    question: "Vocês enviam para todo o Brasil?",
    answer:
      "Sim. Atendemos clientes em todos os estados e enviamos os pedidos para todo o território nacional.",
  },
  {
    question: "Vocês vendem para revendas de equipamentos contra incêndio?",
    answer:
      "Sim. Atendemos revendas, distribuidores, empresas de combate a incêndio, profissionais de segurança do trabalho, condomínios e indústrias.",
  },
  {
    question: "Como posso solicitar um orçamento?",
    answer:
      "Clique em qualquer botão de WhatsApp do site e informe os produtos e quantidades desejadas. Nossa equipe comercial preparará a cotação.",
  },
];

export default function FAQ() {
  return (
    <section id="duvidas" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-wider text-red-600">
            Dúvidas frequentes
          </span>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Perguntas sobre pedidos e entregas
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Confira as respostas para as principais dúvidas sobre nossos
            produtos e atendimento.
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="mt-14 space-y-4">
          {questions.map((item, index) => (
            <Accordion.Item
              key={item.question}
              value={`item-${index}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-semibold text-slate-900 transition hover:text-red-600">
                  {item.question}

                  <ChevronDown
                    size={22}
                    className="shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="overflow-hidden text-slate-600 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <p className="px-6 pb-6 leading-7">{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
