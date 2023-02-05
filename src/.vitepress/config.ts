import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Vitepress App",
  description: "A Vitepress app.",
  cleanUrls: true,

  themeConfig: {
    logo: "/static/logo.svg",
    nav: [{ text: "Docs", link: "/docs" }],
    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Introduction", link: "/docs/" },
          { text: "Other things", link: "/docs/other" },
        ],
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present FLzyy",
    },
  },
});
