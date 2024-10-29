(function g(d, e, t) {
  function r(i, o) {
    if (!e[i]) {
      if (!d[i]) {
        var s = "function" == typeof require && require;
        if (!o && s) return s(i, !0);
        if (n) return n(i, !0);
        var a = new Error("Cannot find module '" + i + "'");
        throw a.code = "MODULE_NOT_FOUND", a
      }
      var h = e[i] = {
        exports: {}
      };
      d[i][0].call(h.exports, function (t) {
        var e = d[i][1][t];
        return r(e ? e : t)
      }, h, h.exports, g, d, e, t)
    }
    return e[i].exports
  }
  for (var n = "function" == typeof require && require, i = 0; i < t.length; i++) r(t[i]);
  return r
})({
  1: [function (e, t) {
    "use strict";
    var n = Math.min,
      i = Math.max,
      r = e("./src/Drawer"),
      a = e("./src/Parser"),
      o = !!("undefined" != typeof window && window.document && window.document.createElement),
      l = {
        Version: "1.0.0"
      };
    l.Drawer = r, l.Parser = a, l.clean = function (e) {
      return e.replace(/[^A-Za-z0-9@\.\+\-\?!\(\)\[\]\{\}/\\=#\$:\*]/g, "")
    }, l.apply = function (e) {
      for (var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : "canvas[data-smiles]", n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : "light", a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null, o = new r(e), s = document.querySelectorAll(t), g = function () {
          var e = s[d];
          l.parse(e.getAttribute("data-smiles"), function (t) {
            o.draw(t, e, n, !1)
          }, function (e) {
            a && a(e)
          })
        }, d = 0; d < s.length; d++) g()
    }, l.parse = function (e, t, n) {
      try {
        t && t(a.parse(e))
      } catch (e) {
        n && n(e)
      }
    }, o && (window.SmilesDrawer = l), Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
      value: function (e) {
        if (null == this) throw new TypeError("this is null or not defined");
        for (var t = Object(this), r = t.length >>> 0, a = arguments[1], o = a >> 0, l = 0 > o ? i(r + o, 0) : n(o, r), s = arguments[2], g = void 0 === s ? r : s >> 0, d = 0 > g ? i(r + g, 0) : n(g, r); l < d;) t[l] = e, l++;
        return t
      }
    }), t.exports = l
  }, {
    "./src/Drawer": 5,
    "./src/Parser": 10
  }],
  2: [function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      },
      r = function () {
        function e(e, t) {
          for (var n = 0, i; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      a = function () {
        function e() {
          n(this, e)
        }
        return r(e, null, [{
          key: "clone",
          value: function (t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
              var a = t[r];
              n[r] = "function" == typeof a.clone ? a.clone() : "object" === ("undefined" == typeof a ? "undefined" : i(a)) ? e.clone(a) : a
            }
            return n
          }
        }, {
          key: "equals",
          value: function (e, t) {
            if (e.length !== t.length) return !1;
            for (var n = e.slice().sort(), r = t.slice().sort(), a = 0; a < n.length; a++)
              if (n[a] !== r[a]) return !1;
            return !0
          }
        }, {
          key: "print",
          value: function (e) {
            if (0 == e.length) return "";
            for (var t = "(", n = 0; n < e.length; n++) t += e[n].id ? e[n].id + ", " : e[n] + ", ";
            return t = t.substring(0, t.length - 2), t + ")"
          }
        }, {
          key: "each",
          value: function (e, t) {
            for (var n = 0; n < e.length; n++) t(e[n])
          }
        }, {
          key: "get",
          value: function (e, t, n) {
            for (var r = 0; r < e.length; r++)
              if (e[r][t] == n) return e[r]
          }
        }, {
          key: "contains",
          value: function (e, t) {
            if (!t.property && !t.func) {
              for (var n = 0; n < e.length; n++)
                if (e[n] == t.value) return !0;
            } else if (t.func) {
              for (var i = 0; i < e.length; i++)
                if (t.func(e[i])) return !0;
            } else
              for (var r = 0; r < e.length; r++)
                if (e[r][t.property] == t.value) return !0;
            return !1
          }
        }, {
          key: "intersection",
          value: function (e, t) {
            for (var n = [], r = 0; r < e.length; r++)
              for (var i = 0; i < t.length; i++) e[r] === t[i] && n.push(e[r]);
            return n
          }
        }, {
          key: "unique",
          value: function (e) {
            var t = {};
            return e.filter(function (e) {
              return void 0 === t[e] && (t[e] = !0)
            })
          }
        }, {
          key: "count",
          value: function (e, t) {
            for (var n = 0, r = 0; r < e.length; r++) e[r] === t && n++;
            return n
          }
        }, {
          key: "toggle",
          value: function (e, t) {
            for (var n = [], r = !1, a = 0; a < e.length; a++) e[a] === t ? r = !0 : n.push(e[a]);
            return r || n.push(t), n
          }
        }, {
          key: "remove",
          value: function (e, t) {
            for (var n = [], r = 0; r < e.length; r++) e[r] !== t && n.push(e[r]);
            return n
          }
        }, {
          key: "removeUnique",
          value: function (e, t) {
            var n = e.indexOf(t);
            return -1 < n && e.splice(n, 1), e
          }
        }, {
          key: "removeAll",
          value: function (e, t) {
            return e.filter(function (e) {
              return -1 === t.indexOf(e)
            })
          }
        }, {
          key: "merge",
          value: function (e, t) {
            for (var n = Array(e.length + t.length), r = 0; r < e.length; r++) n[r] = e[r];
            for (var i = 0; i < t.length; i++) n[e.length + i] = t[i];
            return n
          }
        }, {
          key: "containsAll",
          value: function (e, t) {
            for (var n = 0, r = 0; r < e.length; r++)
              for (var i = 0; i < t.length; i++) e[r] === t[i] && n++;
            return n === t.length
          }
        }, {
          key: "sortByAtomicNumberDesc",
          value: function (t) {
            var e = t.map(function (t, e) {
              return {
                index: e,
                value: t.atomicNumber.split(".").map(Number)
              }
            });
            return e.sort(function (e, t) {
              for (var n = Math.min(t.value.length, e.value.length), r = 0; r < n && t.value[r] === e.value[r];) r++;
              return r === n ? t.value.length - e.value.length : t.value[r] - e.value[r]
            }), e.map(function (n) {
              return t[n.index]
            })
          }
        }, {
          key: "deepCopy",
          value: function (t) {
            for (var n = [], r = 0, i; r < t.length; r++) i = t[r], n[r] = i instanceof Array ? e.deepCopy(i) : i;
            return n
          }
        }]), e
      }();
    t.exports = a
  }, {}],
  3: [function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function () {
        function e(e, t) {
          for (var n = 0, i; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      r = e("./ArrayHelper"),
      a = e("./Vertex"),
      o = e("./Ring"),
      l = function () {
        function e(t) {
          var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "-";
          n(this, e), this.element = 1 === t.length ? t.toUpperCase() : t, this.drawExplicit = !1, this.ringbonds = [], this.rings = [], this.bondType = i, this.branchBond = null, this.isBridge = !1, this.isBridgeNode = !1, this.originalRings = [], this.bridgedRing = null, this.anchoredRings = [], this.bracket = null, this.plane = 0, this.attachedPseudoElements = {}, this.hasAttachedPseudoElements = !1, this.isDrawn = !0, this.isConnectedToRing = !1, this.neighbouringElements = [], this.isPartOfAromaticRing = t !== this.element, this.bondCount = 0, this.chirality = "", this.isStereoCenter = !1, this.priority = 0, this.mainChain = !1, this.hydrogenDirection = "down", this.subtreeDepth = 1, this.hasHydrogen = !1
        }
        return i(e, [{
          key: "addNeighbouringElement",
          value: function (e) {
            this.neighbouringElements.push(e)
          }
        }, {
          key: "attachPseudoElement",
          value: function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
              i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
            null === n && (n = 0), null === i && (i = 0);
            var r = n + e + i;
            this.attachedPseudoElements[r] ? this.attachedPseudoElements[r].count += 1 : this.attachedPseudoElements[r] = {
              element: e,
              count: 1,
              hydrogenCount: n,
              previousElement: t,
              charge: i
            }, this.hasAttachedPseudoElements = !0
          }
        }, {
          key: "getAttachedPseudoElements",
          value: function () {
            var e = {},
              t = this;
            return Object.keys(this.attachedPseudoElements).sort().forEach(function (n) {
              e[n] = t.attachedPseudoElements[n]
            }), e
          }
        }, {
          key: "getAttachedPseudoElementsCount",
          value: function () {
            return Object.keys(this.attachedPseudoElements).length
          }
        }, {
          key: "isHeteroAtom",
          value: function () {
            return "C" !== this.element && "H" !== this.element
          }
        }, {
          key: "addAnchoredRing",
          value: function (e) {
            r.contains(this.anchoredRings, {
              value: e
            }) || this.anchoredRings.push(e)
          }
        }, {
          key: "getRingbondCount",
          value: function () {
            return this.ringbonds.length
          }
        }, {
          key: "backupRings",
          value: function () {
            this.originalRings = Array(this.rings.length);
            for (var e = 0; e < this.rings.length; e++) this.originalRings[e] = this.rings[e]
          }
        }, {
          key: "restoreRings",
          value: function () {
            this.rings = Array(this.originalRings.length);
            for (var e = 0; e < this.originalRings.length; e++) this.rings[e] = this.originalRings[e]
          }
        }, {
          key: "haveCommonRingbond",
          value: function (e, t) {
            for (var n = 0; n < e.ringbonds.length; n++)
              for (var i = 0; i < t.ringbonds.length; i++)
                if (e.ringbonds[n].id == t.ringbonds[i].id) return !0;
            return !1
          }
        }, {
          key: "neighbouringElementsEqual",
          value: function (e) {
            if (e.length !== this.neighbouringElements.length) return !1;
            e.sort(), this.neighbouringElements.sort();
            for (var t = 0; t < this.neighbouringElements.length; t++)
              if (e[t] !== this.neighbouringElements[t]) return !1;
            return !0
          }
        }, {
          key: "getAtomicNumber",
          value: function () {
            return e.atomicNumbers[this.element]
          }
        }, {
          key: "getMaxBonds",
          value: function () {
            return e.maxBonds[this.element]
          }
        }], [{
          key: "maxBonds",
          get: function () {
            return {
              H: 1,
              C: 4,
              N: 3,
              O: 2,
              P: 3,
              S: 2,
              B: 3,
              F: 1,
              I: 1,
              Cl: 1,
              Br: 1
            }
          }
        }, {
          key: "atomicNumbers",
          get: function () {
            return {
              H: 1,
              He: 2,
              Li: 3,
              Be: 4,
              B: 5,
              b: 5,
              C: 6,
              c: 6,
              N: 7,
              n: 7,
              O: 8,
              o: 8,
              F: 9,
              Ne: 10,
              Na: 11,
              Mg: 12,
              Al: 13,
              Si: 14,
              P: 15,
              p: 15,
              S: 16,
              s: 16,
              Cl: 17,
              Ar: 18,
              K: 19,
              Ca: 20,
              Sc: 21,
              Ti: 22,
              V: 23,
              Cr: 24,
              Mn: 25,
              Fe: 26,
              Co: 27,
              Ni: 28,
              Cu: 29,
              Zn: 30,
              Ga: 31,
              Ge: 32,
              As: 33,
              Se: 34,
              Br: 35,
              Kr: 36,
              Rb: 37,
              Sr: 38,
              Y: 39,
              Zr: 40,
              Nb: 41,
              Mo: 42,
              Tc: 43,
              Ru: 44,
              Rh: 45,
              Pd: 46,
              Ag: 47,
              Cd: 48,
              In: 49,
              Sn: 50,
              Sb: 51,
              Te: 52,
              I: 53,
              Xe: 54,
              Cs: 55,
              Ba: 56,
              La: 57,
              Ce: 58,
              Pr: 59,
              Nd: 60,
              Pm: 61,
              Sm: 62,
              Eu: 63,
              Gd: 64,
              Tb: 65,
              Dy: 66,
              Ho: 67,
              Er: 68,
              Tm: 69,
              Yb: 70,
              Lu: 71,
              Hf: 72,
              Ta: 73,
              W: 74,
              Re: 75,
              Os: 76,
              Ir: 77,
              Pt: 78,
              Au: 79,
              Hg: 80,
              Tl: 81,
              Pb: 82,
              Bi: 83,
              Po: 84,
              At: 85,
              Rn: 86,
              Fr: 87,
              Ra: 88,
              Ac: 89,
              Th: 90,
              Pa: 91,
              U: 92,
              Np: 93,
              Pu: 94,
              Am: 95,
              Cm: 96,
              Bk: 97,
              Cf: 98,
              Es: 99,
              Fm: 100,
              Md: 101,
              No: 102,
              Lr: 103,
              Rf: 104,
              Db: 105,
              Sg: 106,
              Bh: 107,
              Hs: 108,
              Mt: 109,
              Ds: 110,
              Rg: 111,
              Cn: 112,
              Uut: 113,
              Uuq: 114,
              Uup: 115,
              Uuh: 116,
              Uus: 117,
              Uuo: 118
            }
          }
        }, {
          key: "mass",
          get: function () {
            return {
              H: 1,
              He: 2,
              Li: 3,
              Be: 4,
              B: 5,
              b: 5,
              C: 6,
              c: 6,
              N: 7,
              n: 7,
              O: 8,
              o: 8,
              F: 9,
              Ne: 10,
              Na: 11,
              Mg: 12,
              Al: 13,
              Si: 14,
              P: 15,
              p: 15,
              S: 16,
              s: 16,
              Cl: 17,
              Ar: 18,
              K: 19,
              Ca: 20,
              Sc: 21,
              Ti: 22,
              V: 23,
              Cr: 24,
              Mn: 25,
              Fe: 26,
              Co: 27,
              Ni: 28,
              Cu: 29,
              Zn: 30,
              Ga: 31,
              Ge: 32,
              As: 33,
              Se: 34,
              Br: 35,
              Kr: 36,
              Rb: 37,
              Sr: 38,
              Y: 39,
              Zr: 40,
              Nb: 41,
              Mo: 42,
              Tc: 43,
              Ru: 44,
              Rh: 45,
              Pd: 46,
              Ag: 47,
              Cd: 48,
              In: 49,
              Sn: 50,
              Sb: 51,
              Te: 52,
              I: 53,
              Xe: 54,
              Cs: 55,
              Ba: 56,
              La: 57,
              Ce: 58,
              Pr: 59,
              Nd: 60,
              Pm: 61,
              Sm: 62,
              Eu: 63,
              Gd: 64,
              Tb: 65,
              Dy: 66,
              Ho: 67,
              Er: 68,
              Tm: 69,
              Yb: 70,
              Lu: 71,
              Hf: 72,
              Ta: 73,
              W: 74,
              Re: 75,
              Os: 76,
              Ir: 77,
              Pt: 78,
              Au: 79,
              Hg: 80,
              Tl: 81,
              Pb: 82,
              Bi: 83,
              Po: 84,
              At: 85,
              Rn: 86,
              Fr: 87,
              Ra: 88,
              Ac: 89,
              Th: 90,
              Pa: 91,
              U: 92,
              Np: 93,
              Pu: 94,
              Am: 95,
              Cm: 96,
              Bk: 97,
              Cf: 98,
              Es: 99,
              Fm: 100,
              Md: 101,
              No: 102,
              Lr: 103,
              Rf: 104,
              Db: 105,
              Sg: 106,
              Bh: 107,
              Hs: 108,
              Mt: 109,
              Ds: 110,
              Rg: 111,
              Cn: 112,
              Uut: 113,
              Uuq: 114,
              Uup: 115,
              Uuh: 116,
              Uus: 117,
              Uuo: 118
            }
          }
        }]), e
      }();
    t.exports = l
  }, {
    "./ArrayHelper": 2,
    "./Ring": 11,
    "./Vertex": 15
  }],
  4: [function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = Number.MAX_VALUE,
      i = function () {
        function e(e, t) {
          for (var n = 0, i; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      a = e("./MathHelper"),
      o = e("./Vector2"),
      l = e("./Line"),
      s = e("./Vertex"),
      g = e("./Ring"),
      d = function () {
        function e(t, i, r) {
          n(this, e), this.canvas = "string" == typeof t || t instanceof String ? document.getElementById(t) : t, this.ctx = this.canvas.getContext("2d"), this.colors = i, this.opts = r, this.drawingWidth = 0, this.drawingHeight = 0, this.offsetX = 0, this.offsetY = 0, this.fontLarge = this.opts.fontSizeLarge + "pt Helvetica, Arial, sans-serif", this.fontSmall = this.opts.fontSizeSmall + "pt Helvetica, Arial, sans-serif", this.updateSize(this.opts.width, this.opts.height), this.ctx.font = this.fontLarge, this.hydrogenWidth = this.ctx.measureText("H").width, this.halfHydrogenWidth = this.hydrogenWidth / 2, this.halfBondThickness = this.opts.bondThickness / 2
        }
        return i(e, [{
          key: "updateSize",
          value: function (e, t) {
            this.devicePixelRatio = window.devicePixelRatio || 1, this.backingStoreRatio = this.ctx.webkitBackingStorePixelRatio || this.ctx.mozBackingStorePixelRatio || this.ctx.msBackingStorePixelRatio || this.ctx.oBackingStorePixelRatio || this.ctx.backingStorePixelRatio || 1, this.ratio = this.devicePixelRatio / this.backingStoreRatio, 1 === this.ratio ? (this.canvas.width = e * this.ratio, this.canvas.height = t * this.ratio) : (this.canvas.width = e * this.ratio, this.canvas.height = t * this.ratio, this.canvas.style.width = e + "px", this.canvas.style.height = t + "px", this.ctx.setTransform(this.ratio, 0, 0, this.ratio, 0, 0))
          }
        }, {
          key: "setTheme",
          value: function (e) {
            this.colors = e
          }
        }, {
          key: "scale",
          value: function (e) {
            for (var t = -r, n = -r, a = r, o = r, l = 0; l < e.length; l++)
              if (e[l].value.isDrawn) {
                var i = e[l].position;
                t < i.x && (t = i.x), n < i.y && (n = i.y), a > i.x && (a = i.x), o > i.y && (o = i.y)
              } var s = this.opts.padding;
            t += s, n += s, a -= s, o -= s, this.drawingWidth = t - a, this.drawingHeight = n - o;
            var g = this.canvas.offsetWidth / this.drawingWidth,
              d = this.canvas.offsetHeight / this.drawingHeight,
              u = g < d ? g : d;
            this.ctx.scale(u, u), this.offsetX = -a, this.offsetY = -o, g < d ? this.offsetY += this.canvas.offsetHeight / (2 * u) - this.drawingHeight / 2 : this.offsetX += this.canvas.offsetWidth / (2 * u) - this.drawingWidth / 2
          }
        }, {
          key: "reset",
          value: function () {
            this.ctx.setTransform(1, 0, 0, 1, 0, 0)
          }
        }, {
          key: "getColor",
          value: function (e) {
            return e = e.toUpperCase(), e in this.colors ? this.colors[e] : this.colors.C
          }
        }, {
          key: "drawCircle",
          value: function (e, t, n, i) {
            var r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : !0,
              o = 5 < arguments.length && void 0 !== arguments[5] && arguments[5],
              l = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : "",
              s = this.ctx,
              g = this.offsetX,
              d = this.offsetY;
            s.save(), s.lineWidth = 1.5, s.beginPath(), s.arc(e + g, t + d, n, 0, a.twoPI, !0), s.closePath(), o ? (r ? (s.fillStyle = "#f00", s.fill()) : (s.strokeStyle = "#f00", s.stroke()), this.drawDebugText(e, t, l)) : r ? (s.fillStyle = i, s.fill()) : (s.strokeStyle = i, s.stroke()), s.restore()
          }
        }, {
          key: "drawLine",
          value: function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
              n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
              i = this.ctx,
              a = this.offsetX,
              o = this.offsetY,
              s = e.clone().shorten(4),
              g = s.getLeftVector().clone(),
              l = s.getRightVector().clone();
            g.x += a, g.y += o, l.x += a, l.y += o, t || (i.save(), i.globalCompositeOperation = "destination-out", i.beginPath(), i.moveTo(g.x, g.y), i.lineTo(l.x, l.y), i.lineCap = "round", i.lineWidth = this.opts.bondThickness + 1.2, i.strokeStyle = this.getColor("BACKGROUND"), i.stroke(), i.globalCompositeOperation = "source-over", i.restore()), g = e.getLeftVector().clone(), l = e.getRightVector().clone(), g.x += a, g.y += o, l.x += a, l.y += o, i.save(), i.beginPath(), i.moveTo(g.x, g.y), i.lineTo(l.x, l.y), i.lineCap = "round", i.lineWidth = this.opts.bondThickness;
            var r = this.ctx.createLinearGradient(g.x, g.y, l.x, l.y);
            r.addColorStop(0.4, this.getColor(e.getLeftElement()) || this.getColor("C")), r.addColorStop(0.6, this.getColor(e.getRightElement()) || this.getColor("C")), t && (i.setLineDash([1, 1.5]), i.lineWidth = this.opts.bondThickness / 1.5), 1 > n && (i.globalAlpha = n), i.strokeStyle = r, i.stroke(), i.restore()
          }
        }, {
          key: "drawWedge",
          value: function (e) {
            if (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1, !(isNaN(e.from.x) || isNaN(e.from.y) || isNaN(e.to.x) || isNaN(e.to.y))) {
              var n = this.ctx,
                i = this.offsetX,
                a = this.offsetY,
                s = e.clone().shorten(5),
                g = s.getLeftVector().clone(),
                l = s.getRightVector().clone();
              g.x += i, g.y += a, l.x += i, l.y += a, g = e.getLeftVector().clone(), l = e.getRightVector().clone(), g.x += i, g.y += a, l.x += i, l.y += a, n.save();
              var r = o.normals(g, l);
              r[0].normalize(), r[1].normalize();
              var d = e.getRightChiral(),
                h = g,
                c = l;
              d && (h = l, c = g);
              var p = o.add(h, o.multiplyScalar(r[0], this.halfBondThickness)),
                t = o.add(c, o.multiplyScalar(r[0], 1.5 + this.halfBondThickness)),
                u = o.add(c, o.multiplyScalar(r[1], 1.5 + this.halfBondThickness)),
                v = o.add(h, o.multiplyScalar(r[1], this.halfBondThickness));
              n.beginPath(), n.moveTo(p.x, p.y), n.lineTo(t.x, t.y), n.lineTo(u.x, u.y), n.lineTo(v.x, v.y);
              var y = this.ctx.createRadialGradient(l.x, l.y, this.opts.bondLength, l.x, l.y, 0);
              y.addColorStop(0.4, this.getColor(e.getLeftElement()) || this.getColor("C")), y.addColorStop(0.6, this.getColor(e.getRightElement()) || this.getColor("C")), n.fillStyle = y, n.fill(), n.restore()
            }
          }
        }, {
          key: "drawDashedWedge",
          value: function (e) {
            if (!(isNaN(e.from.x) || isNaN(e.from.y) || isNaN(e.to.x) || isNaN(e.to.y))) {
              var n = this.ctx,
                i = this.offsetX,
                a = this.offsetY,
                s = e.getLeftVector().clone(),
                l = e.getRightVector().clone();
              s.x += i, s.y += a, l.x += i, l.y += a, n.save();
              var r = o.normals(s, l);
              r[0].normalize(), r[1].normalize();
              var g = e.getRightChiral(),
                d = e.clone(),
                u, h, c, p;
              g ? (u = l, h = s, d.shortenRight(1), c = d.getRightVector().clone(), p = d.getLeftVector().clone()) : (u = s, h = l, d.shortenLeft(1), c = d.getLeftVector().clone(), p = d.getRightVector().clone()), c.x += i, c.y += a, p.x += i, p.y += a;
              var v = o.subtract(h, u).normalize();
              n.strokeStyle = this.getColor("C"), n.lineCap = "round", n.lineWidth = this.opts.bondThickness, n.beginPath();
              for (var y = e.getLength(), m = 1.25 / (y / (3 * this.opts.bondThickness)), f = !1, b = 0; 1 > b; b += m) {
                var t = o.multiplyScalar(v, b * y),
                  x = o.add(u, t),
                  k = 1.5 * b,
                  C = o.multiplyScalar(r[0], k);
                !f && 0.5 < b && (n.stroke(), n.beginPath(), n.strokeStyle = this.getColor(e.getRightElement()) || this.getColor("C"), f = !0), x.subtract(C), n.moveTo(x.x, x.y), x.add(o.multiplyScalar(C, 2)), n.lineTo(x.x, x.y)
              }
              n.stroke(), n.restore()
            }
          }
        }, {
          key: "drawDebugText",
          value: function (e, t, n) {
            var i = this.ctx;
            i.save(), i.font = "5px Droid Sans, sans-serif", i.textAlign = "start", i.textBaseline = "top", i.fillStyle = "#ff0000", i.fillText(n, e + this.offsetX, t + this.offsetY), i.restore()
          }
        }, {
          key: "drawBall",
          value: function (e, t, n) {
            var i = this.ctx;
            i.save(), i.beginPath(), i.arc(e + this.offsetX, t + this.offsetY, this.opts.bondLength / 4.5, 0, a.twoPI, !1), i.fillStyle = this.getColor(n), i.fill(), i.restore()
          }
        }, {
          key: "drawPoint",
          value: function (e, t, n) {
            var i = this.ctx,
              r = this.offsetX,
              o = this.offsetY;
            i.save(), i.globalCompositeOperation = "destination-out", i.beginPath(), i.arc(e + r, t + o, 1.5, 0, a.twoPI, !0), i.closePath(), i.fill(), i.globalCompositeOperation = "source-over", i.beginPath(), i.arc(e + this.offsetX, t + this.offsetY, 0.75, 0, a.twoPI, !1), i.fillStyle = this.getColor(n), i.fill(), i.restore()
          }
        }, {
          key: "drawText",
          value: function (e, t, n, i, o, l, s, g) {
            var d = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : {},
              u = this.ctx,
              h = this.offsetX,
              c = this.offsetY;
            u.save(), u.textAlign = "start", u.textBaseline = "alphabetic";
            var p = "",
              v = 0;
            s && (p = this.getChargeText(s), u.font = this.fontSmall, v = u.measureText(p).width);
            var y = "0",
              m = 0;
            0 < g && (y = g.toString(), u.font = this.fontSmall, m = u.measureText(y).width), 1 === s && "N" === n && d.hasOwnProperty("0O") && d.hasOwnProperty("0O-1") && (d = {
              "0O": {
                element: "O",
                count: 2,
                hydrogenCount: 0,
                previousElement: "C",
                charge: ""
              }
            }, s = 0), u.font = this.fontLarge, u.fillStyle = this.getColor("BACKGROUND");
            var f = u.measureText(n);
            f.totalWidth = f.width + v, f.height = parseInt(this.fontLarge, 10);
            var b = f.width > this.opts.fontSizeLarge ? f.width : this.opts.fontSizeLarge;
            b /= 1.5, u.globalCompositeOperation = "destination-out", u.beginPath(), u.arc(e + h, t + c, b, 0, a.twoPI, !0), u.closePath(), u.fill(), u.globalCompositeOperation = "source-over";
            var r = -f.width / 2,
              x = -f.width / 2;
            u.fillStyle = this.getColor(n), u.fillText(n, e + h + r, t + this.opts.halfFontSizeLarge + c), r += f.width, s && (u.font = this.fontSmall, u.fillText(p, e + h + r, t - this.opts.fifthFontSizeSmall + c), r += v), 0 < g && (u.font = this.fontSmall, u.fillText(y, e + h + x - m, t - this.opts.fifthFontSizeSmall + c), x -= m), u.font = this.fontLarge;
            var k = 0,
              C = 0;
            if (1 === i) {
              var S = e + h,
                R = t + c + this.opts.halfFontSizeLarge;
              k = this.hydrogenWidth, x -= k, "left" === o ? S += x : "right" === o ? S += r : "up" === o && l ? S += r : "down" === o && l ? S += r : "up" !== o || l ? "down" == o && !l && (R += this.opts.fontSizeLarge + this.opts.quarterFontSizeLarge, S -= this.halfHydrogenWidth) : (R -= this.opts.fontSizeLarge + this.opts.quarterFontSizeLarge, S -= this.halfHydrogenWidth), u.fillText("H", S, R), r += k
            } else if (1 < i) {
              var A = e + h,
                j = t + c + this.opts.halfFontSizeLarge;
              k = this.hydrogenWidth, u.font = this.fontSmall, C = u.measureText(i).width, x -= k + C, "left" === o ? A += x : "right" === o ? A += r : "up" === o && l ? A += r : "down" === o && l ? A += r : "up" !== o || l ? "down" == o && !l && (j += this.opts.fontSizeLarge + this.opts.quarterFontSizeLarge, A -= this.halfHydrogenWidth) : (j -= this.opts.fontSizeLarge + this.opts.quarterFontSizeLarge, A -= this.halfHydrogenWidth), u.font = this.fontLarge, u.fillText("H", A, j), u.font = this.fontSmall, u.fillText(i, A + this.halfHydrogenWidth + C, j + this.opts.fifthFontSizeSmall), r += k + this.halfHydrogenWidth + C
            }
            for (var T in d)
              if (d.hasOwnProperty(T)) {
                var w = 0,
                  I = 0,
                  P = d[T].element,
                  B = d[T].count,
                  L = d[T].hydrogenCount,
                  E = d[T].charge;
                u.font = this.fontLarge, 1 < B && 0 < L && (w = u.measureText("(").width, I = u.measureText(")").width);
                var D = u.measureText(P).width,
                  N = 0,
                  O = "",
                  V = 0;
                k = 0, 0 < L && (k = this.hydrogenWidth), u.font = this.fontSmall, 1 < B && (N = u.measureText(B).width), 0 !== E && (O = this.getChargeText(E), V = u.measureText(O).width), C = 0, 1 < L && (C = u.measureText(L).width), u.font = this.fontLarge;
                var H = e + h,
                  z = t + c + this.opts.halfFontSizeLarge;
                u.fillStyle = this.getColor(P), 0 < B && (x -= N), 1 < B && 0 < L && ("left" === o ? (x -= I, u.fillText(")", H + x, z)) : (u.fillText("(", H + r, z), r += w)), "left" === o ? (x -= D, u.fillText(P, H + x, z)) : (u.fillText(P, H + r, z), r += D), 0 < L && ("left" === o ? (x -= k + C, u.fillText("H", H + x, z), 1 < L && (u.font = this.fontSmall, u.fillText(L, H + x + k, z + this.opts.fifthFontSizeSmall))) : (u.fillText("H", H + r, z), r += k, 1 < L && (u.font = this.fontSmall, u.fillText(L, H + r, z + this.opts.fifthFontSizeSmall), r += C))), u.font = this.fontLarge, 1 < B && 0 < L && ("left" === o ? (x -= w, u.fillText("(", H + x, z)) : (u.fillText(")", H + r, z), r += I)), u.font = this.fontSmall, 1 < B && ("left" === o ? u.fillText(B, H + x + w + I + k + C + D, z + this.opts.fifthFontSizeSmall) : (u.fillText(B, H + r, z + this.opts.fifthFontSizeSmall), r += N)), 0 !== E && ("left" === o ? u.fillText(O, H + x + w + I + k + C + D, t - this.opts.fifthFontSizeSmall + c) : (u.fillText(O, H + r, t - this.opts.fifthFontSizeSmall + c), r += V))
              } u.restore()
          }
        }, {
          key: "getChargeText",
          value: function (e) {
            return 1 === e ? "+" : 2 === e ? "2+" : -1 === e ? "-" : -2 === e ? "2-" : ""
          }
        }, {
          key: "drawDebugPoint",
          value: function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "",
              i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "#f00";
            this.drawCircle(e, t, 2, i, !0, !0, n)
          }
        }, {
          key: "drawAromaticityRing",
          value: function (e) {
            var t = this.ctx,
              n = a.apothemFromSideLength(this.opts.bondLength, e.getSize());
            t.save(), t.strokeStyle = this.getColor("C"), t.lineWidth = this.opts.bondThickness, t.beginPath(), t.arc(e.center.x + this.offsetX, e.center.y + this.offsetY, n - this.opts.bondSpacing, 0, 2 * Math.PI, !0), t.closePath(), t.stroke(), t.restore()
          }
        }, {
          key: "clear",
          value: function () {
            this.ctx.clearRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight)
          }
        }]), e
      }();
    t.exports = d
  }, {
    "./Line": 8,
    "./MathHelper": 9,
    "./Ring": 11,
    "./Vector2": 14,
    "./Vertex": 15
  }],
  5: [function (e, t) {
    "use strict";

    function n(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
      return Array.from(e)
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = Math.PI,
      o = Math.min,
      a = function () {
        function e(e, t) {
          for (var n = 0, i; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      g = e("./MathHelper"),
      d = e("./ArrayHelper"),
      l = e("./Vector2"),
      s = e("./Line"),
      u = e("./Vertex"),
      h = e("./Edge"),
      c = e("./Atom"),
      p = e("./Ring"),
      v = e("./RingConnection"),
      y = e("./CanvasWrapper"),
      m = e("./Graph"),
      f = e("./SSSR"),
      b = function () {
        function e(t) {
          i(this, e), this.graph = null, this.doubleBondConfigCount = 0, this.doubleBondConfig = null, this.ringIdCounter = 0, this.ringConnectionIdCounter = 0, this.canvasWrapper = null, this.totalOverlapScore = 0, this.defaultOptions = {
            width: 500,
            height: 500,
            bondThickness: 0.6,
            bondLength: 15,
            shortBondLength: 0.85,
            bondSpacing: 15 * 0.18,
            atomVisualization: "default",
            isomeric: !0,
            debug: !1,
            terminalCarbons: !1,
            explicitHydrogens: !1,
            overlapSensitivity: 0.42,
            overlapResolutionIterations: 1,
            compactDrawing: !0,
            fontSizeLarge: 5,
            fontSizeSmall: 3,
            padding: 20,
            themes: {
              dark: {
                C: "#fff",
                O: "#e74c3c",
                N: "#3498db",
                F: "#27ae60",
                CL: "#16a085",
                BR: "#d35400",
                I: "#8e44ad",
                P: "#d35400",
                S: "#f1c40f",
                B: "#e67e22",
                SI: "#e67e22",
                H: "#fff",
                BACKGROUND: "#141414"
              },
              light: {
                C: "#222",
                O: "#e74c3c",
                N: "#3498db",
                F: "#27ae60",
                CL: "#16a085",
                BR: "#d35400",
                I: "#8e44ad",
                P: "#d35400",
                S: "#f1c40f",
                B: "#e67e22",
                SI: "#e67e22",
                H: "#222",
                BACKGROUND: "#fff"
              }
            }
          }, this.opts = this.extend(!0, this.defaultOptions, t), this.opts.halfBondSpacing = this.opts.bondSpacing / 2, this.opts.bondLengthSq = this.opts.bondLength * this.opts.bondLength, this.opts.halfFontSizeLarge = this.opts.fontSizeLarge / 2, this.opts.quarterFontSizeLarge = this.opts.fontSizeLarge / 4, this.opts.fifthFontSizeSmall = this.opts.fontSizeSmall / 5, this.theme = this.opts.themes.dark
        }
        return a(e, [{
          key: "extend",
          value: function () {
            var e = this,
              t = {},
              n = !1,
              r = 0,
              i = arguments.length;
            "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (n = arguments[0], r++);
            for (var a = function (i) {
                for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = n && "[object Object]" === Object.prototype.toString.call(i[r]) ? e.extend(!0, t[r], i[r]) : i[r])
              }, o; r < i; r++) o = arguments[r], a(o);
            return t
          }
        }, {
          key: "draw",
          value: function (e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "light",
              r = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
            if (this.data = e, this.infoOnly = r, this.infoOnly || (this.canvasWrapper = new y(t, this.opts.themes[n], this.opts)), this.ringIdCounter = 0, this.ringConnectionIdCounter = 0, this.graph = new m(e, this.opts.isomeric), this.rings = [], this.ringConnections = [], this.originalRings = [], this.originalRingConnections = [], this.bridgedRing = !1, this.doubleBondConfigCount = null, this.doubleBondConfig = null, this.initRings(), this.initHydrogens(), !this.infoOnly) {
              this.position(), this.restoreRingInformation(), this.resolvePrimaryOverlaps();
              var l = this.getOverlapScore();
              this.totalOverlapScore = this.getOverlapScore().total;
              for (var s = 0; s < this.opts.overlapResolutionIterations; s++)
                for (var o = 0, i; o < this.graph.edges.length; o++)
                  if (i = this.graph.edges[o], this.isEdgeRotatable(i)) {
                    var d = this.graph.getTreeDepth(i.sourceId, i.targetId),
                      u = this.graph.getTreeDepth(i.targetId, i.sourceId),
                      h = i.targetId,
                      a = i.sourceId;
                    d > u && (h = i.sourceId, a = i.targetId);
                    var c = this.getSubtreeOverlapScore(a, h, l.vertexScores);
                    if (c.value > this.opts.overlapSensitivity) {
                      var p = this.graph.vertices[h],
                        v = this.graph.vertices[a],
                        f = v.getNeighbours(h);
                      if (1 === f.length) {
                        var b = this.graph.vertices[f[0]],
                          x = b.position.getRotateAwayFromAngle(p.position, v.position, g.toRad(120));
                        this.rotateSubtree(b.id, v.id, x, v.position);
                        var k = this.getOverlapScore().total;
                        k > this.totalOverlapScore ? this.rotateSubtree(b.id, v.id, -x, v.position) : this.totalOverlapScore = k
                      } else if (2 === f.length) {
                        if (0 !== v.value.rings.length && 0 !== p.value.rings.length) continue;
                        var C = this.graph.vertices[f[0]],
                          S = this.graph.vertices[f[1]];
                        if (1 === C.value.rings.length && 1 === S.value.rings.length) {
                          if (C.value.rings[0] !== S.value.rings[0]) continue;
                        } else if (0 !== C.value.rings.length || 0 !== S.value.rings.length) continue;
                        else {
                          var R = C.position.getRotateAwayFromAngle(p.position, v.position, g.toRad(120)),
                            A = S.position.getRotateAwayFromAngle(p.position, v.position, g.toRad(120));
                          this.rotateSubtree(C.id, v.id, R, v.position), this.rotateSubtree(S.id, v.id, A, v.position);
                          var j = this.getOverlapScore().total;
                          j > this.totalOverlapScore ? (this.rotateSubtree(C.id, v.id, -R, v.position), this.rotateSubtree(S.id, v.id, -A, v.position)) : this.totalOverlapScore = j
                        }
                      }
                      l = this.getOverlapScore()
                    }
                  } this.resolveSecondaryOverlaps(l.scores), this.opts.isomeric && this.annotateStereochemistry(), this.opts.compactDrawing && "default" === this.opts.atomVisualization && this.initPseudoElements(), this.rotateDrawing(), this.canvasWrapper.scale(this.graph.vertices), this.drawEdges(this.opts.debug), this.drawVertices(this.opts.debug), this.canvasWrapper.reset()
            }
          }
        }, {
          key: "edgeRingCount",
          value: function (e) {
            var t = this.graph.edges[e],
              n = this.graph.vertices[t.sourceId],
              i = this.graph.vertices[t.targetId];
            return o(n.value.rings.length, i.value.rings.length)
          }
        }, {
          key: "getBridgedRings",
          value: function () {
            for (var e = [], t = 0; t < this.rings.length; t++) this.rings[t].isBridged && e.push(this.rings[t]);
            return e
          }
        }, {
          key: "getFusedRings",
          value: function () {
            for (var e = [], t = 0; t < this.rings.length; t++) this.rings[t].isFused && e.push(this.rings[t]);
            return e
          }
        }, {
          key: "getSpiros",
          value: function () {
            for (var e = [], t = 0; t < this.rings.length; t++) this.rings[t].isSpiro && e.push(this.rings[t]);
            return e
          }
        }, {
          key: "printRingInfo",
          value: function () {
            for (var e = "", t = 0, n; t < this.rings.length; t++) n = this.rings[t], e += n.id + ";", e += n.members.length + ";", e += n.neighbours.length + ";", e += n.isSpiro ? "true;" : "false;", e += n.isFused ? "true;" : "false;", e += n.isBridged ? "true;" : "false;", e += n.rings.length + ";", e += "\n";
            return e
          }
        }, {
          key: "rotateDrawing",
          value: function () {
            for (var e = 0, t = 0, n = 0, r = 0, i; r < this.graph.vertices.length; r++)
              if (i = this.graph.vertices[r], !!i.value.isDrawn)
                for (var a = r + 1, o; a < this.graph.vertices.length; a++)
                  if (o = this.graph.vertices[a], !!o.value.isDrawn) {
                    var s = i.position.distanceSq(o.position);
                    s > n && (n = s, e = r, t = a)
                  } var g = -l.subtract(this.graph.vertices[e].position, this.graph.vertices[t].position).angle();
            if (!isNaN(g)) {
              var d = g % 0.523599;
              0.2617995 > d ? g -= d : g += 0.523599 - d;
              for (var r = 0; r < this.graph.vertices.length; r++) r !== t && this.graph.vertices[r].position.rotateAround(g, this.graph.vertices[t].position);
              for (var r = 0; r < this.rings.length; r++) this.rings[r].center.rotateAround(g, this.graph.vertices[t].position)
            }
          }
        }, {
          key: "getTotalOverlapScore",
          value: function () {
            return this.totalOverlapScore
          }
        }, {
          key: "getRingCount",
          value: function () {
            return this.rings.length
          }
        }, {
          key: "hasBridgedRing",
          value: function () {
            return this.bridgedRing
          }
        }, {
          key: "getHeavyAtomCount",
          value: function () {
            for (var e = 0, t = 0; t < this.graph.vertices.length; t++) "H" !== this.graph.vertices[t].value.element && e++;
            return e
          }
        }, {
          key: "getMolecularFormula",
          value: function () {
            for (var t = "", n = new Map, e = 0, i; e < this.graph.vertices.length; e++)
              if (i = this.graph.vertices[e].value, n.has(i.element) ? n.set(i.element, n.get(i.element) + 1) : n.set(i.element, 1), i.bracket && !i.bracket.chirality && (n.has("H") ? n.set("H", n.get("H") + i.bracket.hcount) : n.set("H", i.bracket.hcount)), !i.bracket) {
                var r = c.maxBonds[i.element] - i.bondCount;
                i.isPartOfAromaticRing && r--, n.has("H") ? n.set("H", n.get("H") + r) : n.set("H", r)
              } if (n.has("C")) {
              var a = n.get("C");
              t += "C" + (1 < a ? a : ""), n.delete("C")
            }
            if (n.has("H")) {
              var o = n.get("H");
              t += "H" + (1 < o ? o : ""), n.delete("H")
            }
            var l = Object.keys(c.atomicNumbers).sort();
            return l.map(function (i) {
              if (n.has(i)) {
                var e = n.get(i);
                t += i + (1 < e ? e : "")
              }
            }), t
          }
        }, {
          key: "getRingbondType",
          value: function (e, t) {
            if (1 > e.value.getRingbondCount() || 1 > t.value.getRingbondCount()) return null;
            for (var n = 0; n < e.value.ringbonds.length; n++)
              for (var i = 0; i < t.value.ringbonds.length; i++)
                if (e.value.ringbonds[n].id === t.value.ringbonds[i].id) return "-" === e.value.ringbonds[n].bondType ? t.value.ringbonds[i].bond : e.value.ringbonds[n].bond;
            return null
          }
        }, {
          key: "initRings",
          value: function () {
            for (var e = new Map, t = this.graph.vertices.length - 1, i; 0 <= t; t--)
              if (i = this.graph.vertices[t], 0 !== i.value.ringbonds.length)
                for (var r = 0; r < i.value.ringbonds.length; r++) {
                  var o = i.value.ringbonds[r].id,
                    l = i.value.ringbonds[r].bond;
                  if (!e.has(o)) e.set(o, [i.id, l]);
                  else {
                    var s = i.id,
                      g = e.get(o)[0],
                      d = e.get(o)[1],
                      u = new h(s, g, 1);
                    u.setBondType(d || l || "-");
                    var c = this.graph.addEdge(u),
                      y = this.graph.vertices[g];
                    i.addRingbondChild(g, r), i.value.addNeighbouringElement(y.value.element), y.addRingbondChild(s, r), y.value.addNeighbouringElement(i.value.element), i.edges.push(c), y.edges.push(c), e.delete(o)
                  }
                }
            var m = f.getRings(this.graph);
            if (null !== m) {
              for (var t = 0; t < m.length; t++)
                for (var x = [].concat(n(m[t])), k = this.addRing(new p(x)), r = 0; r < x.length; r++) this.graph.vertices[x[r]].value.rings.push(k);
              for (var t = 0; t < this.rings.length - 1; t++)
                for (var r = t + 1; r < this.rings.length; r++) {
                  var C = this.rings[t],
                    a = this.rings[r],
                    b = new v(C, a);
                  0 < b.vertices.size && this.addRingConnection(b)
                }
              for (var t = 0, S; t < this.rings.length; t++) S = this.rings[t], S.neighbours = v.getNeighbours(this.ringConnections, S.id);
              for (var t = 0, R; t < this.rings.length; t++) R = this.rings[t], this.graph.vertices[R.members[0]].value.addAnchoredRing(R.id);
              for (this.backupRingInformation(); 0 < this.rings.length;) {
                for (var A = -1, t = 0, j; t < this.rings.length; t++) j = this.rings[t], this.isPartOfBridgedRing(j.id) && !j.isBridged && (A = j.id);
                if (-1 === A) break;
                var T = this.getRing(A),
                  w = this.getBridgedRingRings(T.id);
                this.bridgedRing = !0, this.createBridgedRing(w, T.members[0]);
                for (var t = 0; t < w.length; t++) this.removeRing(w[t])
              }
            }
          }
        }, {
          key: "initHydrogens",
          value: function () {
            if (!this.opts.explicitHydrogens)
              for (var e = 0, t; e < this.graph.vertices.length; e++)
                if (t = this.graph.vertices[e], "H" === t.value.element) {
                  var n = this.graph.vertices[t.neighbours[0]];
                  n.value.hasHydrogen = !0, (!n.value.isStereoCenter || 2 > n.value.rings.length && !n.value.bridgedRing || n.value.bridgedRing && 2 > n.value.originalRings.length) && (t.value.isDrawn = !1)
                }
          }
        }, {
          key: "getBridgedRingRings",
          value: function (e) {
            var t = [],
              a = this;
            return function e(o) {
              var r = a.getRing(o);
              t.push(o);
              for (var l = 0, i; l < r.neighbours.length; l++) i = r.neighbours[l], -1 === t.indexOf(i) && i !== o && v.isBridge(a.ringConnections, a.graph.vertices, o, i) && e(i)
            }(e), d.unique(t)
          }
        }, {
          key: "isPartOfBridgedRing",
          value: function (e) {
            for (var t = 0; t < this.ringConnections.length; t++)
              if (this.ringConnections[t].containsRing(e) && this.ringConnections[t].isBridge(this.graph.vertices)) return !0;
            return !1
          }
        }, {
          key: "createBridgedRing",
          value: function (e) {
            for (var t = new Set, r = new Set, a = new Set, o = 0, i; o < e.length; o++) {
              i = this.getRing(e[o]), i.isPartOfBridged = !0;
              for (var l = 0; l < i.members.length; l++) r.add(i.members[l]);
              for (var l = 0, s; l < i.neighbours.length; l++) s = i.neighbours[l], -1 === e.indexOf(s) && a.add(i.neighbours[l])
            }
            var g = new Set,
              u = !0,
              h = !1,
              c;
            try {
              for (var v = r[Symbol.iterator](), y; !(u = (y = v.next()).done); u = !0) {
                var m = y.value,
                  f = this.graph.vertices[m],
                  b = d.intersection(e, f.value.rings);
                1 === f.value.rings.length || 1 === b.length ? t.add(f.id) : g.add(f.id)
              }
            } catch (e) {
              h = !0, c = e
            } finally {
              try {
                !u && v.return && v.return()
              } finally {
                if (h) throw c
              }
            }
            var x = [],
              k = !0,
              C = !1,
              S;
            try {
              for (var R = g[Symbol.iterator](), A; !(k = (A = R.next()).done); k = !0) {
                for (var j = A.value, T = this.graph.vertices[j], w = !1, I = 0; I < T.edges.length; I++) 1 === this.edgeRingCount(T.edges[I]) && (w = !0);
                w ? (T.value.isBridgeNode = !0, t.add(T.id)) : (T.value.isBridge = !0, t.add(T.id))
              }
            } catch (e) {
              C = !0, S = e
            } finally {
              try {
                !k && R.return && R.return()
              } finally {
                if (C) throw S
              }
            }
            var P = new p([].concat(n(t)));
            P.isBridged = !0, P.neighbours = [].concat(n(a));
            for (var o = 0; o < e.length; o++) P.rings.push(this.getRing(e[o]).clone());
            this.addRing(P);
            for (var o = 0; o < P.members.length; o++) this.graph.vertices[P.members[o]].value.bridgedRing = P.id;
            for (var o = 0, B; o < x.length; o++) B = this.graph.vertices[x[o]], B.value.rings = [];
            var L = !0,
              E = !1,
              D;
            try {
              for (var N = t[Symbol.iterator](), O; !(L = (O = N.next()).done); L = !0) {
                var V = O.value,
                  H = this.graph.vertices[V];
                H.value.rings = d.removeAll(H.value.rings, e), H.value.rings.push(P.id)
              }
            } catch (e) {
              E = !0, D = e
            } finally {
              try {
                !L && N.return && N.return()
              } finally {
                if (E) throw D
              }
            }
            for (var o = 0; o < e.length; o++)
              for (var l = o + 1; l < e.length; l++) this.removeRingConnectionsBetween(e[o], e[l]);
            var z = !0,
              F = !1,
              W;
            try {
              for (var _ = a[Symbol.iterator](), M; !(z = (M = _.next()).done); z = !0) {
                for (var q = M.value, U = this.getRingConnections(q, e), l = 0; l < U.length; l++) this.getRingConnection(U[l]).updateOther(P.id, q);
                this.getRing(q).neighbours.push(P.id)
              }
            } catch (e) {
              F = !0, W = e
            } finally {
              try {
                !z && _.return && _.return()
              } finally {
                if (F) throw W
              }
            }
            return P
          }
        }, {
          key: "areVerticesInSameRing",
          value: function (e, t) {
            for (var n = 0; n < e.value.rings.length; n++)
              for (var i = 0; i < t.value.rings.length; i++)
                if (e.value.rings[n] === t.value.rings[i]) return !0;
            return !1
          }
        }, {
          key: "getCommonRings",
          value: function (e, t) {
            for (var n = [], r = 0; r < e.value.rings.length; r++)
              for (var i = 0; i < t.value.rings.length; i++) e.value.rings[r] == t.value.rings[i] && n.push(e.value.rings[r]);
            return n
          }
        }, {
          key: "getLargestOrAromaticCommonRing",
          value: function (e, t) {
            for (var n = this.getCommonRings(e, t), r = 0, a = null, o = 0; o < n.length; o++) {
              var i = this.getRing(n[o]),
                l = i.getSize();
              if (i.isBenzeneLike(this.graph.vertices)) return i;
              l > r && (r = l, a = i)
            }
            return a
          }
        }, {
          key: "getVerticesAt",
          value: function (e, t, n) {
            for (var r = [], a = 0, i; a < this.graph.vertices.length; a++)
              if (i = this.graph.vertices[a], i.id !== n && i.positioned) {
                var o = e.distanceSq(i.position);
                o <= t * t && r.push(i.id)
              } return r
          }
        }, {
          key: "getClosestVertex",
          value: function (e) {
            for (var t = 99999, n = null, r = 0, i; r < this.graph.vertices.length; r++)
              if (i = this.graph.vertices[r], i.id !== e.id) {
                var a = e.position.distanceSq(i.position);
                a < t && (t = a, n = i)
              } return n
          }
        }, {
          key: "addRing",
          value: function (e) {
            return e.id = this.ringIdCounter++, this.rings.push(e), e.id
          }
        }, {
          key: "removeRing",
          value: function (e) {
            this.rings = this.rings.filter(function (t) {
              return t.id !== e
            }), this.ringConnections = this.ringConnections.filter(function (t) {
              return t.firstRingId !== e && t.secondRingId !== e
            });
            for (var t = 0, n; t < this.rings.length; t++) n = this.rings[t], n.neighbours = n.neighbours.filter(function (t) {
              return t !== e
            })
          }
        }, {
          key: "getRing",
          value: function (e) {
            for (var t = 0; t < this.rings.length; t++)
              if (this.rings[t].id == e) return this.rings[t]
          }
        }, {
          key: "addRingConnection",
          value: function (e) {
            return e.id = this.ringConnectionIdCounter++, this.ringConnections.push(e), e.id
          }
        }, {
          key: "removeRingConnection",
          value: function (e) {
            this.ringConnections = this.ringConnections.filter(function (t) {
              return t.id !== e
            })
          }
        }, {
          key: "removeRingConnectionsBetween",
          value: function (e, t) {
            for (var n = [], r = 0, i; r < this.ringConnections.length; r++) i = this.ringConnections[r], (i.firstRingId === e && i.secondRingId === t || i.firstRingId === t && i.secondRingId === e) && n.push(i.id);
            for (var r = 0; r < n.length; r++) this.removeRingConnection(n[r])
          }
        }, {
          key: "getRingConnection",
          value: function (e) {
            for (var t = 0; t < this.ringConnections.length; t++)
              if (this.ringConnections[t].id == e) return this.ringConnections[t]
          }
        }, {
          key: "getRingConnections",
          value: function (e, t) {
            for (var n = [], r = 0, i; r < this.ringConnections.length; r++) {
              i = this.ringConnections[r];
              for (var a = 0, o; a < t.length; a++) o = t[a], (i.firstRingId === e && i.secondRingId === o || i.firstRingId === o && i.secondRingId === e) && n.push(i.id)
            }
            return n
          }
        }, {
          key: "getOverlapScore",
          value: function () {
            for (var e = 0, t = new Float32Array(this.graph.vertices.length), n = 0; n < this.graph.vertices.length; n++) t[n] = 0;
            for (var n = 0, r; n < this.graph.vertices.length; n++)
              for (r = this.graph.vertices.length; --r > n;) {
                var o = this.graph.vertices[n],
                  a = this.graph.vertices[r];
                if (o.value.isDrawn && a.value.isDrawn) {
                  var s = l.subtract(o.position, a.position).lengthSq();
                  if (s < this.opts.bondLengthSq) {
                    var g = (this.opts.bondLength - Math.sqrt(s)) / this.opts.bondLength;
                    e += g, t[n] += g, t[r] += g
                  }
                }
              }
            for (var d = [], n = 0; n < this.graph.vertices.length; n++) d.push({
              id: n,
              score: t[n]
            });
            return d.sort(function (e, t) {
              return t.score - e.score
            }), {
              total: e,
              scores: d,
              vertexScores: t
            }
          }
        }, {
          key: "chooseSide",
          value: function (e, t, n) {
            for (var r = e.getNeighbours(t.id), a = t.getNeighbours(e.id), o = r.length, l = a.length, s = d.merge(r, a), g = [0, 0], u = 0, i; u < s.length; u++) i = this.graph.vertices[s[u]].position, i.sameSideAs(e.position, t.position, n[0]) ? g[0]++ : g[1]++;
            for (var h = [0, 0], u = 0, c; u < this.graph.vertices.length; u++) c = this.graph.vertices[u].position, c.sameSideAs(e.position, t.position, n[0]) ? h[0]++ : h[1]++;
            return {
              totalSideCount: h,
              totalPosition: h[0] > h[1] ? 0 : 1,
              sideCount: g,
              position: g[0] > g[1] ? 0 : 1,
              anCount: o,
              bnCount: l
            }
          }
        }, {
          key: "setRingCenter",
          value: function (e) {
            for (var t = e.getSize(), n = new l(0, 0), r = 0; r < t; r++) n.add(this.graph.vertices[e.members[r]].position);
            e.center = n.divide(t)
          }
        }, {
          key: "getSubringCenter",
          value: function (e, t) {
            for (var n = t.value.originalRings, r = e.center, a = Number.MAX_VALUE, o = 0; o < n.length; o++)
              for (var i = 0; i < e.rings.length; i++) n[o] === e.rings[i].id && e.rings[i].getSize() < a && (r = e.rings[i].center, a = e.rings[i].getSize());
            return r
          }
        }, {
          key: "drawEdges",
          value: function (e) {
            var t = this,
              n = Array(this.graph.edges.length);
            if (n.fill(!1), this.graph.traverseBF(0, function (r) {
                for (var a = t.graph.getEdges(r.id), o = 0, i; o < a.length; o++) i = a[o], n[i] || (n[i] = !0, t.drawEdge(i, e))
              }), !this.bridgedRing)
              for (var r = 0, i; r < this.rings.length; r++) i = this.rings[r], this.isRingAromatic(i) && this.canvasWrapper.drawAromaticityRing(i)
          }
        }, {
          key: "drawEdge",
          value: function (e, t) {
            var n = this,
              i = this.graph.edges[e],
              r = this.graph.vertices[i.sourceId],
              o = this.graph.vertices[i.targetId],
              g = r.value.element,
              u = o.value.element;
            if (r.value.isDrawn && o.value.isDrawn || "default" !== this.opts.atomVisualization) {
              var h = r.position,
                a = o.position,
                c = this.getEdgeNormals(i),
                p = d.clone(c);
              if (p[0].multiplyScalar(10).add(h), p[1].multiplyScalar(10).add(h), "=" === i.bondType || "=" === this.getRingbondType(r, o) || i.isPartOfAromaticRing && this.bridgedRing) {
                var v = this.areVerticesInSameRing(r, o),
                  y = this.chooseSide(r, o, p);
                if (v) {
                  var m = this.getLargestOrAromaticCommonRing(r, o),
                    f = m.center;
                  c[0].multiplyScalar(n.opts.bondSpacing), c[1].multiplyScalar(n.opts.bondSpacing);
                  var b = null;
                  b = f.sameSideAs(r.position, o.position, l.add(h, c[0])) ? new s(l.add(h, c[0]), l.add(a, c[0]), g, u) : new s(l.add(h, c[1]), l.add(a, c[1]), g, u), b.shorten(this.opts.bondLength - this.opts.shortBondLength * this.opts.bondLength), i.isPartOfAromaticRing ? this.canvasWrapper.drawLine(b, !0) : this.canvasWrapper.drawLine(b), this.canvasWrapper.drawLine(new s(h, a, g, u))
                } else if (i.center || r.isTerminal() && o.isTerminal()) {
                  c[0].multiplyScalar(n.opts.halfBondSpacing), c[1].multiplyScalar(n.opts.halfBondSpacing);
                  var x = new s(l.add(h, c[0]), l.add(a, c[0]), g, u),
                    k = new s(l.add(h, c[1]), l.add(a, c[1]), g, u);
                  this.canvasWrapper.drawLine(x), this.canvasWrapper.drawLine(k)
                } else if (0 == y.anCount && 1 < y.bnCount || 0 == y.bnCount && 1 < y.anCount) {
                  c[0].multiplyScalar(n.opts.halfBondSpacing), c[1].multiplyScalar(n.opts.halfBondSpacing);
                  var C = new s(l.add(h, c[0]), l.add(a, c[0]), g, u),
                    S = new s(l.add(h, c[1]), l.add(a, c[1]), g, u);
                  this.canvasWrapper.drawLine(C), this.canvasWrapper.drawLine(S)
                } else if (y.sideCount[0] > y.sideCount[1]) {
                  c[0].multiplyScalar(n.opts.bondSpacing), c[1].multiplyScalar(n.opts.bondSpacing);
                  var R = new s(l.add(h, c[0]), l.add(a, c[0]), g, u);
                  R.shorten(this.opts.bondLength - this.opts.shortBondLength * this.opts.bondLength), this.canvasWrapper.drawLine(R), this.canvasWrapper.drawLine(new s(h, a, g, u))
                } else if (y.sideCount[0] < y.sideCount[1]) {
                  c[0].multiplyScalar(n.opts.bondSpacing), c[1].multiplyScalar(n.opts.bondSpacing);
                  var A = new s(l.add(h, c[1]), l.add(a, c[1]), g, u);
                  A.shorten(this.opts.bondLength - this.opts.shortBondLength * this.opts.bondLength), this.canvasWrapper.drawLine(A), this.canvasWrapper.drawLine(new s(h, a, g, u))
                } else if (y.totalSideCount[0] > y.totalSideCount[1]) {
                  c[0].multiplyScalar(n.opts.bondSpacing), c[1].multiplyScalar(n.opts.bondSpacing);
                  var j = new s(l.add(h, c[0]), l.add(a, c[0]), g, u);
                  j.shorten(this.opts.bondLength - this.opts.shortBondLength * this.opts.bondLength), this.canvasWrapper.drawLine(j), this.canvasWrapper.drawLine(new s(h, a, g, u))
                } else if (y.totalSideCount[0] <= y.totalSideCount[1]) {
                  c[0].multiplyScalar(n.opts.bondSpacing), c[1].multiplyScalar(n.opts.bondSpacing);
                  var T = new s(l.add(h, c[1]), l.add(a, c[1]), g, u);
                  T.shorten(this.opts.bondLength - this.opts.shortBondLength * this.opts.bondLength), this.canvasWrapper.drawLine(T), this.canvasWrapper.drawLine(new s(h, a, g, u))
                } else;
              } else if ("#" === i.bondType) {
                c[0].multiplyScalar(n.opts.bondSpacing / 1.5), c[1].multiplyScalar(n.opts.bondSpacing / 1.5);
                var w = new s(l.add(h, c[0]), l.add(a, c[0]), g, u),
                  I = new s(l.add(h, c[1]), l.add(a, c[1]), g, u);
                this.canvasWrapper.drawLine(w), this.canvasWrapper.drawLine(I), this.canvasWrapper.drawLine(new s(h, a, g, u))
              } else if ("." === i.bondType);
              else {
                var P = r.value.isStereoCenter,
                  B = o.value.isStereoCenter;
                "up" === i.wedge ? this.canvasWrapper.drawWedge(new s(h, a, g, u, P, B)) : "down" === i.wedge ? this.canvasWrapper.drawDashedWedge(new s(h, a, g, u, P, B)) : this.canvasWrapper.drawLine(new s(h, a, g, u, P, B))
              }
              if (t) {
                var L = l.midpoint(h, a);
                this.canvasWrapper.drawDebugText(L.x, L.y, "e: " + e)
              }
            }
          }
        }, {
          key: "drawVertices",
          value: function (e) {
            for (var t = this.graph.vertices.length, t = 0; t < this.graph.vertices.length; t++) {
              var n = this.graph.vertices[t],
                i = n.value,
                o = 0,
                s = 0,
                g = n.value.bondCount,
                u = i.element,
                h = c.maxBonds[u] - g,
                p = n.getTextDirection(this.graph.vertices),
                v = (this.opts.terminalCarbons || "C" !== u || i.hasAttachedPseudoElements) && n.isTerminal(),
                y = "C" === i.element;
              if ("N" === i.element && i.isPartOfAromaticRing && (h = 0), i.bracket && (h = i.bracket.hcount, o = i.bracket.charge, s = i.bracket.isotope), "allballs" === this.opts.atomVisualization) this.canvasWrapper.drawBall(n.position.x, n.position.y, u);
              else if (i.isDrawn && (!y || i.drawExplicit || v || i.hasAttachedPseudoElements) || 1 === this.graph.vertices.length) "default" === this.opts.atomVisualization ? this.canvasWrapper.drawText(n.position.x, n.position.y, u, h, p, v, o, s, i.getAttachedPseudoElements()) : "balls" === this.opts.atomVisualization && this.canvasWrapper.drawBall(n.position.x, n.position.y, u);
              else if (2 === n.getNeighbourCount() && !0 == n.forcePositioned) {
                var m = this.graph.vertices[n.neighbours[0]].position,
                  a = this.graph.vertices[n.neighbours[1]].position,
                  f = l.threePointangle(n.position, m, a);
                0.1 > Math.abs(r - f) && this.canvasWrapper.drawPoint(n.position.x, n.position.y, u)
              }
              if (e) {
                var b = "v: " + n.id + " " + d.print(i.ringbonds);
                this.canvasWrapper.drawDebugText(n.position.x, n.position.y, b)
              } else;
            }
            if (this.opts.debug)
              for (var t = 0, x; t < this.rings.length; t++) x = this.rings[t].center, this.canvasWrapper.drawDebugPoint(x.x, x.y, "r: " + this.rings[t].id)
          }
        }, {
          key: "position",
          value: function () {
            for (var e = null, t = 0; t < this.graph.vertices.length; t++)
              if (null !== this.graph.vertices[t].value.bridgedRing) {
                e = this.graph.vertices[t];
                break
              } for (var t = 0; t < this.rings.length; t++) this.rings[t].isBridged && (e = this.graph.vertices[this.rings[t].members[0]]);
            0 < this.rings.length && null === e && (e = this.graph.vertices[this.rings[0].members[0]]), null === e && (e = this.graph.vertices[0]), this.createNextBond(e, null, 0)
          }
        }, {
          key: "backupRingInformation",
          value: function () {
            this.originalRings = [], this.originalRingConnections = [];
            for (var e = 0; e < this.rings.length; e++) this.originalRings.push(this.rings[e]);
            for (var e = 0; e < this.ringConnections.length; e++) this.originalRingConnections.push(this.ringConnections[e]);
            for (var e = 0; e < this.graph.vertices.length; e++) this.graph.vertices[e].value.backupRings()
          }
        }, {
          key: "restoreRingInformation",
          value: function () {
            var e = this.getBridgedRings();
            this.rings = [], this.ringConnections = [];
            for (var t = 0, n; t < e.length; t++) {
              n = e[t];
              for (var i = 0, r; i < n.rings.length; i++) r = n.rings[i], this.originalRings[r.id].center = r.center
            }
            for (var t = 0; t < this.originalRings.length; t++) this.rings.push(this.originalRings[t]);
            for (var t = 0; t < this.originalRingConnections.length; t++) this.ringConnections.push(this.originalRingConnections[t]);
            for (var t = 0; t < this.graph.vertices.length; t++) this.graph.vertices[t].value.restoreRings()
          }
        }, {
          key: "createRing",
          value: function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
              n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
              o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            if (!e.positioned) {
              t = t ? t : new l(0, 0);
              var s = e.getOrderedNeighbours(this.ringConnections),
                d = n ? l.subtract(n.position, t).angle() : 0,
                u = g.polyCircumradius(this.opts.bondLength, e.getSize()),
                h = g.centralAngle(e.getSize());
              e.centralAngle = h;
              var c = d,
                a = this,
                p = n ? n.id : null;
              if (-1 === e.members.indexOf(p) && (n && (n.positioned = !1), p = e.members[0]), e.isBridged) {
                this.graph.kkLayout(e.members.slice(), t, n.id, e, this.opts.bondLength), e.positioned = !0, this.setRingCenter(e), t = e.center;
                for (var y = 0; y < e.rings.length; y++) this.setRingCenter(e.rings[y])
              } else e.eachMember(this.graph.vertices, function (n) {
                var i = a.graph.vertices[n];
                i.positioned || i.setPosition(t.x + Math.cos(c) * u, t.y + Math.sin(c) * u), c += h, (!e.isBridged || 3 > e.rings.length) && (i.angle = c, i.positioned = !0)
              }, p, o ? o.id : null);
              e.positioned = !0, e.center = t;
              for (var y = 0, i; y < s.length; y++)
                if (i = this.getRing(s[y].neighbour), !i.positioned) {
                  var m = v.getVertices(this.ringConnections, e.id, i.id);
                  if (2 === m.length) {
                    e.isFused = !0, i.isFused = !0;
                    var f = this.graph.vertices[m[0]],
                      b = this.graph.vertices[m[1]],
                      x = l.midpoint(f.position, b.position),
                      k = l.normals(f.position, b.position);
                    k[0].normalize(), k[1].normalize();
                    var C = g.polyCircumradius(this.opts.bondLength, i.getSize()),
                      r = g.apothem(C, i.getSize());
                    k[0].multiplyScalar(r).add(x), k[1].multiplyScalar(r).add(x);
                    var S = k[0];
                    l.subtract(t, k[1]).lengthSq() > l.subtract(t, k[0]).lengthSq() && (S = k[1]);
                    var R = l.subtract(f.position, S),
                      A = l.subtract(b.position, S); - 1 === R.clockwise(A) ? !i.positioned && this.createRing(i, S, f, b) : !i.positioned && this.createRing(i, S, b, f)
                  } else if (1 === m.length) {
                    e.isSpiro = !0, i.isSpiro = !0;
                    var T = this.graph.vertices[m[0]],
                      w = l.subtract(t, T.position);
                    w.invert(), w.normalize();
                    var I = g.polyCircumradius(this.opts.bondLength, i.getSize());
                    w.multiplyScalar(I), w.add(T.position), i.positioned || this.createRing(i, w, T)
                  }
                } for (var y = 0; y < e.members.length; y++)
                for (var P = this.graph.vertices[e.members[y]], B = P.neighbours, L = 0, j; L < B.length; L++)(j = this.graph.vertices[B[L]], !j.positioned) && (j.value.isConnectedToRing = !0, this.createNextBond(j, P, 0))
            }
          }
        }, {
          key: "rotateSubtree",
          value: function (e, t, n, r) {
            var a = this;
            this.graph.traverseTree(e, t, function (e) {
              e.position.rotateAround(n, r);
              for (var t = 0, i; t < e.value.anchoredRings.length; t++) i = a.rings[e.value.anchoredRings[t]], i && i.center.rotateAround(n, r)
            })
          }
        }, {
          key: "getSubtreeOverlapScore",
          value: function (e, t, n) {
            var i = this,
              r = 0,
              a = new l(0, 0),
              o = 0;
            return this.graph.traverseTree(e, t, function (e) {
              if (e.value.isDrawn) {
                var t = n[e.id];
                t > i.opts.overlapSensitivity && (r += t, o++);
                var l = i.graph.vertices[e.id].position.clone();
                l.multiplyScalar(t), a.add(l)
              }
            }), a.divide(r), {
              value: r / o,
              center: a
            }
          }
        }, {
          key: "getCurrentCenterOfMass",
          value: function () {
            for (var e = new l(0, 0), t = 0, n = 0, i; n < this.graph.vertices.length; n++) i = this.graph.vertices[n], i.positioned && (e.add(i.position), t++);
            return e.divide(t)
          }
        }, {
          key: "getCurrentCenterOfMassInNeigbourhood",
          value: function (e) {
            for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2 * this.opts.bondLength, n = new l(0, 0), r = 0, a = 0, i; a < this.graph.vertices.length; a++) i = this.graph.vertices[a], i.positioned && e.distanceSq(i.position) < t * t && (n.add(i.position), r++);
            return n.divide(r)
          }
        }, {
          key: "resolvePrimaryOverlaps",
          value: function () {
            for (var e = [], t = Array(this.graph.vertices.length), n = 0, i; n < this.rings.length; n++) {
              i = this.rings[n];
              for (var o = 0, l; o < i.members.length; o++)
                if (l = this.graph.vertices[i.members[o]], !t[l.id]) {
                  t[l.id] = !0;
                  var s = this.getNonRingNeighbours(l.id);
                  if (1 < s.length) {
                    for (var g = [], d = 0; d < l.value.rings.length; d++) g.push(l.value.rings[d]);
                    e.push({
                      common: l,
                      rings: g,
                      vertices: s
                    })
                  } else if (1 === s.length && 2 === l.value.rings.length) {
                    for (var u = [], d = 0; d < l.value.rings.length; d++) u.push(l.value.rings[d]);
                    e.push({
                      common: l,
                      rings: u,
                      vertices: s
                    })
                  }
                }
            }
            for (var n = 0, h; n < e.length; n++)
              if (h = e[n], 2 === h.vertices.length) {
                var c = h.vertices[0],
                  a = h.vertices[1];
                if (!c.value.isDrawn || !a.value.isDrawn) continue;
                var p = (2 * r - this.getRing(h.rings[0]).getAngle()) / 6;
                this.rotateSubtree(c.id, h.common.id, p, h.common.position), this.rotateSubtree(a.id, h.common.id, -p, h.common.position);
                var v = this.getOverlapScore(),
                  y = this.getSubtreeOverlapScore(c.id, h.common.id, v.vertexScores),
                  m = this.getSubtreeOverlapScore(a.id, h.common.id, v.vertexScores),
                  f = y.value + m.value;
                this.rotateSubtree(c.id, h.common.id, -2 * p, h.common.position), this.rotateSubtree(a.id, h.common.id, 2 * p, h.common.position), v = this.getOverlapScore(), y = this.getSubtreeOverlapScore(c.id, h.common.id, v.vertexScores), m = this.getSubtreeOverlapScore(a.id, h.common.id, v.vertexScores), y.value + m.value > f && (this.rotateSubtree(c.id, h.common.id, 2 * p, h.common.position), this.rotateSubtree(a.id, h.common.id, -2 * p, h.common.position))
              } else 1 !== h.vertices.length || 2 !== h.rings.length
          }
        }, {
          key: "resolveSecondaryOverlaps",
          value: function (e) {
            for (var t = 0; t < e.length; t++)
              if (e[t].score > this.opts.overlapSensitivity) {
                var n = this.graph.vertices[e[t].id];
                if (n.isTerminal()) {
                  var i = this.getClosestVertex(n);
                  if (i) {
                    var r = null;
                    r = i.isTerminal() ? 0 === i.id ? this.graph.vertices[1].position : i.previousPosition : 0 === i.id ? this.graph.vertices[1].position : i.position;
                    var a = 0 === n.id ? this.graph.vertices[1].position : n.previousPosition;
                    n.position.rotateAwayFrom(r, a, g.toRad(20))
                  }
                }
              }
          }
        }, {
          key: "getLastVertexWithAngle",
          value: function (e) {
            for (var t = 0, n = null; !t && e;) n = this.graph.vertices[e], t = n.angle, e = n.parentVertexId;
            return n
          }
        }, {
          key: "createNextBond",
          value: function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
              n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
              u = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
              h = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
            if (!e.positioned || h) {
              var c = !1;
              if (t) {
                var p = this.graph.getEdge(e.id, t.id);
                ("/" === p.bondType || "\\" === p.bondType) && 1 == ++this.doubleBondConfigCount % 2 && null === this.doubleBondConfig && (this.doubleBondConfig = p.bondType, c = !0, null === t.parentVertexId && e.value.branchBond && ("/" === this.doubleBondConfig ? this.doubleBondConfig = "\\" : "\\" === this.doubleBondConfig && (this.doubleBondConfig = "/")))
              }
              if (!h)
                if (!t) {
                  var m = new l(this.opts.bondLength, 0);
                  m.rotate(g.toRad(-60)), e.previousPosition = m, e.setPosition(this.opts.bondLength, 0), e.angle = g.toRad(-60), null === e.value.bridgedRing && (e.positioned = !0)
                } else if (0 < t.value.rings.length) {
                var f = t.neighbours,
                  b = null,
                  k = new l(0, 0);
                if (null === t.value.bridgedRing && 1 < t.value.rings.length)
                  for (var C = 0, i; C < f.length; C++)
                    if (i = this.graph.vertices[f[C]], d.containsAll(i.value.rings, t.value.rings)) {
                      b = i;
                      break
                    } if (null === b) {
                  for (var C = 0, S; C < f.length; C++) S = this.graph.vertices[f[C]], S.positioned && this.areVerticesInSameRing(S, t) && k.add(l.subtract(S.position, t.position));
                  k.invert().normalize().multiplyScalar(this.opts.bondLength).add(t.position)
                } else k = b.position.clone().rotateAround(Math.PI, t.position);
                e.previousPosition = t.position, e.setPositionFromVector(k), e.positioned = !0
              } else {
                var v = new l(this.opts.bondLength, 0);
                v.rotate(n), v.add(t.position), e.setPositionFromVector(v), e.previousPosition = t.position, e.positioned = !0
              }
              if (null !== e.value.bridgedRing) {
                var R = this.getRing(e.value.bridgedRing);
                if (!R.positioned) {
                  var A = l.subtract(e.previousPosition, e.position);
                  A.invert(), A.normalize();
                  var j = g.polyCircumradius(this.opts.bondLength, R.members.length);
                  A.multiplyScalar(j), A.add(e.position), this.createRing(R, A, e)
                }
              } else if (0 < e.value.rings.length) {
                var r = this.getRing(e.value.rings[0]);
                if (!r.positioned) {
                  var T = l.subtract(e.previousPosition, e.position);
                  T.invert(), T.normalize();
                  var I = g.polyCircumradius(this.opts.bondLength, r.getSize());
                  T.multiplyScalar(I), T.add(e.position), this.createRing(r, T, e)
                }
              } else {
                for (var P = e.value.isStereoCenter, B = e.getNeighbours(), L = [], C = 0; C < B.length; C++) this.graph.vertices[B[C]].value.isDrawn && L.push(B[C]);
                t && (L = d.remove(L, t.id));
                var E = e.getAngle();
                if (1 === L.length) {
                  var D = this.graph.vertices[L[0]];
                  if ("#" === e.value.bondType || t && "#" === t.value.bondType || "=" === e.value.bondType && t && 0 === t.value.rings.length && "=" === t.value.bondType && "-" !== e.value.branchBond) {
                    if (e.value.drawExplicit = !1, t) {
                      var N = this.graph.getEdge(e.id, t.id);
                      N.center = !0
                    }
                    var O = this.graph.getEdge(e.id, D.id);
                    O.center = !0, ("#" === e.value.bondType || t && "#" === t.value.bondType) && (D.angle = 0), D.drawExplicit = !0, this.createNextBond(D, e, E + D.angle)
                  } else if (t && 0 < t.value.rings.length) {
                    var V = g.toRad(60),
                      H = -V,
                      F = new l(this.opts.bondLength, 0),
                      W = new l(this.opts.bondLength, 0);
                    F.rotate(V).add(e.position), W.rotate(H).add(e.position);
                    var _ = this.getCurrentCenterOfMass(),
                      M = F.distanceSq(_),
                      q = W.distanceSq(_);
                    D.angle = M < q ? H : V, this.createNextBond(D, e, E + D.angle)
                  } else {
                    var U = e.angle;
                    if (t && 3 < t.neighbours.length) U = 0 < U ? o(1.0472, U) : 0 > U ? Math.max(-1.0472, U) : 1.0472;
                    else if (!U) {
                      var G = this.getLastVertexWithAngle(e.id);
                      U = G.angle, U || (U = 1.0472)
                    }
                    if (t && !c) {
                      var X = this.graph.getEdge(e.id, D.id).bondType;
                      "/" === X ? ("/" === this.doubleBondConfig || "\\" === this.doubleBondConfig && (U = -U), this.doubleBondConfig = null) : "\\" === X && ("/" === this.doubleBondConfig ? U = -U : "\\" === this.doubleBondConfig, this.doubleBondConfig = null)
                    }
                    D.angle = u ? U : -U, this.createNextBond(D, e, E + D.angle)
                  }
                } else if (2 === L.length) {
                  var Y = e.angle;
                  Y || (Y = 1.0472);
                  var K = this.graph.getTreeDepth(L[0], e.id),
                    Z = this.graph.getTreeDepth(L[1], e.id),
                    $ = this.graph.vertices[L[0]],
                    Q = this.graph.vertices[L[1]];
                  $.value.subtreeDepth = K, Q.value.subtreeDepth = Z;
                  var J = this.graph.getTreeDepth(t ? t.id : null, e.id);
                  t && (t.value.subtreeDepth = J);
                  var ee = 0,
                    te = 1;
                  "C" === Q.value.element && "C" !== $.value.element && 1 < Z && 5 > K ? (ee = 1, te = 0) : "C" !== Q.value.element && "C" === $.value.element && 1 < K && 5 > Z ? (ee = 0, te = 1) : Z > K && (ee = 1, te = 0);
                  var ne = this.graph.vertices[L[ee]],
                    ie = this.graph.vertices[L[te]],
                    re = this.graph.getEdge(e.id, ne.id),
                    ae = this.graph.getEdge(e.id, ie.id),
                    oe = !1;
                  J < K && J < Z && (oe = !0), ie.angle = Y, ne.angle = -Y, "\\" === this.doubleBondConfig ? "\\" === ie.value.branchBond && (ie.angle = -Y, ne.angle = Y) : "/" === this.doubleBondConfig && "/" === ie.value.branchBond && (ie.angle = -Y, ne.angle = Y), this.createNextBond(ie, e, E + ie.angle, oe), this.createNextBond(ne, e, E + ne.angle, oe)
                } else if (3 === L.length) {
                  var le = this.graph.getTreeDepth(L[0], e.id),
                    se = this.graph.getTreeDepth(L[1], e.id),
                    ge = this.graph.getTreeDepth(L[2], e.id),
                    de = this.graph.vertices[L[0]],
                    s = this.graph.vertices[L[1]],
                    ue = this.graph.vertices[L[2]];
                  de.value.subtreeDepth = le, s.value.subtreeDepth = se, ue.value.subtreeDepth = ge, se > le && se > ge ? (de = this.graph.vertices[L[1]], s = this.graph.vertices[L[0]], ue = this.graph.vertices[L[2]]) : ge > le && ge > se && (de = this.graph.vertices[L[2]], s = this.graph.vertices[L[0]], ue = this.graph.vertices[L[1]]), t && 1 > t.value.rings.length && 1 > de.value.rings.length && 1 > s.value.rings.length && 1 > ue.value.rings.length && 1 === this.graph.getTreeDepth(s.id, e.id) && 1 === this.graph.getTreeDepth(ue.id, e.id) && 1 < this.graph.getTreeDepth(de.id, e.id) ? (de.angle = -e.angle, 0 <= e.angle ? (s.angle = g.toRad(30), ue.angle = g.toRad(90)) : (s.angle = -g.toRad(30), ue.angle = -g.toRad(90)), this.createNextBond(de, e, E + de.angle), this.createNextBond(s, e, E + s.angle), this.createNextBond(ue, e, E + ue.angle)) : (de.angle = 0, s.angle = g.toRad(90), ue.angle = -g.toRad(90), this.createNextBond(de, e, E + de.angle), this.createNextBond(s, e, E + s.angle), this.createNextBond(ue, e, E + ue.angle))
                } else if (4 === L.length) {
                  var he = this.graph.getTreeDepth(L[0], e.id),
                    ce = this.graph.getTreeDepth(L[1], e.id),
                    pe = this.graph.getTreeDepth(L[2], e.id),
                    ve = this.graph.getTreeDepth(L[3], e.id),
                    ye = this.graph.vertices[L[0]],
                    w = this.graph.vertices[L[1]],
                    x = this.graph.vertices[L[2]],
                    y = this.graph.vertices[L[3]];
                  ye.value.subtreeDepth = he, w.value.subtreeDepth = ce, x.value.subtreeDepth = pe, y.value.subtreeDepth = ve, ce > he && ce > pe && ce > ve ? (ye = this.graph.vertices[L[1]], w = this.graph.vertices[L[0]], x = this.graph.vertices[L[2]], y = this.graph.vertices[L[3]]) : pe > he && pe > ce && pe > ve ? (ye = this.graph.vertices[L[2]], w = this.graph.vertices[L[0]], x = this.graph.vertices[L[1]], y = this.graph.vertices[L[3]]) : ve > he && ve > ce && ve > pe && (ye = this.graph.vertices[L[3]], w = this.graph.vertices[L[0]], x = this.graph.vertices[L[1]], y = this.graph.vertices[L[2]]), ye.angle = -g.toRad(36), w.angle = g.toRad(36), x.angle = -g.toRad(108), y.angle = g.toRad(108), this.createNextBond(ye, e, E + ye.angle), this.createNextBond(w, e, E + w.angle), this.createNextBond(x, e, E + x.angle), this.createNextBond(y, e, E + y.angle)
                }
              }
            }
          }
        }, {
          key: "getCommonRingbondNeighbour",
          value: function (e) {
            for (var t = e.neighbours, n = 0, i; n < t.length; n++)
              if (i = this.graph.vertices[t[n]], d.containsAll(i.value.rings, e.value.rings)) return i;
            return null
          }
        }, {
          key: "isPointInRing",
          value: function (e) {
            for (var t = 0, n; t < this.rings.length; t++)
              if (n = this.rings[t], !!n.positioned) {
                var i = g.polyCircumradius(this.opts.bondLength, n.getSize());
                if (e.distanceSq(n.center) < i * i) return !0
              } return !1
          }
        }, {
          key: "isEdgeInRing",
          value: function (e) {
            var t = this.graph.vertices[e.sourceId],
              n = this.graph.vertices[e.targetId];
            return this.areVerticesInSameRing(t, n)
          }
        }, {
          key: "isEdgeRotatable",
          value: function (e) {
            var t = this.graph.vertices[e.sourceId],
              n = this.graph.vertices[e.targetId];
            return "-" === e.bondType && (t.isTerminal() || n.isTerminal() ? !1 : 0 < t.value.rings.length && 0 < n.value.rings.length && this.areVerticesInSameRing(t, n) ? !1 : !0)
          }
        }, {
          key: "isRingAromatic",
          value: function (e) {
            for (var t = 0, n; t < e.members.length; t++)
              if (n = this.graph.vertices[e.members[t]], !n.value.isPartOfAromaticRing) return !1;
            return !0
          }
        }, {
          key: "getEdgeNormals",
          value: function (e) {
            var t = this.graph.vertices[e.sourceId].position,
              n = this.graph.vertices[e.targetId].position,
              i = l.units(t, n);
            return i
          }
        }, {
          key: "getNonRingNeighbours",
          value: function (e) {
            for (var t = [], n = this.graph.vertices[e], r = n.neighbours, a = 0; a < r.length; a++) {
              var i = this.graph.vertices[r[a]],
                o = d.intersection(n.value.rings, i.value.rings).length;
              0 === o && !1 == i.value.isBridge && t.push(i)
            }
            return t
          }
        }, {
          key: "annotateStereochemistry",
          value: function () {
            for (var e = 0, t; e < this.graph.vertices.length; e++)
              if (t = this.graph.vertices[e], !!t.value.isStereoCenter) {
                for (var n = t.getNeighbours(), i = n.length, r = Array(i), a = 0; a < i; a++) {
                  var o = new Uint8Array(this.graph.vertices.length),
                    s = [
                      []
                    ];
                  o[t.id] = 1, this.visitStereochemistry(n[a], t.id, o, s, 10, 0);
                  for (var d = 0; d < s.length; d++) s[d].sort(function (e, t) {
                    return t - e
                  });
                  r[a] = [a, s]
                }
                for (var u = 0, h = 0, a = 0; a < r.length; a++) {
                  r[a][1].length > u && (u = r[a][1].length);
                  for (var d = 0; d < r[a][1].length; d++) r[a][1][d].length > h && (h = r[a][1][d].length)
                }
                for (var a = 0, c; a < r.length; a++) {
                  c = u - r[a][1].length;
                  for (var d = 0; d < c; d++) r[a][1].push([]);
                  r[a][1].push([n[a]]);
                  for (var d = 0, p; d < r[a][1].length; d++) {
                    p = h - r[a][1][d].length;
                    for (var v = 0; v < p; v++) r[a][1][d].push(0)
                  }
                }
                r.sort(function (e, t) {
                  for (var n = 0; n < e[1].length; n++)
                    for (var i = 0; i < e[1][n].length; i++) {
                      if (e[1][n][i] > t[1][n][i]) return -1;
                      if (e[1][n][i] < t[1][n][i]) return 1
                    }
                  return 0
                });
                for (var l = new Uint8Array(i), a = 0; a < i; a++) l[a] = r[a][0], t.value.priority = a;
                var y = this.graph.vertices[n[l[0]]].position,
                  m = this.graph.vertices[n[l[1]]].position,
                  f = this.graph.vertices[n[l[2]]].position,
                  b = y.relativeClockwise(m, t.position),
                  x = y.relativeClockwise(f, t.position),
                  k = -1 === b,
                  C = "@" === t.value.bracket.chirality ? -1 : 1,
                  S = 1 == g.parityOfPermutation(l) * C ? "R" : "S",
                  R = "down",
                  A = "up";
                (k && "R" != S || !k && "S" != S) && (t.value.hydrogenDirection = "up", R = "up", A = "down"), t.value.hasHydrogen && (this.graph.getEdge(t.id, n[l[l.length - 1]]).wedge = R);
                for (var j = Array(n.length - 1), T = 1 < t.value.rings.length && t.value.hasHydrogen, w = t.value.hasHydrogen ? 1 : 0, a = 0; a < l.length - w; a++) {
                  j[a] = new Uint32Array(2);
                  var I = this.graph.vertices[n[l[a]]];
                  j[a][0] += I.value.isStereoCenter ? 0 : 1e5, j[a][0] += this.areVerticesInSameRing(I, t) ? 0 : 1e4, j[a][0] += I.value.isHeteroAtom() ? 1e3 : 0, j[a][0] -= 0 === I.value.subtreeDepth ? 1e3 : 0, j[a][0] += 1e3 - I.value.subtreeDepth, j[a][1] = n[l[a]]
                }
                if (j.sort(function (e, t) {
                    return e[0] > t[0] ? -1 : e[0] < t[0] ? 1 : 0
                  }), !T) {
                  var P = j[0][1];
                  if (t.value.hasHydrogen) this.graph.getEdge(t.id, P).wedge = A;
                  else {
                    for (var B = A, a = l.length - 1; 0 <= a && (B = B == R ? A : R, n[l[a]] !== P); a--);
                    this.graph.getEdge(t.id, P).wedge = B
                  }
                }
                t.value.chirality = S
              }
          }
        }, {
          key: "visitStereochemistry",
          value: function (e, t, n, r, a, o) {
            var l = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : 0;
            n[e] = 1;
            var s = this.graph.vertices[e],
              g = s.value.getAtomicNumber();
            r.length <= o && r.push([]);
            for (var d = 0; d < this.graph.getEdge(e, t).weight; d++) r[o].push(1e3 * l + g);
            for (var i = this.graph.vertices[e].neighbours, d = 0; d < i.length; d++) 1 !== n[i[d]] && o < a - 1 && this.visitStereochemistry(i[d], e, n.slice(), r, a, o + 1, g);
            if (o < a - 1) {
              for (var u = 0, d = 0; d < i.length; d++) u += this.graph.getEdge(e, i[d]).weight;
              for (var d = 0; d < s.value.getMaxBonds() - u; d++) r.length <= o + 1 && r.push([]), r[o + 1].push(1e3 * g + 1)
            }
          }
        }, {
          key: "initPseudoElements",
          value: function () {
            for (var e = 0; e < this.graph.vertices.length; e++) {
              for (var t = this.graph.vertices[e], n = t.neighbours, i = Array(n.length), r = 0; r < n.length; r++) i[r] = this.graph.vertices[n[r]];
              if (!(3 > t.getNeighbourCount() || 0 < t.value.rings.length) && "P" !== t.value.element && ("C" !== t.value.element || 3 !== i.length || "N" !== i[0].value.element || "N" !== i[1].value.element || "N" !== i[2].value.element)) {
                for (var a = 0, o = 0, r = 0; r < i.length; r++) {
                  var l = i[r],
                    s = l.value.element,
                    g = l.getNeighbourCount();
                  "C" !== s && "H" !== s && 1 === g && a++, 1 < g && o++
                }
                if (!(1 < o || 2 > a)) {
                  for (var d = null, r = 0, u; r < i.length; r++) u = i[r], 1 < u.getNeighbourCount() && (d = u);
                  for (var r = 0, h; r < i.length; r++)
                    if (h = i[r], !(1 < h.getNeighbourCount())) {
                      h.value.isDrawn = !1;
                      var p = c.maxBonds[h.value.element] - h.value.bondCount,
                        v = "";
                      h.value.bracket && (p = h.value.bracket.hcount, v = h.value.bracket.charge || 0), t.value.attachPseudoElement(h.value.element, d ? d.value.element : null, p, v)
                    }
                }
              }
            }
            for (var e = 0; e < this.graph.vertices.length; e++) {
              var y = this.graph.vertices[e],
                m = y.value,
                f = m.element;
              if ("C" !== f && "H" !== f && m.isDrawn) {
                for (var b = y.neighbours, x = Array(b.length), r = 0; r < b.length; r++) x[r] = this.graph.vertices[b[r]];
                for (var r = 0, k; r < x.length; r++)
                  if (k = x[r].value, k.hasAttachedPseudoElements && 2 === k.getAttachedPseudoElementsCount()) {
                    var C = k.getAttachedPseudoElements();
                    C.hasOwnProperty("0O") && C.hasOwnProperty("3C") && (k.isDrawn = !1, y.value.attachPseudoElement("Ac", "", 0))
                  }
              }
            }
          }
        }]), e
      }();
    t.exports = b
  }, {
    "./ArrayHelper": 2,
    "./Atom": 3,
    "./CanvasWrapper": 4,
    "./Edge": 6,
    "./Graph": 7,
    "./Line": 8,
    "./MathHelper": 9,
    "./Ring": 11,
    "./RingConnection": 12,
    "./SSSR": 13,
    "./Vector2": 14,
    "./Vertex": 15
  }],
  6: [function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function () {
        function e(e, t) {
          for (var n = 0, i; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      r = function () {
        function e(t, i) {
          var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
          n(this, e), this.id = null, this.sourceId = t, this.targetId = i, this.weight = r, this.bondType = "-", this.isPartOfAromaticRing = !1, this.center = !1, this.wedge = ""
        }
        return i(e, [{
          key: "setBondType",
          value: function (t) {
            this.bondType = t, this.weight = e.bonds[t]
          }
        }], [{
          key: "bonds",
          get: function () {
            return {
              "-": 1,
              "/": 1,
              "\\": 1,
              "=": 2,
              "#": 3,
              $: 4
            }
          }
        }]), e
      }();
    t.exports = r
  }, {}],
  7: [function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = Math.pow,
      a = Math.sqrt,
      o = Math.min,
      l = function () {
        function e(e, t) {
          var n = [],
            i = !0,
            r = !1,
            a;
          try {
            for (var o = e[Symbol.iterator](), l; !(i = (l = o.next()).done) && (n.push(l.value), !(t && n.length === t)); i = !0);
          } catch (e) {
            r = !0, a = e
          } finally {
            try {
              !i && o["return"] && o["return"]()
            } finally {
              if (r) throw a
            }
          }
          return n
        }
        return function (t, n) {
          if (Array.isArray(t)) return t;
          if (Symbol.iterator in Object(t)) return e(t, n);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }(),
      i = function () {
        function e(e, t) {
          for (var n = 0, i; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      s = e("./MathHelper"),
      g = e("./Vector2"),
      d = e("./Vertex"),
      u = e("./Edge"),
      h = e("./Ring"),
      c = e("./Atom"),
      p = function () {
        function e(t) {
          var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
          n(this, e), this.vertices = [], this.edges = [], this.vertexIdsToEdgeId = {}, this.isomeric = i, this._time = 0, this._init(t)
        }
        return i(e, [{
          key: "_init",
          value: function (e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
              n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
              r = 3 < arguments.length && void 0 !== arguments[3] && arguments[3],
              a = new c(e.atom.element ? e.atom.element : e.atom, e.bond);
            a.branchBond = e.branchBond, a.ringbonds = e.ringbonds, a.bracket = e.atom.element ? e.atom : null;
            var o = new d(a),
              l = this.vertices[n];
            if (this.addVertex(o), null !== n) {
              o.setParentVertexId(n), o.value.addNeighbouringElement(l.value.element), l.addChild(o.id), l.value.addNeighbouringElement(a.element), l.spanningTreeChildren.push(o.id);
              var s = new u(n, o.id, 1),
                g = null;
              r ? (s.setBondType(o.value.branchBond || "-"), g = o.id, s.setBondType(o.value.branchBond || "-"), g = o.id) : (s.setBondType(l.value.bondType || "-"), g = l.id), this.addEdge(s)
            }
            var h = e.ringbondCount + 1;
            a.bracket && (h += a.bracket.hcount);
            var p = 0;
            if (a.bracket && a.bracket.chirality) {
              a.isStereoCenter = !0, p = a.bracket.hcount;
              for (var v = 0; v < p; v++) this._init({
                atom: "H",
                isBracket: "false",
                branches: [],
                branchCount: 0,
                ringbonds: [],
                ringbondCount: !1,
                next: null,
                hasNext: !1,
                bond: "-"
              }, v, o.id, !0)
            }
            for (var v = 0; v < e.branchCount; v++) this._init(e.branches[v], v + h, o.id, !0);
            e.hasNext && this._init(e.next, e.branchCount + h, o.id)
          }
        }, {
          key: "clear",
          value: function () {
            this.vertices = [], this.edges = [], this.vertexIdsToEdgeId = {}
          }
        }, {
          key: "addVertex",
          value: function (e) {
            return e.id = this.vertices.length, this.vertices.push(e), e.id
          }
        }, {
          key: "addEdge",
          value: function (e) {
            var t = this.vertices[e.sourceId],
              n = this.vertices[e.targetId];
            return e.id = this.edges.length, this.edges.push(e), this.vertexIdsToEdgeId[e.sourceId + "_" + e.targetId] = e.id, this.vertexIdsToEdgeId[e.targetId + "_" + e.sourceId] = e.id, e.isPartOfAromaticRing = t.value.isPartOfAromaticRing && n.value.isPartOfAromaticRing, t.value.bondCount += e.weight, n.value.bondCount += e.weight, t.edges.push(e.id), n.edges.push(e.id), e.id
          }
        }, {
          key: "getEdge",
          value: function (e, t) {
            var n = this.vertexIdsToEdgeId[e + "_" + t];
            return void 0 === n ? null : this.edges[n]
          }
        }, {
          key: "getEdges",
          value: function (e) {
            for (var t = [], n = this.vertices[e], r = 0; r < n.neighbours.length; r++) t.push(this.vertexIdsToEdgeId[e + "_" + n.neighbours[r]]);
            return t
          }
        }, {
          key: "hasEdge",
          value: function (e, t) {
            return void 0 !== this.vertexIdsToEdgeId[e + "_" + t]
          }
        }, {
          key: "getVertexList",
          value: function () {
            for (var e = [this.vertices.length], t = 0; t < this.vertices.length; t++) e[t] = this.vertices[t].id;
            return e
          }
        }, {
          key: "getEdgeList",
          value: function () {
            for (var e = Array(this.edges.length), t = 0; t < this.edges.length; t++) e[t] = [this.edges[t].sourceId, this.edges[t].targetId];
            return e
          }
        }, {
          key: "getAdjacencyMatrix",
          value: function () {
            for (var e = this.vertices.length, t = Array(e), n = 0; n < e; n++) t[n] = Array(e), t[n].fill(0);
            for (var n = 0, i; n < this.edges.length; n++) i = this.edges[n], t[i.sourceId][i.targetId] = 1, t[i.targetId][i.sourceId] = 1;
            return t
          }
        }, {
          key: "getComponentsAdjacencyMatrix",
          value: function () {
            for (var e = this.vertices.length, t = Array(e), n = this.getBridges(), r = 0; r < e; r++) t[r] = Array(e), t[r].fill(0);
            for (var r = 0, i; r < this.edges.length; r++) i = this.edges[r], t[i.sourceId][i.targetId] = 1, t[i.targetId][i.sourceId] = 1;
            for (var r = 0; r < n.length; r++) t[n[r][0]][n[r][1]] = 0, t[n[r][1]][n[r][0]] = 0;
            return t
          }
        }, {
          key: "getSubgraphAdjacencyMatrix",
          value: function (e) {
            for (var t = e.length, n = Array(t), r = 0; r < t; r++) {
              n[r] = Array(t), n[r].fill(0);
              for (var i = 0; i < t; i++) r !== i && this.hasEdge(e[r], e[i]) && (n[r][i] = 1)
            }
            return n
          }
        }, {
          key: "getDistanceMatrix",
          value: function () {
            for (var e = this.vertices.length, t = this.getAdjacencyMatrix(), n = Array(e), r = 0; r < e; r++) n[r] = Array(e), n[r].fill(Infinity);
            for (var r = 0; r < e; r++)
              for (var i = 0; i < e; i++) 1 === t[r][i] && (n[r][i] = 1);
            for (var a = 0; a < e; a++)
              for (var r = 0; r < e; r++)
                for (var i = 0; i < e; i++) n[r][i] > n[r][a] + n[a][i] && (n[r][i] = n[r][a] + n[a][i]);
            return n
          }
        }, {
          key: "getSubgraphDistanceMatrix",
          value: function (e) {
            for (var t = e.length, n = this.getSubgraphAdjacencyMatrix(e), r = Array(t), a = 0; a < t; a++) r[a] = Array(t), r[a].fill(Infinity);
            for (var a = 0; a < t; a++)
              for (var i = 0; i < t; i++) 1 === n[a][i] && (r[a][i] = 1);
            for (var o = 0; o < t; o++)
              for (var a = 0; a < t; a++)
                for (var i = 0; i < t; i++) r[a][i] > r[a][o] + r[o][i] && (r[a][i] = r[a][o] + r[o][i]);
            return r
          }
        }, {
          key: "getAdjacencyList",
          value: function () {
            for (var e = this.vertices.length, t = Array(e), n = 0; n < e; n++) {
              t[n] = [];
              for (var i = 0; i < e; i++) n !== i && this.hasEdge(this.vertices[n].id, this.vertices[i].id) && t[n].push(i)
            }
            return t
          }
        }, {
          key: "getSubgraphAdjacencyList",
          value: function (e) {
            for (var t = e.length, n = Array(t), r = 0; r < t; r++) {
              n[r] = [];
              for (var i = 0; i < t; i++) r !== i && this.hasEdge(e[r], e[i]) && n[r].push(i)
            }
            return n
          }
        }, {
          key: "getBridges",
          value: function () {
            var e = this.vertices.length,
              t = Array(e),
              n = Array(e),
              r = Array(e),
              a = Array(e),
              o = this.getAdjacencyList(),
              l = [];
            t.fill(!1), a.fill(null), this._time = 0;
            for (var s = 0; s < e; s++) t[s] || this._bridgeDfs(s, t, n, r, a, o, l);
            return l
          }
        }, {
          key: "traverseBF",
          value: function (e, t) {
            var n = this.vertices.length,
              r = Array(n);
            r.fill(!1);
            for (var a = [e]; 0 < a.length;) {
              var o = a.shift(),
                l = this.vertices[o];
              t(l);
              for (var s = 0, i; s < l.neighbours.length; s++) i = l.neighbours[s], r[i] || (r[i] = !0, a.push(i))
            }
          }
        }, {
          key: "getTreeDepth",
          value: function (e, t) {
            if (null === e || null === t) return 0;
            for (var n = this.vertices[e].getSpanningTreeNeighbours(t), r = 0, a = 0; a < n.length; a++) {
              var i = n[a],
                o = this.getTreeDepth(i, e);
              o > r && (r = o)
            }
            return r + 1
          }
        }, {
          key: "traverseTree",
          value: function (e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : Number.MAX_SAFE_INTEGER,
              a = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
              o = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 1,
              l = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : null;
            if (null === l && (l = new Uint8Array(this.vertices.length)), !(o > r + 1 || 1 === l[e])) {
              l[e] = 1;
              var s = this.vertices[e],
                g = s.getNeighbours(t);
              (!a || 1 < o) && n(s);
              for (var d = 0; d < g.length; d++) this.traverseTree(g[d], e, n, r, a, o + 1, l)
            }
          }
        }, {
          key: "kkLayout",
          value: function (e, t, n, o, g) {
            for (var d = g, u = e.length; u--;) var i = this.vertices[e[u]],
              h = i.neighbours.length;
            var c = this.getSubgraphDistanceMatrix(e),
              p = e.length,
              v = s.polyCircumradius(500, p),
              y = s.centralAngle(p),
              m = 0,
              f = new Float32Array(p),
              b = new Float32Array(p),
              x = Array(p);
            for (u = p; u--;) {
              var k = this.vertices[e[u]];
              k.positioned ? (f[u] = k.position.x, b[u] = k.position.y) : (f[u] = t.x + Math.cos(m) * v, b[u] = t.y + Math.sin(m) * v), x[u] = k.positioned, m += y
            }
            var C = Array(p);
            for (u = p; u--;) {
              C[u] = Array(p);
              for (var h = p; h--;) C[u][h] = g * c[u][h]
            }
            var S = Array(p);
            for (u = p; u--;) {
              S[u] = Array(p);
              for (var h = p; h--;) S[u][h] = d * r(c[u][h], -2)
            }
            var R = Array(p),
              A = new Float32Array(p),
              j = new Float32Array(p);
            for (u = p; u--;) R[u] = Array(p);
            u = p;
            for (var T, w, I, P, B, L, E; u--;) {
              T = f[u], w = b[u], I = 0, P = 0;
              for (var D = p; D--;) u !== D && (B = f[D], L = b[D], E = 1 / a((T - B) * (T - B) + (w - L) * (w - L)), R[u][D] = [S[u][D] * (T - B - C[u][D] * (T - B) * E), S[u][D] * (w - L - C[u][D] * (w - L) * E)], R[D][u] = R[u][D], I += R[u][D][0], P += R[u][D][1]);
              A[u] = I, j[u] = P
            }
            for (var N = function (e) {
                return [A[e] * A[e] + j[e] * j[e], A[e], j[e]]
              }, O = function () {
                var e = 0,
                  t = 0,
                  n = 0,
                  i = 0;
                for (u = p; u--;) {
                  var r = N(u),
                    a = l(r, 3),
                    o = a[0],
                    s = a[1],
                    g = a[2];
                  o > e && !1 === x[u] && (e = o, t = u, n = s, i = g)
                }
                return [t, e, n, i]
              }, V = function (e, t, n) {
                var i = 0,
                  o = 0,
                  s = 0,
                  g = f[e],
                  d = b[e],
                  h = C[e],
                  c = S[e];
                for (u = p; u--;)
                  if (u !== e) {
                    var v = f[u],
                      y = b[u],
                      x = h[u],
                      l = c[u],
                      k = (g - v) * (g - v),
                      m = 1 / r(k + (d - y) * (d - y), 1.5);
                    i += l * (1 - x * (d - y) * (d - y) * m), o += l * (1 - x * k * m), s += l * (x * (g - v) * (d - y) * m)
                  } 0 == i && (i = 0.1), 0 == o && (o = 0.1), 0 == s && (s = 0.1);
                var T = t / i + n / s;
                T /= s / i - o / s;
                var w = -(s * T + t) / i;
                f[e] += w, b[e] += T;
                var I = R[e];
                t = 0, n = 0, g = f[e], d = b[e];
                var P, B, L, E, D;
                for (u = p; u--;) e !== u && (P = f[u], B = b[u], L = I[u][0], E = I[u][1], D = 1 / a((g - P) * (g - P) + (d - B) * (d - B)), w = c[u] * (g - P - h[u] * (g - P) * D), T = c[u] * (d - B - h[u] * (d - B) * D), I[u] = [w, T], t += w, n += T, A[u] += w - L, j[u] += T - E);
                A[e] = t, j[e] = n
              }, H = 1e9, z = 0, F = 0, W = 0, _ = 0, M = 0, q = 0; 0.1 < H && 2e3 > M;) {
              M++;
              var U = O(),
                G = l(U, 4);
              for (z = G[0], H = G[1], F = G[2], W = G[3], _ = H, q = 0; 0.1 < _ && 50 > q;) {
                q++, V(z, F, W);
                var X = N(z),
                  Y = l(X, 3);
                _ = Y[0], F = Y[1], W = Y[2]
              }
            }
            for (u = p; u--;) {
              var K = e[u],
                Z = this.vertices[K];
              Z.position.x = f[u], Z.position.y = b[u], Z.positioned = !0, Z.forcePositioned = !0
            }
          }
        }, {
          key: "_bridgeDfs",
          value: function (e, t, n, r, a, l, s) {
            t[e] = !0, n[e] = r[e] = ++this._time;
            for (var g = 0, i; g < l[e].length; g++) i = l[e][g], t[i] ? i !== a[e] && (r[e] = o(r[e], n[i])) : (a[i] = e, this._bridgeDfs(i, t, n, r, a, l, s), r[e] = o(r[e], r[i]), r[i] > n[e] && s.push([e, i]))
          }
        }], [{
          key: "getConnectedComponents",
          value: function (t) {
            var n = t.length,
              i = Array(n),
              r = [],
              a = 0;
            i.fill(!1);
            for (var o = 0; o < n; o++)
              if (!i[o]) {
                var l = [];
                i[o] = !0, l.push(o), a++, e._ccGetDfs(o, i, t, l), 1 < l.length && r.push(l)
              } return r
          }
        }, {
          key: "getConnectedComponentCount",
          value: function (t) {
            var n = t.length,
              i = Array(n),
              r = 0;
            i.fill(!1);
            for (var a = 0; a < n; a++) i[a] || (i[a] = !0, r++, e._ccCountDfs(a, i, t));
            return r
          }
        }, {
          key: "_ccCountDfs",
          value: function (t, n, i) {
            for (var r = 0, a; r < i[t].length; r++)(a = i[t][r], a && !n[r] && t !== r) && (n[r] = !0, e._ccCountDfs(r, n, i))
          }
        }, {
          key: "_ccGetDfs",
          value: function (t, n, i, r) {
            for (var a = 0, o; a < i[t].length; a++)(o = i[t][a], o && !n[a] && t !== a) && (n[a] = !0, r.push(a), e._ccGetDfs(a, n, i, r))
          }
        }]), e
      }();
    t.exports = p
  }, {
    "./Atom": 3,
    "./Edge": 6,
    "./MathHelper": 9,
    "./Ring": 11,
    "./Vector2": 14,
    "./Vertex": 15
  }],
  8: [function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = Math.pow,
      r = function () {
        function e(e, t) {
          for (var n = 0, i; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      a = e("./Vector2"),
      o = function () {
        function e() {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : new a(0, 0),
            i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : new a(0, 0),
            r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
            o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
            l = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
            s = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
          n(this, e), this.from = t, this.to = i, this.elementFrom = r, this.elementTo = o, this.chiralFrom = l, this.chiralTo = s
        }
        return r(e, [{
          key: "clone",
          value: function () {
            return new e(this.from.clone(), this.to.clone(), this.elementFrom, this.elementTo)
          }
        }, {
          key: "getLength",
          value: function () {
            return Math.sqrt(i(this.to.x - this.from.x, 2) + i(this.to.y - this.from.y, 2))
          }
        }, {
          key: "getAngle",
          value: function () {
            var e = a.subtract(this.getRightVector(), this.getLeftVector());
            return e.angle()
          }
        }, {
          key: "getRightVector",
          value: function () {
            return this.from.x < this.to.x ? this.to : this.from
          }
        }, {
          key: "getLeftVector",
          value: function () {
            return this.from.x < this.to.x ? this.from : this.to
          }
        }, {
          key: "getRightElement",
          value: function () {
            return this.from.x < this.to.x ? this.elementTo : this.elementFrom
          }
        }, {
          key: "getLeftElement",
          value: function () {
            return this.from.x < this.to.x ? this.elementFrom : this.elementTo
          }
        }, {
          key: "getRightChiral",
          value: function () {
            return this.from.x < this.to.x ? this.chiralTo : this.chiralFrom
          }
        }, {
          key: "getLeftChiral",
          value: function () {
            return this.from.x < this.to.x ? this.chiralFrom : this.chiralTo
          }
        }, {
          key: "setRightVector",
          value: function (e, t) {
            return this.from.x < this.to.x ? (this.to.x = e, this.to.y = t) : (this.from.x = e, this.from.y = t), this
          }
        }, {
          key: "setLeftVector",
          value: function (e, t) {
            return this.from.x < this.to.x ? (this.from.x = e, this.from.y = t) : (this.to.x = e, this.to.y = t), this
          }
        }, {
          key: "rotateToXAxis",
          value: function () {
            var e = this.getLeftVector();
            return this.setRightVector(e.x + this.getLength(), e.y), this
          }
        }, {
          key: "rotate",
          value: function (e) {
            var t = this.getLeftVector(),
              n = this.getRightVector(),
              i = Math.sin(e),
              r = Math.cos(e),
              a = r * (n.x - t.x) - i * (n.y - t.y) + t.x,
              o = i * (n.x - t.x) - r * (n.y - t.y) + t.y;
            return this.setRightVector(a, o), this
          }
        }, {
          key: "shortenFrom",
          value: function (e) {
            var t = a.subtract(this.to, this.from);
            return t.normalize(), t.multiplyScalar(e), this.from.add(t), this
          }
        }, {
          key: "shortenTo",
          value: function (e) {
            var t = a.subtract(this.from, this.to);
            return t.normalize(), t.multiplyScalar(e), this.to.add(t), this
          }
        }, {
          key: "shortenRight",
          value: function (e) {
            return this.from.x < this.to.x ? this.shortenTo(e) : this.shortenFrom(e), this
          }
        }, {
          key: "shortenLeft",
          value: function (e) {
            return this.from.x < this.to.x ? this.shortenFrom(e) : this.shortenTo(e), this
          }
        }, {
          key: "shorten",
          value: function (e) {
            var t = a.subtract(this.from, this.to);
            return t.normalize(), t.multiplyScalar(e / 2), this.to.add(t), this.from.subtract(t), this
          }
        }]), e
      }();
    t.exports = o
  }, {
    "./Vector2": 14
  }],
  9: [function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = Math.sin,
      a = Math.cos,
      i = Math.PI,
      o = function () {
        function e(e, t) {
          for (var n = 0, i; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      l = function () {
        function e() {
          n(this, e)
        }
        return o(e, null, [{
          key: "round",
          value: function (e, t) {
            return t = t ? t : 1, +(Math.round(e + "e" + t) + "e-" + t)
          }
        }, {
          key: "meanAngle",
          value: function (e) {
            for (var t = 0, n = 0, o = 0; o < e.length; o++) t += r(e[o]), n += a(e[o]);
            return Math.atan2(t / e.length, n / e.length)
          }
        }, {
          key: "innerAngle",
          value: function (t) {
            return e.toRad(180 * (t - 2) / t)
          }
        }, {
          key: "polyCircumradius",
          value: function (e, t) {
            return e / (2 * r(i / t))
          }
        }, {
          key: "apothem",
          value: function (e, t) {
            return e * a(i / t)
          }
        }, {
          key: "apothemFromSideLength",
          value: function (t, i) {
            var n = e.polyCircumradius(t, i);
            return e.apothem(n, i)
          }
        }, {
          key: "centralAngle",
          value: function (t) {
            return e.toRad(360 / t)
          }
        }, {
          key: "toDeg",
          value: function (t) {
            return t * e.degFactor
          }
        }, {
          key: "toRad",
          value: function (t) {
            return t * e.radFactor
          }
        }, {
          key: "parityOfPermutation",
          value: function (e) {
            for (var t = new Uint8Array(e.length), n = 0, r = function n(r) {
                var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
                return 1 === t[r] ? i : (i++, t[r] = 1, n(e[r], i))
              }, a = 0; a < e.length; a++)
              if (1 !== t[a]) {
                var i = r(a);
                n += 1 - i % 2
              } return n % 2 ? -1 : 1
          }
        }, {
          key: "radFactor",
          get: function () {
            return i / 180
          }
        }, {
          key: "degFactor",
          get: function () {
            return 180 / i
          }
        }, {
          key: "twoPI",
          get: function () {
            return 2 * i
          }
        }]), e
      }();
    t.exports = l
  }, {}],
  10: [function (e, t) {
    "use strict";
    t.exports = function () {
      function e(t, n, i, r) {
        this.message = t, this.expected = n, this.found = i, this.location = r, this.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e)
      }
      return function (e, t) {
        function n() {
          this.constructor = e
        }
        n.prototype = t.prototype, e.prototype = new n
      }(e, Error), e.buildMessage = function (e, t) {
        function n(e) {
          return e.charCodeAt(0).toString(16).toUpperCase()
        }

        function i(e) {
          return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (e) {
            return "\\x0" + n(e)
          }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
            return "\\x" + n(e)
          })
        }

        function r(e) {
          return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (e) {
            return "\\x0" + n(e)
          }).replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
            return "\\x" + n(e)
          })
        }

        function a(e) {
          return o[e.type](e)
        }
        var o = {
          literal: function (e) {
            return "\"" + i(e.text) + "\""
          },
          class: function (e) {
            var t = "",
              n;
            for (n = 0; n < e.parts.length; n++) t += e.parts[n] instanceof Array ? r(e.parts[n][0]) + "-" + r(e.parts[n][1]) : r(e.parts[n]);
            return "[" + (e.inverted ? "^" : "") + t + "]"
          },
          any: function () {
            return "any character"
          },
          end: function () {
            return "end of input"
          },
          other: function (e) {
            return e.description
          }
        };
        return "Expected " + function (e) {
          var t = Array(e.length),
            n, i;
          for (n = 0; n < e.length; n++) t[n] = a(e[n]);
          if (t.sort(), 0 < t.length) {
            for (n = 1, i = 1; n < t.length; n++) t[n - 1] !== t[n] && (t[i] = t[n], i++);
            t.length = i
          }
          switch (t.length) {
            case 1:
              return t[0];
            case 2:
              return t[0] + " or " + t[1];
            default:
              return t.slice(0, -1).join(", ") + ", or " + t[t.length - 1];
          }
        }(e) + " but " + function (e) {
          return e ? "\"" + i(e) + "\"" : "end of input"
        }(t) + " found."
      }, {
        SyntaxError: e,
        parse: function (t, n) {
          function i(e, t) {
            return {
              type: "literal",
              text: e,
              ignoreCase: t
            }
          }

          function r(e, t, n) {
            return {
              type: "class",
              parts: e,
              inverted: t,
              ignoreCase: n
            }
          }

          function a(e) {
            var n = rt[e],
              i;
            if (n) return n;
            for (i = e - 1; !rt[i];) i--;
            for (n = rt[i], n = {
                line: n.line,
                column: n.column
              }; i < e;) 10 === t.charCodeAt(i) ? (n.line++, n.column = 1) : n.column++, i++;
            return rt[e] = n, n
          }

          function o(e, t) {
            var n = a(e),
              i = a(t);
            return {
              start: {
                offset: e,
                line: n.line,
                column: n.column
              },
              end: {
                offset: t,
                line: i.line,
                column: i.column
              }
            }
          }

          function l(e) {
            nt < at || (nt > at && (at = nt, ot = []), ot.push(e))
          }

          function s() {
            var e, t, n, i, r, a, o, l, h, c;
            if (e = nt, t = nt, n = d(), n !== T) {
              for (i = [], r = g(); r !== T;) i.push(r), r = g();
              if (i !== T) {
                for (r = [], a = nt, o = u(), o === T && (o = null), o === T ? (nt = a, a = T) : (l = m(), l === T ? (nt = a, a = T) : (o = [o, l], a = o)); a !== T;) r.push(a), a = nt, o = u(), o === T && (o = null), o === T ? (nt = a, a = T) : (l = m(), l === T ? (nt = a, a = T) : (o = [o, l], a = o));
                if (r !== T) {
                  for (a = [], o = g(); o !== T;) a.push(o), o = g();
                  if (a === T) nt = t, t = T;
                  else if (o = u(), o === T && (o = null), o === T) nt = t, t = T;
                  else if (l = s(), l === T && (l = null), l !== T) {
                    for (h = [], c = g(); c !== T;) h.push(c), c = g();
                    h === T ? (nt = t, t = T) : (n = [n, i, r, a, o, l, h], t = n)
                  } else nt = t, t = T
                } else nt = t, t = T
              } else nt = t, t = T
            } else nt = t, t = T;
            return t !== T && (it = e, t = P(t)), e = t, e
          }

          function g() {
            var e, n, i, r, a, o;
            return e = nt, n = nt, 40 === t.charCodeAt(nt) ? (i = B, nt++) : (i = T, l(L)), i === T ? (nt = n, n = T) : (r = u(), r === T && (r = null), r === T ? (nt = n, n = T) : (a = s(), a === T ? (nt = n, n = T) : (41 === t.charCodeAt(nt) ? (o = E, nt++) : (o = T, l(D)), o === T ? (nt = n, n = T) : (i = [i, r, a, o], n = i)))), n !== T && (it = e, n = N(n)), e = n, e
          }

          function d() {
            var e, t;
            return e = nt, t = c(), t === T && (t = p(), t === T && (t = h(), t === T && (t = v()))), t !== T && (it = e, t = O(t)), e = t, e
          }

          function u() {
            var e, n;
            return e = nt, V.test(t.charAt(nt)) ? (n = t.charAt(nt), nt++) : (n = T, l(H)), n !== T && (it = e, n = z(n)), e = n, e
          }

          function h() {
            var e, n, i, r, a, o, s, g, d, u;
            return e = nt, n = nt, 91 === t.charCodeAt(nt) ? (i = F, nt++) : (i = T, l(W)), i === T ? (nt = n, n = T) : (r = R(), r === T && (r = null), r === T ? (nt = n, n = T) : (t.substr(nt, 2) === _ ? (a = _, nt += 2) : (a = T, l(M)), a === T && (t.substr(nt, 2) === q ? (a = q, nt += 2) : (a = T, l(U)), a === T && (a = p(), a === T && (a = y(), a === T && (a = v())))), a === T ? (nt = n, n = T) : (o = f(), o === T && (o = null), o === T ? (nt = n, n = T) : (s = C(), s === T && (s = null), s === T ? (nt = n, n = T) : (g = b(), g === T && (g = null), g === T ? (nt = n, n = T) : (d = S(), d === T && (d = null), d === T ? (nt = n, n = T) : (93 === t.charCodeAt(nt) ? (u = G, nt++) : (u = T, l(X)), u === T ? (nt = n, n = T) : (i = [i, r, a, o, s, g, d, u], n = i)))))))), n !== T && (it = e, n = Y(n)), e = n, e
          }

          function c() {
            var e, n, i, r;
            return e = nt, n = nt, 66 === t.charCodeAt(nt) ? (i = K, nt++) : (i = T, l(Z)), i === T ? (nt = n, n = T) : (114 === t.charCodeAt(nt) ? (r = $, nt++) : (r = T, l(Q)), r === T && (r = null), r === T ? (nt = n, n = T) : (i = [i, r], n = i)), n === T && (n = nt, 67 === t.charCodeAt(nt) ? (i = J, nt++) : (i = T, l(ee)), i === T ? (nt = n, n = T) : (108 === t.charCodeAt(nt) ? (r = te, nt++) : (r = T, l(ne)), r === T && (r = null), r === T ? (nt = n, n = T) : (i = [i, r], n = i)), n === T && (ie.test(t.charAt(nt)) ? (n = t.charAt(nt), nt++) : (n = T, l(re)))), n !== T && (it = e, n = ae(n)), e = n, e
          }

          function p() {
            var e, n;
            return e = nt, oe.test(t.charAt(nt)) ? (n = t.charAt(nt), nt++) : (n = T, l(le)), n !== T && (it = e, n = O(n)), e = n, e
          }

          function v() {
            var e, n;
            return e = nt, 42 === t.charCodeAt(nt) ? (n = se, nt++) : (n = T, l(ge)), n !== T && (it = e, n = de(n)), e = n, e
          }

          function y() {
            var e, n, i, r;
            return e = nt, n = nt, ue.test(t.charAt(nt)) ? (i = t.charAt(nt), nt++) : (i = T, l(he)), i === T ? (nt = n, n = T) : (ce.test(t.charAt(nt)) ? (r = t.charAt(nt), nt++) : (r = T, l(pe)), r === T && (r = null), r === T ? (nt = n, n = T) : (i = [i, r], n = i)), n !== T && (it = e, n = ve(n)), e = n, e
          }

          function m() {
            var e, n, i, r, a;
            return e = nt, n = nt, 37 === t.charCodeAt(nt) ? (i = ye, nt++) : (i = T, l(me)), i === T ? (nt = n, n = T) : (fe.test(t.charAt(nt)) ? (r = t.charAt(nt), nt++) : (r = T, l(be)), r === T ? (nt = n, n = T) : (xe.test(t.charAt(nt)) ? (a = t.charAt(nt), nt++) : (a = T, l(ke)), a === T ? (nt = n, n = T) : (i = [i, r, a], n = i))), n === T && (xe.test(t.charAt(nt)) ? (n = t.charAt(nt), nt++) : (n = T, l(ke))), n !== T && (it = e, n = Ce(n)), e = n, e
          }

          function f() {
            var e, n, i, r, a, o, s;
            return e = nt, n = nt, 64 === t.charCodeAt(nt) ? (i = Se, nt++) : (i = T, l(Re)), i === T ? (nt = n, n = T) : (64 === t.charCodeAt(nt) ? (r = Se, nt++) : (r = T, l(Re)), r === T && (r = nt, t.substr(nt, 2) === Ae ? (a = Ae, nt += 2) : (a = T, l(je)), a === T ? (nt = r, r = T) : (Te.test(t.charAt(nt)) ? (o = t.charAt(nt), nt++) : (o = T, l(we)), o === T ? (nt = r, r = T) : (a = [a, o], r = a)), r === T && (r = nt, t.substr(nt, 2) === Ie ? (a = Ie, nt += 2) : (a = T, l(Pe)), a === T ? (nt = r, r = T) : (Te.test(t.charAt(nt)) ? (o = t.charAt(nt), nt++) : (o = T, l(we)), o === T ? (nt = r, r = T) : (a = [a, o], r = a)), r === T && (r = nt, t.substr(nt, 2) === Be ? (a = Be, nt += 2) : (a = T, l(Le)), a === T ? (nt = r, r = T) : (Ee.test(t.charAt(nt)) ? (o = t.charAt(nt), nt++) : (o = T, l(De)), o === T ? (nt = r, r = T) : (a = [a, o], r = a)), r === T && (r = nt, t.substr(nt, 2) === Ne ? (a = Ne, nt += 2) : (a = T, l(Oe)), a === T ? (nt = r, r = T) : (fe.test(t.charAt(nt)) ? (o = t.charAt(nt), nt++) : (o = T, l(be)), o === T ? (nt = r, r = T) : (xe.test(t.charAt(nt)) ? (s = t.charAt(nt), nt++) : (s = T, l(ke)), s === T && (s = null), s === T ? (nt = r, r = T) : (a = [a, o, s], r = a))), r === T && (r = nt, t.substr(nt, 2) === Ve ? (a = Ve, nt += 2) : (a = T, l(He)), a === T ? (nt = r, r = T) : (fe.test(t.charAt(nt)) ? (o = t.charAt(nt), nt++) : (o = T, l(be)), o === T ? (nt = r, r = T) : (xe.test(t.charAt(nt)) ? (s = t.charAt(nt), nt++) : (s = T, l(ke)), s === T && (s = null), s === T ? (nt = r, r = T) : (a = [a, o, s], r = a)))))))), r === T && (r = null), r === T ? (nt = n, n = T) : (i = [i, r], n = i)), n !== T && (it = e, n = ze(n)), e = n, e
          }

          function b() {
            var e, t;
            return e = nt, t = x(), t === T && (t = k()), t !== T && (it = e, t = Fe(t)), e = t, e
          }

          function x() {
            var e, n, i, r, a, o;
            return e = nt, n = nt, 43 === t.charCodeAt(nt) ? (i = We, nt++) : (i = T, l(_e)), i === T ? (nt = n, n = T) : (43 === t.charCodeAt(nt) ? (r = We, nt++) : (r = T, l(_e)), r === T && (r = nt, fe.test(t.charAt(nt)) ? (a = t.charAt(nt), nt++) : (a = T, l(be)), a === T ? (nt = r, r = T) : (xe.test(t.charAt(nt)) ? (o = t.charAt(nt), nt++) : (o = T, l(ke)), o === T && (o = null), o === T ? (nt = r, r = T) : (a = [a, o], r = a))), r === T && (r = null), r === T ? (nt = n, n = T) : (i = [i, r], n = i)), n !== T && (it = e, n = Me(n)), e = n, e
          }

          function k() {
            var e, n, i, r, a, o;
            return e = nt, n = nt, 45 === t.charCodeAt(nt) ? (i = qe, nt++) : (i = T, l(Ue)), i === T ? (nt = n, n = T) : (45 === t.charCodeAt(nt) ? (r = qe, nt++) : (r = T, l(Ue)), r === T && (r = nt, fe.test(t.charAt(nt)) ? (a = t.charAt(nt), nt++) : (a = T, l(be)), a === T ? (nt = r, r = T) : (xe.test(t.charAt(nt)) ? (o = t.charAt(nt), nt++) : (o = T, l(ke)), o === T && (o = null), o === T ? (nt = r, r = T) : (a = [a, o], r = a))), r === T && (r = null), r === T ? (nt = n, n = T) : (i = [i, r], n = i)), n !== T && (it = e, n = Ge(n)), e = n, e
          }

          function C() {
            var e, n, i, r;
            return e = nt, n = nt, 72 === t.charCodeAt(nt) ? (i = Xe, nt++) : (i = T, l(Ye)), i === T ? (nt = n, n = T) : (xe.test(t.charAt(nt)) ? (r = t.charAt(nt), nt++) : (r = T, l(ke)), r === T && (r = null), r === T ? (nt = n, n = T) : (i = [i, r], n = i)), n !== T && (it = e, n = Ke(n)), e = n, e
          }

          function S() {
            var e, n, i, r, a, o, s;
            if (e = nt, n = nt, 58 === t.charCodeAt(nt) ? (i = Ze, nt++) : (i = T, l($e)), i !== T) {
              if (r = nt, fe.test(t.charAt(nt)) ? (a = t.charAt(nt), nt++) : (a = T, l(be)), a !== T) {
                for (o = [], xe.test(t.charAt(nt)) ? (s = t.charAt(nt), nt++) : (s = T, l(ke)); s !== T;) o.push(s), xe.test(t.charAt(nt)) ? (s = t.charAt(nt), nt++) : (s = T, l(ke));
                o === T ? (nt = r, r = T) : (a = [a, o], r = a)
              } else nt = r, r = T;
              r === T && (Qe.test(t.charAt(nt)) ? (r = t.charAt(nt), nt++) : (r = T, l(Je))), r === T ? (nt = n, n = T) : (i = [i, r], n = i)
            } else nt = n, n = T;
            return n !== T && (it = e, n = et(n)), e = n, e
          }

          function R() {
            var e, n, i, r, a;
            return e = nt, n = nt, fe.test(t.charAt(nt)) ? (i = t.charAt(nt), nt++) : (i = T, l(be)), i === T ? (nt = n, n = T) : (xe.test(t.charAt(nt)) ? (r = t.charAt(nt), nt++) : (r = T, l(ke)), r === T && (r = null), r === T ? (nt = n, n = T) : (xe.test(t.charAt(nt)) ? (a = t.charAt(nt), nt++) : (a = T, l(ke)), a === T && (a = null), a === T ? (nt = n, n = T) : (i = [i, r, a], n = i))), n !== T && (it = e, n = tt(n)), e = n, e
          }
          n = void 0 === n ? {} : n;
          var A = t.split("(").length - 1,
            j = t.split(")").length - 1;
          if (A != j) throw function (t, n) {
            return new e(t, null, null, n)
          }("The number of opening parentheses does not match the number of closing parentheses.", 0);
          var T = {},
            w = {
              chain: s
            },
            I = s,
            P = function (e) {
              for (var t = [], n = [], r = 0; r < e[1].length; r++) t.push(e[1][r]);
              for (var r = 0, i; r < e[2].length; r++) i = e[2][r][0] ? e[2][r][0] : "-", n.push({
                bond: i,
                id: e[2][r][1]
              });
              for (var r = 0; r < e[3].length; r++) t.push(e[3][r]);
              for (var r = 0; r < e[6].length; r++) t.push(e[6][r]);
              return {
                atom: e[0],
                isBracket: !!e[0].element,
                branches: t,
                branchCount: t.length,
                ringbonds: n,
                ringbondCount: n.length,
                bond: e[4] ? e[4] : "-",
                next: e[5],
                hasNext: !!e[5]
              }
            },
            B = "(",
            L = i("(", !1),
            E = ")",
            D = i(")", !1),
            N = function (e) {
              var t = e[1] ? e[1] : "-";
              return e[2].branchBond = t, e[2]
            },
            O = function (e) {
              return e
            },
            V = /^[\-=#$:\/\\.]/,
            H = r(["-", "=", "#", "$", ":", "/", "\\", "."], !1, !1),
            z = function (e) {
              return e
            },
            F = "[",
            W = i("[", !1),
            _ = "se",
            M = i("se", !1),
            q = "as",
            U = i("as", !1),
            G = "]",
            X = i("]", !1),
            Y = function (e) {
              return {
                isotope: e[1],
                element: e[2],
                chirality: e[3],
                hcount: e[4],
                charge: e[5],
                class: e[6]
              }
            },
            K = "B",
            Z = i("B", !1),
            $ = "r",
            Q = i("r", !1),
            J = "C",
            ee = i("C", !1),
            te = "l",
            ne = i("l", !1),
            ie = /^[NOPSFI]/,
            re = r(["N", "O", "P", "S", "F", "I"], !1, !1),
            ae = function (e) {
              return 1 < e.length ? e.join("") : e
            },
            oe = /^[bcnops]/,
            le = r(["b", "c", "n", "o", "p", "s"], !1, !1),
            se = "*",
            ge = i("*", !1),
            de = function (e) {
              return e
            },
            ue = /^[A-Z]/,
            he = r([
              ["A", "Z"]
            ], !1, !1),
            ce = /^[a-z]/,
            pe = r([
              ["a", "z"]
            ], !1, !1),
            ve = function (t) {
              return t.join("")
            },
            ye = "%",
            me = i("%", !1),
            fe = /^[1-9]/,
            be = r([
              ["1", "9"]
            ], !1, !1),
            xe = /^[0-9]/,
            ke = r([
              ["0", "9"]
            ], !1, !1),
            Ce = function (e) {
              return 1 == e.length ? +e : +e.join("").replace("%", "")
            },
            Se = "@",
            Re = i("@", !1),
            Ae = "TH",
            je = i("TH", !1),
            Te = /^[12]/,
            we = r(["1", "2"], !1, !1),
            Ie = "AL",
            Pe = i("AL", !1),
            Be = "SP",
            Le = i("SP", !1),
            Ee = /^[1-3]/,
            De = r([
              ["1", "3"]
            ], !1, !1),
            Ne = "TB",
            Oe = i("TB", !1),
            Ve = "OH",
            He = i("OH", !1),
            ze = function (e) {
              return e[1] ? "@" == e[1] ? "@@" : e[1].join("").replace(",", "") : "@"
            },
            Fe = function (e) {
              return e
            },
            We = "+",
            _e = i("+", !1),
            Me = function (e) {
              return e[1] ? "+" == e[1] ? 2 : +e[1].join("") : 1
            },
            qe = "-",
            Ue = i("-", !1),
            Ge = function (e) {
              return e[1] ? "-" == e[1] ? -2 : - +e[1].join("") : -1
            },
            Xe = "H",
            Ye = i("H", !1),
            Ke = function (e) {
              return e[1] ? +e[1] : 1
            },
            Ze = ":",
            $e = i(":", !1),
            Qe = /^[0]/,
            Je = r(["0"], !1, !1),
            et = function (e) {
              return +(e[1][0] + e[1][1].join(""))
            },
            tt = function (e) {
              return +e.join("")
            },
            nt = 0,
            it = 0,
            rt = [{
              line: 1,
              column: 1
            }],
            at = 0,
            ot = [],
            lt;
          if ("startRule" in n) {
            if (!(n.startRule in w)) throw new Error("Can't start parsing from rule \"" + n.startRule + "\".");
            I = w[n.startRule]
          }
          if (lt = I(), lt !== T && nt === t.length) return lt;
          throw lt !== T && nt < t.length && l(function () {
              return {
                type: "end"
              }
            }()),
            function (t, n, i) {
              return new e(e.buildMessage(t, n), t, n, i)
            }(ot, at < t.length ? t.charAt(at) : null, at < t.length ? o(at, at + 1) : o(at, at))
        }
      }
    }()
  }, {}],
  11: [function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = function () {
        function e(e, t) {
          for (var n = 0, i; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      r = e("./ArrayHelper"),
      a = e("./Vector2"),
      o = e("./Vertex"),
      l = e("./RingConnection"),
      s = function () {
        function e(t) {
          n(this, e), this.id = null, this.members = t, this.edges = [], this.insiders = [], this.neighbours = [], this.positioned = !1, this.center = new a(0, 0), this.rings = [], this.isBridged = !1, this.isPartOfBridged = !1, this.isSpiro = !1, this.isFused = !1, this.centralAngle = 0, this.canFlip = !0
        }
        return i(e, [{
          key: "clone",
          value: function () {
            var t = new e(this.members);
            return t.id = this.id, t.insiders = r.clone(this.insiders), t.neighbours = r.clone(this.neighbours), t.positioned = this.positioned, t.center = this.center.clone(), t.rings = r.clone(this.rings), t.isBridged = this.isBridged, t.isPartOfBridged = this.isPartOfBridged, t.isSpiro = this.isSpiro, t.isFused = this.isFused, t.centralAngle = this.centralAngle, t.canFlip = this.canFlip, t
          }
        }, {
          key: "getSize",
          value: function () {
            return this.members.length
          }
        }, {
          key: "getPolygon",
          value: function (e) {
            for (var t = [], n = 0; n < this.members.length; n++) t.push(e[this.members[n]].position);
            return t
          }
        }, {
          key: "getAngle",
          value: function () {
            return Math.PI - this.centralAngle
          }
        }, {
          key: "eachMember",
          value: function (e, t, n, i) {
            n = n || 0 === n ? n : this.members[0];
            for (var r = n, a = 0, o; null != r && 100 > a;) o = r, t(o), r = e[r].getNextInRing(e, this.id, i), i = o, r == n && (r = null), a++
          }
        }, {
          key: "getOrderedNeighbours",
          value: function (e) {
            for (var t = Array(this.neighbours.length), n = 0, i; n < this.neighbours.length; n++) i = l.getVertices(e, this.id, this.neighbours[n]), t[n] = {
              n: i.length,
              neighbour: this.neighbours[n]
            };
            return t.sort(function (e, t) {
              return t.n - e.n
            }), t
          }
        }, {
          key: "isBenzeneLike",
          value: function (e) {
            var t = this.getDoubleBondCount(e),
              n = this.members.length;
            return 3 === t && 6 === n || 2 === t && 5 === n
          }
        }, {
          key: "getDoubleBondCount",
          value: function (e) {
            for (var t = 0, n = 0, i; n < this.members.length; n++) i = e[this.members[n]].value, ("=" === i.bondType || "=" === i.branchBond) && t++;
            return t
          }
        }, {
          key: "contains",
          value: function (e) {
            for (var t = 0; t < this.members.length; t++)
              if (this.members[t] == e) return !0;
            return !1
          }
        }]), e
      }();
    t.exports = s
  }, {
    "./ArrayHelper": 2,
    "./RingConnection": 12,
    "./Vector2": 14,
    "./Vertex": 15
  }],
  12: [function (e, t) {
    "use strict";

    function n(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
      return Array.from(e)
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function () {
        function e(e, t) {
          for (var n = 0, i; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      a = e("./Vertex"),
      o = e("./Ring"),
      l = function () {
        function e(t, r) {
          i(this, e), this.id = null, this.firstRingId = t.id, this.secondRingId = r.id, this.vertices = new Set;
          for (var a = 0, o; a < t.members.length; a++) {
            o = t.members[a];
            for (var l = 0, n; l < r.members.length; l++) n = r.members[l], o === n && this.addVertex(o)
          }
        }
        return r(e, [{
          key: "addVertex",
          value: function (e) {
            this.vertices.add(e)
          }
        }, {
          key: "updateOther",
          value: function (e, t) {
            this.firstRingId === t ? this.secondRingId = e : this.firstRingId = e
          }
        }, {
          key: "containsRing",
          value: function (e) {
            return this.firstRingId === e || this.secondRingId === e
          }
        }, {
          key: "isBridge",
          value: function (e) {
            if (2 < this.vertices.size) return !0;
            var t = !0,
              n = !1,
              i;
            try {
              for (var r = this.vertices[Symbol.iterator](), a, o; !(t = (a = r.next()).done); t = !0)
                if (o = a.value, 2 < e[o].value.rings.length) return !0
            } catch (e) {
              n = !0, i = e
            } finally {
              try {
                !t && r.return && r.return()
              } finally {
                if (n) throw i
              }
            }
            return !1
          }
        }], [{
          key: "isBridge",
          value: function (e, t, n, r) {
            for (var a = null, o = 0; o < e.length; o++)
              if (a = e[o], a.firstRingId === n && a.secondRingId === r || a.firstRingId === r && a.secondRingId === n) return a.isBridge(t);
            return !1
          }
        }, {
          key: "getNeighbours",
          value: function (e, t) {
            for (var n = [], r = 0, i; r < e.length; r++) i = e[r], i.firstRingId === t ? n.push(i.secondRingId) : i.secondRingId === t && n.push(i.firstRingId);
            return n
          }
        }, {
          key: "getVertices",
          value: function (e, t, r) {
            for (var a = 0, i; a < e.length; a++)
              if (i = e[a], i.firstRingId === t && i.secondRingId === r || i.firstRingId === r && i.secondRingId === t) return [].concat(n(i.vertices))
          }
        }]), e
      }();
    t.exports = l
  }, {
    "./Ring": 11,
    "./Vertex": 15
  }],
  13: [function (e, t) {
    "use strict";

    function n(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
      return Array.from(e)
    }

    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = function () {
        function e(e, t) {
          for (var n = 0, i; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      a = e("./Graph"),
      o = function () {
        function e() {
          i(this, e)
        }
        return r(e, null, [{
          key: "getRings",
          value: function (t) {
            var r = t.getComponentsAdjacencyMatrix();
            if (0 === r.length) return null;
            for (var o = a.getConnectedComponents(r), l = [], s = 0; s < o.length; s++) {
              for (var i = o[s], g = t.getSubgraphAdjacencyMatrix([].concat(n(i))), u = new Uint16Array(g.length), h = new Uint16Array(g.length), p = 0; p < g.length; p++) {
                h[p] = 0, u[p] = 0;
                for (var v = 0; v < g[p].length; v++) u[p] += g[p][v]
              }
              for (var y = 0, p = 0; p < g.length; p++)
                for (var v = p + 1; v < g.length; v++) y += g[p][v];
              for (var m = y - g.length + 1, f = !0, p = 0; p < u.length; p++) 3 !== u[p] && (f = !1);
              if (f && (m = 2 + y - g.length), 1 == m) {
                l.push([].concat(n(i)));
                continue
              }
              for (var b = e.getPathIncludedDistanceMatrices(g), x = b.d, d = b.pe, k = b.pe_prime, C = e.getRingCandidates(x, d, k), c = e.getSSSR(C, x, g, d, k, u, h, m), p = 0; p < c.length; p++) {
                var S = Array(c[p].size),
                  R = 0,
                  A = !0,
                  j = !1,
                  T = void 0;
                try {
                  for (var w = c[p][Symbol.iterator](), I, P; !(A = (I = w.next()).done); A = !0) P = I.value, S[R++] = i[P]
                } catch (e) {
                  j = !0, T = e
                } finally {
                  try {
                    !A && w.return && w.return()
                  } finally {
                    if (j) throw T
                  }
                }
                l.push(S)
              }
            }
            return l
          }
        }, {
          key: "matrixToString",
          value: function (e) {
            for (var t = "", n = 0; n < e.length; n++) {
              for (var i = 0; i < e[n].length; i++) t += e[n][i] + " ";
              t += "\n"
            }
            return t
          }
        }, {
          key: "getPathIncludedDistanceMatrices",
          value: function (e) {
            for (var t = e.length, r = Array(t), a = Array(t), o = Array(t), s = 0, l = 0, g = 0, n = t; n--;) {
              r[n] = Array(t), a[n] = Array(t), o[n] = Array(t);
              for (var i = t; i--;) r[n][i] = n === i || 1 === e[n][i] ? e[n][i] : Number.POSITIVE_INFINITY, a[n][i] = 1 === r[n][i] ? [
                [
                  [n, i]
                ]
              ] : [], o[n][i] = []
            }
            for (var u = t, i; u--;)
              for (n = t; n--;)
                for (i = t; i--;) {
                  var h = r[n][i],
                    c = r[n][u] + r[u][i];
                  if (h > c) {
                    var s, l, g;
                    if (h === c + 1)
                      for (o[n][i] = [a[n][i].length], s = a[n][i].length; s--;)
                        for (o[n][i][s] = [a[n][i][s].length], l = a[n][i][s].length; l--;)
                          for (o[n][i][s][l] = [a[n][i][s][l].length], g = a[n][i][s][l].length; g--;) o[n][i][s][l][g] = [a[n][i][s][l][0], a[n][i][s][l][1]];
                    else o[n][i] = [];
                    for (r[n][i] = c, a[n][i] = [
                        []
                      ], s = a[n][u][0].length; s--;) a[n][i][0].push(a[n][u][0][s]);
                    for (s = a[u][i][0].length; s--;) a[n][i][0].push(a[u][i][0][s])
                  } else if (h === c) {
                    if (a[n][u].length && a[u][i].length) {
                      var s;
                      if (a[n][i].length) {
                        var p = [];
                        for (s = a[n][u][0].length; s--;) p.push(a[n][u][0][s]);
                        for (s = a[u][i][0].length; s--;) p.push(a[u][i][0][s]);
                        a[n][i].push(p)
                      } else {
                        var v = [];
                        for (s = a[n][u][0].length; s--;) v.push(a[n][u][0][s]);
                        for (s = a[u][i][0].length; s--;) v.push(a[u][i][0][s]);
                        a[n][i][0] = v
                      }
                    }
                  } else if (h === c - 1) {
                    var s;
                    if (o[n][i].length) {
                      var y = [];
                      for (s = a[n][u][0].length; s--;) y.push(a[n][u][0][s]);
                      for (s = a[u][i][0].length; s--;) y.push(a[u][i][0][s]);
                      o[n][i].push(y)
                    } else {
                      var m = [];
                      for (s = a[n][u][0].length; s--;) m.push(a[n][u][0][s]);
                      for (s = a[u][i][0].length; s--;) m.push(a[u][i][0][s]);
                      o[n][i][0] = m
                    }
                  }
                }
            return {
              d: r,
              pe: a,
              pe_prime: o
            }
          }
        }, {
          key: "getRingCandidates",
          value: function (e, t, n) {
            for (var r = e.length, a = [], o = 0, l = 0; l < r; l++)
              for (var i = 0; i < r; i++)
                if (0 === e[l][i] || 1 === t[l][i].length && 0 === n[l][i]) continue;
                else o = 0 === n[l][i].length ? 2 * e[l][i] : 2 * (e[l][i] + 0.5), o != Infinity && a.push([o, t[l][i], n[l][i]]);
            return a.sort(function (e, t) {
              return e[0] - t[0]
            }), a
          }
        }, {
          key: "getSSSR",
          value: function (t, n, r, a, o, l, s, g) {
            for (var d = [], u = [], h = 0; h < t.length; h++)
              if (0 != t[h][0] % 2)
                for (var i = 0, c; i < t[h][2].length; i++) {
                  c = t[h][1][0].concat(t[h][2][i]);
                  for (var p = 0; p < c.length; p++) c[p][0].constructor === Array && (c[p] = c[p][0]);
                  var v = e.bondsToAtoms(c);
                  if (e.getBondCount(v, r) !== v.size || e.pathSetsContain(d, v, c, u, l, s) || (d.push(v), u = u.concat(c)), d.length > g) return d
                } else
                  for (var y = 0, m; y < t[h][1].length - 1; y++) {
                    m = t[h][1][y].concat(t[h][1][y + 1]);
                    for (var p = 0; p < m.length; p++) m[p][0].constructor === Array && (m[p] = m[p][0]);
                    var f = e.bondsToAtoms(m);
                    if (e.getBondCount(f, r) !== f.size || e.pathSetsContain(d, f, m, u, l, s) || (d.push(f), u = u.concat(m)), d.length > g) return d
                  }
            return d
          }
        }, {
          key: "getEdgeCount",
          value: function (e) {
            for (var t = 0, n = e.length, r = n - 1; r--;)
              for (var i = n; i--;) 1 === e[r][i] && t++;
            return t
          }
        }, {
          key: "getEdgeList",
          value: function (e) {
            for (var t = e.length, n = [], r = t - 1; r--;)
              for (var i = t; i--;) 1 === e[r][i] && n.push([r, i]);
            return n
          }
        }, {
          key: "bondsToAtoms",
          value: function (e) {
            for (var t = new Set, n = e.length; n--;) t.add(e[n][0]), t.add(e[n][1]);
            return t
          }
        }, {
          key: "getBondCount",
          value: function (e, t) {
            var n = 0,
              i = !0,
              r = !1,
              a;
            try {
              for (var o = e[Symbol.iterator](), l; !(i = (l = o.next()).done); i = !0) {
                var s = l.value,
                  g = !0,
                  d = !1,
                  u = void 0;
                try {
                  for (var h = e[Symbol.iterator](), c, p; !(g = (c = h.next()).done); g = !0)(p = c.value, s !== p) && (n += t[s][p])
                } catch (e) {
                  d = !0, u = e
                } finally {
                  try {
                    !g && h.return && h.return()
                  } finally {
                    if (d) throw u
                  }
                }
              }
            } catch (e) {
              r = !0, a = e
            } finally {
              try {
                !i && o.return && o.return()
              } finally {
                if (r) throw a
              }
            }
            return n / 2
          }
        }, {
          key: "pathSetsContain",
          value: function (t, n, r, a, o, l) {
            for (var s = t.length; s--;) {
              if (e.isSupersetOf(n, t[s])) return !0;
              if (t[s].size === n.size && e.areSetsEqual(t[s], n)) return !0
            }
            var i = 0,
              g = !1;
            for (s = r.length; s--;)
              for (var d = a.length; d--;)(r[s][0] === a[d][0] && r[s][1] === a[d][1] || r[s][1] === a[d][0] && r[s][0] === a[d][1]) && i++, i === r.length && (g = !0);
            var u = !1;
            if (g) {
              var h = !0,
                c = !1,
                p;
              try {
                for (var v = n[Symbol.iterator](), y, m; !(h = (y = v.next()).done); h = !0)
                  if (m = y.value, l[m] < o[m]) {
                    u = !0;
                    break
                  }
              } catch (e) {
                c = !0, p = e
              } finally {
                try {
                  !h && v.return && v.return()
                } finally {
                  if (c) throw p
                }
              }
            }
            if (g && !u) return !0;
            var f = !0,
              b = !1,
              x;
            try {
              for (var k = n[Symbol.iterator](), C, S; !(f = (C = k.next()).done); f = !0) S = C.value, l[S]++
            } catch (e) {
              b = !0, x = e
            } finally {
              try {
                !f && k.return && k.return()
              } finally {
                if (b) throw x
              }
            }
            return !1
          }
        }, {
          key: "areSetsEqual",
          value: function (e, t) {
            if (e.size !== t.size) return !1;
            var n = !0,
              i = !1,
              r;
            try {
              for (var a = e[Symbol.iterator](), o, l; !(n = (o = a.next()).done); n = !0)
                if (l = o.value, !t.has(l)) return !1
            } catch (e) {
              i = !0, r = e
            } finally {
              try {
                !n && a.return && a.return()
              } finally {
                if (i) throw r
              }
            }
            return !0
          }
        }, {
          key: "isSupersetOf",
          value: function (e, t) {
            var n = !0,
              i = !1,
              r;
            try {
              for (var a = t[Symbol.iterator](), o, l; !(n = (o = a.next()).done); n = !0)
                if (l = o.value, !e.has(l)) return !1
            } catch (e) {
              i = !0, r = e
            } finally {
              try {
                !n && a.return && a.return()
              } finally {
                if (i) throw r
              }
            }
            return !0
          }
        }]), e
      }();
    t.exports = o
  }, {
    "./Graph": 7
  }],
  14: [function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var i = Math.sin,
      r = Math.cos,
      a = Math.sqrt,
      o = function () {
        function e(e, t) {
          for (var n = 0, i; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      l = function () {
        function e(t, i) {
          n(this, e), 0 == arguments.length ? (this.x = 0, this.y = 0) : 1 == arguments.length ? (this.x = t.x, this.y = t.y) : (this.x = t, this.y = i)
        }
        var t = Math.acos;
        return o(e, [{
          key: "clone",
          value: function () {
            return new e(this.x, this.y)
          }
        }, {
          key: "toString",
          value: function () {
            return "(" + this.x + "," + this.y + ")"
          }
        }, {
          key: "add",
          value: function (e) {
            return this.x += e.x, this.y += e.y, this
          }
        }, {
          key: "subtract",
          value: function (e) {
            return this.x -= e.x, this.y -= e.y, this
          }
        }, {
          key: "divide",
          value: function (e) {
            return this.x /= e, this.y /= e, this
          }
        }, {
          key: "multiply",
          value: function (e) {
            return this.x *= e.x, this.y *= e.y, this
          }
        }, {
          key: "multiplyScalar",
          value: function (e) {
            return this.x *= e, this.y *= e, this
          }
        }, {
          key: "invert",
          value: function () {
            return this.x = -this.x, this.y = -this.y, this
          }
        }, {
          key: "angle",
          value: function () {
            return Math.atan2(this.y, this.x)
          }
        }, {
          key: "distance",
          value: function (e) {
            return a((e.x - this.x) * (e.x - this.x) + (e.y - this.y) * (e.y - this.y))
          }
        }, {
          key: "distanceSq",
          value: function (e) {
            return (e.x - this.x) * (e.x - this.x) + (e.y - this.y) * (e.y - this.y)
          }
        }, {
          key: "clockwise",
          value: function (e) {
            var t = this.y * e.x,
              n = this.x * e.y;
            return t > n ? -1 : t == n ? 0 : 1
          }
        }, {
          key: "relativeClockwise",
          value: function (e, t) {
            var n = (this.y - e.y) * (t.x - e.x),
              i = (this.x - e.x) * (t.y - e.y);
            return n > i ? -1 : n == i ? 0 : 1
          }
        }, {
          key: "rotate",
          value: function (t) {
            var n = new e(0, 0),
              a = r(t),
              o = i(t);
            return n.x = this.x * a - this.y * o, n.y = this.x * o + this.y * a, this.x = n.x, this.y = n.y, this
          }
        }, {
          key: "rotateAround",
          value: function (e, t) {
            var n = i(e),
              a = r(e);
            this.x -= t.x, this.y -= t.y;
            var o = this.x * a - this.y * n,
              l = this.x * n + this.y * a;
            return this.x = o + t.x, this.y = l + t.y, this
          }
        }, {
          key: "rotateTo",
          value: function (t, n) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
            this.x += 1e-3, this.y -= 1e-3;
            var r = e.subtract(this, n),
              a = e.subtract(t, n),
              o = e.angle(a, r);
            return this.rotateAround(o + i, n), this
          }
        }, {
          key: "rotateAwayFrom",
          value: function (e, t, n) {
            this.rotateAround(n, t);
            var i = this.distanceSq(e);
            this.rotateAround(-2 * n, t);
            var r = this.distanceSq(e);
            r < i && this.rotateAround(2 * n, t)
          }
        }, {
          key: "getRotateAwayFromAngle",
          value: function (e, t, n) {
            var i = this.clone();
            i.rotateAround(n, t);
            var r = i.distanceSq(e);
            i.rotateAround(-2 * n, t);
            var a = i.distanceSq(e);
            return a < r ? n : -n
          }
        }, {
          key: "getRotateTowardsAngle",
          value: function (e, t, n) {
            var i = this.clone();
            i.rotateAround(n, t);
            var r = i.distanceSq(e);
            i.rotateAround(-2 * n, t);
            var a = i.distanceSq(e);
            return a > r ? n : -n
          }
        }, {
          key: "getRotateToAngle",
          value: function (t, n) {
            var i = e.subtract(this, n),
              r = e.subtract(t, n),
              a = e.angle(r, i);
            return Number.isNaN(a) ? 0 : a
          }
        }, {
          key: "isInPolygon",
          value: function (e) {
            for (var t = !1, n = 0, i = e.length - 1; n < e.length; i = n++) e[n].y > this.y != e[i].y > this.y && this.x < (e[i].x - e[n].x) * (this.y - e[n].y) / (e[i].y - e[n].y) + e[n].x && (t = !t);
            return t
          }
        }, {
          key: "length",
          value: function () {
            return a(this.x * this.x + this.y * this.y)
          }
        }, {
          key: "lengthSq",
          value: function () {
            return this.x * this.x + this.y * this.y
          }
        }, {
          key: "normalize",
          value: function () {
            return this.divide(this.length()), this
          }
        }, {
          key: "normalized",
          value: function () {
            return e.divideScalar(this, this.length())
          }
        }, {
          key: "whichSide",
          value: function (e, t) {
            return (this.x - e.x) * (t.y - e.y) - (this.y - e.y) * (t.x - e.x)
          }
        }, {
          key: "sameSideAs",
          value: function (e, t, n) {
            var i = this.whichSide(e, t),
              r = n.whichSide(e, t);
            return 0 > i && 0 > r || 0 == i && 0 == r || 0 < i && 0 < r
          }
        }], [{
          key: "add",
          value: function (t, n) {
            return new e(t.x + n.x, t.y + n.y)
          }
        }, {
          key: "subtract",
          value: function (t, n) {
            return new e(t.x - n.x, t.y - n.y)
          }
        }, {
          key: "multiply",
          value: function (t, n) {
            return new e(t.x * n.x, t.y * n.y)
          }
        }, {
          key: "multiplyScalar",
          value: function (t, n) {
            return new e(t.x, t.y).multiplyScalar(n)
          }
        }, {
          key: "midpoint",
          value: function (t, n) {
            return new e((t.x + n.x) / 2, (t.y + n.y) / 2)
          }
        }, {
          key: "normals",
          value: function (t, n) {
            var i = e.subtract(n, t);
            return [new e(-i.y, i.x), new e(i.y, -i.x)]
          }
        }, {
          key: "units",
          value: function (t, n) {
            var i = e.subtract(n, t);
            return [new e(-i.y, i.x).normalize(), new e(i.y, -i.x).normalize()]
          }
        }, {
          key: "divide",
          value: function (t, n) {
            return new e(t.x / n.x, t.y / n.y)
          }
        }, {
          key: "divideScalar",
          value: function (t, n) {
            return new e(t.x / n, t.y / n)
          }
        }, {
          key: "dot",
          value: function (e, t) {
            return e.x * t.x + e.y * t.y
          }
        }, {
          key: "angle",
          value: function (n, i) {
            var r = e.dot(n, i);
            return t(r / (n.length() * i.length()))
          }
        }, {
          key: "threePointangle",
          value: function (n, i, r) {
            var a = e.subtract(i, n),
              o = e.subtract(r, i),
              l = n.distance(i),
              s = i.distance(r);
            return t(e.dot(a, o) / (l * s))
          }
        }, {
          key: "scalarProjection",
          value: function (t, n) {
            var i = n.normalized();
            return e.dot(t, i)
          }
        }, {
          key: "averageDirection",
          value: function (t) {
            for (var n = new e(0, 0), r = 0, i; r < t.length; r++) i = t[r], n.add(i);
            return n.normalize()
          }
        }]), e
      }();
    t.exports = l
  }, {}],
  15: [function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var r = Math.round,
      i = function () {
        function e(e, t) {
          for (var n = 0, i; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t
        }
      }(),
      a = e("./MathHelper"),
      o = e("./ArrayHelper"),
      l = e("./Vector2"),
      s = e("./Atom"),
      g = function () {
        function e(t) {
          var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
            r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
          n(this, e), this.id = null, this.value = t, this.position = new l(i ? i : 0, r ? r : 0), this.previousPosition = new l(0, 0), this.parentVertexId = null, this.children = [], this.spanningTreeChildren = [], this.edges = [], this.positioned = !1, this.angle = null, this.dir = 1, this.neighbourCount = 0, this.neighbours = [], this.neighbouringElements = [], this.forcePositioned = !1
        }
        return i(e, [{
          key: "setPosition",
          value: function (e, t) {
            this.position.x = e, this.position.y = t
          }
        }, {
          key: "setPositionFromVector",
          value: function (e) {
            this.position.x = e.x, this.position.y = e.y
          }
        }, {
          key: "addChild",
          value: function (e) {
            this.children.push(e), this.neighbours.push(e), this.neighbourCount++
          }
        }, {
          key: "addRingbondChild",
          value: function (e, t) {
            if (this.children.push(e), this.value.bracket) {
              var n = 1;
              0 === this.id && 0 === this.value.bracket.hcount && (n = 0), 1 === this.value.bracket.hcount && 0 === t && (n = 2), 1 === this.value.bracket.hcount && 1 === t && (3 > this.neighbours.length ? n = 2 : n = 3), null === this.value.bracket.hcount && 0 === t && (n = 1), null === this.value.bracket.hcount && 1 === t && (3 > this.neighbours.length ? n = 1 : n = 2), this.neighbours.splice(n, 0, e)
            } else this.neighbours.push(e);
            this.neighbourCount++
          }
        }, {
          key: "setParentVertexId",
          value: function (e) {
            this.neighbourCount++, this.parentVertexId = e, this.neighbours.push(e)
          }
        }, {
          key: "isTerminal",
          value: function () {
            return !!this.value.hasAttachedPseudoElements || null === this.parentVertexId && 2 > this.children.length || 0 === this.children.length
          }
        }, {
          key: "clone",
          value: function () {
            var t = new e(this.value, this.position.x, this.position.y);
            return t.id = this.id, t.previousPosition = new l(this.previousPosition.x, this.previousPosition.y), t.parentVertexId = this.parentVertexId, t.children = o.clone(this.children), t.spanningTreeChildren = o.clone(this.spanningTreeChildren), t.edges = o.clone(this.edges), t.positioned = this.positioned, t.angle = this.angle, t.forcePositioned = this.forcePositioned, t
          }
        }, {
          key: "equals",
          value: function (e) {
            return this.id === e.id
          }
        }, {
          key: "getAngle",
          value: function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
              t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
              n = null;
            return n = e ? l.subtract(this.position, e) : l.subtract(this.position, this.previousPosition), t ? a.toDeg(n.angle()) : n.angle()
          }
        }, {
          key: "getTextDirection",
          value: function (e) {
            for (var t = this.getDrawnNeighbours(e), n = [], o = 0; o < t.length; o++) n.push(this.getAngle(e[t[o]].position));
            var i = a.meanAngle(n),
              l = Math.PI / 2;
            return i = r(r(i / l) * l), 2 === i ? "down" : -2 === i ? "up" : 0 === i || -0 === i ? "right" : 3 === i || -3 === i ? "left" : "down"
          }
        }, {
          key: "getNeighbours",
          value: function () {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
            if (null === e) return this.neighbours.slice();
            for (var t = [], n = 0; n < this.neighbours.length; n++) this.neighbours[n] !== e && t.push(this.neighbours[n]);
            return t
          }
        }, {
          key: "getDrawnNeighbours",
          value: function (e) {
            for (var t = [], n = 0; n < this.neighbours.length; n++) e[this.neighbours[n]].value.isDrawn && t.push(this.neighbours[n]);
            return t
          }
        }, {
          key: "getNeighbourCount",
          value: function () {
            return this.neighbourCount
          }
        }, {
          key: "getSpanningTreeNeighbours",
          value: function () {
            for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null, t = [], n = 0; n < this.spanningTreeChildren.length; n++)(void 0 === e || e != this.spanningTreeChildren[n]) && t.push(this.spanningTreeChildren[n]);
            return null != this.parentVertexId && (void 0 === e || e != this.parentVertexId) && t.push(this.parentVertexId), t
          }
        }, {
          key: "getNextInRing",
          value: function (e, t, n) {
            for (var r = this.getNeighbours(), a = 0; a < r.length; a++)
              if (o.contains(e[r[a]].value.rings, {
                  value: t
                }) && r[a] != n) return r[a];
            return null
          }
        }]), e
      }();
    t.exports = g
  }, {
    "./ArrayHelper": 2,
    "./Atom": 3,
    "./MathHelper": 9,
    "./Vector2": 14
  }]
}, {}, [1]);
//# sourceMappingURL=smiles-drawer.min.js.map