import{_ as a,c as s,o as e,a as n}from"./app.d93b476e.js";const u=JSON.parse('{"title":"Command Line Arguments","description":"","frontmatter":{"layout":"doc","title":"Command Line Arguments"},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"[directory]","slug":"directory","link":"#directory","children":[{"level":3,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[]}]},{"level":2,"title":"--language, --l","slug":"language-l","link":"#language-l","children":[{"level":3,"title":"Valid options","slug":"valid-options","link":"#valid-options","children":[]},{"level":3,"title":"Usage","slug":"usage-2","link":"#usage-2","children":[]}]},{"level":2,"title":"--prettier, -p","slug":"prettier-p","link":"#prettier-p","children":[{"level":3,"title":"Usage","slug":"usage-3","link":"#usage-3","children":[]}]},{"level":2,"title":"--packageManager, --m","slug":"packagemanager-m","link":"#packagemanager-m","children":[{"level":3,"title":"Choices","slug":"choices","link":"#choices","children":[]},{"level":3,"title":"Usage","slug":"usage-4","link":"#usage-4","children":[]}]}],"relativePath":"docs/basics/args.md"}'),l={name:"docs/basics/args.md"},t=n(`<h1 id="command-line-arguments" tabindex="-1">Command Line Arguments <a class="header-anchor" href="#command-line-arguments" aria-hidden="true">#</a></h1><p>Though create-vitepress-app has a CLI interface that you can interact with, It also allows you to use Arguments to set values and skip it&#39;s corresponding question in the CLI.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress-app@latest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">directory</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="directory" tabindex="-1"><code>[directory]</code> <a class="header-anchor" href="#directory" aria-hidden="true">#</a></h2><p>Sets the directory in which your app is created and skips it&#39;s corresponding prompt.</p><h3 id="usage-1" tabindex="-1">Usage <a class="header-anchor" href="#usage-1" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress-app@latest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-vitepress-app</span></span>
<span class="line"></span></code></pre></div><h2 id="language-l" tabindex="-1"><code>--language, --l</code> <a class="header-anchor" href="#language-l" aria-hidden="true">#</a></h2><p>Sets the language you want to use in your Vitepress app and skips it&#39;s corresponding prompt. <a href="./../options/">Learn more</a></p><h3 id="valid-options" tabindex="-1">Valid options <a class="header-anchor" href="#valid-options" aria-hidden="true">#</a></h3><ul><li><code>ts</code></li><li><code>js</code></li></ul><h3 id="usage-2" tabindex="-1">Usage <a class="header-anchor" href="#usage-2" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress-app@latest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--l=ts</span></span>
<span class="line"></span></code></pre></div><h2 id="prettier-p" tabindex="-1"><code>--prettier, -p</code> <a class="header-anchor" href="#prettier-p" aria-hidden="true">#</a></h2><p>Toggles prettier on and skips it&#39;s corresponding prompt. <a href="./../options/prettier">Learn more</a></p><h3 id="usage-3" tabindex="-1">Usage <a class="header-anchor" href="#usage-3" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress-app@latest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span></span>
<span class="line"></span></code></pre></div><h2 id="packagemanager-m" tabindex="-1"><code>--packageManager, --m</code> <a class="header-anchor" href="#packagemanager-m" aria-hidden="true">#</a></h2><p>Sets the package manager to use when installing, if set to &quot;n&quot; it will not install dependencies and still skip it&#39;s corresponding prompt.</p><h3 id="choices" tabindex="-1">Choices <a class="header-anchor" href="#choices" aria-hidden="true">#</a></h3><ul><li><code>npm</code></li><li><code>pnpm</code></li><li><code>yarn</code></li><li><code>n</code></li></ul><h3 id="usage-4" tabindex="-1">Usage <a class="header-anchor" href="#usage-4" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitepress-app@latest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--m=pnpm</span></span>
<span class="line"></span></code></pre></div>`,24),o=[t];function p(r,i,c,d,h,g){return e(),s("div",null,o)}const y=a(l,[["render",p]]);export{u as __pageData,y as default};