import { routing } from "@/shared/config";

export const createAlternateLanguages = (
  pathWithoutLocale: string
): Record<string, string> =>
  routing.locales.reduce(
    (acc, locale) => {
      acc[locale] = `/${locale}${pathWithoutLocale}`;
      return acc;
    },
    {} as Record<string, string>
  );
