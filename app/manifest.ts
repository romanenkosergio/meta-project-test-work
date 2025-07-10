import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Next.js App",
    short_name: "Next.js",
    description: "Next.js Progressive Web App",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/assets/icons/favicons/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/assets/icons/favicons/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/assets/icons/favicons/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png"
      }
    ]
  };
}
