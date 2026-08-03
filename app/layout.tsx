import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Sinaliza Brasil | Fabricante de Placas Fotoluminescentes",
    template: "%s | Sinaliza Brasil",
  },

  description:
    "Fabricante de placas de sinalização fotoluminescentes com amplo estoque à pronta entrega. Atendimento para empresas e revendas, com envio para todo o Brasil.",

  keywords: siteConfig.keywords,

  authors: [
    {
      name: "Sinaliza Brasil",
      url: siteConfig.url,
    },
  ],

  creator: "Sinaliza Brasil",
  publisher: "Sinaliza Brasil",

  category: "Sinalização de emergência",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Sinaliza Brasil",

    title: "Fabricante de Placas de Sinalização Fotoluminescentes",

    description:
      "Fabricação própria, amplo estoque à pronta entrega e envio para empresas e revendas em todo o Brasil.",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sinaliza Brasil — Placas de sinalização fotoluminescentes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sinaliza Brasil | Placas Fotoluminescentes",

    description:
      "Fabricante de placas de sinalização com pronta entrega e envio para todo o Brasil.",

    images: ["/opengraph-image"],
  },

  other: {
    "contact:phone_number": "+55 19 97119-0564",
    "contact:email": "Sinaliza.brasil@icloud.com",
    "geo.region": "BR-SP",
    "geo.placename": "Campinas",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
  colorScheme: "dark",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,

  name: "Sinaliza Brasil",

  url: siteConfig.url,

  logo: `${siteConfig.url}/logo-sinaliza-brasil-branca.png`,

  image: `${siteConfig.url}/opengraph-image`,

  description:
    "Fabricante de placas de sinalização fotoluminescentes com amplo estoque à pronta entrega e envio para todo o Brasil.",

  email: "mailto:Sinaliza.brasil@icloud.com",

  telephone: "+55 19 97119-0564",

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

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55 19 97119-0564",
    contactType: "sales",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },

  knowsAbout: [
    "Placas de sinalização",
    "Placas fotoluminescentes",
    "Sinalização de emergência",
    "Placas de incêndio",
    "Rotas de fuga",
    "Placas personalizadas",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,

  name: "Sinaliza Brasil",

  url: siteConfig.url,

  description: siteConfig.description,

  inLanguage: "pt-BR",

  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
