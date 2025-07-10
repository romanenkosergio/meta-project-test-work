import Image from "next/image";
import { FC } from "react";

import { cards } from "../config";
import { Cards } from "./cards";
import HomeHeader from "./home-header";

const HomeView: FC = () => {
  return (
    <section className="relative flex min-h-screen flex-col gap-8 bg-black py-26 text-white">
      <Image
        src="/assets/images/bg.png"
        alt="bg"
        fill
        title="Page background"
      />
      <HomeHeader />
      <Cards cards={cards} />
    </section>
  );
};

export default HomeView;
