function text(e, t) {
	"textContent" in document.body ? (e.textContent = t) : (e.innerText = t);
}

function event(e, t, n, r) {
	"add" === e
		? window.addEventListener
			? t.addEventListener(n, r)
			: window.attachEvent && t.attachEvent(n, r)
		: "remove" === e &&
		(window.removeEventListener
			? t.removeEventListener(n, r)
			: window.detachEvent && t.detachEvent(n, r));
}

function async(e) {
	var t = document.createElement("script"),
		n = document.scripts[0];
	(t.src = e), n.parentNode.insertBefore(t, n);
}

function scrollAbr() {
	_gaq.push([
		"_trackEvent",
		"Site",
		"Scrolled",
		"The user scrolled the page at least once"
	]),
		event("remove", window, "scroll", scrollAbr);
}
!(function (e) {
	"use strict";

	function t(e) {
		for (var t, n, r = [], o = 0, a = e.length; a > o;)
			(t = e.charCodeAt(o++)),
				t >= 55296 && 56319 >= t && a > o
					? ((n = e.charCodeAt(o++)),
						56320 == (64512 & n)
							? r.push(((1023 & t) << 10) + (1023 & n) + 65536)
							: (r.push(t, n), o--))
					: r.push(t);
		return r;
	}

	function n(e, t) {
		var n =
			e &&
			(("[object NodeList]" === Object.prototype.toString.call(e) &&
				e.length) ||
				1 === e.nodeType),
			r = t && "function" == typeof t;
		return (
			"console" in window &&
			"warn" in console &&
			(n || console.warn("Countable: No valid elements were found"),
				r ||
				console.warn(
					'Countable: "' + t + '" is not a valid callback function'
				)),
			n && r
		);
	}

	function r(e) {
		var t = {
			hardReturns: !1,
			stripTags: !1,
			ignoreReturns: !1,
			ignoreZeroWidth: !0
		};
		for (var n in e) t.hasOwnProperty(n) && (t[n] = e[n]);
		return t;
	}

	function o(e, n) {
		var r,
			o = "value" in e ? e.value : e.innerText || e.textContent;
		return (
			n.stripTags && (o = o.replace(/<\/?[a-z][^>]*>/gi, "")),
			n.ignoreZeroWidth && (o = o.replace(/[\u200B]+/, "")),
			(r = o.trim()),
			{
				paragraphs: r
					? (r.match(n.hardReturns ? /\n{2,}/g : /\n+/g) || []).length + 1
					: 0,
				sentences: r ? (r.match(/[.?!…]+./g) || []).length + 1 : 0,
				words: r
					? (r.replace(/['";:,.?¿\-!¡]+/g, "").match(/\S+/g) || []).length
					: 0,
				characters: r ? t(r.replace(/\s/g, "")).length : 0,
				all: t(n.ignoreReturns ? o.replace(/[\n\r]/g, "") : o).length
			}
		);
	}

	function a(e, t) {
		var n = e.length;
		if ("undefined" != typeof n) for (; n--;) t(e[n]);
		else t(e);
	}
	var c = [],
		i = "oninput" in document ? "input" : "keyup";
	String.prototype.trim ||
		(String.prototype.trim = function () {
			return this.replace(/^\s+|\s+$/g, "");
		});
	var u = {
		live: function (e, t, u) {
			var l = r(u),
				s = function (e) {
					var n = function () {
						t.call(e, o(e, l));
					};
					c.push({
						element: e,
						handler: n
					}),
						n(),
						e.addEventListener
							? e.addEventListener(i, n, !1)
							: e.attachEvent && e.attachEvent("on" + i, n);
				};
			if (n(e, t)) return e.length ? a(e, s) : s(e), this;
		},
		die: function (e) {
			return n(e, function () { })
				? (a(e, function (e) {
					var t;
					a(c, function (n) {
						n.element === e && (t = n);
					}),
						t &&
						(e.removeEventListener
							? e.removeEventListener(i, t.handler, !1)
							: e.detachEvent && e.detachEvent("on" + i, t.handler),
							c.splice(c.indexOf(t), 1));
				}),
					this)
				: void 0;
		},
		once: function (e, t, c) {
			return n(e, t)
				? (a(e, function (e) {
					t.call(e, o(e, r(c)));
				}),
					this)
				: void 0;
		},
		count: function (e, t, n) {
			return this.once(e, t, n);
		},
		enabled: function (e) {
			var t = !1;
			return (
				e &&
				1 === e.nodeType &&
				a(c, function (n) {
					n.element === e && (t = !0);
				}),
				t
			);
		}
	};
	"object" == typeof exports
		? (module.exports = u)
		: "function" == typeof define && define.amd
			? define(function () {
				return u;
			})
			: (e.Countable = u);
})(this),
	setTimeout(function () {
		_gaq.push([
			"_trackEvent",
			"Site",
			"Read",
			"The user stayed on the page for 15 seconds or longer"
		]);
	}, 15e3),
	event("add", window, "scroll", scrollAbr);
var fields = {
	paragraphs: document.getElementById("result__paragraphs"),
	words: document.getElementById("result__words"),
	characters: document.getElementById("result__characters"),
	all: document.getElementById("result__all")
};
Countable.live(document.getElementById("countableArea"), function (e) {
	for (var t in fields) text(fields[t], e[t]);
});
var _gaq = [["_setAccount", "UA-39380123-1"], ["_trackPageview"]];
var val = countableArea.value;
(countableArea.value = ""), countableArea.focus(), (countableArea.value = val);
