import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "create-vitepress-app",
  description: "A Vitepress app.",
  cleanUrls: true,

  head: [["link", { rel: "icon", type: "image/x-icon", href: "/favicon.svg" }]],

  themeConfig: {
    logo: "/favicon.svg",

    nav: [{ text: "Docs", link: "/docs/" }],

    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Introduction", link: "/docs/" },
          {
            text: "Basics",
            items: [
              { text: "Project Structure", link: "/docs/basics/" },
              { text: "Command Line Arguments", link: "/docs/basics/args" },
            ],
          },
          {
            text: "Options",
            items: [
              { text: "Language", link: "/docs/options/" },
              { text: "Prettier", link: "/docs/options/prettier" },
            ],
          },
          { text: "Resources", link: "/docs/resources" },
        ],
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present FLzyy",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/create-vitepress-app/core" },
    ],

    editLink: {
      pattern:
        "https://github.com/create-vitepress-app/create-vitepress-app.github.io/edit/main/src/:path",
      text: "Edit this page",
    },
  },
});
