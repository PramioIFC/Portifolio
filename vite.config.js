import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig({plugins:[react(),VitePWA({
  registerType:'autoUpdate',
  includeAssets:['favicon.svg','pwa-192.png','pwa-512.png','assets/pramio-wordmark.png'],
  manifest:{name:'João Vitor Pramio — Desenvolvedor Full Stack',short_name:'Pramio',description:'Portfólio de João Vitor Pramio, desenvolvedor Full Stack.',theme_color:'#efeee9',background_color:'#efeee9',display:'standalone',start_url:'/',scope:'/',lang:'pt-BR',categories:['portfolio','developer'],icons:[{src:'/pwa-192.png',sizes:'192x192',type:'image/png'},{src:'/pwa-512.png',sizes:'512x512',type:'image/png'},{src:'/pwa-512.png',sizes:'512x512',type:'image/png',purpose:'maskable'}]},
  workbox:{globPatterns:['**/*.{js,css,html,svg,png,jpg,jpeg,webp,woff2}'],navigateFallback:'/index.html',cleanupOutdatedCaches:true,runtimeCaching:[{urlPattern:/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\//,handler:'CacheFirst',options:{cacheName:'google-fonts',expiration:{maxEntries:12,maxAgeSeconds:31536000},cacheableResponse:{statuses:[0,200]}}}]}
})]});
