import { defineConfig, HeadConfig } from "vitepress";
import { robotsPlugin } from './plugins/robotsPlugin';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Penify",
  titleTemplate: ":title",
  description:
    "Effortlessly generate precise, human like docstrings for GitHub repos with Penify.",
    transformHead: ({pageData}) => {
    const head: HeadConfig[] = [];

    if (pageData.frontmatter.title) {
      head.push([
        "meta",
        { property: "og:title", content: pageData.frontmatter.title },
      ]);
    }

    if (pageData.frontmatter.description) {
      head.push([
        "meta",
        { property: "og:description", content: pageData.frontmatter.description },
      ]);
    }

    if (pageData.frontmatter.keywords) {
      head.push([
        "meta",
        { property: "og:keywords", content: pageData.frontmatter.keywords },
      ]);
    }

    return head;
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "Penify", content: "Automated Docstring Generation" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Penify, docstring, automated docstring, python docstring, LLMs, Generative AI, AI documentation, AI docstring",
      },
    ],
    ["meta", { property: "og:image", content: "../public/banner.png" }],
    ["meta", { property: "og:url", content: "https://www.penify.dev" }],
    [
      "script",
      {
        type: "text/javascript",
        id: "hs-script-loader",
        src: "//js-na1.hs-scripts.com/44651459.js",
      },
    ],
    [
      "script",
      {
        async: "true",
        src: "https://www.googletagmanager.com/gtag/js?id=G-YBZEWEWTVY",
      },
    ],
    [
      "script",
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YBZEWEWTVY');
    `,
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: "/favicon.ico",
      link: "https://www.penify.dev",
    },

    nav: [
      { text: "Home", link: "https://www.penify.dev" },
      { text: "Main", link: "/" },
      {
        text: "Email",
        link: "mailto:sumansaurabh@penify.dev",
        rel: "noopener noreferrer",
      },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      {items: [{
        text: "📚 Penify: Getting Started?",
        link: "/docs/what-is-penify",
        items: [
          {
            text: "🔧 Install on Github",
            link: "/docs/what-is-penify#🛠%EF%B8%8F-how-to-install-penify-on-github",
            items: [
              {
                text: "🐞 Troubleshoot Code Git Commit Documentation",
                link: "/docs/troubleshooting-code-git-commit-documentation",
              },
            ],
          },
          {
            text: "🔧 Install on AzureDevops",
            link: "/docs/install-penify-on-AzureDevops",
          },
          {
            text: "🔑 Setup penify.config.json",
            link: "/docs/penify-config-json.md",
          },
        ],
      }]},
      {
        items: [{
        text: "🔗 Penify Dashboard",
        items:[
          {
            text: "✅ Repo Documentation",
            link: "/docs/repo-documentation.md",
          },
        ]
      }]
      },
      {
        items: [{
        text: "🔗 Penify Webhooks",
        items:[
          {
            text: "✅ Commit Documentation",
            link: "/docs/ci-commit-documentation.md",
          },
          {
            text: "🔍 Pull Request Review",
            link: "/docs/instant-pull-request-insight.md",
          },
        ]
      }]
      },
      {
        items: [{
          text: "🖥️ Penify CLI",
          link: "/docs/penify-cli",
          items:[{
            text: "📝 Detailed Usage guide",
            link: "/docs/penify-cli-detailed-usage",
          },
          {
            text: "🔑 Create API Token",
            link: "/docs/Creating-API-Keys-in-Penify",
          },
          {
            text: "📝 Configure LLM and JIRA",
            link: "/docs/config-cli-documentation",
            items: [
              {
                text: "📝 Local LLM",
                link: "/docs/config-cli-documentation#llm-configuration",
              },
              {
                text: "📝 Jira",
                link: "/docs/config-cli-documentation#using-local-llm#jira-configuration",
              }]
          },
          {
            text: "📝 Commit Summary",
            link: "/docs/commit-summary-generation-cli",
            items: [
              {
                text: "📝 Using Local LLM",
                link: "/docs/commit-summary-generation-cli#using-local-llm",
              },
              {
                text: "📝 Add Jira context",
                link: "/docs/commit-summary-generation-cli#using-local-llm#jira-enhancement",
              }]
          },
          
          {
            text: "📄 File Documentation",
            link: "/docs/file-documentation-cli",
          },
          {
            text: "📁 Repo Documentation",
            link: "/docs/repository-documentation-cli",
          },
          {
            text: "✏️ Commit Documentation",
            link: "/docs/commit-documentation-cli",
          },
          {
            text: "👨🏻‍💻 Post-Commit Hooks",
            link: "/docs/post-commit-hooks-cli",
          }]
          }
        ],
      },
    ],

    socialLinks: [
      {
        icon: {
          svg: `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 95.51"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>blog</title><path class="cls-1" d="M12.6,26.42h96.77V70.15H12.6V26.42Zm9.55,32.23V36.86h11.3q3.13,0,4.47,1.23a4.53,4.53,0,0,1,1.35,3.55,6.44,6.44,0,0,1-.86,3.61,3.9,3.9,0,0,1-2.28,1.65v.21q4.21.73,4.22,5.75a6.14,6.14,0,0,1-1.4,4.2,5.4,5.4,0,0,1-4.28,1.59ZM31.84,50H29.12v3.55h2.69c1,0,1.46-.59,1.46-1.77S32.79,50,31.84,50Zm-.52-8.33h-2.2v3.24h2.17q1.32,0,1.32-1.62t-1.29-1.62Zm26.19,17H43.57V36.86h7V53.07h7v5.58Zm1.66-10.88q0-6,2.23-8.69c1.48-1.83,4.17-2.74,8.05-2.74s6.56.91,8,2.74,2.23,4.72,2.23,8.69a22.66,22.66,0,0,1-.47,5,9.33,9.33,0,0,1-1.62,3.52,6.58,6.58,0,0,1-3.17,2.19,15.46,15.46,0,0,1-5,.7,15.41,15.41,0,0,1-5-.7,6.49,6.49,0,0,1-3.17-2.19,9,9,0,0,1-1.62-3.52,22.07,22.07,0,0,1-.47-5Zm7.49-3.62v9.06h2.89a4.86,4.86,0,0,0,2.08-.33c.43-.22.64-.73.64-1.52V42.3H69.34a4.72,4.72,0,0,0-2,.33c-.43.22-.64.73-.64,1.52ZM94.1,52.23v-.94H92.33V46h8.4V57.6a24,24,0,0,1-8.58,1.57q-6,0-8.19-2.89a9,9,0,0,1-1.6-3.52,23.52,23.52,0,0,1-.45-5,22,22,0,0,1,.47-5,8.47,8.47,0,0,1,1.69-3.5q2.3-2.93,8.88-2.93a28.26,28.26,0,0,1,3.54.28,18,18,0,0,1,3.19.63l-1.05,5.33a30.75,30.75,0,0,0-5.1-.49,10.29,10.29,0,0,0-3.21.35,1.36,1.36,0,0,0-.92,1.4V53.7h2.3a4.78,4.78,0,0,0,1.83-.26c.38-.18.57-.58.57-1.21ZM8.32,0H114.56a8.34,8.34,0,0,1,8.32,8.32V87.19a8.35,8.35,0,0,1-8.32,8.32H8.32A8.34,8.34,0,0,1,0,87.19V8.32A8.34,8.34,0,0,1,8.32,0ZM118,20.1H5.29V88a2.29,2.29,0,0,0,2.3,2.3h108a2.29,2.29,0,0,0,2.3-2.3V20.1ZM106.64,7.22a4.11,4.11,0,1,1-4.11,4.11,4.11,4.11,0,0,1,4.11-4.11Zm-27.84,0a4.11,4.11,0,1,1-4.11,4.11A4.11,4.11,0,0,1,78.8,7.22Zm13.92,0a4.11,4.11,0,1,1-4.11,4.11,4.11,4.11,0,0,1,4.11-4.11ZM66.87,84.74a3.51,3.51,0,0,1,0-7h39.65a3.51,3.51,0,0,1,0,7ZM15,84.74a3.52,3.52,0,0,1,0-7H51.72a3.52,3.52,0,0,1,0,7Z"/></svg>`,
        },
        link: "https://blogs.penify.dev",
        ariaLabel: "Blog URL",
      },
      {
        icon: "github",
        link: "https://github.com/Penify-dev/",
        ariaLabel: "GitHub URL",
      },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/penify-dev/",
        ariaLabel: "LinkedIn URL",
      },
      {
        icon: "youtube",
        link: "https://www.youtube.com/@penify-dev",
        ariaLabel: "YouTube URL",
      },
      {
        icon: "twitter",
        link: "https://twitter.com/Snorkell_ai",
        ariaLabel: "Twitter URL",
      },
      {
        icon: "instagram",
        link: "https://www.instagram.com/penify.dev/",
        ariaLabel: "Twitter URL",
      },
      {
        icon: "discord",
        link: "https://discord.gg/wqrc8JeV",
        ariaLabel: "Discord URL",
      },
    ],

    footer: {
      copyright: "Copyright &copy; 2023 Snorkell Associates and Co",
    },
  },
  appearance: true, // Enable theme switching
  vite: {
    plugins: [
      robotsPlugin({ hostname: 'https://docs.penify.dev' })
    ]
  },
  sitemap: {
    hostname: "https://docs.penify.dev",
    lastmodDateOnly: false,
  },
});
