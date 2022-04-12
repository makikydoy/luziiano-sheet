'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "ccc87e7257869ad33a6a0bd9e28a4ae4",
".git/config": "991f3fdc39191433978c3a9e8bb2a0af",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ff10faa0791be6543527548276a71a6d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "07bda4d6856d2c6238f8d6d71f9e916f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "994e3d943976adcd655780221093c074",
".git/logs/refs/heads/master": "994e3d943976adcd655780221093c074",
".git/logs/refs/remotes/origin/master": "5f387562ea8c3fdca54843c47595b002",
".git/objects/00/8744d6bb585dd55eeee03aacbcc69691e8dbca": "cf05bbee99f391dd1f4be5909851ae16",
".git/objects/01/cfccc4502af2bb0513fddba86868b99bcd890b": "176abbc2c83a0bb3a82b92ca19d787c3",
".git/objects/03/7f2e15827c96834a6ca667686dc7735db071ff": "148f0e52b39c2cf55959ec47e353590c",
".git/objects/0b/23d12270fc3358a41ce7698153971ae722eac6": "4670cf1e944dacc064851dfc9b291083",
".git/objects/0f/6b162d39b4b62b54f27ab26b5765ab86c7d21f": "aef645255372dfd340fcbe9a2748f7da",
".git/objects/17/ddc936b94e264c53bf397bc289ece31c4a7ca2": "06cdc1c10a4688c48a84c716c8ea1d2c",
".git/objects/18/2f83bc68d74f21e77139aacecafc65b7a56ec3": "e673eada9a435857eb0b2511bd48cfbe",
".git/objects/1a/ee93fb1d2dd81b83356d2c07a8e3b2b4960e37": "0602ca7feb0bb95b1f25f77770483531",
".git/objects/1f/a68493f71be182b68a03f0ff911eef12beb961": "50a329327a3890310d820ae409e3843b",
".git/objects/20/2ed41c95bd24c40c9c5184141533865a91804c": "0f88c5a52422f32ccd382d225c66c38a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/d8331a5607bd8f26ebf0f02573118856b1f49f": "a6305d54b7b61b82ccaef40d485926af",
".git/objects/2d/042b19b12ce46ece11289d7f282294db819fe1": "a565482049c01cb7bd03df5dc481171c",
".git/objects/2e/3b696dbe69ca0020118029936ff279b06583b0": "ca7cf346f626477470d4b3aea43d1a89",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/4c438d9642c3308e61d088182ad5a8546f9b64": "2357b11e7f58ec2d59426bdb62624e68",
".git/objects/32/7786b49c1f05a82d49eb26c5f52809afa8de6c": "72d132aa7c4e3c4a58c2034acb5fda4e",
".git/objects/34/b96be81123554d677c925ef7d0410b0e52a14c": "1496f023d9d915e0c0e3f5792a4b53d0",
".git/objects/38/0b9d1d8ed7b8f4427b096cb5c69f2d02cb7a5f": "f44cb8f4731495d82c9c0df05b949749",
".git/objects/3f/35b13b2dc10ef0f4ccf5e6c8b8279e1b0973a3": "11b25b271aa8bf3b60d7f690f5599557",
".git/objects/40/ec5c437619d60f0d2f222d66a82ee0d766f492": "db261e508388da7f3bf0fa3ef26a6e29",
".git/objects/47/1b792c4e345cbc1cff61489c10444feae211cc": "5aaa4f7a283b6175263f60373e434429",
".git/objects/4a/a7fbae4a8139c673a93899840a1ba1f03b3f52": "09e90292b318128a27b179eb2c3c7ccd",
".git/objects/51/5ed4fb6d9717e80db5d667605eb4f6a81c6838": "d34dd08d9d9da95608b2633b749f1b74",
".git/objects/5d/cbd35a1c23f2f1950bc03ac6c434dfc9ec976f": "364622f0102d9caaaefa27268a6b6348",
".git/objects/5f/ceb9d730aa3fe1716933c0d4dc1e07dccba58f": "e5fd2282241dfc38222a36a1c792f097",
".git/objects/62/6560c664d23bbf81cb034dd00c55e8358cb625": "ea5d781ec9061727613e35d6ad2ba857",
".git/objects/63/2c1e28540a5cf85115bef1f2217cb40e9c9032": "434439e59455bdb746a911620348c46b",
".git/objects/63/d904685ff30d7d9b83de94a9f774d9850bb505": "b528d0d96a55a6fc55836aea8e27d7e8",
".git/objects/64/89c9a27a3ba07cfbe01e1c4584d22bf8db5c9d": "2dff113f2614cbc2b444ef08d2a38423",
".git/objects/68/e8741851e7dd41b48e39dd478c652ce71bfa0e": "210bc6e8a4674310981ac00a0e6389bb",
".git/objects/6a/b6512bb9d1a96645a01567842ff4f4705646d4": "d637b82cc68a186a892b11e3739a55c5",
".git/objects/75/eaf1c15d084d0f920effcf004a1a8c2071b7d3": "43b69faafd801cc3f5f1983a931f1a98",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/5338dc9cc3f8d3664cd1441c2eb4add4e3e4dd": "cdb173fd096d73785a2491087b671a5a",
".git/objects/7b/9cf31b9222694f1ab2865ea660afc808efd510": "5561aa0bb45a1e35555b4b28aac38f3e",
".git/objects/7f/22bd9162bcf910761981a4fc8a8271c3f4329f": "78ce269a470331ad0bb2e2d11a447a3c",
".git/objects/83/782e044592df81e50389466c576114d243067f": "a6bf2fa70d66ce257cb590c49a29ab2c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/64b34851a8a3add8d84bc732d75e1f5daefb52": "fdb38f722f7530af2b9b1d8b2f31ecb4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7d06f2075382ef2ddcc75ab0fbaf0d2b8b82fe": "5dc2e6a31b6c2e9e2f4c6b6f2133ffa0",
".git/objects/90/407ccfcb3254b7e95a2050fb919ec3f10c6574": "94252060b1648f11f6b149cc014085f7",
".git/objects/92/958e60ae347c5f04e3ca40c6b451cd1f92e2e0": "a42a60cb7ea3864c04d7085a3291fcc9",
".git/objects/9b/495a1426499ed4f385e7434b0d293980e8da5f": "01992a845409cc9f22207467f2434ac4",
".git/objects/9f/e56942bb442ddd8e3e545c3eb515586123a3c1": "51cd75414c850f9fb12071a574d54708",
".git/objects/a1/0a13656a767509b60d5c4675132133b6347204": "9ccfad2f67c32908c0c99d345985dbd8",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/19f74db5f3d7b633fffb3dbaaebce11d07f008": "d57d28288167364ffca79c7108f12e38",
".git/objects/a8/4029ecf728a391db7a63be5bd23621d50f8b06": "5e7a8dcdc0ef99117cf7685839d62cd0",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/1c53957c28f149eb286cfcf3b079a3962abdfb": "ef7b5218cced3be4be336f2e1e6b8a0d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/b37e8522bd987fd19fadfa9fc23223a3e4e0cd": "defda17f2baa6f25aadc8fd1ea8581c3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/768a63c73246f5e86052896df81c0b424654a2": "06f2731c08f94ac0e3679f0dc6d28ae4",
".git/objects/c3/ab55723c4094bf94e3b2b5f90f5d86db0a960f": "0bbeac87b893c57be7290154af5dcd3f",
".git/objects/c7/8eca39ed93544bfb848eba8bf8c6f74da82f9d": "ca74e864e2481ad90f4a2b3d591fc986",
".git/objects/c7/ccd1519c691d73a3ea0ff0c4edf4432ddf0d78": "ba44179a911365fe3f0aefb2c33fb36e",
".git/objects/ca/c1262d6952fa18863908638732c9846038465a": "a23aeba01d5f757f2ce5f3397e423147",
".git/objects/cb/3dbe33432109ee68895631da02ef99ce5bf807": "dba2d2c05e85183611394d6f73c505f7",
".git/objects/cb/52ef576087afb2d8bb3ffd463593361a200cf1": "3918706d208c08301469a567dd532806",
".git/objects/ce/6f1eb933afc42bc276103420bfe16b2ee4f073": "3d0ef523553736ce02d6e003cbcfdc7a",
".git/objects/d1/fd9abc1d0c126bd6b3b5a17923ee27a493a5e0": "561e695c5c9ee940ebdf739bcce4dcbe",
".git/objects/d3/35958e1530eb95a4db75786e4786336310c97d": "949beaf93615ccd37464a051ebce9805",
".git/objects/d5/c43e979875cbfcb2059481f088d4f8eaf9c51f": "b04446d16e42cfe2e616781c0fcfb6ea",
".git/objects/d6/385c543d75ed568eb3d44fca44afc4bfe90957": "b87f62c986ff9f3f1b63a333549d55ca",
".git/objects/d9/4391fa71deae138f2f196efbdd188a04ef9f5d": "e3edd99c4e2acc88e738ee2cc4b7ea90",
".git/objects/dd/b724d21bcb701237ed7e51bbd2fa1b7df69907": "a6301cb999465c55e76c9605863c7b58",
".git/objects/de/1cefeb6c84cd837f0edb709a4e05c7a7fee939": "777a0cdf647dd9496fe13765402bdb71",
".git/objects/df/ce0ad7bf76465f00ec316d9322b5a1954dad6e": "a228694ab7e9011576f122c2d0c8a565",
".git/objects/e1/b318b0e1cec130e79c00e2086d32a90d0cffff": "0941b8766f123b103720001661b8aa18",
".git/objects/e3/d4e998014e74a95e99a9626ede24305583ee50": "9b1a2100f435481e83f7ff61f364c70b",
".git/objects/e4/851d3f5a3a81f660e742ab222178f41a19089c": "a699c0975b0772ff031484cbf07b6d3c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/3558634b51b11f4bfa3563edd0e309ad8758ba": "23d869409df56e2103638bd840ddb3bd",
".git/objects/e9/40de91d8282ac9eb9632f6f6ec91ffb9cdd7ff": "bc71fb0505c4e2c2066d358e447a38ed",
".git/objects/e9/6640fc1beb7ba99f4887f386a02830da8b4715": "89f16ef64f6bf7f6252234aab3bee505",
".git/objects/ef/b8db7267e4fba5df962aee99c3d39d66ddd568": "ba2f3957570749a94ea9efd9fd6fca13",
".git/objects/ef/bb103060e5fd8bb195c622614401c3562a4f11": "27615863e9dea77fdecdc0df29bba19a",
".git/objects/f2/cfeced2aecd0531e708210bd08c55893d911d4": "3ad3d84fe12c46997e11341599db02ab",
".git/objects/f4/b4c18a147daaffc6ba65b463ee2a9b6a1aaaf6": "06423697a5c1f81cd66e49cea7d0b151",
".git/objects/f4/ebdfedf92e39629ec79824a5c3014c6636aa1b": "008cd58f49a681f8d3c21eb2806c0459",
".git/objects/f5/42ec4c72304d038b277a7e81a4b8353cacf40e": "fc1e9fdc6d4820259bd519fc650a679a",
".git/objects/fa/80c8427a4fbc6bbbf70ad3fa611ccd2f950a7c": "115a694f9cd4944852f5d756bfaf10d0",
".git/objects/fc/361f3fb9f0cea062e2091e0fae05832668cd97": "a876de6e91194e9ab21c4b7c3dec1faf",
".git/refs/heads/master": "38622e770fb14536a31c7cc7b43a1b85",
".git/refs/remotes/origin/master": "38622e770fb14536a31c7cc7b43a1b85",
"assets/AssetManifest.json": "5f2a6f5c87abd9eede2ff86b592956b9",
"assets/FontManifest.json": "8cec818c2d2d1d3035b4f281f27f2a83",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/iknowaghost.ttf": "c49b02a27776a869473e1333f5851108",
"assets/lib/assets/images/Alexander.png": "23b7ca45473ef82fe468b2641740931e",
"assets/lib/assets/images/Noah%2520Lasley.png": "0a5f654d1095bf05fcc492592a95ba04",
"assets/lib/assets/OldNewspaperTypes.ttf": "c25c5a0382ad95548bcfc2a8f29d0aa5",
"assets/NOTICES": "918b16a6e9bd2cbac10161aa28a38c82",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "03f80b4443daf24693de2f981140af96",
"/": "03f80b4443daf24693de2f981140af96",
"main.dart.js": "148df9f3075329bb814f062dccf08dcf",
"manifest.json": "e35ccb9235249a550e6617e44bc22e8a",
"version.json": "38f3127cc0615207488186ffa8d832d5"
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
