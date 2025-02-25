;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [820],
  {
    9651: function (e, t, n) {
      'use strict'
      var r = n(3227),
        i = n(8361),
        l = n(5971),
        o = n(2715),
        a = n(1193)
      function u(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            )
          } catch (e) {
            return !1
          }
        })()
        return function () {
          var n,
            r = a(e)
          if (t) {
            var i = a(this).constructor
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments)
          return o(this, n)
        }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var c = d(n(7294)),
        s = d(n(2717))
      function d(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var f = {
        400: 'Bad Request',
        404: 'This page could not be found',
        405: 'Method Not Allowed',
        500: 'Internal Server Error',
      }
      function p(e) {
        var t = e.res,
          n = e.err
        return {
          statusCode: t && t.statusCode ? t.statusCode : n ? n.statusCode : 404,
        }
      }
      var h = (function (e) {
        l(n, e)
        var t = u(n)
        function n() {
          return r(this, n), t.apply(this, arguments)
        }
        return (
          i(n, [
            {
              key: 'render',
              value: function () {
                var e = this.props.statusCode,
                  t =
                    this.props.title ||
                    f[e] ||
                    'An unexpected error has occurred'
                return c.default.createElement(
                  'div',
                  { style: g.error },
                  c.default.createElement(
                    s.default,
                    null,
                    c.default.createElement(
                      'title',
                      null,
                      e
                        ? ''.concat(e, ': ').concat(t)
                        : 'Application error: a client-side exception has occurred',
                    ),
                  ),
                  c.default.createElement(
                    'div',
                    null,
                    c.default.createElement('style', {
                      dangerouslySetInnerHTML: { __html: 'body { margin: 0 }' },
                    }),
                    e
                      ? c.default.createElement('h1', { style: g.h1 }, e)
                      : null,
                    c.default.createElement(
                      'div',
                      { style: g.desc },
                      c.default.createElement(
                        'h2',
                        { style: g.h2 },
                        this.props.title || e
                          ? t
                          : c.default.createElement(
                              c.default.Fragment,
                              null,
                              'Application error: a client-side exception has occurred (see the browser console for more information)',
                            ),
                        '.',
                      ),
                    ),
                  ),
                )
              },
            },
          ]),
          n
        )
      })(c.default.Component)
      ;(h.displayName = 'ErrorPage'),
        (h.getInitialProps = p),
        (h.origGetInitialProps = p),
        (t.default = h)
      var g = {
        error: {
          color: '#000',
          background: '#fff',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        desc: {
          display: 'inline-block',
          textAlign: 'left',
          lineHeight: '49px',
          height: '49px',
          verticalAlign: 'middle',
        },
        h1: {
          display: 'inline-block',
          borderRight: '1px solid rgba(0, 0, 0,.3)',
          margin: 0,
          marginRight: '20px',
          padding: '10px 23px 10px 0',
          fontSize: '24px',
          fontWeight: 500,
          verticalAlign: 'top',
        },
        h2: {
          fontSize: '14px',
          fontWeight: 'normal',
          lineHeight: 'inherit',
          margin: 0,
          padding: 0,
        },
      }
    },
    4977: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/_error',
        function () {
          return n(9651)
        },
      ])
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (t = 4977), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  },
])
