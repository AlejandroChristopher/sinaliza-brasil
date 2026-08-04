export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Sinaliza Brasil",

    url: "https://sinalizabrasil.ind.br",

    logo: "https://sinalizabrasil.ind.br/logo-sinaliza-brasil.png",

    telephone: "+55-19-97119-0564",

    email: "sinalizabrasiloficial@gmail.com",

    description:
      "Fabricante de placas de sinalização fotoluminescentes para empresas e revendas. Envio para todo o Brasil.",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Campinas",
      addressRegion: "SP",
      addressCountry: "BR",
    },

    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
