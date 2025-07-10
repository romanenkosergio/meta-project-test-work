import { E_CARD_RARITY } from "../model";

export const rarityGradientClass: Record<E_CARD_RARITY, string> = {
  [E_CARD_RARITY.CONSUMER]: "bg-rarity-grey",
  [E_CARD_RARITY.BASE]: "bg-rarity-grey",
  [E_CARD_RARITY.INDUSTRIAL]: "bg-rarity-violet",
  [E_CARD_RARITY.MIL_SPEC]: "bg-rarity-blue",
  [E_CARD_RARITY.DISTINGUISHED]: "bg-rarity-blue",
  [E_CARD_RARITY.HIGH_GRADE]: "bg-rarity-blue",
  [E_CARD_RARITY.RESTRICTED]: "bg-rarity-violet",
  [E_CARD_RARITY.SUPERIOR]: "bg-rarity-violet",
  [E_CARD_RARITY.EXTRAORDINARY]: "bg-rarity-violet",
  [E_CARD_RARITY.EXOTIC]: "bg-rarity-violet",
  [E_CARD_RARITY.NOTABLE]: "bg-rarity-blue",
  [E_CARD_RARITY.EXCEPTIONAL]: "bg-rarity-blue",
  [E_CARD_RARITY.CLASSIFIED]: "bg-rarity-blue",
  [E_CARD_RARITY.MASTER]: "bg-rarity-red",
  [E_CARD_RARITY.COVERT]: "bg-rarity-pink",
  [E_CARD_RARITY.CONTRABAND]: "bg-rarity-yellow"
};
