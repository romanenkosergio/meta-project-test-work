import { type FC } from "react";

import { CardItem } from "@/entities/card-item";
import { Container } from "@/shared/ui";

import { type ICardsProps } from "./cards.types";

const Cards: FC<ICardsProps> = ({ cards }) => {
  return (
    <Container>
      <div className="relative z-2 grid min-h-[975px] auto-rows-[325px] grid-cols-4 gap-5">
        {cards.map(card => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
    </Container>
  );
};

export default Cards;
