;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [573],
  {
    3428: function (e, t, o) {
      'use strict'
      o.r(t),
        o.d(t, {
          default: function () {
            return y
          },
        })
      var i = o(7294),
        n = o(1163),
        r = o(9008),
        a = {
          emize: {
            presskit: '/downloads/Emiz\xea - Presskit 2024.zip',
            release:
              'Leonardo Martinez traz seu projeto de progressive trance e hardprog chamado EMIZ\xca, com um set super energ\xe9tico e dan\xe7ante. Cantor, musicista, multi instrumentista, Leo passou a vida estudando e vivendo a m\xfasica. Natural de S\xe3o Paulo, usa toda a sua expertise musical e profissional trilhando o caminho da produ\xe7\xe3o dentro da cena, remixando e produzindo seu set com muita identidade. Hoje idealizador da Ub\xe1 Cultura Trance, tamb\xe9m faz parte de projetos como Onda Norte e Ubah Festival.',
            player: [
              'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1774765290&color=%238cb4b4&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
              'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1774757667&color=%238cb4b4&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
            ],
            soundcloud: 'leoemize',
            instagram: 'leo.emize',
            title:
              'EMIZ\xca - Projeto de Progressive trance e HardProg :: Ub\xe1 Ag\xeancia',
            description:
              'Emiz\xea \xe9 o projeto de progressive trance e hardprog de Leonardo Martinez, DJ e produtor musical que faz parte do casting da Ub\xe1 Ag\xeancia.',
          },
        },
        s = o(7379),
        d = s.ZP.div.withConfig({
          displayName: 'styles__Cover',
          componentId: 'sc-1hn7zh4-0',
        })([
          'width:100%;height:600px;background-position:center center;background-repeat:no-repeat;background-size:cover;box-shadow:0px -50px 200px black inset;transition:0.3s height;&.scrolled{height:250px;}',
        ]),
        l = s.ZP.h1.withConfig({
          displayName: 'styles__Title',
          componentId: 'sc-1hn7zh4-1',
        })([
          'display:flex;justify-content:center;align-items:center;padding:3rem 1rem;img{position:static;width:250px;}',
        ]),
        c = s.ZP.section.withConfig({
          displayName: 'styles__Content',
          componentId: 'sc-1hn7zh4-2',
        })([
          'padding:1rem;box-sizing:border-box;width:100%;display:flex;justify-content:center;',
        ]),
        m = s.ZP.div.withConfig({
          displayName: 'styles__Wrapper',
          componentId: 'sc-1hn7zh4-3',
        })(['width:100%;max-width:860px;']),
        p = s.ZP.div.withConfig({
          displayName: 'styles__Bio',
          componentId: 'sc-1hn7zh4-4',
        })([
          'width:100%;display:flex;align-items:flex-start;margin-bottom:2rem;img{max-width:40%;}@media (max-width:767px){flex-direction:column;img{width:100%;max-width:100%;order:2;margin-top:2rem;}}',
        ]),
        u = s.ZP.h3.withConfig({
          displayName: 'styles__Release',
          componentId: 'sc-1hn7zh4-5',
        })([
          'font-size:1.4rem;line-height:2.2rem;padding-left:2rem;margin:0;font-weight:normal;@media (max-width:767px){padding-left:0;order:1;text-align:justify;padding:0 1rem;display:flex;flex-direction:column;justify-content:center;}',
        ]),
        h = s.ZP.button.withConfig({
          displayName: 'styles__Presskit',
          componentId: 'sc-1hn7zh4-6',
        })([
          "border:0;outline:0;background:#1b1b1b;color:white;font-weight:bold;font-family:'Montserrat',sans-serif;display:block;padding:1rem 2rem;margin-top:1rem;border-radius:0.5rem;cursor:pointer;@media (max-width:767px){padding:1.4rem 2rem;font-size:1.4rem;}",
        ]),
        g = s.ZP.iframe.withConfig({
          displayName: 'styles__Player',
          componentId: 'sc-1hn7zh4-7',
        })(['width:100%;height:166px;margin:2rem 0 0;border:0;']),
        f = s.ZP.div.withConfig({
          displayName: 'styles__Social',
          componentId: 'sc-1hn7zh4-8',
        })([
          'display:flex;justify-content:center;margin-top:4rem;@media (max-width:767px){flex-direction:column;}',
        ]),
        x = s.ZP.a.withConfig({
          displayName: 'styles__SocialButton',
          componentId: 'sc-1hn7zh4-9',
        })([
          "border:0;outline:0;background:transparent;border:2px solid #1b1b1b;color:#1b1b1b;font-weight:bold;font-family:'Montserrat',sans-serif;display:inline-block;padding:1rem 1rem;border-radius:0.5rem;cursor:pointer;text-decoration:none;display:flex;align-items:center;img{width:26px;margin-right:1rem;}&:not(:first-child){margin-left:2rem;}&.contact{border:0;background:#25d366;color:#075e54;}@media (max-width:767px){&:not(:first-child){margin:2rem 0 0;}}",
        ]),
        w = s.ZP.div.withConfig({
          displayName: 'styles__AgencyCopyright',
          componentId: 'sc-1hn7zh4-10',
        })([
          'display:flex;justify-content:center;align-items:center;height:60px;background:#1b1b1b;margin-top:3rem;h2{margin:0;img{width:90px;display:block;}}',
        ]),
        b = o(5893)
      function y() {
        var e = (0, i.useState)(!1),
          t = e[0],
          o = e[1],
          s = (0, n.useRouter)().query.artist,
          y = a[s]
        return (
          console.log(y, s),
          (0, i.useEffect)(
            function () {
              s &&
                !y &&
                (window.location.href =
                  'https://instagram.com/ubaculturatrance')
              var e = function (e) {
                var t = e.target.documentElement.scrollTop
                o(t > 0)
              }
              return (
                window.addEventListener('scroll', e),
                function () {
                  return window.removeEventListener('scroll', e)
                }
              )
            },
            [y, s],
          ),
          (0, b.jsxs)(b.Fragment, {
            children: [
              (0, b.jsxs)(r.default, {
                children: [
                  (0, b.jsx)('title', {
                    children: null === y || void 0 === y ? void 0 : y.title,
                  }),
                  (0, b.jsx)('meta', {
                    name: 'description',
                    content:
                      null === y || void 0 === y ? void 0 : y.description,
                  }),
                  (0, b.jsx)('meta', {
                    property: 'og:title',
                    content: null === y || void 0 === y ? void 0 : y.title,
                  }),
                  (0, b.jsx)('meta', {
                    property: 'og:url',
                    content: 'https://ubatrance.art/emize',
                  }),
                  (0, b.jsx)('meta', {
                    property: 'og:image',
                    content: '/artists/'.concat(s, '/cover.jpg'),
                  }),
                ],
              }),
              (0, b.jsx)(d, {
                className: t ? 'scrolled' : '',
                style: {
                  backgroundImage: "url('/artists/".concat(s, "/cover.jpg')"),
                },
              }),
              (0, b.jsx)(l, {
                children: (0, b.jsx)('img', {
                  src: '/artists/'.concat(s, '/logo.png'),
                  title: 'Emiz\xea',
                  alt: '',
                }),
              }),
              (0, b.jsx)(c, {
                children: (0, b.jsxs)(m, {
                  children: [
                    (0, b.jsxs)(p, {
                      children: [
                        (0, b.jsx)('img', {
                          src: '/artists/'.concat(s, '/bio.jpg'),
                          title: 'Leonardo Martinez - DJ - Emiz\xea',
                          alt: '',
                        }),
                        (0, b.jsxs)(u, {
                          children: [
                            null === y || void 0 === y ? void 0 : y.release,
                            (0, b.jsx)(h, {
                              onClick: function () {
                                return window.open(
                                  null === y || void 0 === y
                                    ? void 0
                                    : y.presskit,
                                )
                              },
                              children: 'Download Presskit',
                            }),
                          ],
                        }),
                      ],
                    }),
                    (null === y || void 0 === y ? void 0 : y.player) &&
                      y.player.map(function (e) {
                        return (0, b.jsx)(g, { src: e }, e)
                      }),
                    (0, b.jsxs)(f, {
                      children: [
                        (0, b.jsxs)(x, {
                          href: 'https://instagram.com/'.concat(
                            null === y || void 0 === y ? void 0 : y.instagram,
                          ),
                          target: '_blank',
                          children: [
                            (0, b.jsx)('img', {
                              src: '/img/instagram.png',
                              alt: '',
                            }),
                            'Siga-me no Instagram!',
                          ],
                        }),
                        (null === y || void 0 === y ? void 0 : y.soundcloud) &&
                          (0, b.jsxs)(x, {
                            href: 'https://soundcloud.com/'.concat(
                              y.soundcloud,
                            ),
                            target: '_blank',
                            children: [
                              (0, b.jsx)('img', {
                                src: '/img/soundcloud.png',
                                alt: '',
                              }),
                              'Soundcloud',
                            ],
                          }),
                        (0, b.jsxs)(x, {
                          className: 'contact',
                          href: 'https://wa.me/5511997522849',
                          target: '_blank',
                          children: [
                            (0, b.jsx)('img', {
                              src: '/img/bate-papo.png',
                              alt: '',
                            }),
                            'Entrar em contato',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, b.jsx)(w, {
                children: (0, b.jsx)('h2', {
                  children: (0, b.jsx)('img', {
                    src: '/img/logo-uba-agencia.svg',
                    title:
                      'Ub\xe1 Ag\xeancia - DJs da cena trance no litoral extremo norte de S\xe3o Paulo',
                    alt: '',
                  }),
                }),
              }),
            ],
          })
        )
      }
    },
    44: function (e, t, o) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/[artist]',
        function () {
          return o(3428)
        },
      ])
    },
    1163: function (e, t, o) {
      e.exports = o(9898)
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 44), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
