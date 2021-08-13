'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0a7db42bffc50e0d3749bcc8bc461d08",
"assets/FontManifest.json": "315d7ae6691ccf8469b11bc2fe053bc3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/VarelaRound-Regular.ttf": "159cb67fc3bc762a8c3232f0a0c6728e",
"assets/imgs/foods/%25D7%2590%25D7%2599%25D7%25A0%25D7%2592%25D7%25A8%25D7%2599%25D7%2599.jpg": "aa0300cdd2a7f81bd60ff03f3c941fba",
"assets/imgs/foods/%25D7%2591%25D7%259E%25D7%2599%25D7%2594.jpg": "8918f11b4eacb4cf41aa441efab7553e",
"assets/imgs/foods/%25D7%2591%25D7%25A2%25D7%2591%25D7%25A2%2520%25D7%2591%25D7%25AA%25D7%259E%25D7%25A8.jpg": "aefae16f26a7a2e41236f421cd7f5a2b",
"assets/imgs/foods/%25D7%2597%25D7%25A6%25D7%2599%25D7%259C%25D7%2595%25D7%25A0%25D7%2599%25D7%259D%2520%25D7%259E%25D7%2595%25D7%2597%25D7%259E%25D7%25A6%25D7%2599%25D7%259D.jpg": "ebccc27b17b49a05d8c6cbc30db86448",
"assets/imgs/foods/%25D7%259B%25D7%25A8%25D7%2595%25D7%2591%2520%25D7%259E%25D7%259E%25D7%2595%25D7%259C%25D7%2590.jpg": "530ec43190a0590acc9d408044b942ee",
"assets/imgs/foods/%25D7%259E%25D7%25A8%25D7%25A7%2520%25D7%25A2%25D7%2593%25D7%25A9%25D7%2599%25D7%259D.jpg": "e57b25a05b2e21cd883763b4cf892c25",
"assets/imgs/foods/%25D7%259E%25D7%25A8%25D7%25A7%2520%25D7%25A2%25D7%2595%25D7%25A3.jpg": "acbb5292d23689c9df25096faa145908",
"assets/imgs/foods/%25D7%259E%25D7%25A8%25D7%25A7%2520%25D7%25A9%25D7%2595%25D7%25A8%25D7%2591%25D7%2594.jpg": "7c92f7ad1ce01b01c72794252887e1df",
"assets/imgs/foods/%25D7%25A1%25D7%2595%25D7%25A4%25D7%25A8%25D7%2599%25D7%2598%25D7%2595.jpg": "8a05e6c3a720cd80306d5e63b58a0f07",
"assets/imgs/foods/%25D7%25A1%25D7%259C%25D7%2598%2520%25D7%2592%25D7%2596%25D7%25A8%2520%25D7%2595%25D7%25A4%25D7%259C%25D7%25A4%25D7%259C%2520%25D7%2597%25D7%25A8%25D7%2599%25D7%25A3.jpg": "602c1281e4f41801f50fe68ae4e4f14d",
"assets/imgs/foods/%25D7%25A1%25D7%259C%25D7%2598%2520%25D7%259E%25D7%25A8%25D7%2593%25D7%2595%25D7%259E%25D7%2594.jpg": "7c83c8c1ad45066149bebc28b32ad742",
"assets/imgs/foods/%25D7%25A1%25D7%259E%25D7%2591%25D7%2595%25D7%25A1%25D7%25A7%2520%25D7%2597%25D7%2595%25D7%259E%25D7%2595%25D7%25A1.jpg": "36b100f0368ed5bbd14e743cb88ed92d",
"assets/imgs/foods/%25D7%25A4%25D7%259C%25D7%2590%25D7%25A4%25D7%259C.jpg": "98528009416a0e87eccf7381a4836aff",
"assets/imgs/foods/%25D7%25A4%25D7%259C%25D7%25A4%25D7%259C%2520%25D7%2597%25D7%25A8%25D7%2599%25D7%25A3%2520%25D7%259E%25D7%2595%25D7%2597%25D7%259E%25D7%25A5.jpg": "dcdb8049a1058817005148a935f76498",
"assets/imgs/foods/%25D7%25A7%25D7%2595%25D7%2591%25D7%2594%2520%25D7%25A1%25D7%259C%25D7%25A7.jpg": "399e3386d080749a0a14dea3316053ff",
"assets/imgs/foods/%25D7%25A7%25D7%25A6%25D7%2599%25D7%25A6%25D7%2595%25D7%25AA%2520%25D7%25A2%25D7%25A8%25D7%2595%25D7%25A7.jpg": "12df3101a9eb939703f49a805de97cb0",
"assets/imgs/site/cooking.png": "7204edda512f84d6676e9760784d9c95",
"assets/imgs/site/main1.jpeg": "240f387eab11f94509e8e675eacb0f0c",
"assets/NOTICES": "fb40e126e46811d9ddab00cb8c3168cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "985008d17c6eda4a0ee976f7257e969e",
"/": "985008d17c6eda4a0ee976f7257e969e",
"main.dart.js": "f39b21623a604ea70ac8ca41342b8bb7",
"manifest.json": "fcd79842f23579122b98654fc676e8b5",
"version.json": "3ca9f55b8d49807823538bae988181c6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
