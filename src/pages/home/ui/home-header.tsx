import type { FC } from "react";
import { Container, Icon } from "@/shared/ui";

const HomeHeader: FC = () => {
  return (
    <div className="relative">
      <div className="border-white-opacity border-y-1 py-6">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Icon name="arrow" />
            <p className="text-h2 uppercase">text for Heading</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-basic text-yellow uppercase">hide</p>
            <Icon name="chevron" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomeHeader;
