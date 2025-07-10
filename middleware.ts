import { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { routing } from "@/shared/config";

const I18NMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  return I18NMiddleware(request);
}
export const config = {
  matcher: [
    "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
    "/((?!_next|_vercel|.\..).*)"
  ]
};
