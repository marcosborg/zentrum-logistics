import {
  __assign,
  __awaiter,
  __extends,
  __generator,
  __spreadArray
} from "./chunk-G2AA232B.js";

// node_modules/@ionic/core/dist/esm-es5/index-a5d50daf.js
var win = typeof window !== "undefined" ? window : void 0;
var doc = typeof document !== "undefined" ? document : void 0;

// node_modules/@ionic/core/dist/esm-es5/animation-eab5a4ca.js
var animationPrefix;
var getAnimationPrefix = function(r) {
  if (animationPrefix === void 0) {
    var n = r.style.animationName !== void 0;
    var e = r.style.webkitAnimationName !== void 0;
    animationPrefix = !n && e ? "-webkit-" : "";
  }
  return animationPrefix;
};
var setStyleProperty = function(r, n, e) {
  var i = n.startsWith("animation") ? getAnimationPrefix(r) : "";
  r.style.setProperty(i + n, e);
};
var addClassToArray = function(r, n) {
  if (r === void 0) {
    r = [];
  }
  if (n !== void 0) {
    var e = Array.isArray(n) ? n : [n];
    return __spreadArray(__spreadArray([], r, true), e, true);
  }
  return r;
};
var createAnimation = function(r) {
  var n;
  var e;
  var i;
  var t;
  var a;
  var f;
  var u = [];
  var o = [];
  var v = [];
  var d = false;
  var c;
  var s = {};
  var l = [];
  var y = [];
  var m = {};
  var p = 0;
  var A = false;
  var g = false;
  var C;
  var b;
  var _;
  var P = true;
  var S = false;
  var T = true;
  var x;
  var E = false;
  var w = r;
  var h2 = [];
  var k = [];
  var R = [];
  var D = [];
  var F = [];
  var W = [];
  var I = [];
  var K = [];
  var M = [];
  var j = [];
  var q = [];
  var z = typeof AnimationEffect === "function" || win !== void 0 && typeof win.AnimationEffect === "function";
  var B = typeof Element === "function" && typeof Element.prototype.animate === "function" && z;
  var G = function() {
    return q;
  };
  var H2 = function(r2) {
    F.forEach(function(n2) {
      n2.destroy(r2);
    });
    J(r2);
    D.length = 0;
    F.length = 0;
    u.length = 0;
    V();
    d = false;
    T = true;
    return x;
  };
  var J = function(r2) {
    X();
    if (r2) {
      Y();
    }
  };
  var L = function() {
    A = false;
    g = false;
    T = true;
    C = void 0;
    b = void 0;
    _ = void 0;
    p = 0;
    S = false;
    P = true;
    E = false;
  };
  var N = function() {
    return p !== 0 && !E;
  };
  var O = function(r2, n2) {
    var e2 = n2.findIndex(function(n3) {
      return n3.c === r2;
    });
    if (e2 > -1) {
      n2.splice(e2, 1);
    }
  };
  var Q = function(r2, n2) {
    R.push({ c: r2, o: n2 });
    return x;
  };
  var U = function(r2, n2) {
    var e2 = (n2 === null || n2 === void 0 ? void 0 : n2.oneTimeCallback) ? k : h2;
    e2.push({ c: r2, o: n2 });
    return x;
  };
  var V = function() {
    h2.length = 0;
    k.length = 0;
    return x;
  };
  var X = function() {
    if (B) {
      q.forEach(function(r2) {
        r2.cancel();
      });
      q.length = 0;
    }
  };
  var Y = function() {
    W.forEach(function(r2) {
      if (r2 === null || r2 === void 0 ? void 0 : r2.parentNode) {
        r2.parentNode.removeChild(r2);
      }
    });
    W.length = 0;
  };
  var Z = function(r2) {
    I.push(r2);
    return x;
  };
  var $ = function(r2) {
    K.push(r2);
    return x;
  };
  var rr = function(r2) {
    M.push(r2);
    return x;
  };
  var nr = function(r2) {
    j.push(r2);
    return x;
  };
  var er = function(r2) {
    o = addClassToArray(o, r2);
    return x;
  };
  var ir = function(r2) {
    v = addClassToArray(v, r2);
    return x;
  };
  var tr = function(r2) {
    if (r2 === void 0) {
      r2 = {};
    }
    s = r2;
    return x;
  };
  var ar = function(r2) {
    if (r2 === void 0) {
      r2 = [];
    }
    for (var n2 = 0, e2 = r2; n2 < e2.length; n2++) {
      var i2 = e2[n2];
      s[i2] = "";
    }
    return x;
  };
  var fr = function(r2) {
    l = addClassToArray(l, r2);
    return x;
  };
  var ur = function(r2) {
    y = addClassToArray(y, r2);
    return x;
  };
  var or = function(r2) {
    if (r2 === void 0) {
      r2 = {};
    }
    m = r2;
    return x;
  };
  var vr = function(r2) {
    if (r2 === void 0) {
      r2 = [];
    }
    for (var n2 = 0, e2 = r2; n2 < e2.length; n2++) {
      var i2 = e2[n2];
      m[i2] = "";
    }
    return x;
  };
  var dr = function() {
    if (a !== void 0) {
      return a;
    }
    if (c) {
      return c.getFill();
    }
    return "both";
  };
  var cr = function() {
    if (C !== void 0) {
      return C;
    }
    if (f !== void 0) {
      return f;
    }
    if (c) {
      return c.getDirection();
    }
    return "normal";
  };
  var sr = function() {
    if (A) {
      return "linear";
    }
    if (i !== void 0) {
      return i;
    }
    if (c) {
      return c.getEasing();
    }
    return "linear";
  };
  var lr = function() {
    if (g) {
      return 0;
    }
    if (b !== void 0) {
      return b;
    }
    if (e !== void 0) {
      return e;
    }
    if (c) {
      return c.getDuration();
    }
    return 0;
  };
  var yr = function() {
    if (t !== void 0) {
      return t;
    }
    if (c) {
      return c.getIterations();
    }
    return 1;
  };
  var mr = function() {
    if (_ !== void 0) {
      return _;
    }
    if (n !== void 0) {
      return n;
    }
    if (c) {
      return c.getDelay();
    }
    return 0;
  };
  var pr = function() {
    return u;
  };
  var Ar = function(r2) {
    f = r2;
    Kr(true);
    return x;
  };
  var gr = function(r2) {
    a = r2;
    Kr(true);
    return x;
  };
  var Cr = function(r2) {
    n = r2;
    Kr(true);
    return x;
  };
  var br = function(r2) {
    i = r2;
    Kr(true);
    return x;
  };
  var _r = function(r2) {
    if (!B && r2 === 0) {
      r2 = 1;
    }
    e = r2;
    Kr(true);
    return x;
  };
  var Pr = function(r2) {
    t = r2;
    Kr(true);
    return x;
  };
  var Sr = function(r2) {
    c = r2;
    return x;
  };
  var Tr = function(r2) {
    if (r2 != null) {
      if (r2.nodeType === 1) {
        D.push(r2);
      } else if (r2.length >= 0) {
        for (var n2 = 0; n2 < r2.length; n2++) {
          D.push(r2[n2]);
        }
      } else {
        console.error("Invalid addElement value");
      }
    }
    return x;
  };
  var xr = function(r2) {
    if (r2 != null) {
      if (Array.isArray(r2)) {
        for (var n2 = 0, e2 = r2; n2 < e2.length; n2++) {
          var i2 = e2[n2];
          i2.parent(x);
          F.push(i2);
        }
      } else {
        r2.parent(x);
        F.push(r2);
      }
    }
    return x;
  };
  var Er = function(r2) {
    var n2 = u !== r2;
    u = r2;
    if (n2) {
      wr(u);
    }
    return x;
  };
  var wr = function(r2) {
    if (B) {
      G().forEach(function(n2) {
        var e2 = n2.effect;
        if (e2.setKeyframes) {
          e2.setKeyframes(r2);
        } else {
          var i2 = new KeyframeEffect(e2.target, r2, e2.getTiming());
          n2.effect = i2;
        }
      });
    }
  };
  var hr = function() {
    I.forEach(function(r3) {
      return r3();
    });
    K.forEach(function(r3) {
      return r3();
    });
    var r2 = o;
    var n2 = v;
    var e2 = s;
    D.forEach(function(i2) {
      var t2 = i2.classList;
      r2.forEach(function(r3) {
        return t2.add(r3);
      });
      n2.forEach(function(r3) {
        return t2.remove(r3);
      });
      for (var a2 in e2) {
        if (e2.hasOwnProperty(a2)) {
          setStyleProperty(i2, a2, e2[a2]);
        }
      }
    });
  };
  var kr = function() {
    M.forEach(function(r3) {
      return r3();
    });
    j.forEach(function(r3) {
      return r3();
    });
    var r2 = P ? 1 : 0;
    var n2 = l;
    var e2 = y;
    var i2 = m;
    D.forEach(function(r3) {
      var t2 = r3.classList;
      n2.forEach(function(r4) {
        return t2.add(r4);
      });
      e2.forEach(function(r4) {
        return t2.remove(r4);
      });
      for (var a2 in i2) {
        if (i2.hasOwnProperty(a2)) {
          setStyleProperty(r3, a2, i2[a2]);
        }
      }
    });
    b = void 0;
    C = void 0;
    _ = void 0;
    h2.forEach(function(n3) {
      return n3.c(r2, x);
    });
    k.forEach(function(n3) {
      return n3.c(r2, x);
    });
    k.length = 0;
    T = true;
    if (P) {
      S = true;
    }
    P = true;
  };
  var Rr = function() {
    if (p === 0) {
      return;
    }
    p--;
    if (p === 0) {
      kr();
      if (c) {
        c.animationFinish();
      }
    }
  };
  var Dr = function() {
    D.forEach(function(r2) {
      var n2 = r2.animate(u, { id: w, delay: mr(), duration: lr(), easing: sr(), iterations: yr(), fill: dr(), direction: cr() });
      n2.pause();
      q.push(n2);
    });
    if (q.length > 0) {
      q[0].onfinish = function() {
        Rr();
      };
    }
  };
  var Fr = function() {
    hr();
    if (u.length > 0) {
      if (B) {
        Dr();
      }
    }
    d = true;
  };
  var Wr = function(r2) {
    r2 = Math.min(Math.max(r2, 0), 0.9999);
    if (B) {
      q.forEach(function(n2) {
        n2.currentTime = n2.effect.getComputedTiming().delay + lr() * r2;
        n2.pause();
      });
    }
  };
  var Ir = function(r2) {
    q.forEach(function(r3) {
      r3.effect.updateTiming({ delay: mr(), duration: lr(), easing: sr(), iterations: yr(), fill: dr(), direction: cr() });
    });
    if (r2 !== void 0) {
      Wr(r2);
    }
  };
  var Kr = function(r2, n2, e2) {
    if (r2 === void 0) {
      r2 = false;
    }
    if (n2 === void 0) {
      n2 = true;
    }
    if (r2) {
      F.forEach(function(i2) {
        i2.update(r2, n2, e2);
      });
    }
    if (B) {
      Ir(e2);
    }
    return x;
  };
  var Mr = function(r2, n2) {
    if (r2 === void 0) {
      r2 = false;
    }
    F.forEach(function(e2) {
      e2.progressStart(r2, n2);
    });
    zr();
    A = r2;
    if (!d) {
      Fr();
    }
    Kr(false, true, n2);
    return x;
  };
  var jr = function(r2) {
    F.forEach(function(n2) {
      n2.progressStep(r2);
    });
    Wr(r2);
    return x;
  };
  var qr = function(r2, n2, e2) {
    A = false;
    F.forEach(function(i2) {
      i2.progressEnd(r2, n2, e2);
    });
    if (e2 !== void 0) {
      b = e2;
    }
    S = false;
    P = true;
    if (r2 === 0) {
      C = cr() === "reverse" ? "normal" : "reverse";
      if (C === "reverse") {
        P = false;
      }
      if (B) {
        Kr();
        Wr(1 - n2);
      } else {
        _ = (1 - n2) * lr() * -1;
        Kr(false, false);
      }
    } else if (r2 === 1) {
      if (B) {
        Kr();
        Wr(n2);
      } else {
        _ = n2 * lr() * -1;
        Kr(false, false);
      }
    }
    if (r2 !== void 0 && !c) {
      Lr();
    }
    return x;
  };
  var zr = function() {
    if (d) {
      if (B) {
        q.forEach(function(r2) {
          r2.pause();
        });
      } else {
        D.forEach(function(r2) {
          setStyleProperty(r2, "animation-play-state", "paused");
        });
      }
      E = true;
    }
  };
  var Br = function() {
    F.forEach(function(r2) {
      r2.pause();
    });
    zr();
    return x;
  };
  var Gr = function() {
    Rr();
  };
  var Hr = function() {
    q.forEach(function(r2) {
      r2.play();
    });
    if (u.length === 0 || D.length === 0) {
      Rr();
    }
  };
  var Jr = function() {
    if (B) {
      Wr(0);
      Ir();
    }
  };
  var Lr = function(r2) {
    return new Promise(function(n2) {
      if (r2 === null || r2 === void 0 ? void 0 : r2.sync) {
        g = true;
        U(function() {
          return g = false;
        }, { oneTimeCallback: true });
      }
      if (!d) {
        Fr();
      }
      if (S) {
        Jr();
        S = false;
      }
      if (T) {
        p = F.length + 1;
        T = false;
      }
      var e2 = function() {
        O(i2, k);
        n2();
      };
      var i2 = function() {
        O(e2, R);
        n2();
      };
      U(i2, { oneTimeCallback: true });
      Q(e2, { oneTimeCallback: true });
      F.forEach(function(r3) {
        r3.play();
      });
      if (B) {
        Hr();
      } else {
        Gr();
      }
      E = false;
    });
  };
  var Nr = function() {
    F.forEach(function(r2) {
      r2.stop();
    });
    if (d) {
      X();
      d = false;
    }
    L();
    R.forEach(function(r2) {
      return r2.c(0, x);
    });
    R.length = 0;
  };
  var Or = function(r2, n2) {
    var e2;
    var i2 = u[0];
    if (i2 !== void 0 && (i2.offset === void 0 || i2.offset === 0)) {
      i2[r2] = n2;
    } else {
      u = __spreadArray([(e2 = { offset: 0 }, e2[r2] = n2, e2)], u, true);
    }
    return x;
  };
  var Qr = function(r2, n2) {
    var e2;
    var i2 = u[u.length - 1];
    if (i2 !== void 0 && (i2.offset === void 0 || i2.offset === 1)) {
      i2[r2] = n2;
    } else {
      u = __spreadArray(__spreadArray([], u, true), [(e2 = { offset: 1 }, e2[r2] = n2, e2)], false);
    }
    return x;
  };
  var Ur = function(r2, n2, e2) {
    return Or(r2, n2).to(r2, e2);
  };
  return x = { parentAnimation: c, elements: D, childAnimations: F, id: w, animationFinish: Rr, from: Or, to: Qr, fromTo: Ur, parent: Sr, play: Lr, pause: Br, stop: Nr, destroy: H2, keyframes: Er, addAnimation: xr, addElement: Tr, update: Kr, fill: gr, direction: Ar, iterations: Pr, duration: _r, easing: br, delay: Cr, getWebAnimations: G, getKeyframes: pr, getFill: dr, getDirection: cr, getDelay: mr, getIterations: yr, getEasing: sr, getDuration: lr, afterAddRead: rr, afterAddWrite: nr, afterClearStyles: vr, afterStyles: or, afterRemoveClass: ur, afterAddClass: fr, beforeAddRead: Z, beforeAddWrite: $, beforeClearStyles: ar, beforeStyles: tr, beforeRemoveClass: ir, beforeAddClass: er, onFinish: U, isRunning: N, progressStart: Mr, progressStep: jr, progressEnd: qr };
};

// node_modules/@ionic/core/dist/esm-es5/index-8d8c14b0.js
var NAMESPACE = "ionic";
var BUILD = { allRenderFn: false, appendChildSlotFix: true, asyncLoading: true, asyncQueue: false, attachStyles: true, cloneNodeFix: true, cmpDidLoad: true, cmpDidRender: true, cmpDidUnload: false, cmpDidUpdate: true, cmpShouldUpdate: false, cmpWillLoad: true, cmpWillRender: true, cmpWillUpdate: false, connectedCallback: true, constructableCSS: true, cssAnnotations: true, devTools: false, disconnectedCallback: true, element: false, event: true, experimentalScopedSlotChanges: true, experimentalSlotFixes: true, formAssociated: false, hasRenderFn: true, hostListener: true, hostListenerTarget: true, hostListenerTargetBody: true, hostListenerTargetDocument: true, hostListenerTargetParent: false, hostListenerTargetWindow: true, hotModuleReplacement: false, hydrateClientSide: true, hydrateServerSide: false, hydratedAttribute: false, hydratedClass: true, initializeNextTick: false, invisiblePrehydration: true, isDebug: false, isDev: false, isTesting: false, lazyLoad: true, lifecycle: true, lifecycleDOMEvents: false, member: true, method: true, mode: true, observeAttribute: true, profile: false, prop: true, propBoolean: true, propMutable: true, propNumber: true, propString: true, reflect: true, scoped: true, scopedSlotTextContentFix: true, scriptDataOpts: false, shadowDelegatesFocus: true, shadowDom: true, slot: true, slotChildNodesFix: true, slotRelocation: true, state: true, style: true, svg: true, taskQueue: true, transformTagName: false, updatable: true, vdomAttribute: true, vdomClass: true, vdomFunctional: true, vdomKey: true, vdomListener: true, vdomPropOrAttr: true, vdomRef: true, vdomRender: true, vdomStyle: true, vdomText: true, vdomXlink: true, watchCallback: true };
var __defProp = Object.defineProperty;
var __export = function(e, t) {
  for (var r in t)
    __defProp(e, r, { get: t[r], enumerable: true });
};
var EMPTY_OBJ = {};
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";
var isDef = function(e) {
  return e != null;
};
var isComplexType = function(e) {
  e = typeof e;
  return e === "object" || e === "function";
};
function queryNonceMetaTagContent(e) {
  var t, r, n;
  return (n = (r = (t = e.head) == null ? void 0 : t.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : r.getAttribute("content")) != null ? n : void 0;
}
var result_exports = {};
__export(result_exports, { err: function() {
  return err;
}, map: function() {
  return map;
}, ok: function() {
  return ok;
}, unwrap: function() {
  return unwrap;
}, unwrapErr: function() {
  return unwrapErr;
} });
var ok = function(e) {
  return { isOk: true, isErr: false, value: e };
};
var err = function(e) {
  return { isOk: false, isErr: true, value: e };
};
function map(e, t) {
  if (e.isOk) {
    var r = t(e.value);
    if (r instanceof Promise) {
      return r.then(function(e2) {
        return ok(e2);
      });
    } else {
      return ok(r);
    }
  }
  if (e.isErr) {
    var n = e.value;
    return err(n);
  }
  throw "should never get here";
}
var unwrap = function(e) {
  if (e.isOk) {
    return e.value;
  } else {
    throw e.value;
  }
};
var unwrapErr = function(e) {
  if (e.isErr) {
    return e.value;
  } else {
    throw e.value;
  }
};
var createTime = function(e, t) {
  if (t === void 0) {
    t = "";
  }
  {
    return function() {
      return;
    };
  }
};
var uniqueTime = function(e, t) {
  {
    return function() {
      return;
    };
  }
};
var CONTENT_REF_ID = "r";
var ORG_LOCATION_ID = "o";
var SLOT_NODE_ID = "s";
var TEXT_NODE_ID = "t";
var HYDRATE_ID = "s-id";
var HYDRATED_STYLE_ID = "sty-id";
var HYDRATE_CHILD_ID = "c-id";
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var h = function(e, t) {
  var r = [];
  for (var n = 2; n < arguments.length; n++) {
    r[n - 2] = arguments[n];
  }
  var a = null;
  var i = null;
  var o = null;
  var l = false;
  var s = false;
  var u = [];
  var f = function(t2) {
    for (var r2 = 0; r2 < t2.length; r2++) {
      a = t2[r2];
      if (Array.isArray(a)) {
        f(a);
      } else if (a != null && typeof a !== "boolean") {
        if (l = typeof e !== "function" && !isComplexType(a)) {
          a = String(a);
        }
        if (l && s) {
          u[u.length - 1].i += a;
        } else {
          u.push(l ? newVNode(null, a) : a);
        }
        s = l;
      }
    }
  };
  f(r);
  if (t) {
    if (t.key) {
      i = t.key;
    }
    if (t.name) {
      o = t.name;
    }
    {
      var c = t.className || t.class;
      if (c) {
        t.class = typeof c !== "object" ? c : Object.keys(c).filter(function(e2) {
          return c[e2];
        }).join(" ");
      }
    }
  }
  if (typeof e === "function") {
    return e(t === null ? {} : t, u, vdomFnUtils);
  }
  var v = newVNode(e, null);
  v.o = t;
  if (u.length > 0) {
    v.l = u;
  }
  {
    v.u = i;
  }
  {
    v.v = o;
  }
  return v;
};
var newVNode = function(e, t) {
  var r = { p: 0, h: e, i: t, m: null, l: null };
  {
    r.o = null;
  }
  {
    r.u = null;
  }
  {
    r.v = null;
  }
  return r;
};
var Host = {};
var isHost = function(e) {
  return e && e.h === Host;
};
var vdomFnUtils = { forEach: function(e, t) {
  return e.map(convertToPublic).forEach(t);
}, map: function(e, t) {
  return e.map(convertToPublic).map(t).map(convertToPrivate);
} };
var convertToPublic = function(e) {
  return { vattrs: e.o, vchildren: e.l, vkey: e.u, vname: e.v, vtag: e.h, vtext: e.i };
};
var convertToPrivate = function(e) {
  if (typeof e.vtag === "function") {
    var t = __assign({}, e.vattrs);
    if (e.vkey) {
      t.key = e.vkey;
    }
    if (e.vname) {
      t.name = e.vname;
    }
    return h.apply(void 0, __spreadArray([e.vtag, t], e.vchildren || [], false));
  }
  var r = newVNode(e.vtag, e.vtext);
  r.o = e.vattrs;
  r.l = e.vchildren;
  r.u = e.vkey;
  r.v = e.vname;
  return r;
};
var initializeClientHydrate = function(e, t, r, n) {
  var a = createTime("hydrateClient", t);
  var i = e.shadowRoot;
  var o = [];
  var l = [];
  var s = i ? [] : null;
  var u = n.S = newVNode(t, null);
  if (!plt.T) {
    initializeDocumentHydrate(doc2.body, plt.T = /* @__PURE__ */ new Map());
  }
  e[HYDRATE_ID] = r;
  e.removeAttribute(HYDRATE_ID);
  clientHydrate(u, o, l, s, e, e, r);
  o.map(function(e2) {
    var r2 = e2.C + "." + e2._;
    var n2 = plt.T.get(r2);
    var a2 = e2.m;
    if (n2 && supportsShadow && n2["s-en"] === "") {
      n2.parentNode.insertBefore(a2, n2.nextSibling);
    }
    if (!i) {
      a2["s-hn"] = t;
      if (n2) {
        a2["s-ol"] = n2;
        a2["s-ol"]["s-nr"] = a2;
      }
    }
    plt.T.delete(r2);
  });
  if (i) {
    s.map(function(e2) {
      if (e2) {
        i.appendChild(e2);
      }
    });
  }
  a();
};
var clientHydrate = function(e, t, r, n, a, i, o) {
  var l;
  var s;
  var u;
  var f;
  if (i.nodeType === 1) {
    l = i.getAttribute(HYDRATE_CHILD_ID);
    if (l) {
      s = l.split(".");
      if (s[0] === o || s[0] === "0") {
        u = { p: 0, C: s[0], _: s[1], N: s[2], R: s[3], h: i.tagName.toLowerCase(), m: i, o: null, l: null, u: null, v: null, i: null };
        t.push(u);
        i.removeAttribute(HYDRATE_CHILD_ID);
        if (!e.l) {
          e.l = [];
        }
        e.l[u.R] = u;
        e = u;
        if (n && u.N === "0") {
          n[u.R] = u.m;
        }
      }
    }
    for (f = i.childNodes.length - 1; f >= 0; f--) {
      clientHydrate(e, t, r, n, a, i.childNodes[f], o);
    }
    if (i.shadowRoot) {
      for (f = i.shadowRoot.childNodes.length - 1; f >= 0; f--) {
        clientHydrate(e, t, r, n, a, i.shadowRoot.childNodes[f], o);
      }
    }
  } else if (i.nodeType === 8) {
    s = i.nodeValue.split(".");
    if (s[1] === o || s[1] === "0") {
      l = s[0];
      u = { p: 0, C: s[1], _: s[2], N: s[3], R: s[4], m: i, o: null, l: null, u: null, v: null, h: null, i: null };
      if (l === TEXT_NODE_ID) {
        u.m = i.nextSibling;
        if (u.m && u.m.nodeType === 3) {
          u.i = u.m.textContent;
          t.push(u);
          i.remove();
          if (!e.l) {
            e.l = [];
          }
          e.l[u.R] = u;
          if (n && u.N === "0") {
            n[u.R] = u.m;
          }
        }
      } else if (u.C === o) {
        if (l === SLOT_NODE_ID) {
          u.h = "slot";
          if (s[5]) {
            i["s-sn"] = u.v = s[5];
          } else {
            i["s-sn"] = "";
          }
          i["s-sr"] = true;
          if (n) {
            u.m = doc2.createElement(u.h);
            if (u.v) {
              u.m.setAttribute("name", u.v);
            }
            i.parentNode.insertBefore(u.m, i);
            i.remove();
            if (u.N === "0") {
              n[u.R] = u.m;
            }
          }
          r.push(u);
          if (!e.l) {
            e.l = [];
          }
          e.l[u.R] = u;
        } else if (l === CONTENT_REF_ID) {
          if (n) {
            i.remove();
          } else {
            a["s-cr"] = i;
            i["s-cn"] = true;
          }
        }
      }
    }
  } else if (e && e.h === "style") {
    var c = newVNode(null, i.textContent);
    c.m = i;
    c.R = "0";
    e.l = [c];
  }
};
var initializeDocumentHydrate = function(e, t) {
  if (e.nodeType === 1) {
    var r = 0;
    for (; r < e.childNodes.length; r++) {
      initializeDocumentHydrate(e.childNodes[r], t);
    }
    if (e.shadowRoot) {
      for (r = 0; r < e.shadowRoot.childNodes.length; r++) {
        initializeDocumentHydrate(e.shadowRoot.childNodes[r], t);
      }
    }
  } else if (e.nodeType === 8) {
    var n = e.nodeValue.split(".");
    if (n[0] === ORG_LOCATION_ID) {
      t.set(n[1] + "." + n[2], e);
      e.nodeValue = "";
      e["s-en"] = n[3];
    }
  }
};
var computeMode = function(e) {
  return modeResolutionChain.map(function(t) {
    return t(e);
  }).find(function(e2) {
    return !!e2;
  });
};
var setMode = function(e) {
  return modeResolutionChain.push(e);
};
var getMode = function(e) {
  return getHostRef(e).$;
};
var parsePropertyValue = function(e, t) {
  if (e != null && !isComplexType(e)) {
    if (t & 4) {
      return e === "false" ? false : e === "" || !!e;
    }
    if (t & 2) {
      return parseFloat(e);
    }
    if (t & 1) {
      return String(e);
    }
    return e;
  }
  return e;
};
var emitEvent = function(e, t, r) {
  var n = plt.ce(t, r);
  e.dispatchEvent(n);
  return n;
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = function(e, t, r) {
  var n = styles.get(e);
  if (supportsConstructableStylesheets && r) {
    n = n || new CSSStyleSheet();
    if (typeof n === "string") {
      n = t;
    } else {
      n.replaceSync(t);
    }
  } else {
    n = t;
  }
  styles.set(e, n);
};
var addStyle = function(e, t, r) {
  var n;
  var a = getScopeId(t, r);
  var i = styles.get(a);
  e = e.nodeType === 11 ? e : doc2;
  if (i) {
    if (typeof i === "string") {
      e = e.head || e;
      var o = rootAppliedStyles.get(e);
      var l = void 0;
      if (!o) {
        rootAppliedStyles.set(e, o = /* @__PURE__ */ new Set());
      }
      if (!o.has(a)) {
        if (e.host && (l = e.querySelector("[".concat(HYDRATED_STYLE_ID, '="').concat(a, '"]')))) {
          l.innerHTML = i;
        } else {
          l = doc2.createElement("style");
          l.innerHTML = i;
          var s = (n = plt.D) != null ? n : queryNonceMetaTagContent(doc2);
          if (s != null) {
            l.setAttribute("nonce", s);
          }
          e.insertBefore(l, e.querySelector("link"));
        }
        if (t.p & 4) {
          l.innerHTML += SLOT_FB_CSS;
        }
        if (o) {
          o.add(a);
        }
      }
    } else if (!e.adoptedStyleSheets.includes(i)) {
      e.adoptedStyleSheets = __spreadArray(__spreadArray([], e.adoptedStyleSheets, true), [i], false);
    }
  }
  return a;
};
var attachStyles = function(e) {
  var t = e.k;
  var r = e.$hostElement$;
  var n = t.p;
  var a = createTime("attachStyles", t.H);
  var i = addStyle(r.shadowRoot ? r.shadowRoot : r.getRootNode(), t, e.$);
  if (n & 10) {
    r["s-sc"] = i;
    r.classList.add(i + "-h");
    if (n & 2) {
      r.classList.add(i + "-s");
    }
  }
  a();
};
var getScopeId = function(e, t) {
  return "sc-" + (t && e.p & 32 ? e.H + "-" + t : e.H);
};
var convertScopedToShadow = function(e) {
  return e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, "$1{");
};
var setAccessor = function(e, t, r, n, a, i) {
  if (r !== n) {
    var o = isMemberInElement(e, t);
    var l = t.toLowerCase();
    if (t === "class") {
      var s = e.classList;
      var u = parseClassList(r);
      var f = parseClassList(n);
      s.remove.apply(s, u.filter(function(e2) {
        return e2 && !f.includes(e2);
      }));
      s.add.apply(s, f.filter(function(e2) {
        return e2 && !u.includes(e2);
      }));
    } else if (t === "style") {
      {
        for (var c in r) {
          if (!n || n[c] == null) {
            if (c.includes("-")) {
              e.style.removeProperty(c);
            } else {
              e.style[c] = "";
            }
          }
        }
      }
      for (var c in n) {
        if (!r || n[c] !== r[c]) {
          if (c.includes("-")) {
            e.style.setProperty(c, n[c]);
          } else {
            e.style[c] = n[c];
          }
        }
      }
    } else if (t === "key")
      ;
    else if (t === "ref") {
      if (n) {
        n(e);
      }
    } else if (!o && t[0] === "o" && t[1] === "n") {
      if (t[2] === "-") {
        t = t.slice(3);
      } else if (isMemberInElement(win2, l)) {
        t = l.slice(2);
      } else {
        t = l[2] + t.slice(3);
      }
      if (r || n) {
        var v = t.endsWith(CAPTURE_EVENT_SUFFIX);
        t = t.replace(CAPTURE_EVENT_REGEX, "");
        if (r) {
          plt.rel(e, t, r, v);
        }
        if (n) {
          plt.ael(e, t, n, v);
        }
      }
    } else {
      var d = isComplexType(n);
      if ((o || d && n !== null) && !a) {
        try {
          if (!e.tagName.includes("-")) {
            var p = n == null ? "" : n;
            if (t === "list") {
              o = false;
            } else if (r == null || e[t] != p) {
              e[t] = p;
            }
          } else {
            e[t] = n;
          }
        } catch (e2) {
        }
      }
      var h2 = false;
      {
        if (l !== (l = l.replace(/^xlink\:?/, ""))) {
          t = l;
          h2 = true;
        }
      }
      if (n == null || n === false) {
        if (n !== false || e.getAttribute(t) === "") {
          if (h2) {
            e.removeAttributeNS(XLINK_NS, t);
          } else {
            e.removeAttribute(t);
          }
        }
      } else if ((!o || i & 4 || a) && !d) {
        n = n === true ? "" : n;
        if (h2) {
          e.setAttributeNS(XLINK_NS, t, n);
        } else {
          e.setAttribute(t, n);
        }
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = function(e) {
  return !e ? [] : e.split(parseClassListRegex);
};
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");
var updateElement = function(e, t, r) {
  var n = t.m.nodeType === 11 && t.m.host ? t.m.host : t.m;
  var a = e && e.o || EMPTY_OBJ;
  var i = t.o || EMPTY_OBJ;
  {
    for (var o = 0, l = sortedAttrNames(Object.keys(a)); o < l.length; o++) {
      var s = l[o];
      if (!(s in i)) {
        setAccessor(n, s, a[s], void 0, r, t.p);
      }
    }
  }
  for (var u = 0, f = sortedAttrNames(Object.keys(i)); u < f.length; u++) {
    var s = f[u];
    setAccessor(n, s, a[s], i[s], r, t.p);
  }
};
function sortedAttrNames(e) {
  return e.includes("ref") ? __spreadArray(__spreadArray([], e.filter(function(e2) {
    return e2 !== "ref";
  }), true), ["ref"], false) : e;
}
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = function(e, t, r, n) {
  var a;
  var i = t.l[r];
  var o = 0;
  var l;
  var s;
  var u;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (i.h === "slot") {
      if (scopeId) {
        n.classList.add(scopeId + "-s");
      }
      i.p |= i.l ? 2 : 1;
    }
  }
  if (i.i !== null) {
    l = i.m = doc2.createTextNode(i.i);
  } else if (i.p & 1) {
    l = i.m = doc2.createTextNode("");
  } else {
    if (!isSvgMode) {
      isSvgMode = i.h === "svg";
    }
    l = i.m = doc2.createElementNS(isSvgMode ? SVG_NS : HTML_NS, i.p & 2 ? "slot-fb" : i.h);
    if (isSvgMode && i.h === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, i, isSvgMode);
    }
    if (isDef(scopeId) && l["s-si"] !== scopeId) {
      l.classList.add(l["s-si"] = scopeId);
    }
    if (i.l) {
      for (o = 0; o < i.l.length; ++o) {
        s = createElm(e, i, o, l);
        if (s) {
          l.appendChild(s);
        }
      }
    }
    {
      if (i.h === "svg") {
        isSvgMode = false;
      } else if (l.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  l["s-hn"] = hostTagName;
  {
    if (i.p & (2 | 1)) {
      l["s-sr"] = true;
      l["s-cr"] = contentRef;
      l["s-sn"] = i.v || "";
      l["s-rf"] = (a = i.o) == null ? void 0 : a.ref;
      u = e && e.l && e.l[r];
      if (u && u.h === i.h && e.m) {
        {
          relocateToHostRoot(e.m);
        }
      }
    }
  }
  return l;
};
var relocateToHostRoot = function(e) {
  plt.p |= 1;
  var t = e.closest(hostTagName.toLowerCase());
  if (t != null) {
    var r = Array.from(t.childNodes).find(function(e2) {
      return e2["s-cr"];
    });
    var n = Array.from(e.childNodes);
    for (var a = 0, i = r ? n.reverse() : n; a < i.length; a++) {
      var o = i[a];
      if (o["s-sh"] != null) {
        insertBefore(t, o, r != null ? r : null);
        o["s-sh"] = void 0;
        checkSlotRelocate = true;
      }
    }
  }
  plt.p &= ~1;
};
var putBackInOriginalLocation = function(e, t) {
  plt.p |= 1;
  var r = Array.from(e.childNodes);
  if (e["s-sr"] && BUILD.experimentalSlotFixes) {
    var n = e;
    while (n = n.nextSibling) {
      if (n && n["s-sn"] === e["s-sn"] && n["s-sh"] === hostTagName) {
        r.push(n);
      }
    }
  }
  for (var a = r.length - 1; a >= 0; a--) {
    var i = r[a];
    if (i["s-hn"] !== hostTagName && i["s-ol"]) {
      insertBefore(parentReferenceNode(i), i, referenceNode(i));
      i["s-ol"].remove();
      i["s-ol"] = void 0;
      i["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (t) {
      putBackInOriginalLocation(i, t);
    }
  }
  plt.p &= ~1;
};
var addVnodes = function(e, t, r, n, a, i) {
  var o = e["s-cr"] && e["s-cr"].parentNode || e;
  var l;
  if (o.shadowRoot && o.tagName === hostTagName) {
    o = o.shadowRoot;
  }
  for (; a <= i; ++a) {
    if (n[a]) {
      l = createElm(null, r, a, e);
      if (l) {
        n[a].m = l;
        insertBefore(o, l, referenceNode(t));
      }
    }
  }
};
var removeVnodes = function(e, t, r) {
  for (var n = t; n <= r; ++n) {
    var a = e[n];
    if (a) {
      var i = a.m;
      nullifyVNodeRefs(a);
      if (i) {
        {
          checkSlotFallbackVisibility = true;
          if (i["s-ol"]) {
            i["s-ol"].remove();
          } else {
            putBackInOriginalLocation(i, true);
          }
        }
        i.remove();
      }
    }
  }
};
var updateChildren = function(e, t, r, n, a) {
  if (a === void 0) {
    a = false;
  }
  var i = 0;
  var o = 0;
  var l = 0;
  var s = 0;
  var u = t.length - 1;
  var f = t[0];
  var c = t[u];
  var v = n.length - 1;
  var d = n[0];
  var p = n[v];
  var h2;
  var m;
  while (i <= u && o <= v) {
    if (f == null) {
      f = t[++i];
    } else if (c == null) {
      c = t[--u];
    } else if (d == null) {
      d = n[++o];
    } else if (p == null) {
      p = n[--v];
    } else if (isSameVnode(f, d, a)) {
      patch(f, d, a);
      f = t[++i];
      d = n[++o];
    } else if (isSameVnode(c, p, a)) {
      patch(c, p, a);
      c = t[--u];
      p = n[--v];
    } else if (isSameVnode(f, p, a)) {
      if (f.h === "slot" || p.h === "slot") {
        putBackInOriginalLocation(f.m.parentNode, false);
      }
      patch(f, p, a);
      insertBefore(e, f.m, c.m.nextSibling);
      f = t[++i];
      p = n[--v];
    } else if (isSameVnode(c, d, a)) {
      if (f.h === "slot" || p.h === "slot") {
        putBackInOriginalLocation(c.m.parentNode, false);
      }
      patch(c, d, a);
      insertBefore(e, c.m, f.m);
      c = t[--u];
      d = n[++o];
    } else {
      l = -1;
      {
        for (s = i; s <= u; ++s) {
          if (t[s] && t[s].u !== null && t[s].u === d.u) {
            l = s;
            break;
          }
        }
      }
      if (l >= 0) {
        m = t[l];
        if (m.h !== d.h) {
          h2 = createElm(t && t[o], r, l, e);
        } else {
          patch(m, d, a);
          t[l] = void 0;
          h2 = m.m;
        }
        d = n[++o];
      } else {
        h2 = createElm(t && t[o], r, o, e);
        d = n[++o];
      }
      if (h2) {
        {
          insertBefore(parentReferenceNode(f.m), h2, referenceNode(f.m));
        }
      }
    }
  }
  if (i > u) {
    addVnodes(e, n[v + 1] == null ? null : n[v + 1].m, r, n, o, v);
  } else if (o > v) {
    removeVnodes(t, i, u);
  }
};
var isSameVnode = function(e, t, r) {
  if (r === void 0) {
    r = false;
  }
  if (e.h === t.h) {
    if (e.h === "slot") {
      return e.v === t.v;
    }
    if (!r) {
      return e.u === t.u;
    }
    return true;
  }
  return false;
};
var referenceNode = function(e) {
  return e && e["s-ol"] || e;
};
var parentReferenceNode = function(e) {
  return (e["s-ol"] ? e["s-ol"] : e).parentNode;
};
var patch = function(e, t, r) {
  if (r === void 0) {
    r = false;
  }
  var n = t.m = e.m;
  var a = e.l;
  var i = t.l;
  var o = t.h;
  var l = t.i;
  var s;
  if (l === null) {
    {
      isSvgMode = o === "svg" ? true : o === "foreignObject" ? false : isSvgMode;
    }
    {
      if (o === "slot" && !useNativeShadowDom) {
        if (e.v !== t.v) {
          t.m["s-sn"] = t.v || "";
          relocateToHostRoot(t.m.parentElement);
        }
      } else {
        updateElement(e, t, isSvgMode);
      }
    }
    if (a !== null && i !== null) {
      updateChildren(n, a, t, i, r);
    } else if (i !== null) {
      if (e.i !== null) {
        n.textContent = "";
      }
      addVnodes(n, null, t, i, 0, i.length - 1);
    } else if (a !== null) {
      removeVnodes(a, 0, a.length - 1);
    }
    if (isSvgMode && o === "svg") {
      isSvgMode = false;
    }
  } else if (s = n["s-cr"]) {
    s.parentNode.textContent = l;
  } else if (e.i !== l) {
    n.data = l;
  }
};
var updateFallbackSlotVisibility = function(e) {
  var t = e.childNodes;
  for (var r = 0, n = t; r < n.length; r++) {
    var a = n[r];
    if (a.nodeType === 1) {
      if (a["s-sr"]) {
        var i = a["s-sn"];
        a.hidden = false;
        for (var o = 0, l = t; o < l.length; o++) {
          var s = l[o];
          if (s !== a) {
            if (s["s-hn"] !== a["s-hn"] || i !== "") {
              if (s.nodeType === 1 && (i === s.getAttribute("slot") || i === s["s-sn"]) || s.nodeType === 3 && i === s["s-sn"]) {
                a.hidden = true;
                break;
              }
            } else {
              if (s.nodeType === 1 || s.nodeType === 3 && s.textContent.trim() !== "") {
                a.hidden = true;
                break;
              }
            }
          }
        }
      }
      updateFallbackSlotVisibility(a);
    }
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = function(e) {
  var t;
  var r;
  var n;
  for (var a = 0, i = e.childNodes; a < i.length; a++) {
    var o = i[a];
    if (o["s-sr"] && (t = o["s-cr"]) && t.parentNode) {
      r = t.parentNode.childNodes;
      var l = o["s-sn"];
      var s = function() {
        t = r[n];
        if (!t["s-cn"] && !t["s-nr"] && t["s-hn"] !== o["s-hn"] && (!t["s-sh"] || t["s-sh"] !== o["s-hn"])) {
          if (isNodeLocatedInSlot(t, l)) {
            var e2 = relocateNodes.find(function(e3) {
              return e3.A === t;
            });
            checkSlotFallbackVisibility = true;
            t["s-sn"] = t["s-sn"] || l;
            if (e2) {
              e2.A["s-sh"] = o["s-hn"];
              e2.I = o;
            } else {
              t["s-sh"] = o["s-hn"];
              relocateNodes.push({ I: o, A: t });
            }
            if (t["s-sr"]) {
              relocateNodes.map(function(r2) {
                if (isNodeLocatedInSlot(r2.A, t["s-sn"])) {
                  e2 = relocateNodes.find(function(e3) {
                    return e3.A === t;
                  });
                  if (e2 && !r2.I) {
                    r2.I = e2.I;
                  }
                }
              });
            }
          } else if (!relocateNodes.some(function(e3) {
            return e3.A === t;
          })) {
            relocateNodes.push({ A: t });
          }
        }
      };
      for (n = r.length - 1; n >= 0; n--) {
        s();
      }
    }
    if (o.nodeType === 1) {
      markSlotContentForRelocation(o);
    }
  }
};
var isNodeLocatedInSlot = function(e, t) {
  if (e.nodeType === 1) {
    if (e.getAttribute("slot") === null && t === "") {
      return true;
    }
    if (e.getAttribute("slot") === t) {
      return true;
    }
    return false;
  }
  if (e["s-sn"] === t) {
    return true;
  }
  return t === "";
};
var nullifyVNodeRefs = function(e) {
  {
    e.o && e.o.ref && e.o.ref(null);
    e.l && e.l.map(nullifyVNodeRefs);
  }
};
var insertBefore = function(e, t, r) {
  var n = e == null ? void 0 : e.insertBefore(t, r);
  {
    setParentScopeIdAsClassName(t, e);
  }
  return n;
};
var findParentScopeId = function(e) {
  return e ? e["s-rsc"] || e["s-si"] || e["s-sc"] || findParentScopeId(e.parentElement) : void 0;
};
var setParentScopeIdAsClassName = function(e, t) {
  var r, n, a;
  if (e && t) {
    var i = e["s-rsc"];
    var o = findParentScopeId(t);
    i && ((r = e.classList) == null ? void 0 : r.contains(i)) && e.classList.remove(i);
    if (o) {
      e["s-rsc"] = o;
      !((n = e.classList) == null ? void 0 : n.contains(o)) && ((a = e.classList) == null ? void 0 : a.add(o));
    }
  }
};
var renderVdom = function(e, t, r) {
  if (r === void 0) {
    r = false;
  }
  var n, a, i, o, l;
  var s = e.$hostElement$;
  var u = e.k;
  var f = e.S || newVNode(null, null);
  var c = isHost(t) ? t : h(null, null, t);
  hostTagName = s.tagName;
  if (u.L) {
    c.o = c.o || {};
    u.L.map(function(e2) {
      var t2 = e2[0], r2 = e2[1];
      return c.o[r2] = s[t2];
    });
  }
  if (r && c.o) {
    for (var v = 0, d = Object.keys(c.o); v < d.length; v++) {
      var p = d[v];
      if (s.hasAttribute(p) && !["key", "ref", "style", "class"].includes(p)) {
        c.o[p] = s[p];
      }
    }
  }
  c.h = null;
  c.p |= 4;
  e.S = c;
  c.m = f.m = s.shadowRoot || s;
  {
    scopeId = s["s-sc"];
  }
  useNativeShadowDom = (u.p & 1) !== 0;
  {
    contentRef = s["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(f, c, r);
  {
    plt.p |= 1;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(c.m);
      for (var m = 0, S = relocateNodes; m < S.length; m++) {
        var g = S[m];
        var y = g.A;
        if (!y["s-ol"]) {
          var T = doc2.createTextNode("");
          T["s-nr"] = y;
          insertBefore(y.parentNode, y["s-ol"] = T, y);
        }
      }
      for (var C = 0, _ = relocateNodes; C < _.length; C++) {
        var g = _[C];
        var y = g.A;
        var b = g.I;
        if (b) {
          var N = b.parentNode;
          var w = b.nextSibling;
          if (w && w.nodeType === 1) {
            var T = (n = y["s-ol"]) == null ? void 0 : n.previousSibling;
            while (T) {
              var E = (a = T["s-nr"]) != null ? a : null;
              if (E && E["s-sn"] === y["s-sn"] && N === E.parentNode) {
                E = E.nextSibling;
                while (E === y || (E == null ? void 0 : E["s-sr"])) {
                  E = E == null ? void 0 : E.nextSibling;
                }
                if (!E || !E["s-nr"]) {
                  w = E;
                  break;
                }
              }
              T = T.previousSibling;
            }
          }
          if (!w && N !== y.parentNode || y.nextSibling !== w) {
            if (y !== w) {
              insertBefore(N, y, w);
              if (y.nodeType === 1) {
                y.hidden = (i = y["s-ih"]) != null ? i : false;
              }
            }
          }
          y && typeof b["s-rf"] === "function" && b["s-rf"](y);
        } else {
          if (y.nodeType === 1) {
            if (r) {
              y["s-ih"] = (o = y.hidden) != null ? o : false;
            }
            y.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(c.m);
    }
    plt.p &= ~1;
    relocateNodes.length = 0;
  }
  if (u.p & 2) {
    for (var R = 0, $ = c.m.childNodes; R < $.length; R++) {
      var D = $[R];
      if (D["s-hn"] !== hostTagName && !D["s-sh"]) {
        if (r && D["s-ih"] == null) {
          D["s-ih"] = (l = D.hidden) != null ? l : false;
        }
        D.hidden = true;
      }
    }
  }
  contentRef = void 0;
};
var attachToAncestor = function(e, t) {
  if (t && !e.O && t["s-p"]) {
    t["s-p"].push(new Promise(function(t2) {
      return e.O = t2;
    }));
  }
};
var scheduleUpdate = function(e, t) {
  {
    e.p |= 16;
  }
  if (e.p & 4) {
    e.p |= 512;
    return;
  }
  attachToAncestor(e, e.M);
  var r = function() {
    return dispatchHooks(e, t);
  };
  return writeTask(r);
};
var dispatchHooks = function(e, t) {
  var r = createTime("scheduleUpdate", e.k.H);
  var n = e.P;
  var a;
  if (t) {
    {
      e.p |= 256;
      if (e.V) {
        e.V.map(function(e2) {
          var t2 = e2[0], r2 = e2[1];
          return safeCall(n, t2, r2);
        });
        e.V = void 0;
      }
    }
    {
      a = safeCall(n, "componentWillLoad");
    }
  }
  {
    a = enqueue(a, function() {
      return safeCall(n, "componentWillRender");
    });
  }
  r();
  return enqueue(a, function() {
    return updateComponent(e, n, t);
  });
};
var enqueue = function(e, t) {
  return isPromisey(e) ? e.then(t) : t();
};
var isPromisey = function(e) {
  return e instanceof Promise || e && e.then && typeof e.then === "function";
};
var updateComponent = function(e, t, r) {
  return __awaiter(void 0, void 0, void 0, function() {
    var n, a, i, o, l, s, u;
    return __generator(this, function(f) {
      a = e.$hostElement$;
      i = createTime("update", e.k.H);
      o = a["s-rc"];
      if (r) {
        attachStyles(e);
      }
      l = createTime("render", e.k.H);
      {
        callRender(e, t, a, r);
      }
      if (o) {
        o.map(function(e2) {
          return e2();
        });
        a["s-rc"] = void 0;
      }
      l();
      i();
      {
        s = (n = a["s-p"]) != null ? n : [];
        u = function() {
          return postUpdateComponent(e);
        };
        if (s.length === 0) {
          u();
        } else {
          Promise.all(s).then(u);
          e.p |= 4;
          s.length = 0;
        }
      }
      return [2];
    });
  });
};
var callRender = function(e, t, r, n) {
  try {
    t = t.render && t.render();
    {
      e.p &= ~16;
    }
    {
      e.p |= 2;
    }
    {
      {
        {
          renderVdom(e, t, n);
        }
      }
    }
  } catch (t2) {
    consoleError(t2, e.$hostElement$);
  }
  return null;
};
var postUpdateComponent = function(e) {
  var t = e.k.H;
  var r = e.$hostElement$;
  var n = createTime("postUpdate", t);
  var a = e.P;
  var i = e.M;
  {
    safeCall(a, "componentDidRender");
  }
  if (!(e.p & 64)) {
    e.p |= 64;
    {
      addHydratedFlag(r);
    }
    {
      safeCall(a, "componentDidLoad");
    }
    n();
    {
      e.F(r);
      if (!i) {
        appDidLoad();
      }
    }
  } else {
    {
      safeCall(a, "componentDidUpdate");
    }
    n();
  }
  {
    e.j(r);
  }
  {
    if (e.O) {
      e.O();
      e.O = void 0;
    }
    if (e.p & 512) {
      nextTick(function() {
        return scheduleUpdate(e, false);
      });
    }
    e.p &= ~(4 | 512);
  }
};
var appDidLoad = function(e) {
  {
    addHydratedFlag(doc2.documentElement);
  }
  nextTick(function() {
    return emitEvent(win2, "appload", { detail: { namespace: NAMESPACE } });
  });
};
var safeCall = function(e, t, r) {
  if (e && e[t]) {
    try {
      return e[t](r);
    } catch (e2) {
      consoleError(e2);
    }
  }
  return void 0;
};
var addHydratedFlag = function(e) {
  return e.classList.add("hydrated");
};
var getValue = function(e, t) {
  return getHostRef(e).B.get(t);
};
var setValue = function(e, t, r, n) {
  var a = getHostRef(e);
  if (!a) {
    throw new Error(`Couldn't find host element for "`.concat(n.H, '" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).'));
  }
  var i = a.$hostElement$;
  var o = a.B.get(t);
  var l = a.p;
  var s = a.P;
  r = parsePropertyValue(r, n.U[t][0]);
  var u = Number.isNaN(o) && Number.isNaN(r);
  var f = r !== o && !u;
  if ((!(l & 8) || o === void 0) && f) {
    a.B.set(t, r);
    if (s) {
      if (n.q && l & 128) {
        var c = n.q[t];
        if (c) {
          c.map(function(e2) {
            try {
              s[e2](r, o, t);
            } catch (e3) {
              consoleError(e3, i);
            }
          });
        }
      }
      if ((l & (2 | 16)) === 2) {
        scheduleUpdate(a, false);
      }
    }
  }
};
var proxyComponent = function(e, t, r) {
  var n;
  var a = e.prototype;
  if (t.U) {
    if (e.watchers) {
      t.q = e.watchers;
    }
    var i = Object.entries(t.U);
    i.map(function(e2) {
      var n2 = e2[0], i2 = e2[1][0];
      if (i2 & 31 || r & 2 && i2 & 32) {
        Object.defineProperty(a, n2, { get: function() {
          return getValue(this, n2);
        }, set: function(e3) {
          setValue(this, n2, e3, t);
        }, configurable: true, enumerable: true });
      } else if (r & 1 && i2 & 64) {
        Object.defineProperty(a, n2, { value: function() {
          var e3 = [];
          for (var t2 = 0; t2 < arguments.length; t2++) {
            e3[t2] = arguments[t2];
          }
          var r2;
          var a2 = getHostRef(this);
          return (r2 = a2 == null ? void 0 : a2.Y) == null ? void 0 : r2.then(function() {
            var t3;
            return (t3 = a2.P) == null ? void 0 : t3[n2].apply(t3, e3);
          });
        } });
      }
    });
    if (r & 1) {
      var o = /* @__PURE__ */ new Map();
      a.attributeChangedCallback = function(e2, r2, n2) {
        var i2 = this;
        plt.jmp(function() {
          var l;
          var s = o.get(e2);
          if (i2.hasOwnProperty(s)) {
            n2 = i2[s];
            delete i2[s];
          } else if (a.hasOwnProperty(s) && typeof i2[s] === "number" && i2[s] == n2) {
            return;
          } else if (s == null) {
            var u = getHostRef(i2);
            var f = u == null ? void 0 : u.p;
            if (f && !(f & 8) && f & 128 && n2 !== r2) {
              var c = u.P;
              var v = (l = t.q) == null ? void 0 : l[e2];
              v == null ? void 0 : v.forEach(function(t2) {
                if (c[t2] != null) {
                  c[t2].call(c, n2, r2, e2);
                }
              });
            }
            return;
          }
          i2[s] = n2 === null && typeof i2[s] === "boolean" ? false : n2;
        });
      };
      e.observedAttributes = Array.from(new Set(__spreadArray(__spreadArray([], Object.keys((n = t.q) != null ? n : {}), true), i.filter(function(e2) {
        var t2 = e2[0], r2 = e2[1];
        return r2[0] & 15;
      }).map(function(e2) {
        var r2 = e2[0], n2 = e2[1];
        var a2;
        var i2 = n2[1] || r2;
        o.set(i2, r2);
        if (n2[0] & 512) {
          (a2 = t.L) == null ? void 0 : a2.push([r2, i2]);
        }
        return i2;
      }), true)));
    }
  }
  return e;
};
var initializeComponent = function(e, t, r, n) {
  return __awaiter(void 0, void 0, void 0, function() {
    var n2, a, i, o, l, s, u, f, c;
    return __generator(this, function(v) {
      switch (v.label) {
        case 0:
          if (!((t.p & 32) === 0))
            return [3, 5];
          t.p |= 32;
          a = r.W;
          if (!a)
            return [3, 3];
          n2 = loadModule(r);
          if (!n2.then)
            return [3, 2];
          i = uniqueTime();
          return [4, n2];
        case 1:
          n2 = v.sent();
          i();
          v.label = 2;
        case 2:
          if (!n2.isProxied) {
            {
              r.q = n2.watchers;
            }
            proxyComponent(n2, r, 2);
            n2.isProxied = true;
          }
          o = createTime("createInstance", r.H);
          {
            t.p |= 8;
          }
          try {
            new n2(t);
          } catch (e2) {
            consoleError(e2);
          }
          {
            t.p &= ~8;
          }
          {
            t.p |= 128;
          }
          o();
          fireConnectedCallback(t.P);
          return [3, 4];
        case 3:
          n2 = e.constructor;
          customElements.whenDefined(r.H).then(function() {
            return t.p |= 128;
          });
          v.label = 4;
        case 4:
          if (n2.style) {
            l = n2.style;
            if (typeof l !== "string") {
              l = l[t.$ = computeMode(e)];
            }
            s = getScopeId(r, t.$);
            if (!styles.has(s)) {
              u = createTime("registerStyles", r.H);
              registerStyle(s, l, !!(r.p & 1));
              u();
            }
          }
          v.label = 5;
        case 5:
          f = t.M;
          c = function() {
            return scheduleUpdate(t, true);
          };
          if (f && f["s-rc"]) {
            f["s-rc"].push(c);
          } else {
            c();
          }
          return [2];
      }
    });
  });
};
var fireConnectedCallback = function(e) {
  {
    safeCall(e, "connectedCallback");
  }
};
var connectedCallback = function(e) {
  if ((plt.p & 1) === 0) {
    var t = getHostRef(e);
    var r = t.k;
    var n = createTime("connectedCallback", r.H);
    if (!(t.p & 1)) {
      t.p |= 1;
      var a = void 0;
      {
        a = e.getAttribute(HYDRATE_ID);
        if (a) {
          if (r.p & 1) {
            var i = addStyle(e.shadowRoot, r, e.getAttribute("s-mode"));
            e.classList.remove(i + "-h", i + "-s");
          }
          initializeClientHydrate(e, r.H, a, t);
        }
      }
      if (!a) {
        if (r.p & (4 | 8)) {
          setContentReference(e);
        }
      }
      {
        var o = e;
        while (o = o.parentNode || o.host) {
          if (o.nodeType === 1 && o.hasAttribute("s-id") && o["s-p"] || o["s-p"]) {
            attachToAncestor(t, t.M = o);
            break;
          }
        }
      }
      if (r.U) {
        Object.entries(r.U).map(function(t2) {
          var r2 = t2[0], n2 = t2[1][0];
          if (n2 & 31 && e.hasOwnProperty(r2)) {
            var a2 = e[r2];
            delete e[r2];
            e[r2] = a2;
          }
        });
      }
      {
        initializeComponent(e, t, r);
      }
    } else {
      addHostEventListeners(e, t, r.X);
      if (t == null ? void 0 : t.P) {
        fireConnectedCallback(t.P);
      } else if (t == null ? void 0 : t.G) {
        t.G.then(function() {
          return fireConnectedCallback(t.P);
        });
      }
    }
    n();
  }
};
var setContentReference = function(e) {
  var t = e["s-cr"] = doc2.createComment("");
  t["s-cn"] = true;
  insertBefore(e, t, e.firstChild);
};
var disconnectInstance = function(e) {
  {
    safeCall(e, "disconnectedCallback");
  }
};
var disconnectedCallback = function(e) {
  return __awaiter(void 0, void 0, void 0, function() {
    var t;
    return __generator(this, function(r) {
      if ((plt.p & 1) === 0) {
        t = getHostRef(e);
        {
          if (t.K) {
            t.K.map(function(e2) {
              return e2();
            });
            t.K = void 0;
          }
        }
        if (t == null ? void 0 : t.P) {
          disconnectInstance(t.P);
        } else if (t == null ? void 0 : t.G) {
          t.G.then(function() {
            return disconnectInstance(t.P);
          });
        }
      }
      return [2];
    });
  });
};
var patchPseudoShadowDom = function(e, t) {
  patchCloneNode(e);
  patchSlotAppendChild(e);
  patchSlotAppend(e);
  patchSlotPrepend(e);
  patchSlotInsertAdjacentElement(e);
  patchSlotInsertAdjacentHTML(e);
  patchSlotInsertAdjacentText(e);
  patchTextContent(e);
  patchChildSlotNodes(e, t);
  patchSlotRemoveChild(e);
};
var patchCloneNode = function(e) {
  var t = e.cloneNode;
  e.cloneNode = function(e2) {
    var r = this;
    var n = r.shadowRoot && supportsShadow;
    var a = t.call(r, n ? e2 : false);
    if (!n && e2) {
      var i = 0;
      var o = void 0, l = void 0;
      var s = ["s-id", "s-cr", "s-lr", "s-rc", "s-sc", "s-p", "s-cn", "s-sr", "s-sn", "s-hn", "s-ol", "s-nr", "s-si", "s-rf", "s-rsc"];
      for (; i < r.childNodes.length; i++) {
        o = r.childNodes[i]["s-nr"];
        l = s.every(function(e3) {
          return !r.childNodes[i][e3];
        });
        if (o) {
          if (a.__appendChild) {
            a.__appendChild(o.cloneNode(true));
          } else {
            a.appendChild(o.cloneNode(true));
          }
        }
        if (l) {
          a.appendChild(r.childNodes[i].cloneNode(true));
        }
      }
    }
    return a;
  };
};
var patchSlotAppendChild = function(e) {
  e.__appendChild = e.appendChild;
  e.appendChild = function(e2) {
    var t = e2["s-sn"] = getSlotName(e2);
    var r = getHostSlotNode(this.childNodes, t, this.tagName);
    if (r) {
      var n = getHostSlotChildNodes(r, t);
      var a = n[n.length - 1];
      var i = insertBefore(a.parentNode, e2, a.nextSibling);
      updateFallbackSlotVisibility(this);
      return i;
    }
    return this.__appendChild(e2);
  };
};
var patchSlotRemoveChild = function(e) {
  e.__removeChild = e.removeChild;
  e.removeChild = function(e2) {
    if (e2 && typeof e2["s-sn"] !== "undefined") {
      var t = getHostSlotNode(this.childNodes, e2["s-sn"], this.tagName);
      if (t) {
        var r = getHostSlotChildNodes(t, e2["s-sn"]);
        var n = r.find(function(t2) {
          return t2 === e2;
        });
        if (n) {
          n.remove();
          updateFallbackSlotVisibility(this);
          return;
        }
      }
    }
    return this.__removeChild(e2);
  };
};
var patchSlotPrepend = function(e) {
  var t = e.prepend;
  e.prepend = function() {
    var e2 = this;
    var r = [];
    for (var n = 0; n < arguments.length; n++) {
      r[n] = arguments[n];
    }
    r.forEach(function(r2) {
      if (typeof r2 === "string") {
        r2 = e2.ownerDocument.createTextNode(r2);
      }
      var n2 = r2["s-sn"] = getSlotName(r2);
      var a = getHostSlotNode(e2.childNodes, n2, e2.tagName);
      if (a) {
        var i = document.createTextNode("");
        i["s-nr"] = r2;
        a["s-cr"].parentNode.__appendChild(i);
        r2["s-ol"] = i;
        var o = getHostSlotChildNodes(a, n2);
        var l = o[0];
        return insertBefore(l.parentNode, r2, l.nextSibling);
      }
      if (r2.nodeType === 1 && !!r2.getAttribute("slot")) {
        r2.hidden = true;
      }
      return t.call(e2, r2);
    });
  };
};
var patchSlotAppend = function(e) {
  e.append = function() {
    var e2 = this;
    var t = [];
    for (var r = 0; r < arguments.length; r++) {
      t[r] = arguments[r];
    }
    t.forEach(function(t2) {
      if (typeof t2 === "string") {
        t2 = e2.ownerDocument.createTextNode(t2);
      }
      e2.appendChild(t2);
    });
  };
};
var patchSlotInsertAdjacentHTML = function(e) {
  var t = e.insertAdjacentHTML;
  e.insertAdjacentHTML = function(e2, r) {
    if (e2 !== "afterbegin" && e2 !== "beforeend") {
      return t.call(this, e2, r);
    }
    var n = this.ownerDocument.createElement("_");
    var a;
    n.innerHTML = r;
    if (e2 === "afterbegin") {
      while (a = n.firstChild) {
        this.prepend(a);
      }
    } else if (e2 === "beforeend") {
      while (a = n.firstChild) {
        this.append(a);
      }
    }
  };
};
var patchSlotInsertAdjacentText = function(e) {
  e.insertAdjacentText = function(e2, t) {
    this.insertAdjacentHTML(e2, t);
  };
};
var patchSlotInsertAdjacentElement = function(e) {
  var t = e.insertAdjacentElement;
  e.insertAdjacentElement = function(e2, r) {
    if (e2 !== "afterbegin" && e2 !== "beforeend") {
      return t.call(this, e2, r);
    }
    if (e2 === "afterbegin") {
      this.prepend(r);
      return r;
    } else if (e2 === "beforeend") {
      this.append(r);
      return r;
    }
    return r;
  };
};
var patchTextContent = function(e) {
  var t = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
  Object.defineProperty(e, "__textContent", t);
  {
    Object.defineProperty(e, "textContent", { get: function() {
      var e2 = getAllChildSlotNodes(this.childNodes);
      var t2 = e2.map(function(e3) {
        var t3, r;
        var n = [];
        var a = e3.nextSibling;
        while (a && a["s-sn"] === e3["s-sn"]) {
          if (a.nodeType === 3 || a.nodeType === 1) {
            n.push((r = (t3 = a.textContent) == null ? void 0 : t3.trim()) != null ? r : "");
          }
          a = a.nextSibling;
        }
        return n.filter(function(e4) {
          return e4 !== "";
        }).join(" ");
      }).filter(function(e3) {
        return e3 !== "";
      }).join(" ");
      return " " + t2 + " ";
    }, set: function(e2) {
      var t2 = this;
      var r = getAllChildSlotNodes(this.childNodes);
      r.forEach(function(r2) {
        var n = r2.nextSibling;
        while (n && n["s-sn"] === r2["s-sn"]) {
          var a = n;
          n = n.nextSibling;
          a.remove();
        }
        if (r2["s-sn"] === "") {
          var i = t2.ownerDocument.createTextNode(e2);
          i["s-sn"] = "";
          insertBefore(r2.parentElement, i, r2.nextSibling);
        } else {
          r2.remove();
        }
      });
    } });
  }
};
var patchChildSlotNodes = function(e, t) {
  var r = function(e2) {
    __extends(t2, e2);
    function t2() {
      return e2 !== null && e2.apply(this, arguments) || this;
    }
    t2.prototype.item = function(e3) {
      return this[e3];
    };
    return t2;
  }(Array);
  if (t.p & 8) {
    var n = e.__lookupGetter__("childNodes");
    Object.defineProperty(e, "children", { get: function() {
      return this.childNodes.map(function(e2) {
        return e2.nodeType === 1;
      });
    } });
    Object.defineProperty(e, "childElementCount", { get: function() {
      return e.children.length;
    } });
    Object.defineProperty(e, "childNodes", { get: function() {
      var e2 = n.call(this);
      if ((plt.p & 1) === 0 && getHostRef(this).p & 2) {
        var t2 = new r();
        for (var a = 0; a < e2.length; a++) {
          var i = e2[a]["s-nr"];
          if (i) {
            t2.push(i);
          }
        }
        return t2;
      }
      return r.from(e2);
    } });
  }
};
var getAllChildSlotNodes = function(e) {
  var t = [];
  for (var r = 0, n = Array.from(e); r < n.length; r++) {
    var a = n[r];
    if (a["s-sr"]) {
      t.push(a);
    }
    t.push.apply(t, getAllChildSlotNodes(a.childNodes));
  }
  return t;
};
var getSlotName = function(e) {
  return e["s-sn"] || e.nodeType === 1 && e.getAttribute("slot") || "";
};
var getHostSlotNode = function(e, t, r) {
  var n = 0;
  var a;
  for (; n < e.length; n++) {
    a = e[n];
    if (a["s-sr"] && a["s-sn"] === t && a["s-hn"] === r) {
      return a;
    }
    a = getHostSlotNode(a.childNodes, t, r);
    if (a) {
      return a;
    }
  }
  return null;
};
var getHostSlotChildNodes = function(e, t) {
  var r = [e];
  while ((e = e.nextSibling) && e["s-sn"] === t) {
    r.push(e);
  }
  return r;
};
var bootstrapLazy = function(e, t) {
  if (t === void 0) {
    t = {};
  }
  var r;
  var n = createTime();
  var a = [];
  var i = t.exclude || [];
  var o = win2.customElements;
  var l = doc2.head;
  var s = l.querySelector("meta[charset]");
  var u = doc2.createElement("style");
  var f = [];
  var c = doc2.querySelectorAll("[".concat(HYDRATED_STYLE_ID, "]"));
  var v;
  var d = true;
  var p = 0;
  Object.assign(plt, t);
  plt.t = new URL(t.resourcesUrl || "./", doc2.baseURI).href;
  {
    plt.p |= 2;
  }
  {
    for (; p < c.length; p++) {
      registerStyle(c[p].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(c[p].innerHTML), true);
    }
  }
  var h2 = false;
  e.map(function(e2) {
    e2[1].map(function(t2) {
      var r2;
      var n2 = { p: t2[0], H: t2[1], U: t2[2], X: t2[3] };
      if (n2.p & 4) {
        h2 = true;
      }
      {
        n2.U = t2[2];
      }
      {
        n2.X = t2[3];
      }
      {
        n2.L = [];
      }
      {
        n2.q = (r2 = t2[4]) != null ? r2 : {};
      }
      var l2 = n2.H;
      var s2 = function(e3) {
        __extends(t3, e3);
        function t3(t4) {
          var r3 = e3.call(this, t4) || this;
          t4 = r3;
          registerHost(t4, n2);
          if (n2.p & 1) {
            {
              {
                t4.attachShadow({ mode: "open", delegatesFocus: !!(n2.p & 16) });
              }
            }
          }
          return r3;
        }
        t3.prototype.connectedCallback = function() {
          var e4 = this;
          if (v) {
            clearTimeout(v);
            v = null;
          }
          if (d) {
            f.push(this);
          } else {
            plt.jmp(function() {
              return connectedCallback(e4);
            });
          }
        };
        t3.prototype.disconnectedCallback = function() {
          var e4 = this;
          plt.jmp(function() {
            return disconnectedCallback(e4);
          });
        };
        t3.prototype.componentOnReady = function() {
          return getHostRef(this).G;
        };
        return t3;
      }(HTMLElement);
      {
        if (n2.p & 2) {
          patchPseudoShadowDom(s2.prototype, n2);
        }
      }
      n2.W = e2[0];
      if (!i.includes(l2) && !o.get(l2)) {
        a.push(l2);
        o.define(l2, proxyComponent(s2, n2, 1));
      }
    });
  });
  if (a.length > 0) {
    if (h2) {
      u.textContent += SLOT_FB_CSS;
    }
    {
      u.textContent += a + HYDRATED_CSS;
    }
    if (u.innerHTML.length) {
      u.setAttribute("data-styles", "");
      var m = (r = plt.D) != null ? r : queryNonceMetaTagContent(doc2);
      if (m != null) {
        u.setAttribute("nonce", m);
      }
      l.insertBefore(u, s ? s.nextSibling : l.firstChild);
    }
  }
  d = false;
  if (f.length) {
    f.map(function(e2) {
      return e2.connectedCallback();
    });
  } else {
    {
      plt.jmp(function() {
        return v = setTimeout(appDidLoad, 30);
      });
    }
  }
  n();
};
var addHostEventListeners = function(e, t, r, n) {
  if (r) {
    r.map(function(r2) {
      var n2 = r2[0], a = r2[1], i = r2[2];
      var o = getHostListenerTarget(e, n2);
      var l = hostListenerProxy(t, i);
      var s = hostListenerOpts(n2);
      plt.ael(o, a, l, s);
      (t.K = t.K || []).push(function() {
        return plt.rel(o, a, l, s);
      });
    });
  }
};
var hostListenerProxy = function(e, t) {
  return function(r) {
    try {
      {
        if (e.p & 256) {
          e.P[t](r);
        } else {
          (e.V = e.V || []).push([t, r]);
        }
      }
    } catch (e2) {
      consoleError(e2);
    }
  };
};
var getHostListenerTarget = function(e, t) {
  if (t & 4)
    return doc2;
  if (t & 8)
    return win2;
  if (t & 16)
    return doc2.body;
  return e;
};
var hostListenerOpts = function(e) {
  return supportsListenerOptions ? { passive: (e & 1) !== 0, capture: (e & 2) !== 0 } : (e & 2) !== 0;
};
var hostRefs = /* @__PURE__ */ new WeakMap();
var getHostRef = function(e) {
  return hostRefs.get(e);
};
var registerHost = function(e, t) {
  var r = { p: 0, $hostElement$: e, k: t, B: /* @__PURE__ */ new Map() };
  {
    r.Y = new Promise(function(e2) {
      return r.j = e2;
    });
  }
  {
    r.G = new Promise(function(e2) {
      return r.F = e2;
    });
    e["s-p"] = [];
    e["s-rc"] = [];
  }
  addHostEventListeners(e, r, t.X);
  return hostRefs.set(e, r);
};
var isMemberInElement = function(e, t) {
  return t in e;
};
var consoleError = function(e, t) {
  return (0, console.error)(e, t);
};
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = function(e, t, r) {
  var n = e.H.replace(/-/g, "_");
  var a = e.W;
  var i = cmpModules.get(a);
  if (i) {
    return i[n];
  }
  return import("./".concat(a, ".entry.js").concat("")).then(function(e2) {
    {
      cmpModules.set(a, e2);
    }
    return e2[n];
  }, consoleError);
};
var styles = /* @__PURE__ */ new Map();
var modeResolutionChain = [];
var win2 = typeof window !== "undefined" ? window : {};
var doc2 = win2.document || { head: {} };
var H = win2.HTMLElement || /* @__PURE__ */ function() {
  function e() {
  }
  return e;
}();
var plt = { p: 0, t: "", jmp: function(e) {
  return e();
}, raf: function(e) {
  return requestAnimationFrame(e);
}, ael: function(e, t, r, n) {
  return e.addEventListener(t, r, n);
}, rel: function(e, t, r, n) {
  return e.removeEventListener(t, r, n);
}, ce: function(e, t) {
  return new CustomEvent(e, t);
} };
var setPlatformHelpers = function(e) {
  Object.assign(plt, e);
};
var supportsShadow = true;
var supportsListenerOptions = function() {
  var e = false;
  try {
    doc2.addEventListener("e", null, Object.defineProperty({}, "passive", { get: function() {
      e = true;
    } }));
  } catch (e2) {
  }
  return e;
}();
var promiseResolve = function(e) {
  return Promise.resolve(e);
};
var supportsConstructableStylesheets = function() {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
}();
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = function(e, t) {
  return function(r) {
    e.push(r);
    if (!queuePending) {
      queuePending = true;
      if (t && plt.p & 4) {
        nextTick(flush);
      } else {
        plt.raf(flush);
      }
    }
  };
};
var consume = function(e) {
  for (var t = 0; t < e.length; t++) {
    try {
      e[t](performance.now());
    } catch (e2) {
      consoleError(e2);
    }
  }
  e.length = 0;
};
var flush = function() {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = function(e) {
  return promiseResolve().then(e);
};
var readTask = queueTask(queueDomReads, false);
var writeTask = queueTask(queueDomWrites, true);

// node_modules/@ionic/core/dist/esm-es5/ionic-global-8180d812.js
var Config = function() {
  function i() {
    this.m = /* @__PURE__ */ new Map();
  }
  i.prototype.reset = function(i2) {
    this.m = new Map(Object.entries(i2));
  };
  i.prototype.get = function(i2, t) {
    var n = this.m.get(i2);
    return n !== void 0 ? n : t;
  };
  i.prototype.getBoolean = function(i2, t) {
    if (t === void 0) {
      t = false;
    }
    var n = this.m.get(i2);
    if (n === void 0) {
      return t;
    }
    if (typeof n === "string") {
      return n === "true";
    }
    return !!n;
  };
  i.prototype.getNumber = function(i2, t) {
    var n = parseFloat(this.m.get(i2));
    return isNaN(n) ? t !== void 0 ? t : NaN : n;
  };
  i.prototype.set = function(i2, t) {
    this.m.set(i2, t);
  };
  return i;
}();
var config = new Config();
var configFromSession = function(i) {
  try {
    var t = i.sessionStorage.getItem(IONIC_SESSION_KEY);
    return t !== null ? JSON.parse(t) : {};
  } catch (i2) {
    return {};
  }
};
var saveConfig = function(i, t) {
  try {
    i.sessionStorage.setItem(IONIC_SESSION_KEY, JSON.stringify(t));
  } catch (i2) {
    return;
  }
};
var configFromURL = function(i) {
  var t = {};
  i.location.search.slice(1).split("&").map(function(i2) {
    return i2.split("=");
  }).map(function(i2) {
    var t2 = i2[0], n = i2[1];
    try {
      return [decodeURIComponent(t2), decodeURIComponent(n)];
    } catch (i3) {
      return ["", ""];
    }
  }).filter(function(i2) {
    var t2 = i2[0];
    return startsWith(t2, IONIC_PREFIX);
  }).map(function(i2) {
    var t2 = i2[0], n = i2[1];
    return [t2.slice(IONIC_PREFIX.length), n];
  }).forEach(function(i2) {
    var n = i2[0], r = i2[1];
    t[n] = r;
  });
  return t;
};
var startsWith = function(i, t) {
  return i.substr(0, t.length) === t;
};
var IONIC_PREFIX = "ionic:";
var IONIC_SESSION_KEY = "ionic-persist-config";
var getPlatforms = function(i) {
  return setupPlatforms(i);
};
var isPlatform = function(i, t) {
  if (typeof i === "string") {
    t = i;
    i = void 0;
  }
  return getPlatforms(i).includes(t);
};
var setupPlatforms = function(i) {
  if (i === void 0) {
    i = window;
  }
  if (typeof i === "undefined") {
    return [];
  }
  i.Ionic = i.Ionic || {};
  var t = i.Ionic.platforms;
  if (t == null) {
    t = i.Ionic.platforms = detectPlatforms(i);
    t.forEach(function(t2) {
      return i.document.documentElement.classList.add("plt-".concat(t2));
    });
  }
  return t;
};
var detectPlatforms = function(i) {
  var t = config.get("platform");
  return Object.keys(PLATFORMS_MAP).filter(function(n) {
    var r = t === null || t === void 0 ? void 0 : t[n];
    return typeof r === "function" ? r(i) : PLATFORMS_MAP[n](i);
  });
};
var isMobileWeb = function(i) {
  return isMobile(i) && !isHybrid(i);
};
var isIpad = function(i) {
  if (testUserAgent(i, /iPad/i)) {
    return true;
  }
  if (testUserAgent(i, /Macintosh/i) && isMobile(i)) {
    return true;
  }
  return false;
};
var isIphone = function(i) {
  return testUserAgent(i, /iPhone/i);
};
var isIOS = function(i) {
  return testUserAgent(i, /iPhone|iPod/i) || isIpad(i);
};
var isAndroid = function(i) {
  return testUserAgent(i, /android|sink/i);
};
var isAndroidTablet = function(i) {
  return isAndroid(i) && !testUserAgent(i, /mobile/i);
};
var isPhablet = function(i) {
  var t = i.innerWidth;
  var n = i.innerHeight;
  var r = Math.min(t, n);
  var e = Math.max(t, n);
  return r > 390 && r < 520 && e > 620 && e < 800;
};
var isTablet = function(i) {
  var t = i.innerWidth;
  var n = i.innerHeight;
  var r = Math.min(t, n);
  var e = Math.max(t, n);
  return isIpad(i) || isAndroidTablet(i) || r > 460 && r < 820 && e > 780 && e < 1400;
};
var isMobile = function(i) {
  return matchMedia(i, "(any-pointer:coarse)");
};
var isDesktop = function(i) {
  return !isMobile(i);
};
var isHybrid = function(i) {
  return isCordova(i) || isCapacitorNative(i);
};
var isCordova = function(i) {
  return !!(i["cordova"] || i["phonegap"] || i["PhoneGap"]);
};
var isCapacitorNative = function(i) {
  var t = i["Capacitor"];
  return !!(t === null || t === void 0 ? void 0 : t.isNative);
};
var isElectron = function(i) {
  return testUserAgent(i, /electron/i);
};
var isPWA = function(i) {
  var t;
  return !!(((t = i.matchMedia) === null || t === void 0 ? void 0 : t.call(i, "(display-mode: standalone)").matches) || i.navigator.standalone);
};
var testUserAgent = function(i, t) {
  return t.test(i.navigator.userAgent);
};
var matchMedia = function(i, t) {
  var n;
  return (n = i.matchMedia) === null || n === void 0 ? void 0 : n.call(i, t).matches;
};
var PLATFORMS_MAP = { ipad: isIpad, iphone: isIphone, ios: isIOS, android: isAndroid, phablet: isPhablet, tablet: isTablet, cordova: isCordova, capacitor: isCapacitorNative, electron: isElectron, pwa: isPWA, mobile: isMobile, mobileweb: isMobileWeb, desktop: isDesktop, hybrid: isHybrid };
var defaultMode;
var getIonMode = function(i) {
  return i && getMode(i) || defaultMode;
};
var initialize = function(i) {
  if (i === void 0) {
    i = {};
  }
  if (typeof window === "undefined") {
    return;
  }
  var t = window.document;
  var n = window;
  var r = n.Ionic = n.Ionic || {};
  var e = {};
  if (i._ael) {
    e.ael = i._ael;
  }
  if (i._rel) {
    e.rel = i._rel;
  }
  if (i._ce) {
    e.ce = i._ce;
  }
  setPlatformHelpers(e);
  var o = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, configFromSession(n)), { persistConfig: false }), r.config), configFromURL(n)), i);
  config.reset(o);
  if (config.getBoolean("persistConfig")) {
    saveConfig(n, o);
  }
  setupPlatforms(n);
  r.config = config;
  r.mode = defaultMode = config.get("mode", t.documentElement.getAttribute("mode") || (isPlatform(n, "ios") ? "ios" : "md"));
  config.set("mode", defaultMode);
  t.documentElement.setAttribute("mode", defaultMode);
  t.documentElement.classList.add(defaultMode);
  if (config.getBoolean("_testing")) {
    config.set("animated", false);
  }
  var a = function(i2) {
    var t2;
    return (t2 = i2.tagName) === null || t2 === void 0 ? void 0 : t2.startsWith("ION-");
  };
  var s = function(i2) {
    return ["ios", "md"].includes(i2);
  };
  setMode(function(i2) {
    while (i2) {
      var t2 = i2.mode || i2.getAttribute("mode");
      if (t2) {
        if (s(t2)) {
          return t2;
        } else if (a(i2)) {
          console.warn('Invalid ionic mode: "' + t2 + '", expected: "ios" or "md"');
        }
      }
      i2 = i2.parentElement;
    }
    return defaultMode;
  });
};

// node_modules/@ionic/core/dist/esm-es5/index-9b0d46f4.js
var printIonWarning = function(r) {
  var n = [];
  for (var o = 1; o < arguments.length; o++) {
    n[o - 1] = arguments[o];
  }
  return console.warn.apply(console, __spreadArray(["[Ionic Warning]: ".concat(r)], n, false));
};

// node_modules/@ionic/core/dist/esm-es5/helpers-da915de8.js
var componentOnReady = function(r, a) {
  if (r.componentOnReady) {
    r.componentOnReady().then(function(r2) {
      return a(r2);
    });
  } else {
    raf(function() {
      return a(r);
    });
  }
};
var raf = function(r) {
  if (typeof __zone_symbol__requestAnimationFrame === "function") {
    return __zone_symbol__requestAnimationFrame(r);
  }
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame(r);
  }
  return setTimeout(r);
};

// node_modules/@ionic/core/dist/esm-es5/index-91ed2172.js
var moveFocus = function(n) {
  n.tabIndex = -1;
  n.focus();
};
var isVisible = function(n) {
  return n.offsetParent !== null;
};
var createFocusController = function() {
  var n = function(n2) {
    var e2 = config.get("focusManagerPriority", false);
    if (e2) {
      var r = document.activeElement;
      if (r !== null && (n2 === null || n2 === void 0 ? void 0 : n2.contains(r))) {
        r.setAttribute(LAST_FOCUS, "true");
      }
    }
  };
  var e = function(n2) {
    var e2 = config.get("focusManagerPriority", false);
    if (Array.isArray(e2) && !n2.contains(document.activeElement)) {
      var r = n2.querySelector("[".concat(LAST_FOCUS, "]"));
      if (r && isVisible(r)) {
        moveFocus(r);
        return;
      }
      for (var i = 0, t = e2; i < t.length; i++) {
        var a = t[i];
        switch (a) {
          case "content":
            var o = n2.querySelector('main, [role="main"]');
            if (o && isVisible(o)) {
              moveFocus(o);
              return;
            }
            break;
          case "heading":
            var s = n2.querySelector('h1, [role="heading"][aria-level="1"]');
            if (s && isVisible(s)) {
              moveFocus(s);
              return;
            }
            break;
          case "banner":
            var u = n2.querySelector('header, [role="banner"]');
            if (u && isVisible(u)) {
              moveFocus(u);
              return;
            }
            break;
          default:
            printIonWarning("Unrecognized focus manager priority value ".concat(a));
            break;
        }
      }
      moveFocus(n2);
    }
  };
  return { saveViewFocus: n, setViewFocus: e };
};
var LAST_FOCUS = "ion-last-focus";
var focusController = createFocusController();
var getIonPageElement = function(n) {
  if (n.classList.contains("ion-page")) {
    return n;
  }
  var e = n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");
  if (e) {
    return e;
  }
  return n;
};

export {
  doc,
  createAnimation,
  bootstrapLazy,
  getPlatforms,
  isPlatform,
  getIonMode,
  initialize,
  printIonWarning,
  componentOnReady,
  getIonPageElement
};
/*! Bundled license information:

@ionic/core/dist/esm-es5/index-a5d50daf.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/animation-eab5a4ca.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-8d8c14b0.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-8d8c14b0.js:
  (*!__STENCIL_STATIC_IMPORT_SWITCH__*)

@ionic/core/dist/esm-es5/ionic-global-8180d812.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-9b0d46f4.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/helpers-da915de8.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)

@ionic/core/dist/esm-es5/index-91ed2172.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=chunk-UVJPMMJJ.js.map
