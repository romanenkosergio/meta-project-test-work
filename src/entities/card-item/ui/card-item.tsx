import Image from "next/image";
import { type FC, memo } from "react";
import { sizeToClass, rarityLineClass, rarityGradientClass } from "../config";
import { type ICardItemProps } from "./card-item.types";

const CardItem: FC<ICardItemProps> = ({ card }) => {
  const size = card.size || "medium";
  const classes = sizeToClass[size] || sizeToClass.medium;
  const lineClass = rarityLineClass[card.rarity] || "bg-gray-200";
  const gradientClass = rarityGradientClass[card.rarity] || "bg-rarity-violet";

  return (
    <div
      className={`bg-white-opacity relative flex cursor-pointer ${size === "wide" ? "flex-row items-end" : "flex-col"} ${classes.container} group`}
    >
      <div className={`flex flex-col ${classes.titleContainer}`}>
        <div className={`text-grey uppercase ${classes.label}`}>
          {card.type}
        </div>
        <div className={`text-white uppercase ${classes.title}`}>
          {card.title}
        </div>
      </div>
      <div className={`relative ${classes.imageContainer} z-1 mx-auto mt-auto`}>
        <Image fill src={card.image} alt={card.title} title={card.title} />
      </div>
      <div
        className={`absolute right-0 bottom-0 left-0 h-[3px] w-full ${lineClass}`}
      />
      <div
        className={`pointer-events-none absolute right-0 bottom-0 left-0 z-0 h-[70%] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 ${gradientClass}`}
      />
    </div>
  );
};

export default memo(CardItem);
