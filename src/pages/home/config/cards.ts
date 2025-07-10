import { E_CARD_RARITY, ICard } from "@/entities/card-item";

export const cards: ICard[] = [
  {
    id: 1,
    title: "Fire Jacket",
    type: "Clothing",
    image: "/assets/images/cards/image_1.png",
    rarity: E_CARD_RARITY.INDUSTRIAL,
    size: "large"
  },
  {
    id: 2,
    title: "Big Grin",
    type: "Armor",
    image: "/assets/images/cards/image_2.png",
    rarity: E_CARD_RARITY.COVERT,
    size: "medium"
  },
  {
    id: 3,
    title: "Tempered MP5",
    type: "Weapon",
    image: "/assets/images/cards/image_3.png",
    rarity: E_CARD_RARITY.CLASSIFIED,
    size: "medium"
  },
  {
    id: 4,
    title: "Desert Hunter",
    type: "Weapon",
    image: "/assets/images/cards/image_4.png",
    rarity: E_CARD_RARITY.CLASSIFIED,
    size: "medium"
  },
  {
    id: 5,
    title: "Grandmother's Gift Barricade",
    type: "Misc",
    image: "/assets/images/cards/image_5.png",
    rarity: E_CARD_RARITY.INDUSTRIAL,
    size: "medium"
  },
  {
    id: 6,
    title: "Glowing Skull",
    type: "Armor",
    image: "/assets/images/cards/image_6.png",
    rarity: E_CARD_RARITY.CLASSIFIED,
    size: "medium"
  },
  {
    id: 7,
    title: "Banana Eoka",
    type: "Weapon",
    image: "/assets/images/cards/image_7.png",
    rarity: E_CARD_RARITY.CLASSIFIED,
    size: "medium"
  },
  {
    id: 8,
    title: "Hot-Tempered Longsword",
    type: "CZ75-Auto",
    image: "/assets/images/cards/image_8.png",
    rarity: E_CARD_RARITY.COVERT,
    size: "wide"
  }
];
