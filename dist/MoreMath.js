!function(e, o) {
    "object" == typeof exports && "object" == typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define("MoreMath", [], o) : "object" == typeof exports ? exports.MoreMath = o() : e.MoreMath = o();
}(this, function() {
    return function(e) {
        function o(r) {
            if (t[r]) return t[r].exports;
            var n = t[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            e[r].call(n.exports, n, n.exports, o);
            n.loaded = !0;
            return n.exports;
        }
        var t = {};
        o.m = e;
        o.c = t;
        o.p = "";
        return o(0);
    }([ function(e, o) {
        "use strict";
        function t(e, o, t, n, u, i) {
            void 0 === n && (n = 0);
            void 0 === u && (u = 1);
            void 0 === i && (i = !1);
            if (o === t) return n;
            var f = (e - o) / (t - o) * (u - n) + n;
            i && (f = n < u ? r(f, n, u) : r(f, u, n));
            return f;
        }
        function r(e, o, t) {
            void 0 === o && (o = 0);
            void 0 === t && (t = 1);
            return e < o ? o : e > t ? t : e;
        }
        function n(e, o, t) {
            void 0 === o && (o = 0);
            void 0 === t && (t = 1);
            if (t < o) {
                var r = t;
                t = o;
                o = r;
            }
            return e < o ? o : e > t ? t : e;
        }
        function u(e) {
            var o = 1;
            for (;o < e; ) o <<= 1;
            return o;
        }
        function i() {
            return c++;
        }
        function f(e) {
            return e > 0 && 0 === (e & e - 1);
        }
        function a(e, o, t) {
            var r = t - o;
            e = (e - o) % r;
            e < 0 && (e = r - -e % r);
            e += o;
            return e;
        }
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = 1;
        o.map = t;
        o.clamp = r;
        o.clampAuto = n;
        o.getHighestPowerOfTwo = u;
        o.getUniqueNumber = i;
        o.isPowerOfTwo = f;
        o.rangeMod = a;
        var d = {
            clamp: r,
            clampAuto: n,
            getHighestPowerOfTwo: u,
            getUniqueNumber: i,
            isPowerOfTwo: f,
            map: t,
            rangeMod: a
        };
        o.default = d;
    } ]);
});