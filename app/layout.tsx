// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteName = "Instituto de Inglés";
const domain = "https://www.PLACEHOLDER_DOMINIO.com";
const description =
  "Clases de inglés para adultos: speaking desde el día uno, horarios flexibles y clase de prueba gratis en PLACEHOLDER_CIUDAD.";

export const viewport: Viewport = {
  themeColor: "#FF6B35",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: {
    default: `${siteName} — Clases para adultos`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "clases de inglés", "instituto de inglés", "curso de inglés",
    "IELTS", "Cambridge", "inglés para adultos", "PLACEHOLDER_CIUDAD"
  ],
  applicationName: siteName,
  robots: { index: true, follow: true, nocache: false },
  alternates: {
    canonical: domain,
    languages: {
      "es-AR": `${domain}/`,
      "en": `${domain}/en`,
    },
  },
  openGraph: {
    type: "website",
    url: domain,
    siteName,
    title: `${siteName} — Clases para adultos`,
    description,
    locale: "es_AR",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Instituto de Inglés — speaking desde el día uno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Clases para adultos`,
    description,
    images: ["/og-cover.jpg"],
    creator: "@PLACEHOLDER_TW",
    site: "@PLACEHOLDER_TW",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  category: "education",
  verification: {
    google: "PLACEHOLDER_GOOGLE_SEARCH_CONSOLE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
