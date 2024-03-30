'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "b03bf40d16b66262607b889245e92afe",
"version.json": "3ed4ae7b4c304216219c647d23cdcd05",
"assets/assets/images/book1.webp": "2144d4006b3a92caba0b01b20690f8c9",
"assets/assets/images/book3.webp": "11c29a04fc1210d7229a799baecfb32c",
"assets/assets/images/book2.webp": "e30c802728bd94ca79a56bcd16af1fa0",
"assets/assets/images/book4.webp": "c594b1335d757bf1e04a09194e3aa4e3",
"assets/assets/images/book5.webp": "468dabde6dd7be94082a52a2c1618b5f",
"assets/assets/images/book6.webp": "19d59c7a4f255ccd9cb766600a0373d9",
"assets/assets/images/book8.webp": "b7eeb0330443406ffad10d1f06a16865",
"assets/assets/images/gLogo.jpeg": "33e386abad411188274a45ebf0c81c8e",
"assets/assets/images/library_banner_image.webp": "cef3093feaa098a905246ea79b5d8f5d",
"assets/assets/images/library_bottom_banner_image.webp": "be3ec47b61c062a04512abd02c6ff07f",
"assets/assets/images/about_page_banner.webp": "5bc82b60befd365ca5b9f35491d15ba1",
"assets/assets/images/collections_banner.webp": "dde1c2c969f1a9d1036d214723cb1564",
"assets/assets/images/events_banner1.webp": "455ab9e6362f6e4f2d118ebb6357c0d0",
"assets/assets/images/events_banner2.webp": "8cf082639c55bf6a22ba43de040d1fd7",
"assets/assets/images/events_banner3.webp": "f3f59950da8a63cac4e817584651e837",
"assets/assets/images/events_banner4.webp": "5ea129c5ef457c16a81368ee69b3353f",
"assets/assets/images/events_banner5.webp": "1b638a818a51c7736b601e24dae82cca",
"assets/assets/images/events_banner6.webp": "3700919f8068367da0ef3e52f7caf8e9",
"assets/assets/images/support_banner.webp": "207985a07ca2fad79d32d93152143c69",
"assets/assets/images/book7.webp": "4472f78f3fa2053553f7bf07d3e7fc79",
"assets/assets/images/favicon.png": "4c285c0e0373b8d11c574f36f1b7b7a3",
"assets/assets/images/book9.webp": "c080de2b5916ff18cdefd598e5d5d01a",
"assets/assets/images/gLogo_transparent.png": "dd87526a0626b2d3211c929eac77ef1b",
"assets/assets/fonts/Poppins-Regular.ttf": "d709511cfc58f9d8f59353de4be8bb17",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "55353e72a9536dcec37d8ebef6648e6e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "31704ca1dc74800f4853bd1f95e03707",
"assets/AssetManifest.bin": "ae10f560db8bd65e03d1f629d78ca072",
"assets/AssetManifest.bin.json": "daf135b9522bc1c0aa2969395f5233a0",
"assets/FontManifest.json": "951c316f84a757c082de1835fcd705de",
"assets/NOTICES": "3eeb71bb0a98cb3909296d769dc3c88f",
"favicon.png": "4c285c0e0373b8d11c574f36f1b7b7a3",
"index.html": "db1296b9676ce69cca7e947c0f947e5c",
"/": "db1296b9676ce69cca7e947c0f947e5c",
"manifest.json": "036ce34a006f82ee3f8e85d115dc5e72",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
