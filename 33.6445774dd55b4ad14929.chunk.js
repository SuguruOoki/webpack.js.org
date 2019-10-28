(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{321:function(n,s,a){"use strict";a.r(s),s.default='<p>Configuring the <code>output</code> configuration options tells webpack how to write the compiled files to disk. Note that, while there can be multiple <code>entry</code> points, only one <code>output</code> configuration is specified.</p>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>The minimum requirement for the <code>output</code> property in your webpack configuration is to set its value to an object and provide an <a href="/configuration/output/#outputfilename"><code>output.filename</code></a> to use for the output file(s):</p>\n<p><strong>webpack.config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'bundle.js\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>This configuration would output a single <code>bundle.js</code> file into the <code>dist</code> directory.</p>\n<h2 id="multiple-entry-points">Multiple Entry Points<a href="#multiple-entry-points" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>If your configuration creates more than a single "chunk" (as with multiple entry points or when using plugins like CommonsChunkPlugin), you should use <a href="/configuration/output/#outputfilename">substitutions</a> to ensure that each file has a unique name.</p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    app<span class="token punctuation">:</span> <span class="token string">\'./src/app.js\'</span><span class="token punctuation">,</span>\n    search<span class="token punctuation">:</span> <span class="token string">\'./src/search.js\'</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    filename<span class="token punctuation">:</span> <span class="token string">\'[name].js\'</span><span class="token punctuation">,</span>\n    path<span class="token punctuation">:</span> __dirname <span class="token operator">+</span> <span class="token string">\'/dist\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// writes to disk: ./dist/app.js, ./dist/search.js</span></code></pre>\n<h2 id="advanced">Advanced<a href="#advanced" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Here\'s a more complicated example of using a CDN and hashes for assets:</p>\n<p><strong>config.js</strong></p>\n<pre><code class="hljs language-javascript">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">//...</span>\n  output<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    path<span class="token punctuation">:</span> <span class="token string">\'/home/proj/cdn/assets/[hash]\'</span><span class="token punctuation">,</span>\n    publicPath<span class="token punctuation">:</span> <span class="token string">\'https://cdn.example.com/assets/[hash]/\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>In cases where the eventual <code>publicPath</code> of output files isn\'t known at compile time, it can be left blank and set dynamically at runtime via the <code>__webpack_public_path__</code> variable in the entry point file:</p>\n<pre><code class="hljs language-javascript">__webpack_public_path__ <span class="token operator">=</span> myRuntimePublicPath<span class="token punctuation">;</span>\n\n<span class="token comment">// rest of your application entry</span></code></pre>\n'}}]);