---
layout: doc
title: Command Line Arguments
---

# Command Line Arguments

Though create-vitepress-app has a CLI interface that you can interact with, It also allows you to use Arguments to set values and skip it's corresponding question in the CLI.

## Usage

```sh
$ npm init vitepress-app@latest -- [directory] [args]
```

## `[directory]`

Sets the directory in which your app is created and skips it's corresponding prompt.

### Usage

```sh
$ npm init vitepress-app@latest my-vitepress-app
```

## `--language, --l`

Sets the language you want to use in your Vitepress app and skips it's corresponding prompt. [Learn more](../options/)

### Valid options

- `ts`
- `js`

### Usage

```sh
$ npm init vitepress-app@latest -- --l=ts
```

## `--prettier, -p`

Toggles prettier on and skips it's corresponding prompt. [Learn more](../options/prettier)

### Usage

```sh
$ npm init vitepress-app@latest -- -p
```

## `--packageManager, --m`

Sets the package manager to use when installing, if set to "n" it will not install dependencies and still skip it's corresponding prompt.

### Choices

- `npm`
- `pnpm`
- `yarn`
- `n`

### Usage

```sh
$ npm init vitepress-app@latest -- --m=pnpm
```
