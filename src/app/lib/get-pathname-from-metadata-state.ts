import { ResolvingMetadata } from "next";

const hasOwnProperty = (obj: object, key: string): boolean =>
  Object.prototype.hasOwnProperty.call(obj, key);

export const getPathnameFromMetadataState = (
  state: ResolvingMetadata
): string => {
  if (typeof state !== "object" || state === null) return "";

  const findMetadataState = (
    metadataState: ResolvingMetadata
  ): { urlPathname?: string } | undefined =>
    Object.getOwnPropertySymbols(metadataState)
      .map((symbol: any) => (metadataState as Record<any, any>)[symbol])
      .find(entry => entry && hasOwnProperty(entry, "urlPathname"));

  const cleanUrlPathname = (url: string | undefined): string =>
    url?.replace(/\?.+/, "") ?? "";

  const metadataState = findMetadataState(state);
  return cleanUrlPathname(metadataState?.urlPathname);
};
