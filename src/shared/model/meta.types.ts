import { Locale } from "next-intl";
import { PropsWithChildren } from "react";

export interface Params {
  locale: Locale;
}

export interface ILocaleParams {
  locale: Locale;
}

export interface IMetaParams {
  params: ILocaleParams;
}

export interface ILayoutProps extends PropsWithChildren<IMetaParams> {}
export interface IRootLayoutProps extends PropsWithChildren<any> {}
