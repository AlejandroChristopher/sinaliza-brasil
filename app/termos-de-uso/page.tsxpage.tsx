import type { Metadata } from "next";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Conheça os termos e condições de utilização do site da Sinaliza Brasil.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Termos de Uso"
      description="Estes termos estabelecem as condições de navegação e utilização dos conteúdos e canais de contato da Sinaliza Brasil."
      updatedAt="03 de agosto de 2026"
    >
      <section>
        <h2 className="text-2xl font-bold text-white">
          1. Aceitação dos termos
        </h2>

        <p className="mt-4 leading-8">
          Ao acessar ou utilizar este site, o visitante declara estar de acordo
          com estes Termos de Uso e com a Política de Privacidade da Sinaliza
          Brasil.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">2. Finalidade do site</h2>

        <p className="mt-4 leading-8">
          O site tem caráter institucional e comercial, apresentando produtos,
          diferenciais, informações da empresa e canais para solicitação de
          orçamentos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          3. Solicitações de orçamento
        </h2>

        <p className="mt-4 leading-8">
          O envio de uma mensagem pelo WhatsApp ou e-mail não representa a
          celebração automática de contrato. Preços, quantidades,
          disponibilidade, condições de pagamento, prazos e entrega deverão ser
          confirmados pela equipe comercial.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          4. Informações sobre produtos
        </h2>

        <p className="mt-4 leading-8">
          A Sinaliza Brasil busca manter descrições e imagens atualizadas.
          Entretanto, cores, proporções, acabamentos e detalhes exibidos na tela
          podem apresentar pequenas diferenças em relação ao produto físico.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          5. Disponibilidade e despacho
        </h2>

        <p className="mt-4 leading-8">
          A disponibilidade à pronta entrega e o despacho no mesmo dia podem
          depender do modelo, quantidade, horário de confirmação e condições
          operacionais. A previsão aplicável será informada durante o
          atendimento comercial.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          6. Propriedade intelectual
        </h2>

        <p className="mt-4 leading-8">
          Os textos, logotipos, imagens, elementos visuais e demais conteúdos
          deste site pertencem à Sinaliza Brasil ou são utilizados com
          autorização. Sua reprodução ou utilização comercial depende de
          autorização prévia.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          7. Uso adequado do site
        </h2>

        <p className="mt-4 leading-8">
          O usuário não deverá utilizar o site para atividades ilícitas,
          tentativas de acesso não autorizado, envio de conteúdo malicioso ou
          qualquer prática capaz de comprometer sua segurança e funcionamento.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">8. Serviços externos</h2>

        <p className="mt-4 leading-8">
          O site pode apresentar links para WhatsApp, Google e outros serviços
          de terceiros. O uso dessas plataformas está sujeito aos respectivos
          termos, políticas e condições.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          9. Limitação de responsabilidade
        </h2>

        <p className="mt-4 leading-8">
          A Sinaliza Brasil não garante que o site permanecerá disponível de
          forma ininterrupta ou livre de falhas. Também não se responsabiliza
          por problemas provocados por serviços externos, dispositivos,
          navegadores ou conexões do usuário.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white">
          10. Alterações nos termos
        </h2>

        <p className="mt-4 leading-8">
          Estes Termos de Uso poderão ser modificados a qualquer momento. A
          utilização do site após uma atualização representa a ciência da nova
          versão publicada.
        </p>
      </section>
    </LegalPageLayout>
  );
}
