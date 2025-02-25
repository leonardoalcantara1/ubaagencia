'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [651],
  {
    9651: function (e, t, r) {
      var n = r(3227),
        a = r(8361),
        o = r(5971),
        i = r(2715),
        u = r(1193)
      function c(e) {
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
          var r,
            n = u(e)
          if (t) {
            var a = u(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return i(this, r)
        }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var l = f(r(7294)),
        s = f(r(2717))
      function f(e) {
        return e && e.__esModule ? e : { default: e }
      }
      var d = {
        400: 'Bad Request',
        404: 'This page could not be found',
        405: 'Method Not Allowed',
        500: 'Internal Server Error',
      }
      function p(e) {
        var t = e.res,
          r = e.err
        return {
          statusCode: t && t.statusCode ? t.statusCode : r ? r.statusCode : 404,
        }
      }
      var h = (function (e) {
        o(r, e)
        var t = c(r)
        function r() {
          return n(this, r), t.apply(this, arguments)
        }
        return (
          a(r, [
            {
              key: 'render',
              value: function () {
                var e = this.props.statusCode,
                  t =
                    this.props.title ||
                    d[e] ||
                    'An unexpected error has occurred'
                return l.default.createElement(
                  'div',
                  { style: v.error },
                  l.default.createElement(
                    s.default,
                    null,
                    l.default.createElement(
                      'title',
                      null,
                      e
                        ? ''.concat(e, ': ').concat(t)
                        : 'Application error: a client-side exception has occurred',
                    ),
                  ),
                  l.default.createElement(
                    'div',
                    null,
                    l.default.createElement('style', {
                      dangerouslySetInnerHTML: { __html: 'body { margin: 0 }' },
                    }),
                    e
                      ? l.default.createElement('h1', { style: v.h1 }, e)
                      : null,
                    l.default.createElement(
                      'div',
                      { style: v.desc },
                      l.default.createElement(
                        'h2',
                        { style: v.h2 },
                        this.props.title || e
                          ? t
                          : l.default.createElement(
                              l.default.Fragment,
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
          r
        )
      })(l.default.Component)
      ;(h.displayName = 'ErrorPage'),
        (h.getInitialProps = p),
        (h.origGetInitialProps = p),
        (t.default = h)
      var v = {
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
    8e3: function (e, t, r) {
      var n
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.AmpStateContext = void 0)
      var a = (
        (n = r(7294)) && n.__esModule ? n : { default: n }
      ).default.createContext({})
      t.AmpStateContext = a
    },
    5646: function (e, t, r) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isInAmpMode = i),
        (t.useAmp = function () {
          return i(a.default.useContext(o.AmpStateContext))
        })
      var n,
        a = (n = r(7294)) && n.__esModule ? n : { default: n },
        o = r(8e3)
      function i() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          r = void 0 !== t && t,
          n = e.hybrid,
          a = void 0 !== n && n,
          o = e.hasQuery,
          i = void 0 !== o && o
        return r || (a && i)
      }
    },
    2717: function (e, t, r) {
      var n = r(930)
      function a(e, t) {
        var r = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            r.push.apply(r, n)
        }
        return r
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.defaultHead = f),
        (t.default = void 0)
      var o,
        i = (function (e) {
          if (e && e.__esModule) return e
          var t = {}
          if (null != e)
            for (var r in e)
              if (Object.prototype.hasOwnProperty.call(e, r)) {
                var n =
                  Object.defineProperty && Object.getOwnPropertyDescriptor
                    ? Object.getOwnPropertyDescriptor(e, r)
                    : {}
                n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r])
              }
          return (t.default = e), t
        })(r(7294)),
        u = (o = r(1585)) && o.__esModule ? o : { default: o },
        c = r(8e3),
        l = r(5850),
        s = r(5646)
      function f() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [i.default.createElement('meta', { charSet: 'utf-8' })]
        return (
          e ||
            t.push(
              i.default.createElement('meta', {
                name: 'viewport',
                content: 'width=device-width',
              }),
            ),
          t
        )
      }
      function d(e, t) {
        return 'string' === typeof t || 'number' === typeof t
          ? e
          : t.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(t.props.children).reduce(function (
                e,
                t,
              ) {
                return 'string' === typeof t || 'number' === typeof t
                  ? e
                  : e.concat(t)
              },
              []),
            )
          : e.concat(t)
      }
      var p = ['name', 'httpEquiv', 'charSet', 'itemProp']
      function h(e, t) {
        return e
          .reduce(function (e, t) {
            var r = i.default.Children.toArray(t.props.children)
            return e.concat(r)
          }, [])
          .reduce(d, [])
          .reverse()
          .concat(f(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {}
              return function (a) {
                var o = !0,
                  i = !1
                if (
                  a.key &&
                  'number' !== typeof a.key &&
                  a.key.indexOf('$') > 0
                ) {
                  i = !0
                  var u = a.key.slice(a.key.indexOf('$') + 1)
                  e.has(u) ? (o = !1) : e.add(u)
                }
                switch (a.type) {
                  case 'title':
                  case 'base':
                    t.has(a.type) ? (o = !1) : t.add(a.type)
                    break
                  case 'meta':
                    for (var c = 0, l = p.length; c < l; c++) {
                      var s = p[c]
                      if (a.props.hasOwnProperty(s))
                        if ('charSet' === s) r.has(s) ? (o = !1) : r.add(s)
                        else {
                          var f = a.props[s],
                            d = n[s] || new Set()
                          ;('name' === s && i) || !d.has(f)
                            ? (d.add(f), (n[s] = d))
                            : (o = !1)
                        }
                    }
                }
                return o
              }
            })(),
          )
          .reverse()
          .map(function (e, r) {
            var o = e.key || r
            if (
              !t.inAmpMode &&
              'link' === e.type &&
              e.props.href &&
              [
                'https://fonts.googleapis.com/css',
                'https://use.typekit.net/',
              ].some(function (t) {
                return e.props.href.startsWith(t)
              })
            ) {
              var u = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {}
                  t % 2
                    ? a(Object(r), !0).forEach(function (t) {
                        n(e, t, r[t])
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r),
                      )
                    : a(Object(r)).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t),
                        )
                      })
                }
                return e
              })({}, e.props || {})
              return (
                (u['data-href'] = u.href),
                (u.href = void 0),
                (u['data-optimized-fonts'] = !0),
                i.default.cloneElement(e, u)
              )
            }
            return i.default.cloneElement(e, { key: o })
          })
      }
      var v = function (e) {
        var t = e.children,
          r = i.useContext(c.AmpStateContext),
          n = i.useContext(l.HeadManagerContext)
        return i.default.createElement(
          u.default,
          {
            reduceComponentsToState: h,
            headManager: n,
            inAmpMode: s.isInAmpMode(r),
          },
          t,
        )
      }
      t.default = v
    },
    1585: function (e, t, r) {
      var n = r(7980),
        a = r(3227),
        o = r(8361),
        i = (r(2191), r(5971)),
        u = r(2715),
        c = r(1193)
      function l(e) {
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
          var r,
            n = c(e)
          if (t) {
            var a = c(this).constructor
            r = Reflect.construct(n, arguments, a)
          } else r = n.apply(this, arguments)
          return u(this, r)
        }
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0)
      var s = (function (e) {
        if (e && e.__esModule) return e
        var t = {}
        if (null != e)
          for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r)) {
              var n =
                Object.defineProperty && Object.getOwnPropertyDescriptor
                  ? Object.getOwnPropertyDescriptor(e, r)
                  : {}
              n.get || n.set ? Object.defineProperty(t, r, n) : (t[r] = e[r])
            }
        return (t.default = e), t
      })(r(7294))
      var f = (function (e) {
        i(r, e)
        var t = l(r)
        function r(e) {
          var o
          return (
            a(this, r),
            ((o = t.call(this, e)).emitChange = function () {
              o._hasHeadManager &&
                o.props.headManager.updateHead(
                  o.props.reduceComponentsToState(
                    n(o.props.headManager.mountedInstances),
                    o.props,
                  ),
                )
            }),
            (o._hasHeadManager =
              o.props.headManager && o.props.headManager.mountedInstances),
            o
          )
        }
        return (
          o(r, [
            {
              key: 'componentDidMount',
              value: function () {
                this._hasHeadManager &&
                  this.props.headManager.mountedInstances.add(this),
                  this.emitChange()
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                this.emitChange()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this._hasHeadManager &&
                  this.props.headManager.mountedInstances.delete(this),
                  this.emitChange()
              },
            },
            {
              key: 'render',
              value: function () {
                return null
              },
            },
          ]),
          r
        )
      })(s.Component)
      t.default = f
    },
  },
])
