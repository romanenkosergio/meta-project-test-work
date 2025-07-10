export type CardSize = "medium" | "large" | "wide" | "tall" | string;

export enum E_CARD_RARITY {
  CONSUMER = "consumer",
  BASE = "base",
  INDUSTRIAL = "industrial",
  MIL_SPEC = "mil-spec",
  DISTINGUISHED = "distinguished",
  HIGH_GRADE = "high-grade",
  RESTRICTED = "restricted",
  SUPERIOR = "superior",
  EXTRAORDINARY = "extraordinary",
  EXOTIC = "exotic",
  NOTABLE = "notable",
  EXCEPTIONAL = "exceptional",
  CLASSIFIED = "classified",
  MASTER = "master",
  COVERT = "covert",
  CONTRABAND = "contraband"
}
export type ICard = {
  id: number;
  title: string;
  type: string;
  image: string;
  rarity: E_CARD_RARITY;
  size: CardSize;
};
