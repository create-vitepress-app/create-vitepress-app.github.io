---
layout: doc
title: Prettier
---

# Prettier

Create-vitepress-app offers an option to enable Prettier in your project, Prettier is a tool that can help you to format your Javascript/Typescript code, Markdown, JSON, and other formats present in your project.

If you chose to enable Prettier in your Vitepress app, you'll see a few extra files than normal, `.prettierignore` and `.prettierrc.json`. `.prettierignore` is a file that contains a list of folders and files that prettier will not format, like `node_modules` and the like. And `.prettierrc.json` is a file that contains configuration options that prettier will follow when formatting, by default Create-vitepress-app contains a single rule which is to make tabs have a width of 2 spaces.

## Usage

To format all files in your app, simply run the following command in your terminal:

```sh
$ npx prettier --write .
```

To format all markdown files in folder:

```sh
$ npx prettier --write folder/**/*.md
```

To format all files in the root directory:

```sh
$ npx prettier --write ./*
```

You can [learn more about Prettier's CLI here](https://prettier.io/docs/en/cli.html).

## Resources

- [Prettier Docs](https://prettier.io/docs/en/)
