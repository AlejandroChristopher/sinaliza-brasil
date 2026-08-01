import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappUrl =
  "https://wa.me/5519971190564?text=Olá%2C%20vim%20pelo%20site%20da%20Sinaliza%20Brasil%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#" className="text-2xl font-bold">
            Sinaliza <span className="text-red-500">Brasil</span>
          </a>

          <p className="mt-5 max-w-xl leading-7 text-slate-400">
            Fabricante de placas de sinalização com amplo estoque à pronta
            entrega, atendimento para empresas e revendas e envio para todos os
            estados do Brasil.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-3 rounded-xl bg-green-500 px-6 py-4 font-bold transition hover:bg-green-600"
          >
            <FaWhatsapp size={24} />
            Solicitar orçamento
          </a>
        </div>

        <div>
          <h3 className="font-bold">Navegação</h3>

          <nav className="mt-5 flex flex-col gap-3 text-slate-400">
            <a href="#produtos" className="transition hover:text-white">
              Produtos
            </a>

            <a href="#empresa" className="transition hover:text-white">
              Empresa
            </a>

            <a href="#duvidas" className="transition hover:text-white">
              Dúvidas frequentes
            </a>

            <a href="#contato" className="transition hover:text-white">
              Contato
            </a>
          </nav>
        </div>

        <div>
          <h3 className="font-bold">Contato</h3>

          <div className="mt-5 space-y-4 text-slate-400">
            <a
              href="tel:+5519971190564"
              className="flex items-start gap-3 transition hover:text-white"
            >
              <Phone size={20} className="mt-0.5 shrink-0 text-red-500" />
              (19) 97119-0564
            </a>

            <a
              href="mailto:sinalizabrasiloficial@gmail.com"
              className="flex items-start gap-3 break-all transition hover:text-white"
            >
              <Mail size={20} className="mt-0.5 shrink-0 text-red-500" />
              sinalizabrasiloficial@gmail.com
            </a>

            <p className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-red-500" />
              Campinas – São Paulo
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Sinaliza Brasil. Todos os direitos
            reservados.
          </p>

          <p>Fabricante com atendimento em todo o Brasil.</p>
        </div>
      </div>
    </footer>
  );
}
