export const metadata = {
  title: "Política de Privacidade | Sinaliza Brasil",
  description:
    "Conheça como a Sinaliza Brasil coleta, utiliza e protege seus dados pessoais.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>

      <p className="text-gray-600 mb-8">
        Última atualização: 03 de agosto de 2026.
      </p>

      <div className="space-y-10 text-gray-700 leading-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            1. Compromisso com sua privacidade
          </h2>

          <p>
            A Sinaliza Brasil respeita sua privacidade e está comprometida com a
            proteção dos dados pessoais de todos os visitantes do nosso site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            2. Quais informações coletamos
          </h2>

          <p>Durante a navegação podemos coletar informações como:</p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Endereço IP;</li>
            <li>Tipo de navegador;</li>
            <li>Dispositivo utilizado;</li>
            <li>Páginas acessadas;</li>
            <li>Tempo de permanência no site;</li>
            <li>Cliques realizados em botões de contato.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            3. Como utilizamos seus dados
          </h2>

          <p>As informações coletadas são utilizadas para:</p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Melhorar a experiência do usuário;</li>
            <li>Entender o desempenho do site;</li>
            <li>Mensurar campanhas de marketing;</li>
            <li>Responder solicitações enviadas pelo WhatsApp ou e-mail.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">4. Google Analytics</h2>

          <p>
            Utilizamos o Google Analytics para compreender como os visitantes
            utilizam nosso site. Essas informações são coletadas de forma
            agregada e ajudam a melhorar continuamente nossos serviços.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">5. Google Ads</h2>

          <p>
            Podemos utilizar ferramentas do Google Ads para mensurar a
            efetividade de campanhas publicitárias e compreender quais anúncios
            geram maior interesse em nossos produtos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            6. Compartilhamento de dados
          </h2>

          <p>
            A Sinaliza Brasil não comercializa dados pessoais. As informações
            poderão ser compartilhadas apenas quando necessário para cumprimento
            de obrigações legais ou para o funcionamento dos serviços utilizados
            pelo site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">7. Segurança</h2>

          <p>
            Adotamos medidas técnicas e administrativas para proteger os dados
            contra acessos não autorizados, perda ou uso indevido.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">8. Seus direitos</h2>

          <p>
            Nos termos da Lei Geral de Proteção de Dados (LGPD), o titular dos
            dados poderá solicitar acesso, correção, atualização ou exclusão de
            suas informações pessoais.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">9. Contato</h2>

          <p>
            Caso tenha qualquer dúvida sobre esta Política de Privacidade, entre
            em contato conosco:
          </p>

          <div className="mt-4">
            <p>
              <strong>Sinaliza Brasil</strong>
            </p>
            <p>📧 sinaliza.brasil@icloud.com</p>
            <p>📞 (19) 97119-0564</p>
          </div>
        </section>
      </div>
    </main>
  );
}
