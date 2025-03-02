import { PageRoutes } from "@/lib/pageroutes"

export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Home",
    href: "http://localhost:3000/",
    external: false,
  },
]

export const GitHubLink = {
  href: "https://github.com/rubixvi/rubix-documents",
}
