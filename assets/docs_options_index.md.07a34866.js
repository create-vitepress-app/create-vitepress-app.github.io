import{_ as e,c as t,o as a,a as s}from"./app.a6111132.js";const g=JSON.parse('{"title":"Language","description":"","frontmatter":{"layout":"doc","title":"Language"},"headers":[{"level":2,"title":"Difference","slug":"difference","link":"#difference","children":[]},{"level":2,"title":"Resources","slug":"resources","link":"#resources","children":[]}],"relativePath":"docs/options/index.md"}'),i={name:"docs/options/index.md"},o=s(`<h1 id="language" tabindex="-1">Language <a class="header-anchor" href="#language" aria-hidden="true">#</a></h1><p>Create-vitepress-app has two options of available languages, Typescript and Javascript, however these options do not affect your actual markdown code and only affect the following:</p><ul><li>Config - Determines file extension of <code>src/.vitepress/config.ts</code></li><li>Component - Determines the <code>lang</code> attribute on the script block in the included Vue component.</li></ul><h2 id="difference" tabindex="-1">Difference <a class="header-anchor" href="#difference" aria-hidden="true">#</a></h2><p>The primary difference between Typescript and Javascript is that Typescript offers type-checking. Due to this, it can help to identify errors while your programming. However it is still possible to get type-checking inside of Javascript files through the inclusion of <code>ts-check</code>.</p><p>Simply add the following to the top of your Javascript file and it should start working:</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// @ts-check</span></span>
<span class="line"></span></code></pre></div><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-hidden="true">#</a></h2><ul><li><a href="https://www.typescriptlang.org/docs/handbook/intro.html" target="_blank" rel="noreferrer">Typescript Handbook</a></li></ul>`,9),n=[o];function r(c,l,d,p,h,f){return a(),t("div",null,n)}const _=e(i,[["render",r]]);export{g as __pageData,_ as default};
