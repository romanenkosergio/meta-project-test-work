import { Montserrat } from "next/font/google";
import { twMerge } from "tailwind-merge";

// Define the fonts here
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
});

export const fonts = twMerge(montserrat.variable, "font-montserrat");
