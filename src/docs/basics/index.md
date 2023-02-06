---
layout: doc
title: Project Structure
---

# Project Structure

    README.md
    package.json
    .prettierignore # Prettier only
    .prettierrc.json # Prettier only
    .gitignore
    src
    ├── .vitepress
    │   └── config.(js/ts)
    ├── docs
    │   ├── index.md
    │   └── other.md
    ├── index.md
    └── static
        └── logo.svg

After you've generated your Vitepress app, you should see a project structure similar to the one above.

Below you'll find descriptions for each file from the above diagram.

:::tip

If a header has a badge like this: <Badge type="warning" text="example" />.

It means that it's a file used to demonstrate Vitepress and can be replaced or removed entirely.

:::

## Files

### `README.md`

Contains some basic instructions on how to get started.

### `package.json`

File which contains a list of installed `devDependencies` and `dependencies`. It also contains scripts that can be ran with `npm run SCRIPT_NAME`.

### `.prettierignore`

A file that contains a list of folders and files that prettier will not format, like `node_modules` and the like.

### `.prettierrc.json`

a file that contains configuration options that prettier will follow when formatting, by default Create-vitepress-app contains a single rule which is to make tabs have a width of 2 spaces.

### `src/`

Contains your actual markdown and application code.

#### `.vitepress/`

Contains your `config.(js/ts)` file and cache used by vitepress when started.

##### `config.(js/ts)`

Configures Vitepress' behavior and contains metadata used by Vitepress' theme. [Learn more](https://vitepress.vuejs.org/config/introduction)

#### `docs/` <Badge type="warning" text="example" />

Contains markdown files that are accessible through `/docs/`.

#### `index.md` <Badge type="warning" text="example" />

Homepage of your site, accessible from `/`. [Learn more](https://vitepress.vuejs.org/guide/theme-home-page)

#### `static/` <Badge type="warning" text="example" />

Contains files used by the example pages.

##### `logo.svg` <Badge type="warning" text="example" />

Logo of create-vitepress-app.

<img src="../../static/logo.svg" width=200/>
