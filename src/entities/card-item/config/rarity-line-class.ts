import { E_CARD_RARITY } from "../model";

export const rarityLineClass: Record<E_CARD_RARITY, string> = {
  [E_CARD_RARITY.CONSUMER]: "bg-gray-200",
  [E_CARD_RARITY.BASE]: "bg-gray-200",
  [E_CARD_RARITY.INDUSTRIAL]: "bg-violet",
  [E_CARD_RARITY.MIL_SPEC]: "bg-blue-700",
  [E_CARD_RARITY.DISTINGUISHED]: "bg-blue-900",
  [E_CARD_RARITY.HIGH_GRADE]: "bg-blue-900",
  [E_CARD_RARITY.RESTRICTED]: "bg-violet-500",
  [E_CARD_RARITY.SUPERIOR]: "bg-violet-500",
  [E_CARD_RARITY.EXTRAORDINARY]: "bg-violet-500",
  [E_CARD_RARITY.EXOTIC]: "bg-violet-500",
  [E_CARD_RARITY.NOTABLE]: "bg-violet-900",
  [E_CARD_RARITY.EXCEPTIONAL]: "bg-violet-900",
  [E_CARD_RARITY.CLASSIFIED]: "bg-blue",
  [E_CARD_RARITY.MASTER]: "bg-red-600",
  [E_CARD_RARITY.COVERT]: "bg-pink",
  [E_CARD_RARITY.CONTRABAND]: "bg-yellow-400"
};
