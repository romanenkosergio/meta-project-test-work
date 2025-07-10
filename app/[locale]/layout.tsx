import { Metadata, ResolvingMetadata, Viewport } from "next";
import { headers } from "next/headers";
import { getTranslations } from "next-intl/server";
import React from "react";

import { fonts } from "@/app/config";
import {
  createAlternateLanguages,
  generateIcons,
  getPathnameFromMetadataState
} from "@/app/lib";
import { ContentProvider, I18nProvider } from "@/app/providers";
import "@/app/styles";
import { ILayoutProps, IMetaParams } from "@/shared/model";

export async function generateMetadata(
  { params }: IMetaParams,
  state: ResolvingMetadata
): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const path = getPathnameFromMetadataState(state);
  const pathWithoutLocale = path?.slice(3);

  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
  const baseUrl = `https://${host}`;
  return {
    metadataBase: new URL(baseUrl),
    title: t("home.title"),
    description: t("home.description"),
    openGraph: {
      title: t("home.openGraph.title"),
      description: t("home.openGraph.description"),
      url: `/${locale}${pathWithoutLocale}`,
      type: "website",
      images: "/assets/images/meta-picture.png",
      locale
    },
    alternates: {
      canonical: `/${locale}${pathWithoutLocale}`,
      languages: createAlternateLanguages(pathWithoutLocale)
    },
    icons: generateIcons()
  };
}

export const viewport: Viewport = {
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false
};

const Layout = async ({ children, params }: ILayoutProps) => {
  const { locale } = await params;
  return (
    <html lang={locale} className={fonts}>
      <head lang={locale} />
      <body>
        <I18nProvider locale={locale}>
          <ContentProvider>{children}</ContentProvider>
        </I18nProvider>
      </body>
    </html>
  );
};

export default Layout;
