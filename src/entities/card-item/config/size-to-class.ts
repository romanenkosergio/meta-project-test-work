interface ISizeToClass {
  container: string;
  title: string;
  label: string;
  titleContainer: string;
  imageContainer: string;
}

export const sizeToClass: Record<string, ISizeToClass> = {
  medium: {
    container: "col-span-1 row-span-1 p-6",
    title: "text-h2",
    label: "text-h4",
    titleContainer: "gap-2",
    imageContainer: "h-46.75 w-46.75"
  },
  large: {
    container: "col-span-2 row-span-2 p-10",
    title: "text-h1",
    label: "text-h3",
    titleContainer: "gap-2.5",
    imageContainer: "h-97 w-97"
  },
  wide: {
    container: "col-span-2 row-span-1 p-8",
    title: "text-h2-large",
    label: "text-h4",
    titleContainer: "gap-2",
    imageContainer: "h-69.5 w-69.5"
  },
  tall: {
    container: "col-span-1 row-span-2 p-6",
    title: "text-h2-large",
    label: "text-h4",
    titleContainer: "gap-2",
    imageContainer: "h-69.5 w-69.5"
  }
};
