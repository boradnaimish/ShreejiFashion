'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "23d329ae8b614fc5142d48a73ba561ab",
"assets/assets/1024.png": "783565ec0657741edbde85560c12bc1a",
"assets/assets/104381-send-invoice.json": "6c79718b5956e267ed9bc48a45934562",
"assets/assets/android-chrome-192x192.png": "aead36f766af9d81aa6de8b73a4c7beb",
"assets/assets/android-chrome-512x512.png": "7d64e2b403c17b3e6e47d0ae18342db9",
"assets/assets/apple-touch-icon.png": "7441d4f669b66c420d0fca6354c37c94",
"assets/assets/favicon-16x16.png": "f4b2cc670e4de8f9b396d615d9593e9c",
"assets/assets/favicon-32x32.png": "f9224a51c63d0e4ac80f389423db9d3b",
"assets/assets/Fonts.txt": "723a723c42d13d64ed910470eef9e343",
"assets/assets/LEMONMILK-Regular.otf": "be29f3c5ccd30b97f9c394a02c9ce5d7",
"assets/assets/LEMONMILK-RegularItalic.otf": "e8d33233b256559c813a7c19e65914dc",
"assets/assets/lock.json": "4d850ac776a69787f6b32a2f0d1bcaf9",
"assets/assets/log.jpg": "f5c0c07c62e0fa80dafe7bfce9fa0832",
"assets/assets/login.json": "6698c8f5b1fa237b8c9095b94c277d79",
"assets/assets/logo.png": "59171c226840e65d3cbf2bd92d0ea803",
"assets/assets/NOTICE.txt": "bfa61878e76d7657cdf230dafd4da186",
"assets/assets/play_store_512.png": "61d71e7193d86c31ad4fc924ece16e21",
"assets/assets/Roboto-Black.ttf": "1a00134f7baf6a4783dc1135145a361b",
"assets/assets/Roboto-BlackItalic.ttf": "9477efb1622d6fb5bda63068da817401",
"assets/assets/Roboto-Bold.ttf": "36b5bab58a18b9c924861a4ccbf1a790",
"assets/assets/Roboto-BoldCondensed.ttf": "2f89fa2a028410aaf54e593bd87ad991",
"assets/assets/Roboto-BoldCondensedItalic.ttf": "aa19358c2e40ed92c5a2e31b488d799b",
"assets/assets/Roboto-BoldItalic.ttf": "076a5afdf7124a39734cc14bedd57180",
"assets/assets/Roboto-Condensed.ttf": "8f7b8dc753ec34b0c7c3d748a835c38c",
"assets/assets/Roboto-CondensedItalic.ttf": "7a1bd1c497f585f8a5d9241e01022e32",
"assets/assets/Roboto-Italic.ttf": "93b13a58dedeebe519846555a543523b",
"assets/assets/Roboto-Light.ttf": "d5c46b134c17b2138dcd1bb0efa67049",
"assets/assets/Roboto-LightItalic.ttf": "c57ede1de60f117e50b6d0cb5e55240c",
"assets/assets/Roboto-Medium.ttf": "9745415b8a2a8b9a2480a12f7e2d3ad3",
"assets/assets/Roboto-MediumItalic.ttf": "73e11170897b4a5db88d62fdfe8429ee",
"assets/assets/Roboto-Regular.ttf": "5673da52c98bb6cb33ada5aaf649703e",
"assets/assets/Roboto-Thin.ttf": "14147ca3288fa08b850d029193150722",
"assets/assets/Roboto-ThinItalic.ttf": "460b4830c3aa962fd7f131daf26d4f7d",
"assets/assets/Roboto_Specimen_Book.pdf": "fdc4110558ede5ded7abe2c4c2a03ea4",
"assets/assets/site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"assets/assets/Splsh.json": "b2452079b2fc38f71ca0a8b2fd273a14",
"assets/FontManifest.json": "497ee1ff297ff20bb880f84cf1d4c682",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "f93f9eb3204c950ea4545b6f5ac389dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "1cd173aed13e298ab2663dd0924f6762",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "458b4713c94b1e2fcd11229ffa4816cf",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b45966a073fa6ad2860d2f087d43fb27",
"/": "b45966a073fa6ad2860d2f087d43fb27",
"main.dart.js": "a51cdb48aedee3ea52aa708a82d2c565",
"manifest.json": "950b44f08662c4eebb0ab8f83ff7012c",
"version.json": "dcbec17b9caea82a64ced7825bcde503"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
