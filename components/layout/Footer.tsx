import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/5519971190564?text=Olá%2C%20vim%20pelo%20site%20da%20Sinaliza%20Brasil%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

export default function Footer() {
  return (
    <footer id="contato" className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link
            href="/"
            aria-label="Voltar para o início"
            className="inline-flex items-center"
          >
            <Image
              src="/logo-sinaliza-brasil-branca.png"
              alt="Logo da Sinaliza Brasil"
              width={420}
              height={420}
              className="h-44 w-44 object-contain sm:h-52 sm:w-52"
            />
          </Link>

          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            Fabricante de placas de sinalização com amplo estoque à pronta
            entrega, atendimento para empresas e revendas e envio para todos os
            estados do Brasil.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-xl bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600"
          >
            <FaWhatsapp size={24} />
            Solicitar orçamento
          </a>
        </div>

        <div>
          <h3 className="text-lg font-bold">Navegação</h3>

          <nav className="mt-5 flex flex-col gap-3 text-slate-400">
            <a href="#produtos" className="transition-colors hover:text-white">
              Produtos
            </a>

            <a href="#empresa" className="transition-colors hover:text-white">
              Empresa
            </a>

            <a href="#duvidas" className="transition-colors hover:text-white">
              Dúvidas frequentes
            </a>

            <a href="#contato" className="transition-colors hover:text-white">
              Contato
            </a>
          </nav>
        </div>

        <div>
          <h3 className="text-lg font-bold">Contato</h3>

          <div className="mt-5 space-y-4 text-slate-400">
            <a
              href="tel:+5519971190564"
              className="flex items-start gap-3 transition-colors hover:text-white"
            >
              <Phone size={20} className="mt-0.5 shrink-0 text-red-500" />

              <span>(19) 97119-0564</span>
            </a>

            <a
              href="mailto:Sinaliza.brasil@icloud.com"
              className="flex items-start gap-3 break-all transition-colors hover:text-white"
            >
              <Mail size={20} className="mt-0.5 shrink-0 text-red-500" />

              <span>Sinaliza.brasil@icloud.com</span>
            </a>

            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-red-500" />

              <span>Campinas – São Paulo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Sinaliza Brasil. Todos os direitos
            reservados.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/politica-de-privacidade"
              className="transition-colors hover:text-white"
            >
              Política de Privacidade
            </Link>

            <Link
              href="/termos-de-uso"
              className="transition-colors hover:text-white"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
