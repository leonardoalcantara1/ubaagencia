if (!self.define) {
  let e,
    s = {}
  const n = (n, t) => (
    (n = new URL(n + '.js', t).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = n), (e.onload = s), document.head.appendChild(e)
        } else (e = n), importScripts(n), s()
      }).then(() => {
        let e = s[n]
        if (!e) throw new Error(`Module ${n} didn’t register its module`)
        return e
      })
  )
  self.define = (t, i) => {
    const a =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[a]) return
    let c = {}
    const r = (e) => n(e, a),
      o = { module: { uri: a }, exports: c, require: r }
    s[a] = Promise.all(t.map((e) => o[e] || r(e))).then((e) => (i(...e), c))
  }
}
define(['./workbox-1846d813'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/chunks/651.243d23442247d286.js',
          revision: 'g-AtMfwuljlMXkPV4A0wB',
        },
        {
          url: '/_next/static/chunks/framework-91d7f78b5b4003c8.js',
          revision: 'g-AtMfwuljlMXkPV4A0wB',
        },
        {
          url: '/_next/static/chunks/main-4141d431af7eb6cb.js',
          revision: 'g-AtMfwuljlMXkPV4A0wB',
        },
        {
          url: '/_next/static/chunks/pages/%5Bartist%5D-4724deb8fc74743f.js',
          revision: 'g-AtMfwuljlMXkPV4A0wB',
        },
        {
          url: '/_next/static/chunks/pages/_app-8b665b18da15e041.js',
          revision: 'g-AtMfwuljlMXkPV4A0wB',
        },
        {
          url: '/_next/static/chunks/pages/_error-8022dacb1937fc7a.js',
          revision: 'g-AtMfwuljlMXkPV4A0wB',
        },
        {
          url: '/_next/static/chunks/pages/index-f9dc5c29ffc64b82.js',
          revision: 'g-AtMfwuljlMXkPV4A0wB',
        },
        {
          url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
          revision: 'g-AtMfwuljlMXkPV4A0wB',
        },
        {
          url: '/_next/static/chunks/webpack-7adef0a23f2816b0.js',
          revision: 'g-AtMfwuljlMXkPV4A0wB',
        },
        {
          url: '/_next/static/g-AtMfwuljlMXkPV4A0wB/_buildManifest.js',
          revision: 'g-AtMfwuljlMXkPV4A0wB',
        },
        {
          url: '/_next/static/g-AtMfwuljlMXkPV4A0wB/_middlewareManifest.js',
          revision: 'g-AtMfwuljlMXkPV4A0wB',
        },
        {
          url: '/_next/static/g-AtMfwuljlMXkPV4A0wB/_ssgManifest.js',
          revision: 'g-AtMfwuljlMXkPV4A0wB',
        },
        {
          url: '/artists/emize/bio.JPG',
          revision: 'bc7dcbdbf4e5e9b3ba616bab64a6967c',
        },
        {
          url: '/artists/emize/cover.jpg',
          revision: '660f5b05023fcd2deda768c17bea89a3',
        },
        {
          url: '/artists/emize/logo.png',
          revision: 'd317552c62caa2de67a624a440e56e49',
        },
        {
          url: '/img/apple-touch-icon.png',
          revision: '7d8281986da8db9c1b5413570ecc1f83',
        },
        {
          url: '/img/bate-papo.png',
          revision: '3fdff35070e42797bbcb54810e5834c0',
        },
        {
          url: '/img/favicon.gif',
          revision: '5da8380ff31f61755e367da7a1d59e76',
        },
        {
          url: '/img/instagram.png',
          revision: '8290266a5fb402a34b96f890bbdb2d60',
        },
        {
          url: '/img/logo-uba-agencia.svg',
          revision: '24577d585086dd64abe68ad2af48ea55',
        },
        {
          url: '/img/soundcloud.png',
          revision: 'e31684d2c7c0be50637f321f757090d1',
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: t,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        const s = e.pathname
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1
        return !e.pathname.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    )
})
