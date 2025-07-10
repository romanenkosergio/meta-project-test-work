import { useTranslations } from "next-intl";
import { type FC } from "react";
import { Container } from "@/shared/ui";

const NotFound: FC = () => {
  const t = useTranslations("home");
  return (
    <Container>
      <h1>{t("title")}</h1>
    </Container>
  );
};

export default NotFound;
