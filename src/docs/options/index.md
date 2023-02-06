---
layout: doc
title: Language
---

# Language

Create-vitepress-app has two options of available languages, Typescript and Javascript, however these options do not affect your actual markdown code and only affect the following:

- Config - Determines file extension of `src/.vitepress/config.ts`
- Component - Determines the `lang` attribute on the script block in the included Vue component.

## Difference

The primary difference between Typescript and Javascript is that Typescript offers type-checking. Due to this, it can help to identify errors while your programming. However it is still possible to get type-checking inside of Javascript files through the inclusion of `ts-check`.

Simply add the following to the top of your Javascript file and it should start working:

```js
// @ts-check
```
