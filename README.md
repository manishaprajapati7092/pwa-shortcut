# pwa-shortcut
Install the any app or website on home screen using progressive web apps.
<h2>Getting Started</h2>
<p>In this tutorial show the How to install the app or webpage on the home screen menu using progressive web apps. you have to follow basic steps. I write a very simple example for install PWA shortcut step by step so you can easily use in your Program.
</p>
<h1>Installation & Usage:</h1>
<ol><li>In your <code>&lt;head&gt;</code>section into <code>index.html</code>, add the following links</li></ol>
<pre><code>  &lt;link href="manifest.webmanifest" rel="manifest"&gt;</code>
<code>  &lt;script src="index.js"&gt;</code>
<code>  &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"&gt;</code></pre>
<ol start="2"><li>Add this <code>&lt;code&gt;</code>into <code>&lt;body&gt;</code>section into <code>index.html</code>.</li></ol>
<pre><code>&lt;button class="add-button btn btn-primary">Add to Home Screen&lt;button&gt;</code></pre>
<ol start="3"><li>Add this <code>&lt;script&gt;</code>function into <code>index.js</code>.</li></ol>
