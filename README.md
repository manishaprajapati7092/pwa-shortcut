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
<pre><code>// Register service worker to control making site work offline
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker
      .register('sw.js')
      .then(() => { console.log('Service Worker Registered'); });
  }

  // Code to handle install prompt on desktop
  let deferredPrompt;
  const addBtn = document.querySelector('.add-button');

  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI to notify the user they can add to home screen
    addBtn.style.display = 'block';

    addBtn.addEventListener('click', () => {
        addBtn.style.display = 'none';
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
      });
    });
  });
</code></pre>
<ol start="4"><li>Add this <code>&lt;script&gt;</code>function into <code>sw.js</code>.</li></ol>
<pre><code>
  self.addEventListener("install", event => {
    this.skipWaiting();
    event.waitUntil(
        caches.open(staticCacheName)
        .then(cache => {
            return cache.addAll(filesToCache);
        })
    )
});

self.addEventListener('fetch', (e) => {
      console.log(e.request.url);
       e.respondWith(
          caches.match(e.request).then((response) => response || fetch(e.request)),
      );
});
</code></pre>
