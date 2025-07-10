import { defineRouting } from "next-intl/routing";
import { locales } from "../model/i18n.types";

export enum E_ROUTES {
  HOME = "/",
  NOT_FOUND = "/404"
}

export const defaultLocale = "en";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localeDetection: true,
  localePrefix: "always",
  alternateLinks: true
});
