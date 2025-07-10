import React, { FC, PropsWithChildren } from "react";
import { Footer, Header } from "@/shared/ui";

const ContentProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default ContentProvider;
