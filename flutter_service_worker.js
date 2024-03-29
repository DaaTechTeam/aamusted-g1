'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"version.json": "3ed4ae7b4c304216219c647d23cdcd05",
"assets/assets/images/book1.webp": "2144d4006b3a92caba0b01b20690f8c9",
"assets/assets/images/book2.webp": "e30c802728bd94ca79a56bcd16af1fa0",
"assets/assets/images/book3.webp": "11c29a04fc1210d7229a799baecfb32c",
"assets/assets/images/book4.webp": "c594b1335d757bf1e04a09194e3aa4e3",
"assets/assets/images/book5.webp": "468dabde6dd7be94082a52a2c1618b5f",
"assets/assets/images/book6.webp": "19d59c7a4f255ccd9cb766600a0373d9",
"assets/assets/images/book8.webp": "b7eeb0330443406ffad10d1f06a16865",
"assets/assets/images/gLogo.jpeg": "33e386abad411188274a45ebf0c81c8e",
"assets/assets/images/library_banner_image.webp": "cef3093feaa098a905246ea79b5d8f5d",
"assets/assets/images/library_bottom_banner_image.webp": "be3ec47b61c062a04512abd02c6ff07f",
"assets/assets/images/collections_banner.webp": "dde1c2c969f1a9d1036d214723cb1564",
"assets/assets/images/about_page_banner.webp": "5bc82b60befd365ca5b9f35491d15ba1",
"assets/assets/images/events_banner1.webp": "455ab9e6362f6e4f2d118ebb6357c0d0",
"assets/assets/images/events_banner3.webp": "f3f59950da8a63cac4e817584651e837",
"assets/assets/images/events_banner2.webp": "8cf082639c55bf6a22ba43de040d1fd7",
"assets/assets/images/events_banner4.webp": "5ea129c5ef457c16a81368ee69b3353f",
"assets/assets/images/events_banner5.webp": "1b638a818a51c7736b601e24dae82cca",
"assets/assets/images/favicon.png": "4c285c0e0373b8d11c574f36f1b7b7a3",
"assets/assets/images/events_banner6.webp": "3700919f8068367da0ef3e52f7caf8e9",
"assets/assets/images/support_banner.webp": "207985a07ca2fad79d32d93152143c69",
"assets/assets/images/book7.webp": "4472f78f3fa2053553f7bf07d3e7fc79",
"assets/assets/images/book9.webp": "c080de2b5916ff18cdefd598e5d5d01a",
"assets/assets/images/gLogo_transparent.png": "dd87526a0626b2d3211c929eac77ef1b",
"assets/assets/fonts/Poppins-Regular.ttf": "d709511cfc58f9d8f59353de4be8bb17",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "55353e72a9536dcec37d8ebef6648e6e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "31704ca1dc74800f4853bd1f95e03707",
"assets/AssetManifest.bin": "ae10f560db8bd65e03d1f629d78ca072",
"assets/AssetManifest.bin.json": "daf135b9522bc1c0aa2969395f5233a0",
"assets/NOTICES": "3eeb71bb0a98cb3909296d769dc3c88f",
"assets/FontManifest.json": "951c316f84a757c082de1835fcd705de",
"index.html": "9fadd6f5f5f5c2d9e8a5c815e555864d",
"/": "9fadd6f5f5f5c2d9e8a5c815e555864d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/main": "f9678f8c1fe0767a959e92be54b20243",
".git/refs/remotes/origin/main": "f9678f8c1fe0767a959e92be54b20243",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "6565cea3d54be30278ec17c46ecf0c68",
".git/config": "f48929b93ee1553cc9847d7b9d071f02",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "e016422e03441148bdfa8237de628971",
".git/objects/e6/bfba603813cc2cf6d7648ac7ac5cbebe945dc9": "607fdc33cfecb17b185632eb54a301b6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e1/fb991117f0412c30a071f87929cf9e3b55c9e0": "7a37a49b6c993b4bc2c20001619a17a4",
".git/objects/51/e3930be07af53b6980fde9b0e78f3a73ee8d5a": "5207a1de780c5a0e00481d3d676e68ef",
".git/objects/b0/80f47b4f4e50f677a023935567672e527f2d91": "9263f09f03c2f82b7c6fd8b20c39a8c3",
".git/objects/50/071b9073ca4d040a9233dee0e8fefda0427da1": "8a83e84e81f9e6bae7c161a774766de0",
".git/objects/34/61a5becbeaadea33b31892529fa5a7810b9e9c": "b4c81b6946acd703c9980dccc5f25946",
".git/objects/9b/cd02e905e24bc28456f3fb9c32f697f8c187d9": "78ecfd5c9b99d15960d80f959ca7a44d",
".git/objects/73/d6938fd8e61605d609fb8eeacb835412815e41": "dc099c8cdb4cbe27f71cc1fd20ff06d2",
".git/objects/37/5697bd4b738b127ae859a7998cabab2fbd3434": "ddc9b7e5b73f4828cdece24d1b68691f",
".git/objects/37/7b37f3f1918d44adea388f7924ce7115fcd4ad": "f634ba60d8e82a5556e24df9753bd7f3",
".git/objects/d5/e99acefbc55a300903559b0f59cd33604d7267": "f15b40cee522f20affe3efd9978fee50",
".git/objects/4b/aba6eb430e7417006c68b1a932dd5e1e62ba30": "ca3d3276d5d0c729a3aff2f8005d3243",
".git/objects/8e/48cc8bec0a2f1791e74adac2a8a5968c75f48b": "14ecb9f84b4dcdcde79a84c7bda4b741",
".git/objects/8e/c0fe5205ad0c00ee9197b341564400f4b4d52c": "da4ab57e94ed4775648158f1347a1fdb",
".git/objects/22/2ae35ca88d88d64dd5d949f371ac7225176483": "e59a85960b22f5e6073b3c0f730d83b7",
".git/objects/36/778469a95f674ce2035541b6cd8cba324f1c37": "f1a2736ff7ba2b4998839f2ce22a7e1f",
".git/objects/85/53f42cd5df8a7745a08eddf71f190b70085390": "cc84e9ae05e34ee153ea721ba0e9ebd1",
".git/objects/42/c9308d267b3931b7fea94b7a58347f93cd8a77": "0c9b23dd487028ee06e648bc290a8923",
".git/objects/7f/597a5663e1cb803ee4e933500c8b98d18c69f6": "879d0f8461dae2a1e5110e796c9081a0",
".git/objects/e8/6c4604605e56cdd1f2e65633a4da58c5a61866": "c88f5957dfa9743d5e132c4e0939ccc8",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/20/5278f27cd8870148d0ee6046cb55adfe30e937": "55b0b0fca844a590b72d1965cfcb44b3",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/53/c755bd43f83a34a86c2e55e2e35c4ce817e1f2": "c581858fc80e85800cd4af14775487e0",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/c0/bccbbd08ce06b9005019dae2d8790704bb3948": "0b82057ebd564d019247a96ea39bf9ec",
".git/objects/cd/61012661508b11b4672a201e3d8e51aa19dc0c": "6c656d9b4b2fd1e16cbee5e244033cbb",
".git/objects/cd/386ed1deda020b7cff502d5aade92edaab2c68": "e16841f376f7d24aa51d8de310cc81b4",
".git/objects/70/810c120a1a5019264befc28d065c2f6ea05d89": "5d14ee004d8400820fce7b8b88212c9c",
".git/objects/11/95669d9c56483ed9664a97bad0ed74e92cabe3": "16ad61ed6da8e7ba8d9b91f86e9d90b4",
".git/objects/38/66be2adf331cd7995265c1586aa66719b5c7af": "50772ece6015233b6e306553fdd65a90",
".git/objects/b9/1cf8f879a0da8539de5e6c6771e586e3033953": "56aedfdd0ad3b29f8ca6fe89c2daa6c9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/5c/ef8a31cd7244913885b10ccbc7dad6773cc33c": "28faef31c91b618dbb331d23371ca2fb",
".git/objects/a4/4cab4c06c307b7f752128727c271779332e256": "21ef94a9a852425d54027ff6a2a2a26a",
".git/objects/45/d2aa7ccea143e6463feea34e45e3bbde4107a5": "795e30864a107929c854b6c01789ae35",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/2a6a513d137892027f84b291d123badaa8a1a9": "0a8c2ca960903fb94366b4c24a947e1a",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/a6ebf978d6049392150da2438be8415428498c": "968e15af859d4af457836b0f8e182307",
".git/objects/d1/20eef8ce5587a54ca13c620b4ef5515e62e45c": "60ed1ee863c14b1dad35bed490dd2628",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/4f/85db899ba2886a0919f0aa015a641282057696": "9abc0b73324fee4d6834466ab5d37fcb",
".git/objects/41/35d027f4861a105d55fa37d9d570fb3f6b7eb4": "6916f33ac1037ba89c9dc0d67d460910",
".git/objects/35/4239f182a30077d2226a6f4d100ce542b059d1": "72c24ef03cebcaf1e1a8a31c9f5e213d",
".git/objects/24/e418b29e1a871c3df0dd3c46ebe7611371cc1e": "0cbbac87acd8fd890df573a9c68d4772",
".git/objects/bf/82d884152be59be0c800e6f89d07ff84942b2b": "6c417b4eda83b8b031b09dd75292e713",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/9a165052231ab93b8c90a64787c8904b4e44c3": "5a47c2291db4e619fe5ba3f877d33ca5",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/1b/cefb29da86340e580af920392b920dcc10ebec": "9589599b6a07b923b6b3b0a6e201c95d",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/09/17a5bfa09a8bb593ffa93bf49edb8f116b3ee4": "613e8fd93781296d6e3a704d2d151f50",
".git/objects/db/13c7f94bf57a68356cc032eba8d18acb02fd2c": "3635b7036844476679894a15939aad5b",
".git/objects/3b/faaf95d2d4a16eb9bf92e644bf051b0a6d27c0": "582d1c7c0d93b4035f3796a724f18683",
".git/objects/83/90885969d94e4c698f63a53d2cf4e2915f72d1": "71fd131b0c79e820b955f104d69d9289",
".git/objects/1d/0087c7a0be580e15727b3c0acc4ae4be039b32": "1e21ca1088b7de4a4d5dcf3df4b2b90e",
".git/objects/2c/caaaf63b502d0f4d2164f4d6a2bc3880510e80": "88d14dc5fdb6e9c2268f97eaeaf98fa7",
".git/objects/78/1aebe79291c06d0c5c28f829012904d977bed7": "7cd61dcf7aa69fc3be0b232410ca6ef9",
".git/objects/0f/a6f252848d7647f2d05b05c2abfa3629bd5c5d": "76bfda059c6dbf412f5a1b99a7e14bd4",
".git/objects/15/eb8ef7fe50fb2f757538f82203547bcfbf0336": "3828d12204a402e4420a28189898a244",
".git/objects/8f/448e9640ed03ea3825fcadb58d8eb31a41764e": "4e2f2e3537bc8d54e4b7bd55b04c738f",
".git/objects/fe/1c0d74173b3e441e59940dd391995b684eb1c7": "57143e8f256e993e7437ba5fb7f95e34",
".git/objects/ef/b20883cae5c3599dba43a72b952c5b822a4b2a": "94565ec614ebaea5c260a611308f0c28",
".git/objects/58/c62267df455c82f2ff25a28264a92b3253a1be": "5e3afeebf36d6ff19a6b7ab35546fa50",
".git/objects/1e/280d073fb2cbfc71fe2e7743cccce4f57b3c09": "24032ef82c21f9b70f0a8e05d0629f16",
".git/objects/d9/f480828740ad0e51832aa18aec48b5372fd9f7": "915bca98762bb189b09e92d4e1fa42f8",
".git/objects/93/9c9fd56ccf25c5f6c7d2898a760a621355a7a3": "19d6a955a8d4b87f41b0991f352cb0ed",
".git/objects/a7/012b1343efa8971a99c4adf31a21d14e5cf605": "cb6656b305b81e07b4232c608b7f7e4e",
".git/objects/40/4b2e8dfc6d4e78d216042085ee9e3514b19da4": "e650d840a4dc22a8e09131ab3fe9f8d9",
".git/FETCH_HEAD": "46cd2412895a89443515b58861dd3c73",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/logs/HEAD": "0152b01f99efd5cdd7f5795a7ec8acb2",
".git/logs/refs/heads/main": "6febab673031c96ee7fa75bda49982c8",
".git/logs/refs/remotes/origin/main": "51c76c358837a4eb6536f0a8cd407abb",
"README.md": "434120e7118531255a284183127d6941",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "140d33208ef2b5cc0e454f376b44b667",
"favicon.png": "4c285c0e0373b8d11c574f36f1b7b7a3",
"manifest.json": "036ce34a006f82ee3f8e85d115dc5e72"};
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
