"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","10c567f4b73e7efb339acfd6e75643ad"],["static/css/main.b5627c86.css","322348d570ddbc99adea0140d96cf4e4"],["static/js/main.aaf3ce55.js","3e1d3f4f0b0d3f5cfd62f05cd2b7dfc1"],["static/media/01_JUNGLE_BY_NIGHT.e640ffb2.png","e640ffb2ff40cdcad2eba8d752ee6d57"],["static/media/02_TOM_TRAGO.c3b49cb8.png","c3b49cb8d3bba52748d87dbba0cc69cd"],["static/media/03_CANALON.f7e84fb8.jpg","f7e84fb8a55a89de241d5d79b7ca8475"],["static/media/04_SHIFTED.6e724fac.png","6e724fac6e7ecc4db3b77184e52922c6"],["static/media/06_FEINDREHSTAR.b40f6ad6.png","b40f6ad6970db5a055315c581529983d"],["static/media/07_ANCHORSONG.60068c81.png","60068c813652b97da341853619ad0a10"],["static/media/08_KUTMAH.33deddcf.png","33deddcf1f80a4341452677e9d40ab86"],["static/media/09_RICOLOOP.b93149fc.png","b93149fc41b0f4dacf538cc431cf0699"],["static/media/10_BAGUNCO.701a3077.png","701a3077b817acf5225d7afb80412c6c"],["static/media/11_SABBEY_INTERNATIONAL.2a26865f.png","2a26865fcf78a3a14307e2a13b422183"],["static/media/12_CRUNCH22.203c0512.png","203c0512c60c5b93c54686ec04487193"],["static/media/13_ALEXIS.e0f45e04.png","e0f45e044ea1ba8fbb107004f68415d6"],["static/media/14_314.36039a6e.png","36039a6eb4e312ffdcccb6599c3b5b91"],["static/media/15_NOSTALGIA.2fddabee.png","2fddabeea15a76b64a37c2792c0d519e"],["static/media/16_MIGHTY_SUGARCANE.09627059.png","096270599ffad4ffda313d426a70ca0e"],["static/media/17_MUSICOFDECLINE.4439cfc8.png","4439cfc8ee729e5adabf25d28748e49d"],["static/media/18_ALKIS_AGATHOKLEOUS.f7bbe03a.png","f7bbe03a7b7418d135be233158fe38b5"],["static/media/19_TRIO_FRISSON.c018c276.png","c018c276f54ac53d95748e21ba97cf27"],["static/media/20_YEMAYA_SON.8a8e233d.png","8a8e233d1b1b55ce98181782f646e8e7"],["static/media/21_COTSIOS_O_PIKATILLIS.d2177dbf.png","d2177dbff1d5d8c0d3b8ced5b432ff84"],["static/media/22_THE_FABULOUS_DILLINGERS.5aa8c48a.png","5aa8c48ae5ce1b7a116f15ed8212467e"],["static/media/23_DAN_LO.2a4a27dc.png","2a4a27dc9f729fbb4c7afc608d7742d5"],["static/media/24_CUSACK.e7fb574e.png","e7fb574e8266722cbb2ca9d7dd197caa"],["static/media/25_MR_FOX.1b39007e.png","1b39007ebd58ef7954b8f41a83d21ecf"],["static/media/26_SOFRONIS.5e6a3d83.png","5e6a3d83a4fbc2f59360bbb11ad58fb1"],["static/media/27_DJ_VBER.431eeadd.png","431eeadd2cb1a3e6782572ac3156a87a"],["static/media/28_BOMBASOUL.337e4f25.png","337e4f25d6419a25ed81d872e3c5806e"],["static/media/29_ARISTODEMOS.bb566452.png","bb5664525636d8b56392cc72f140ecf7"],["static/media/30_RADIO_PANGEA.264125fb.png","264125fbf5a2232371afab636ed046f6"],["static/media/31_KOULLA_P_KATSIKORONOU.e10e9fa0.png","e10e9fa0849592895e501d9ea01ed3e8"],["static/media/32_SIXONESIX.9d3bd4d9.png","9d3bd4d96cf6be8bbe3a29887946c0b8"],["static/media/33_CHARIS.c59a76ad.png","c59a76adbd7adf51d523d6d81faba887"],["static/media/34_DJ_BKAS.57f91369.png","57f91369dbe549844fff308973b88b61"],["static/media/35_MESKALIDO.deaa6bd3.png","deaa6bd3f49fb14933edfc42779a7d62"],["static/media/36_ANGELIKI.8393b6ed.png","8393b6ed100d7f1ae48bd7d2a8525e7e"],["static/media/37_ASTRAL_PASTA.ae533de8.png","ae533de85da79efb254d6ff6f2f60ff5"],["static/media/38_KINEZA.743a2b6a.png","743a2b6acc1c5f39bbbe65bf3c73e5bd"],["static/media/39_MARIANNA.2d97521b.png","2d97521bec58f44859e6b1cfff919796"],["static/media/40_VANESHA _P.a809fbbd.png","a809fbbd47d70e8f5749a449f7081324"],["static/media/camping.644e4b54.jpg","644e4b54035147d05aaba4148463ec8e"],["static/media/directions.5a633615.png","5a6336158fa9f1de2e5e9d069841df21"],["static/media/food-drinks.211146ef.png","211146efa93e1d5fb38c91ffd29435ff"],["static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["static/media/health-safety.10ad9e57.png","10ad9e57b15b79d02061c01f9115dc64"],["static/media/map.5870b2ca.png","5870b2caf006672cb2016dcfc64759a1"],["static/media/sponsors.29b1563a.png","29b1563ad46deee02fb790709becb478"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("/2017-dev/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});