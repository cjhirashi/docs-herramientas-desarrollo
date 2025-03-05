import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Introducción",
    href: "/documentation",
    heading: "Sobre la documentación",
    items: [
      {
        title: "Instalación",
        href: "/installation",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Introducción",
    href: "/programming",
    heading: "Herramientas de programación",
    items: [
      {
        title: "Lenguajes de programación",
        href: "/languages",
        items: [
          {
            title: "Python",
            href: "/python",
            items: [
              {
                title: "Tipos de tados",
                href: "/data-types",
                items: [
                  {
                    title: "Operaciones con típos numéricos",
                    href: "/numeric-operations"
                  },
                  {
                    title: "Métodos de cadenas",
                    href: "/string-methods"
                  },
                  {
                    title: "Operaciones con listas",
                    href: "/list-operations",
                    items: [
                      {
                        title: "Funciones map(), filter() y reduce()",
                        href: "/map-filter-reduce"
                      }
                    ]
                  },
                  {
                    title: "Operaciones con diccionarios",
                    href: "/dictionary-operations"
                  },
                  {
                    title: "Operaciones con conjuntos",
                    href: "/set-operations"
                  },
                ]
              },
              {
                title: "Estructuras de control",
                href: "/control-structure"
              },
              {
                title: "Funciones",
                href: "/functions"
              },
              {
                title: "Programación orientada a objetos",
                href: "/oop"
              },
              {
                title: "Módulos y paquetes",
                href: "/modules-packages"
              },
              {
                title: "Manejo de excepciones",
                href: "/exceptions"
              },
              {
                title: "Bibliotecas de programación",
                href: "/libraries"
              },
            ]
          },
          {
            title: "Javascript",
            href: "/javascript",
            items: [
                {
                    title: "Fundamentos de Javascript",
                    href: "/javascript-fundamentals",
                    items: [
                        {
                            title: "Variables y Tipos de Datos",
                            href: "/variables-data-types",
                        },
                        {
                            title: "Operadores",
                            href: "/operators",
                        },
                        {
                            title: "Estructuras de Control",
                            href: "/control-structures",
                        },
                        {
                            title: "Funciones",
                            href: "/functions",
                        },
                        {
                            title: "Objetos",
                            href: "/objects",
                        },
                        {
                            title: "Arrays",
                            href: "/arrays",
                        },
                    ]
                },
                {
                    title: "Javascript en el Navegador",
                    href: "/javascript-browser",
                    items: [
                        {
                            title: "El DOM (Document Object Model)",
                            href: "/dom",
                        },
                        {
                            title: "Eventos",
                            href: "/events",
                        },
                        {
                            title: "Manipulación del DOM",
                            href: "/dom-manipulation",
                        },
                        {
                            title: "Formularios",
                            href: "/forms",
                        },
                        {
                            title: "AJAX y Fetch",
                            href: "/ajax-fetch",
                        },
                    ]
                },
                {
                    title: "Javascript Moderno (ES6+)",
                    href: "/modern-javascript",
                    items: [
                        {
                            title: "Let y Const",
                            href: "/let-const",
                        },
                        {
                            title: "Arrow Functions",
                            href: "/arrow-functions",
                        },
                        {
                            title: "Template Literals",
                            href: "/template-literals",
                        },
                        {
                            title: "Destructuring",
                            href: "/destructuring",
                        },
                        {
                            title: "Spread y Rest",
                            href: "/spread-rest",
                        },
                        {
                            title: "Clases",
                            href: "/classes",
                        },
                        {
                            title: "Módulos",
                            href: "/modules",
                        },
                        {
                            title: "Promesas y Async/Await",
                            href: "/promises-async-await",
                        },
                    ]
                },
                {
                    title: "Javascript en el Backend (Node.js)",
                    href: "/javascript-backend",
                    items: [
                        {
                            title: "Introducción a Node.js",
                            href: "/nodejs-introduction",
                        },
                        {
                            title: "Módulos en Node.js",
                            href: "/nodejs-modules",
                        },
                        {
                            title: "NPM (Node Package Manager)",
                            href: "/npm",
                        },
                        {
                            title: "Express.js",
                            href: "/expressjs",
                        },
                        {
                            title: "Bases de Datos con Node.js",
                            href: "/nodejs-databases",
                        },
                    ]
                },
                {
                    title: "Frameworks y Librerías de Javascript",
                    href: "/javascript-frameworks-libraries",
                    items: [
                        {
                            title: "React",
                            href: "/react",
                        },
                        {
                            title: "Angular",
                            href: "/angular",
                        },
                        {
                            title: "Vue.js",
                            href: "/vuejs",
                        },
                        {
                            title: "jQuery",
                            href: "/jquery",
                        },
                    ]
                },
                {
                    title: "Testing en Javascript",
                    href: "/javascript-testing",
                    items: [
                        {
                            title: "Tipos de Testing",
                            href: "/testing-types",
                        },
                        {
                            title: "Jest",
                            href: "/jest",
                        },
                        {
                            title: "Mocha y Chai",
                            href: "/mocha-chai",
                        },
                    ]
                },
                {
                    title: "Buenas Prácticas y Patrones de Diseño",
                    href: "/javascript-best-practices",
                    items: [
                        {
                            title: "Código Limpio",
                            href: "/clean-code",
                        },
                        {
                            title: "Patrones de Diseño Comunes",
                            href: "/design-patterns",
                        },
                        {
                            title: "Optimización del Rendimiento",
                            href: "/performance-optimization",
                        },
                    ]
                },
            ]
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
            title: "Rikmed (Mircom)",
            href: "/rikmed",
          },
          {
            title: "BestPP (KMC)",
            href: "/bestpp",
          },
        ],
      },
      {
        title: "Git",
        href: "/git",
        items: [
          {
            title: "Comandos",
            href: "/commands",
          },
          {
            title: ".gitignore",
            href: "/gitignore",
          },
          {
            title: "GitHub",
            href: "/github",
          },
        ]
      },
      {
        title: "Herramientas WEB",
        href: "/web",
        items: [
          {
            title: "HTML",
            href: "/html",
          },
          {
            title: "CSS",
            href: "/css",
          },
        ]
      }
    ]
  },
  {
    spacer: true,    
  },
  {
    title: "Introducción",
    href: "/frameworks",
    heading: "Frameworks de Aplicación",
    items:[
      {
        title: "Next JS",
        href: "/nextjs",
      },
     
    ]
    
  },
  {
    spacer: true,
  },
  {
    title: "Introducción",
    href: "/data-management",
    heading: "Gestión de datos",
    items:[
      {
        title: "Bases de datos",
        href: "/databases",
        items: [
          {
            title: "SQL",
            href: "/sql",
          },
          {
            title: "PostgreSQL",
            href: "/postgres",
          },
          {
            title: "MongoDB",
            href: "/mongodb",
          },
        ]
      },
      {
        title: "Plataformas",
        href: "/platforms",
        items: [
          {
            title: "Supabase",
            href: "/supabase",
          },
        ]
      },
    ]
    
  },
  {
    spacer: true,
  },
  {
    title: "Introducción",
    href: "/dev-templates",
    heading: "Templates de desarrollo",
    items: [
      {
        title: "Para documentación",
        href: "/app-documentation",
        items: [
          {
            title: "Rubix Documents",
            href: "/rubix-documents",
            items: [
              {
                title: "Componentes",
                href: "/components"
              },
            ]
          }
        ]
      },
      {
        title: "Aplicaciones SaaS",
        href: "/app-saas",
      },
      {
        title: "Aplicaciones de Cursos",
        href: "/app-courses",
      },
      {
        title: "Aplicaciones de Inteligencia Artificial",
        href: "/app-ai",
      },
      {
        title: "Aplicaciones LandingPages",
        href: "/app-landingpages",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Despliegues",
    href: "/deployments",
    heading: "Despliegues de proyectos",
    items: [
      {
        title: "Vercel",
        href: "/vercel",
      },
      {
        title: "Docker",
        href: "/docker",
      },
    ]
  }

]
