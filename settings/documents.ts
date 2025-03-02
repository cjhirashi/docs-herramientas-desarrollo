import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Introducción",
    href: "/introduction",
    heading: "Comenzando",
    items: [
      {
        title: "Instalación",
        href: "/installation",
      },
      {
        title: "Configuración",
        href: "/setup",
      },
      {
        title: "Registro de cambios",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Lenguajes",
    href: "/languages",
    heading: "Lenguajes de programación",
    items: [
      {
        title: "Python",
        href: "/python",
      },
      {
        title: "Javascript",
        href: "/javascript",
      },
      {
        title: "Typescript",
        href: "/typescript",
      },
      {
        title: "Dart",
        href: "/dart",
      },
      {
        title: "Rikmed",
        href: "/rikmed",
      },
      {
        title: "BestPP",
        href: "/bestpp",
      },
    ]
  },
  {
    title: "Frameworks",
    href: "/frameworks",
    items: [
      {
        title: "Profundo",
        href: "/deep",
        items: [
          {
            title: "Más profundo",
            href: "/deeper",
            items: [
              {
                title: "Aún más profundo",
                href: "/even-deeper",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Markdown",
    href: "/markdown",
    heading: "Componentes",
    items: [
      {
        title: "Tarjetas",
        href: "/cards",
      },
      {
        title: "Diagramas",
        href: "/diagrams",
      },
      {
        title: "Arbol de archivos",
        href: "/filetree",
      },
      {
        title: "Listas",
        href: "/lists",
      },
      {
        title: "Matemáticas",
        href: "/maths",
      },
      {
        title: "Notas",
        href: "/notes",
      },
      {
        title: "Pasos",
        href: "/steps",
      },
      {
        title: "Tablas",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
]
