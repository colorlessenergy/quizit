if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.1348cdf3106344055668.js",revision:"c4d035de0ab2b66bdf0c3c8ba404a00b"},{url:"/_next/static/chunks/framework.085e84bea8b122ad7b41.js",revision:"59bb0a3271ddef6462ff12a22cebcf20"},{url:"/_next/static/chunks/main-4c61278c6103302f7cb5.js",revision:"4229a8bf8f6d79fe818a7bd1dfe6c2b1"},{url:"/_next/static/chunks/pages/_app-e2f21c506de9e5d9fbd4.js",revision:"4853ffa27c4811b9bce58cdbc60b9b4c"},{url:"/_next/static/chunks/pages/_error-fa39c7ce12d3ae2cec40.js",revision:"022e249acecb2aa4fbcb0e99aa1e4128"},{url:"/_next/static/chunks/pages/index-bc572499d240d9b4a86a.js",revision:"2e4ee1ee48df87f004b1c791912feb58"},{url:"/_next/static/chunks/polyfills-7abac9d858370c30536e.js",revision:"7bea24feabff45c925a69bded8519934"},{url:"/_next/static/chunks/webpack-ccf5ab034a524403276a.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/0b52ace82108e5ba72be.css",revision:"2b369de1f6a2e80057d00414c6d2db4a"},{url:"/_next/static/css/2776161958db7e3aac51.css",revision:"4456c91802b356cd510a6e0e9140537e"},{url:"/_next/static/mTIU0dez4nCHjHcVMlfp-/_buildManifest.js",revision:"4d0d9729d7a3bca427c4b431382858cd"},{url:"/_next/static/mTIU0dez4nCHjHcVMlfp-/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/android-chrome-192x192.png",revision:"680596c42dcfe9252d70b5c1ead29481"},{url:"/android-chrome-512x512.png",revision:"1d609b307bb69b4e8649bc0e38f59160"},{url:"/apple-touch-icon.png",revision:"ad763a31c7880f68dcb6480e8438bf19"},{url:"/favicon-16x16.png",revision:"fee85af2eed49ac4ec1a27c4a7bb1422"},{url:"/favicon-32x32.png",revision:"19febfcea27fe8b5b41a65898e8461e6"},{url:"/favicon.ico",revision:"93884d13ea3474142d9e9367c5ef7ba6"},{url:"/manifest.json",revision:"b918087914447f8d008610c01486e9cb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
