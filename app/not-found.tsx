"use client";

import Error from "next/error";
import { routing } from "@/shared/config";
import { localePermanentRedirect } from "@/shared/ui";

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  localePermanentRedirect({
    locale: routing.defaultLocale,
    href: "/"
  });
  return (
    <html lang="en">
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  );
}
