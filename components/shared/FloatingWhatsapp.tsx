"use client";

import { FaWhatsapp } from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/5519971190564?text=Olá%2C%20vim%20pelo%20site%20da%20Sinaliza%20Brasil%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

export default function FloatingWhatsapp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-500 px-4 py-4 font-semibold text-white shadow-xl transition hover:scale-105 hover:bg-green-600 md:px-5"
    >
      <FaWhatsapp size={28} />

      <span className="hidden md:inline">Solicitar orçamento</span>
    </a>
  );
}
