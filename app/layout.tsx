import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinaliza Brasil | Placas de Sinalização",
  description:
    "Fabricante de placas de sinalização fotoluminescentes com pronta entrega e envio para todo o Brasil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
