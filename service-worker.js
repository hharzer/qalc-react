if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,n)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const o={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return o;default:return e(r)}}))).then((e=>{const r=n(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-f0c4c850"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"141.6b3b29167081671d2057.js",revision:null},{url:"351.170c306aa40f7270a28c.js",revision:null},{url:"gui.4fa2641e5dcad88a4256.js",revision:null},{url:"gui.f0d07c2cbb8a6115ba33.css",revision:null},{url:"icon.png",revision:"165ee983e1352623ce75eceb8d3ee5f0"},{url:"index.html",revision:"0.5034511358648781"},{url:"manifest.webmanifest",revision:"2ab8cf884181c72bb963695cd1bdb062"}],{})}));
//# sourceMappingURL=service-worker.js.map