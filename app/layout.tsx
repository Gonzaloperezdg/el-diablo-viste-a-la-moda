import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RUNWAY · Un perfil editorial",
  description: "Inspirado en El Diablo Viste a la Moda. Un perfil editorial de 4 minutos sobre quién sos dentro de los sistemas que lo exigen todo.",
  openGraph: {
    title: "RUNWAY · Un perfil editorial",
    description: "Cuatro tipos. Diez preguntas. Una lectura honesta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
