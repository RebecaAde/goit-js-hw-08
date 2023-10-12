// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5rKFT":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4a2b13bea74b541c";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"fFZ34":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _player = require("@vimeo/player");
var _playerDefault = parcelHelpers.interopDefault(_player);
var _throttle = require("lodash/throttle");
var _throttleDefault = parcelHelpers.interopDefault(_throttle);
const iframe = document.querySelector("iframe");
const player = new (0, _playerDefault.default)(iframe);
const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
};
player.on("timeupdate", (0, _throttleDefault.default)(onPlay, 1000));
const currentTime = Number(localStorage.getItem("videoplayer-current-time"));
player.setCurrentTime(currentTime).then(function(seconds) {}).catch(function(error) {
    error.name;
});

},{"@vimeo/player":"kmmUG","lodash/throttle":"lAb0D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmmUG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
/*! @vimeo/player v2.20.0 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */ var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, module) {
    return module = {
        exports: {}
    }, fn(module, module.exports), module.exports;
}
var runtime_1 = createCommonjsModule(function(module) {
    /**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined$1; // More compressible than void 0.
        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
            return obj[key];
        }
        try {
            // IE 8 has a broken Object.defineProperty that only works on DOM objects.
            define({}, "");
        } catch (err1) {
            define = function(obj, key, value) {
                return obj[key] = value;
            };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            generator._invoke = makeInvokeMethod(innerFn, self, context);
            return generator;
        }
        exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.
        function tryCatch(fn, obj, arg) {
            try {
                return {
                    type: "normal",
                    arg: fn.call(obj, arg)
                };
            } catch (err) {
                return {
                    type: "throw",
                    arg: err
                };
            }
        }
        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.
        var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.
        var IteratorPrototype = {};
        IteratorPrototype[iteratorSymbol] = function() {
            return this;
        };
        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.
        function defineIteratorMethods(prototype) {
            [
                "next",
                "throw",
                "return"
            ].forEach(function(method) {
                define(prototype, method, function(arg) {
                    return this._invoke(method, arg);
                });
            });
        }
        exports.isGeneratorFunction = function(genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };
        exports.mark = function(genFun) {
            if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            else {
                genFun.__proto__ = GeneratorFunctionPrototype;
                define(genFun, toStringTagSymbol, "GeneratorFunction");
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
        }; // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.
        exports.awrap = function(arg) {
            return {
                __await: arg
            };
        };
        function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
                var record = tryCatch(generator[method], generator, arg);
                if (record.type === "throw") reject(record.arg);
                else {
                    var result = record.arg;
                    var value1 = result.value;
                    if (value1 && typeof value1 === "object" && hasOwn.call(value1, "__await")) return PromiseImpl.resolve(value1.__await).then(function(value) {
                        invoke("next", value, resolve, reject);
                    }, function(err) {
                        invoke("throw", err, resolve, reject);
                    });
                    return PromiseImpl.resolve(value1).then(function(unwrapped) {
                        // When a yielded Promise is resolved, its final value becomes
                        // the .value of the Promise<{value,done}> result for the
                        // current iteration.
                        result.value = unwrapped;
                        resolve(result);
                    }, function(error) {
                        // If a rejected Promise was yielded, throw the rejection back
                        // into the async generator function so it can be handled there.
                        return invoke("throw", error, resolve, reject);
                    });
                }
            }
            var previousPromise;
            function enqueue(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new PromiseImpl(function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    });
                }
                return previousPromise = // all previous Promises have been resolved before calling invoke,
                // so that results are always delivered in the correct order. If
                // enqueue has not been called before, then it is important to
                // call invoke immediately, without waiting on a callback to fire,
                // so that the async generator function has the opportunity to do
                // any necessary setup in a predictable way. This predictability
                // is why the Promise constructor synchronously invokes its
                // executor callback, and why async functions synchronously
                // execute code before the first await. Since we implement simple
                // async functions in terms of async generators, it is especially
                // important to get this right, even though it requires care.
                previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // invocations of the iterator.
                callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            } // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            this._invoke = enqueue;
        }
        defineIteratorMethods(AsyncIterator.prototype);
        AsyncIterator.prototype[asyncIteratorSymbol] = function() {
            return this;
        };
        exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.
        exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            if (PromiseImpl === void 0) PromiseImpl = Promise;
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
             : iter.next().then(function(result) {
                return result.done ? result.value : iter.next();
            });
        };
        function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
                if (state === GenStateExecuting) throw new Error("Generator is already running");
                if (state === GenStateCompleted) {
                    if (method === "throw") throw arg;
                     // Be forgiving, per 25.3.3.3.3 of the spec:
                    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                    return doneResult();
                }
                context.method = method;
                context.arg = arg;
                while(true){
                    var delegate = context.delegate;
                    if (delegate) {
                        var delegateResult = maybeInvokeDelegate(delegate, context);
                        if (delegateResult) {
                            if (delegateResult === ContinueSentinel) continue;
                            return delegateResult;
                        }
                    }
                    if (context.method === "next") // Setting context._sent for legacy support of Babel's
                    // function.sent implementation.
                    context.sent = context._sent = context.arg;
                    else if (context.method === "throw") {
                        if (state === GenStateSuspendedStart) {
                            state = GenStateCompleted;
                            throw context.arg;
                        }
                        context.dispatchException(context.arg);
                    } else if (context.method === "return") context.abrupt("return", context.arg);
                    state = GenStateExecuting;
                    var record = tryCatch(innerFn, self, context);
                    if (record.type === "normal") {
                        // If an exception is thrown from innerFn, we leave state ===
                        // GenStateExecuting and loop back for another invocation.
                        state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                        if (record.arg === ContinueSentinel) continue;
                        return {
                            value: record.arg,
                            done: context.done
                        };
                    } else if (record.type === "throw") {
                        state = GenStateCompleted; // Dispatch the exception by looping back around to the
                        // context.dispatchException(context.arg) call above.
                        context.method = "throw";
                        context.arg = record.arg;
                    }
                }
            };
        } // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.
        function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined$1) {
                // A .throw or .return when the delegate iterator has no .throw
                // method always terminates the yield* loop.
                context.delegate = null;
                if (context.method === "throw") {
                    // Note: ["return"] must be used for ES3 parsing compatibility.
                    if (delegate.iterator["return"]) {
                        // If the delegate iterator has a return method, give it a
                        // chance to clean up.
                        context.method = "return";
                        context.arg = undefined$1;
                        maybeInvokeDelegate(delegate, context);
                        if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                        // "return" to "throw", let that override the TypeError below.
                        return ContinueSentinel;
                    }
                    context.method = "throw";
                    context.arg = new TypeError("The iterator does not provide a 'throw' method");
                }
                return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if (record.type === "throw") {
                context.method = "throw";
                context.arg = record.arg;
                context.delegate = null;
                return ContinueSentinel;
            }
            var info = record.arg;
            if (!info) {
                context.method = "throw";
                context.arg = new TypeError("iterator result is not an object");
                context.delegate = null;
                return ContinueSentinel;
            }
            if (info.done) {
                // Assign the result of the finished delegate to the temporary
                // variable specified by delegate.resultName (see delegateYield).
                context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).
                context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
                // exception, let the outer generator proceed normally. If
                // context.method was "next", forget context.arg since it has been
                // "consumed" by the delegate iterator. If context.method was
                // "return", allow the original .return call to continue in the
                // outer generator.
                if (context.method !== "return") {
                    context.method = "next";
                    context.arg = undefined$1;
                }
            } else // Re-yield the result returned by the delegate method.
            return info;
             // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
            context.delegate = null;
            return ContinueSentinel;
        } // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.
        defineIteratorMethods(Gp);
        define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.
        Gp[iteratorSymbol] = function() {
            return this;
        };
        Gp.toString = function() {
            return "[object Generator]";
        };
        function pushTryEntry(locs) {
            var entry = {
                tryLoc: locs[0]
            };
            if (1 in locs) entry.catchLoc = locs[1];
            if (2 in locs) {
                entry.finallyLoc = locs[2];
                entry.afterLoc = locs[3];
            }
            this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
        }
        function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [
                {
                    tryLoc: "root"
                }
            ];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
        }
        exports.keys = function(object) {
            var keys = [];
            for(var key1 in object)keys.push(key1);
            keys.reverse(); // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
                while(keys.length){
                    var key = keys.pop();
                    if (key in object) {
                        next.value = key;
                        next.done = false;
                        return next;
                    }
                } // To avoid creating an additional object, we just hang the .value
                // and .done properties off the next function object itself. This
                // also ensures that the minifier will not anonymize the function.
                next.done = true;
                return next;
            };
        };
        function values(iterable) {
            if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod) return iteratorMethod.call(iterable);
                if (typeof iterable.next === "function") return iterable;
                if (!isNaN(iterable.length)) {
                    var i = -1, next1 = function next() {
                        while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                            next.value = iterable[i];
                            next.done = false;
                            return next;
                        }
                        next.value = undefined$1;
                        next.done = true;
                        return next;
                    };
                    return next1.next = next1;
                }
            } // Return an iterator with no values.
            return {
                next: doneResult
            };
        }
        exports.values = values;
        function doneResult() {
            return {
                value: undefined$1,
                done: true
            };
        }
        Context.prototype = {
            constructor: Context,
            reset: function(skipTempReset) {
                this.prev = 0;
                this.next = 0; // Resetting context._sent for legacy support of Babel's
                // function.sent implementation.
                this.sent = this._sent = undefined$1;
                this.done = false;
                this.delegate = null;
                this.method = "next";
                this.arg = undefined$1;
                this.tryEntries.forEach(resetTryEntry);
                if (!skipTempReset) {
                    for(var name in this)// Not sure about the optimal order of these conditions:
                    if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined$1;
                }
            },
            stop: function() {
                this.done = true;
                var rootEntry = this.tryEntries[0];
                var rootRecord = rootEntry.completion;
                if (rootRecord.type === "throw") throw rootRecord.arg;
                return this.rval;
            },
            dispatchException: function(exception) {
                if (this.done) throw exception;
                var context = this;
                function handle(loc, caught) {
                    record.type = "throw";
                    record.arg = exception;
                    context.next = loc;
                    if (caught) {
                        // If the dispatched exception was caught by a catch block,
                        // then let that catch block handle the exception normally.
                        context.method = "next";
                        context.arg = undefined$1;
                    }
                    return !!caught;
                }
                for(var i = this.tryEntries.length - 1; i >= 0; --i){
                    var entry = this.tryEntries[i];
                    var record = entry.completion;
                    if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                    // it, so set the completion value of the entire function to
                    // throw the exception.
                    return handle("end");
                    if (entry.tryLoc <= this.prev) {
                        var hasCatch = hasOwn.call(entry, "catchLoc");
                        var hasFinally = hasOwn.call(entry, "finallyLoc");
                        if (hasCatch && hasFinally) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                            else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        } else if (hasCatch) {
                            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        } else if (hasFinally) {
                            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                        } else throw new Error("try statement without catch or finally");
                    }
                }
            },
            abrupt: function(type, arg) {
                for(var i = this.tryEntries.length - 1; i >= 0; --i){
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                        var finallyEntry = entry;
                        break;
                    }
                }
                if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
                var record = finallyEntry ? finallyEntry.completion : {};
                record.type = type;
                record.arg = arg;
                if (finallyEntry) {
                    this.method = "next";
                    this.next = finallyEntry.finallyLoc;
                    return ContinueSentinel;
                }
                return this.complete(record);
            },
            complete: function(record, afterLoc) {
                if (record.type === "throw") throw record.arg;
                if (record.type === "break" || record.type === "continue") this.next = record.arg;
                else if (record.type === "return") {
                    this.rval = this.arg = record.arg;
                    this.method = "return";
                    this.next = "end";
                } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
                return ContinueSentinel;
            },
            finish: function(finallyLoc) {
                for(var i = this.tryEntries.length - 1; i >= 0; --i){
                    var entry = this.tryEntries[i];
                    if (entry.finallyLoc === finallyLoc) {
                        this.complete(entry.completion, entry.afterLoc);
                        resetTryEntry(entry);
                        return ContinueSentinel;
                    }
                }
            },
            "catch": function(tryLoc) {
                for(var i = this.tryEntries.length - 1; i >= 0; --i){
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc === tryLoc) {
                        var record = entry.completion;
                        if (record.type === "throw") {
                            var thrown = record.arg;
                            resetTryEntry(entry);
                        }
                        return thrown;
                    }
                } // The context.catch method must only be called with a location
                // argument that corresponds to a known catch block.
                throw new Error("illegal catch attempt");
            },
            delegateYield: function(iterable, resultName, nextLoc) {
                this.delegate = {
                    iterator: values(iterable),
                    resultName: resultName,
                    nextLoc: nextLoc
                };
                if (this.method === "next") // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined$1;
                return ContinueSentinel;
            }
        }; // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.
        return exports;
    }(// as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports);
    try {
        regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        Function("r", "regeneratorRuntime = r")(runtime);
    }
});
var regenerator = runtime_1;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
var asyncToGenerator = _asyncToGenerator;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
var classCallCheck = _classCallCheck;
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var createClass = _createClass;
/**
 * @module lib/functions
 */ /**
 * Check to see this is a node environment.
 * @type {Boolean}
 */ /* global global */ var isNode = typeof global !== "undefined" && ({}).toString.call(global) === "[object global]";
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */ function getMethodName(prop, type) {
    if (prop.indexOf(type.toLowerCase()) === 0) return prop;
    return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */ function isDomElement(element) {
    return Boolean(element && element.nodeType === 1 && "nodeName" in element && element.ownerDocument && element.ownerDocument.defaultView);
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */ function isInteger(value) {
    // eslint-disable-next-line eqeqeq
    return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */ function isVimeoUrl(url) {
    return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
}
/**
 * Check to see if the URL is for a Vimeo embed.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */ function isVimeoEmbed(url) {
    var expr = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
    return expr.test(url);
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */ function getVimeoUrl() {
    var oEmbedParameters1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var id = oEmbedParameters1.id;
    var url = oEmbedParameters1.url;
    var idOrUrl = id || url;
    if (!idOrUrl) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
    if (isInteger(idOrUrl)) return "https://vimeo.com/".concat(idOrUrl);
    if (isVimeoUrl(idOrUrl)) return idOrUrl.replace("http:", "https:");
    if (id) throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
    throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
}
/* eslint-disable max-params */ /**
 * A utility method for attaching and detaching event handlers
 *
 * @param {EventTarget} target
 * @param {string | string[]} eventName
 * @param {function} callback
 * @param {'addEventListener' | 'on'} onName
 * @param {'removeEventListener' | 'off'} offName
 * @return {{cancel: (function(): void)}}
 */ var subscribe = function subscribe(target, eventName, callback) {
    var onName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "addEventListener";
    var offName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "removeEventListener";
    var eventNames = typeof eventName === "string" ? [
        eventName
    ] : eventName;
    eventNames.forEach(function(evName) {
        target[onName](evName, callback);
    });
    return {
        cancel: function cancel() {
            return eventNames.forEach(function(evName) {
                return target[offName](evName, callback);
            });
        }
    };
};
var arrayIndexOfSupport = typeof Array.prototype.indexOf !== "undefined";
var postMessageSupport = typeof window !== "undefined" && typeof window.postMessage !== "undefined";
if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */ (function(self) {
    if (self.WeakMap) return;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasDefine = Object.defineProperty && function() {
        try {
            // Avoid IE8's broken Object.defineProperty
            return Object.defineProperty({}, "x", {
                value: 1
            }).x === 1;
        } catch (e) {}
    }();
    var defineProperty1 = function(object, name, value) {
        if (hasDefine) Object.defineProperty(object, name, {
            configurable: true,
            writable: true,
            value: value
        });
        else object[name] = value;
    };
    self.WeakMap = function() {
        // ECMA-262 23.3 WeakMap Objects
        function WeakMap() {
            if (this === void 0) throw new TypeError("Constructor WeakMap requires 'new'");
            defineProperty1(this, "_id", genId("_WeakMap")); // ECMA-262 23.3.1.1 WeakMap([iterable])
            if (arguments.length > 0) // Currently, WeakMap `iterable` argument is not supported
            throw new TypeError("WeakMap iterable is not supported");
        } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
        defineProperty1(WeakMap.prototype, "delete", function(key) {
            checkInstance(this, "delete");
            if (!isObject(key)) return false;
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                delete key[this._id];
                return true;
            }
            return false;
        }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
        defineProperty1(WeakMap.prototype, "get", function(key) {
            checkInstance(this, "get");
            if (!isObject(key)) return void 0;
            var entry = key[this._id];
            if (entry && entry[0] === key) return entry[1];
            return void 0;
        }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
        defineProperty1(WeakMap.prototype, "has", function(key) {
            checkInstance(this, "has");
            if (!isObject(key)) return false;
            var entry = key[this._id];
            if (entry && entry[0] === key) return true;
            return false;
        }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
        defineProperty1(WeakMap.prototype, "set", function(key, value) {
            checkInstance(this, "set");
            if (!isObject(key)) throw new TypeError("Invalid value used as weak map key");
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                entry[1] = value;
                return this;
            }
            defineProperty1(key, this._id, [
                key,
                value
            ]);
            return this;
        });
        function checkInstance(x, methodName) {
            if (!isObject(x) || !hasOwnProperty.call(x, "_id")) throw new TypeError(methodName + " method called on incompatible receiver " + typeof x);
        }
        function genId(prefix) {
            return prefix + "_" + rand() + "." + rand();
        }
        function rand() {
            return Math.random().toString().substring(2);
        }
        defineProperty1(WeakMap, "_polyfill", true);
        return WeakMap;
    }();
    function isObject(x) {
        return Object(x) === x;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : commonjsGlobal);
var npo_src = createCommonjsModule(function(module) {
    /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function UMD(name, context, definition) {
        // special form of UMD for polyfilling across evironments
        context[name] = context[name] || definition();
        if (module.exports) module.exports = context[name];
    })("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
        var builtInProp, cycle, scheduling_queue, ToString = Object.prototype.toString, timer = typeof setImmediate != "undefined" ? function timer(fn) {
            return setImmediate(fn);
        } : setTimeout; // dammit, IE8.
        try {
            Object.defineProperty({}, "x", {});
            builtInProp = function builtInProp(obj, name, val, config) {
                return Object.defineProperty(obj, name, {
                    value: val,
                    writable: true,
                    configurable: config !== false
                });
            };
        } catch (err2) {
            builtInProp = function builtInProp(obj, name, val) {
                obj[name] = val;
                return obj;
            };
        } // Note: using a queue instead of array for efficiency
        scheduling_queue = function Queue() {
            var first, last, item;
            function Item(fn, self) {
                this.fn = fn;
                this.self = self;
                this.next = void 0;
            }
            return {
                add: function add(fn, self) {
                    item = new Item(fn, self);
                    if (last) last.next = item;
                    else first = item;
                    last = item;
                    item = void 0;
                },
                drain: function drain() {
                    var f = first;
                    first = last = cycle = void 0;
                    while(f){
                        f.fn.call(f.self);
                        f = f.next;
                    }
                }
            };
        }();
        function schedule(fn, self) {
            scheduling_queue.add(fn, self);
            if (!cycle) cycle = timer(scheduling_queue.drain);
        } // promise duck typing
        function isThenable(o) {
            var _then, o_type = typeof o;
            if (o != null && (o_type == "object" || o_type == "function")) _then = o.then;
            return typeof _then == "function" ? _then : false;
        }
        function notify() {
            for(var i = 0; i < this.chain.length; i++)notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
            this.chain.length = 0;
        } // NOTE: This is a separate function to isolate
        // the `try..catch` so that other code can be
        // optimized better
        function notifyIsolated(self, cb, chain) {
            var ret, _then;
            try {
                if (cb === false) chain.reject(self.msg);
                else {
                    if (cb === true) ret = self.msg;
                    else ret = cb.call(void 0, self.msg);
                    if (ret === chain.promise) chain.reject(TypeError("Promise-chain cycle"));
                    else if (_then = isThenable(ret)) _then.call(ret, chain.resolve, chain.reject);
                    else chain.resolve(ret);
                }
            } catch (err) {
                chain.reject(err);
            }
        }
        function resolve1(msg) {
            var _then, self = this; // already triggered?
            if (self.triggered) return;
            self.triggered = true; // unwrap
            if (self.def) self = self.def;
            try {
                if (_then = isThenable(msg)) schedule(function() {
                    var def_wrapper = new MakeDefWrapper(self);
                    try {
                        _then.call(msg, function $resolve$() {
                            resolve1.apply(def_wrapper, arguments);
                        }, function $reject$() {
                            reject1.apply(def_wrapper, arguments);
                        });
                    } catch (err) {
                        reject1.call(def_wrapper, err);
                    }
                });
                else {
                    self.msg = msg;
                    self.state = 1;
                    if (self.chain.length > 0) schedule(notify, self);
                }
            } catch (err) {
                reject1.call(new MakeDefWrapper(self), err);
            }
        }
        function reject1(msg) {
            var self = this; // already triggered?
            if (self.triggered) return;
            self.triggered = true; // unwrap
            if (self.def) self = self.def;
            self.msg = msg;
            self.state = 2;
            if (self.chain.length > 0) schedule(notify, self);
        }
        function iteratePromises(Constructor, arr, resolver, rejecter) {
            for(var idx1 = 0; idx1 < arr.length; idx1++)(function IIFE(idx) {
                Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
                    resolver(idx, msg);
                }, rejecter);
            })(idx1);
        }
        function MakeDefWrapper(self) {
            this.def = self;
            this.triggered = false;
        }
        function MakeDef(self) {
            this.promise = self;
            this.state = 0;
            this.triggered = false;
            this.chain = [];
            this.msg = void 0;
        }
        function Promise(executor) {
            if (typeof executor != "function") throw TypeError("Not a function");
            if (this.__NPO__ !== 0) throw TypeError("Not a promise");
             // instance shadowing the inherited "brand"
            // to signal an already "initialized" promise
            this.__NPO__ = 1;
            var def = new MakeDef(this);
            this["then"] = function then(success, failure) {
                var o = {
                    success: typeof success == "function" ? success : true,
                    failure: typeof failure == "function" ? failure : false
                }; // Note: `then(..)` itself can be borrowed to be used against
                // a different promise constructor for making the chained promise,
                // by substituting a different `this` binding.
                o.promise = new this.constructor(function extractChain(resolve, reject) {
                    if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                    o.resolve = resolve;
                    o.reject = reject;
                });
                def.chain.push(o);
                if (def.state !== 0) schedule(notify, def);
                return o.promise;
            };
            this["catch"] = function $catch$(failure) {
                return this.then(void 0, failure);
            };
            try {
                executor.call(void 0, function publicResolve(msg) {
                    resolve1.call(def, msg);
                }, function publicReject(msg) {
                    reject1.call(def, msg);
                });
            } catch (err) {
                reject1.call(def, err);
            }
        }
        var PromisePrototype = builtInProp({}, "constructor", Promise, /*configurable=*/ false); // Note: Android 4 cannot use `Object.defineProperty(..)` here
        Promise.prototype = PromisePrototype; // built-in "brand" to signal an "uninitialized" promise
        builtInProp(PromisePrototype, "__NPO__", 0, /*configurable=*/ false);
        builtInProp(Promise, "resolve", function Promise$resolve(msg) {
            var Constructor = this; // spec mandated checks
            // note: best "isPromise" check that's practical for now
            if (msg && typeof msg == "object" && msg.__NPO__ === 1) return msg;
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                resolve(msg);
            });
        });
        builtInProp(Promise, "reject", function Promise$reject(msg) {
            return new this(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                reject(msg);
            });
        });
        builtInProp(Promise, "all", function Promise$all(arr) {
            var Constructor = this; // spec mandated checks
            if (ToString.call(arr) != "[object Array]") return Constructor.reject(TypeError("Not an array"));
            if (arr.length === 0) return Constructor.resolve([]);
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                var len = arr.length, msgs = Array(len), count = 0;
                iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    msgs[idx] = msg;
                    if (++count === len) resolve(msgs);
                }, reject);
            });
        });
        builtInProp(Promise, "race", function Promise$race(arr) {
            var Constructor = this; // spec mandated checks
            if (ToString.call(arr) != "[object Array]") return Constructor.reject(TypeError("Not an array"));
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    resolve(msg);
                }, reject);
            });
        });
        return Promise;
    });
});
/**
 * @module lib/callbacks
 */ var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */ function storeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!(name in playerCallbacks)) playerCallbacks[name] = [];
    playerCallbacks[name].push(callback);
    callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */ function getCallbacks(player, name) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */ function removeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!playerCallbacks[name]) return true;
     // If no callback is passed, remove all callbacks for the event
    if (!callback) {
        playerCallbacks[name] = [];
        callbackMap.set(player.element, playerCallbacks);
        return true;
    }
    var index = playerCallbacks[name].indexOf(callback);
    if (index !== -1) playerCallbacks[name].splice(index, 1);
    callbackMap.set(player.element, playerCallbacks);
    return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */ function shiftCallbacks(player, name) {
    var playerCallbacks = getCallbacks(player, name);
    if (playerCallbacks.length < 1) return false;
    var callback = playerCallbacks.shift();
    removeCallback(player, name, callback);
    return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */ function swapCallbacks(oldElement, newElement) {
    var playerCallbacks = callbackMap.get(oldElement);
    callbackMap.set(newElement, playerCallbacks);
    callbackMap.delete(oldElement);
}
/**
 * @module lib/postmessage
 */ /**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */ function parseMessageData(data) {
    if (typeof data === "string") try {
        data = JSON.parse(data);
    } catch (error) {
        // If the message cannot be parsed, throw the error as a warning
        console.warn(error);
        return {};
    }
    return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */ function postMessage(player, method, params) {
    if (!player.element.contentWindow || !player.element.contentWindow.postMessage) return;
    var message = {
        method: method
    };
    if (params !== undefined) message.value = params;
     // IE 8 and 9 do not support passing messages, so stringify them
    var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
    if (ieVersion >= 8 && ieVersion < 10) message = JSON.stringify(message);
    player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */ function processData(player, data) {
    data = parseMessageData(data);
    var callbacks = [];
    var param;
    if (data.event) {
        if (data.event === "error") {
            var promises = getCallbacks(player, data.data.method);
            promises.forEach(function(promise) {
                var error = new Error(data.data.message);
                error.name = data.data.name;
                promise.reject(error);
                removeCallback(player, data.data.method, promise);
            });
        }
        callbacks = getCallbacks(player, "event:".concat(data.event));
        param = data.data;
    } else if (data.method) {
        var callback = shiftCallbacks(player, data.method);
        if (callback) {
            callbacks.push(callback);
            param = data.value;
        }
    }
    callbacks.forEach(function(callback) {
        try {
            if (typeof callback === "function") {
                callback.call(player, param);
                return;
            }
            callback.resolve(param);
        } catch (e) {}
    });
}
/**
 * @module lib/embed
 */ var oEmbedParameters = [
    "autopause",
    "autoplay",
    "background",
    "byline",
    "color",
    "colors",
    "controls",
    "dnt",
    "height",
    "id",
    "interactive_params",
    "keyboard",
    "loop",
    "maxheight",
    "maxwidth",
    "muted",
    "playsinline",
    "portrait",
    "responsive",
    "speed",
    "texttrack",
    "title",
    "transparent",
    "url",
    "width"
];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */ function getOEmbedParameters(element) {
    var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return oEmbedParameters.reduce(function(params, param) {
        var value = element.getAttribute("data-vimeo-".concat(param));
        if (value || value === "") params[param] = value === "" ? 1 : value;
        return params;
    }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */ function createEmbed(_ref, element) {
    var html = _ref.html;
    if (!element) throw new TypeError("An element must be provided");
    if (element.getAttribute("data-vimeo-initialized") !== null) return element.querySelector("iframe");
    var div = document.createElement("div");
    div.innerHTML = html;
    element.appendChild(div.firstChild);
    element.setAttribute("data-vimeo-initialized", "true");
    return element.querySelector("iframe");
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */ function getOEmbedData(videoUrl) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var element = arguments.length > 2 ? arguments[2] : undefined;
    return new Promise(function(resolve, reject) {
        if (!isVimeoUrl(videoUrl)) throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
        var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));
        for(var param in params)if (params.hasOwnProperty(param)) url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
        var xhr = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function() {
            if (xhr.status === 404) {
                reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
                return;
            }
            if (xhr.status === 403) {
                reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
                return;
            }
            try {
                var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed
                if (json.domain_status_code === 403) {
                    // We still want to create the embed to give users visual feedback
                    createEmbed(json, element);
                    reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
                    return;
                }
                resolve(json);
            } catch (error) {
                reject(error);
            }
        };
        xhr.onerror = function() {
            var status = xhr.status ? " (".concat(xhr.status, ")") : "";
            reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
        };
        xhr.send();
    });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function initializeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var elements = [].slice.call(parent.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));
    var handleError = function handleError(error) {
        if ("console" in window && console.error) console.error("There was an error creating an embed: ".concat(error));
    };
    elements.forEach(function(element) {
        try {
            // Skip any that have data-vimeo-defer
            if (element.getAttribute("data-vimeo-defer") !== null) return;
            var params = getOEmbedParameters(element);
            var url = getVimeoUrl(params);
            getOEmbedData(url, params, element).then(function(data) {
                return createEmbed(data, element);
            }).catch(handleError);
        } catch (error) {
            handleError(error);
        }
    });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function resizeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    // Prevent execution if users include the player.js script multiple times.
    if (window.VimeoPlayerResizeEmbeds_) return;
    window.VimeoPlayerResizeEmbeds_ = true;
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
         // 'spacechange' is fired only on embeds with cards
        if (!event.data || event.data.event !== "spacechange") return;
        var iframes = parent.querySelectorAll("iframe");
        for(var i = 0; i < iframes.length; i++){
            if (iframes[i].contentWindow !== event.source) continue;
             // Change padding-bottom of the enclosing div to accommodate
            // card carousel without distorting aspect ratio
            var space = iframes[i].parentElement;
            space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
            break;
        }
    };
    window.addEventListener("message", onMessage);
}
/**
 * Add chapters to existing metadata for Google SEO
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function initAppendVideoMetadata() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    //  Prevent execution if users include the player.js script multiple times.
    if (window.VimeoSeoMetadataAppended) return;
    window.VimeoSeoMetadataAppended = true;
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
        var data = parseMessageData(event.data);
        if (!data || data.event !== "ready") return;
        var iframes = parent.querySelectorAll("iframe");
        for(var i = 0; i < iframes.length; i++){
            var iframe = iframes[i]; // Initiate appendVideoMetadata if iframe is a Vimeo embed
            var isValidMessageSource = iframe.contentWindow === event.source;
            if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
                var player = new Player(iframe);
                player.callMethod("appendVideoMetadata", window.location.href);
            }
        }
    };
    window.addEventListener("message", onMessage);
}
/**
 * Seek to time indicated by vimeo_t query parameter if present in URL
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function checkUrlTimeParam() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    //  Prevent execution if users include the player.js script multiple times.
    if (window.VimeoCheckedUrlTimeParam) return;
    window.VimeoCheckedUrlTimeParam = true;
    var handleError = function handleError(error) {
        if ("console" in window && console.error) console.error("There was an error getting video Id: ".concat(error));
    };
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
        var data = parseMessageData(event.data);
        if (!data || data.event !== "ready") return;
        var iframes = parent.querySelectorAll("iframe");
        for(var i = 0; i < iframes.length; i++){
            var iframe = iframes[i];
            var isValidMessageSource = iframe.contentWindow === event.source;
            if (isVimeoEmbed(iframe.src) && isValidMessageSource) (function() {
                var player = new Player(iframe);
                player.getVideoId().then(function(videoId) {
                    var matches = new RegExp("[?&]vimeo_t_".concat(videoId, "=([^&#]*)")).exec(window.location.href);
                    if (matches && matches[1]) {
                        var sec = decodeURI(matches[1]);
                        player.setCurrentTime(sec);
                    }
                    return;
                }).catch(handleError);
            })();
        }
    };
    window.addEventListener("message", onMessage);
}
/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */ function initializeScreenfull() {
    var fn = function() {
        var val;
        var fnMap = [
            [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror"
            ],
            [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror"
            ],
            [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError"
            ]
        ];
        var i = 0;
        var l = fnMap.length;
        var ret = {};
        for(; i < l; i++){
            val = fnMap[i];
            if (val && val[1] in document) {
                for(i = 0; i < val.length; i++)ret[fnMap[0][i]] = val[i];
                return ret;
            }
        }
        return false;
    }();
    var eventNameMap = {
        fullscreenchange: fn.fullscreenchange,
        fullscreenerror: fn.fullscreenerror
    };
    var screenfull1 = {
        request: function request(element) {
            return new Promise(function(resolve, reject) {
                var onFullScreenEntered1 = function onFullScreenEntered() {
                    screenfull1.off("fullscreenchange", onFullScreenEntered);
                    resolve();
                };
                screenfull1.on("fullscreenchange", onFullScreenEntered1);
                element = element || document.documentElement;
                var returnPromise = element[fn.requestFullscreen]();
                if (returnPromise instanceof Promise) returnPromise.then(onFullScreenEntered1).catch(reject);
            });
        },
        exit: function exit() {
            return new Promise(function(resolve, reject) {
                if (!screenfull1.isFullscreen) {
                    resolve();
                    return;
                }
                var onFullScreenExit1 = function onFullScreenExit() {
                    screenfull1.off("fullscreenchange", onFullScreenExit);
                    resolve();
                };
                screenfull1.on("fullscreenchange", onFullScreenExit1);
                var returnPromise = document[fn.exitFullscreen]();
                if (returnPromise instanceof Promise) returnPromise.then(onFullScreenExit1).catch(reject);
            });
        },
        on: function on(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) document.addEventListener(eventName, callback);
        },
        off: function off(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) document.removeEventListener(eventName, callback);
        }
    };
    Object.defineProperties(screenfull1, {
        isFullscreen: {
            get: function get() {
                return Boolean(document[fn.fullscreenElement]);
            }
        },
        element: {
            enumerable: true,
            get: function get() {
                return document[fn.fullscreenElement];
            }
        },
        isEnabled: {
            enumerable: true,
            get: function get() {
                // Coerce to boolean in case of old WebKit
                return Boolean(document[fn.fullscreenEnabled]);
            }
        }
    });
    return screenfull1;
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
var assertThisInitialized = _assertThisInitialized;
var setPrototypeOf = createCommonjsModule(function(module) {
    function _setPrototypeOf(o1, p1) {
        module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o1, p1);
    }
    module.exports = _setPrototypeOf;
});
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
}
var inherits = _inherits;
var _typeof_1 = createCommonjsModule(function(module) {
    function _typeof(obj1) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") module.exports = _typeof = function _typeof(obj) {
            return typeof obj;
        };
        else module.exports = _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        return _typeof(obj1);
    }
    module.exports = _typeof;
});
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) return call;
    return assertThisInitialized(self);
}
var possibleConstructorReturn = _possibleConstructorReturn;
var getPrototypeOf = createCommonjsModule(function(module) {
    function _getPrototypeOf(o2) {
        module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o2);
    }
    module.exports = _getPrototypeOf;
});
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
var isNativeFunction = _isNativeFunction;
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
var isNativeReflectConstruct = _isNativeReflectConstruct;
var construct = createCommonjsModule(function(module) {
    function _construct(Parent1, args1, Class1) {
        if (isNativeReflectConstruct()) module.exports = _construct = Reflect.construct;
        else module.exports = _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) setPrototypeOf(instance, Class.prototype);
            return instance;
        };
        return _construct.apply(null, arguments);
    }
    module.exports = _construct;
});
var wrapNativeSuper = createCommonjsModule(function(module) {
    function _wrapNativeSuper(Class2) {
        var _cache = typeof Map === "function" ? new Map() : undefined;
        module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !isNativeFunction(Class)) return Class;
            if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
            if (typeof _cache !== "undefined") {
                if (_cache.has(Class)) return _cache.get(Class);
                _cache.set(Class, Wrapper);
            }
            function Wrapper() {
                return construct(Class, arguments, getPrototypeOf(this).constructor);
            }
            Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                    value: Wrapper,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            return setPrototypeOf(Wrapper, Class);
        };
        return _wrapNativeSuper(Class2);
    }
    module.exports = _wrapNativeSuper;
});
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var defineProperty = _defineProperty;
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
    return function _createSuperInternal() {
        var Super = getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return possibleConstructorReturn(this, result);
    };
}
function _isNativeReflectConstruct$1() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
/** @typedef {import('./timing-src-connector.types').PlayerControls} PlayerControls */ /** @typedef {import('./timing-object.types').TimingObject} TimingObject */ /** @typedef {import('./timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions */ /** @typedef {(msg: string) => any} Logger */ /** @typedef {import('timing-object.types').TConnectionState} TConnectionState */ /**
 * @type {TimingSrcConnectorOptions}
 *
 * For details on these properties and their effects, see the typescript definition referenced above.
 */ var defaultOptions = {
    role: "viewer",
    autoPlayMuted: true,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1
};
/**
 * There's a proposed W3C spec for the Timing Object which would introduce a new set of APIs that would simplify time-synchronization tasks for browser applications.
 *
 * Proposed spec: https://webtiming.github.io/timingobject/
 * V3 Spec: https://timingsrc.readthedocs.io/en/latest/
 * Demuxed talk: https://www.youtube.com/watch?v=cZSjDaGDmX8
 *
 * This class makes it easy to connect Vimeo.Player to a provided TimingObject via Vimeo.Player.setTimingSrc(myTimingObject, options) and the synchronization will be handled automatically.
 *
 * There are 5 general responsibilities in TimingSrcConnector:
 *
 * 1. `updatePlayer()` which sets the player's currentTime, playbackRate and pause/play state based on current state of the TimingObject.
 * 2. `updateTimingObject()` which sets the TimingObject's position and velocity from the player's state.
 * 3. `playerUpdater` which listens for change events on the TimingObject and will respond by calling updatePlayer.
 * 4. `timingObjectUpdater` which listens to the player events of seeked, play and pause and will respond by calling `updateTimingObject()`.
 * 5. `maintainPlaybackPosition` this is code that constantly monitors the player to make sure it's always in sync with the TimingObject. This is needed because videos will generally not play with precise time accuracy and there will be some drift which becomes more noticeable over longer periods (as noted in the timing-object spec). More details on this method below.
 */ var TimingSrcConnector = /*#__PURE__*/ function(_EventTarget) {
    inherits(TimingSrcConnector1, _EventTarget);
    var _super = _createSuper(TimingSrcConnector1);
    /**
   * @param {PlayerControls} player
   * @param {TimingObject} timingObject
   * @param {TimingSrcConnectorOptions} options
   * @param {Logger} logger
   */ function TimingSrcConnector1(_player, timingObject) {
        var _this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var logger = arguments.length > 3 ? arguments[3] : undefined;
        classCallCheck(this, TimingSrcConnector1);
        _this = _super.call(this);
        defineProperty(assertThisInitialized(_this), "logger", void 0);
        defineProperty(assertThisInitialized(_this), "speedAdjustment", 0);
        defineProperty(assertThisInitialized(_this), "adjustSpeed", /*#__PURE__*/ function() {
            var _ref = asyncToGenerator(/*#__PURE__*/ regenerator.mark(function _callee(player, newAdjustment) {
                var newPlaybackRate;
                return regenerator.wrap(function _callee$(_context) {
                    while(true)switch(_context.prev = _context.next){
                        case 0:
                            if (!(_this.speedAdjustment === newAdjustment)) {
                                _context.next = 2;
                                break;
                            }
                            return _context.abrupt("return");
                        case 2:
                            _context.next = 4;
                            return player.getPlaybackRate();
                        case 4:
                            _context.t0 = _context.sent;
                            _context.t1 = _this.speedAdjustment;
                            _context.t2 = _context.t0 - _context.t1;
                            _context.t3 = newAdjustment;
                            newPlaybackRate = _context.t2 + _context.t3;
                            _this.log("New playbackRate:  ".concat(newPlaybackRate));
                            _context.next = 12;
                            return player.setPlaybackRate(newPlaybackRate);
                        case 12:
                            _this.speedAdjustment = newAdjustment;
                        case 13:
                        case "end":
                            return _context.stop();
                    }
                }, _callee);
            }));
            return function(_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());
        _this.logger = logger;
        _this.init(timingObject, _player, _objectSpread(_objectSpread({}, defaultOptions), options));
        return _this;
    }
    createClass(TimingSrcConnector1, [
        {
            key: "disconnect",
            value: function disconnect() {
                this.dispatchEvent(new Event("disconnect"));
            }
        },
        {
            key: "init",
            value: function() {
                var _init = asyncToGenerator(/*#__PURE__*/ regenerator.mark(function _callee2(timingObject, player, options) {
                    var _this2 = this;
                    var playerUpdater, positionSync, timingObjectUpdater;
                    return regenerator.wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                _context2.next = 2;
                                return this.waitForTOReadyState(timingObject, "open");
                            case 2:
                                if (!(options.role === "viewer")) {
                                    _context2.next = 10;
                                    break;
                                }
                                _context2.next = 5;
                                return this.updatePlayer(timingObject, player, options);
                            case 5:
                                playerUpdater = subscribe(timingObject, "change", function() {
                                    return _this2.updatePlayer(timingObject, player, options);
                                });
                                positionSync = this.maintainPlaybackPosition(timingObject, player, options);
                                this.addEventListener("disconnect", function() {
                                    positionSync.cancel();
                                    playerUpdater.cancel();
                                });
                                _context2.next = 14;
                                break;
                            case 10:
                                _context2.next = 12;
                                return this.updateTimingObject(timingObject, player);
                            case 12:
                                timingObjectUpdater = subscribe(player, [
                                    "seeked",
                                    "play",
                                    "pause",
                                    "ratechange"
                                ], function() {
                                    return _this2.updateTimingObject(timingObject, player);
                                }, "on", "off");
                                this.addEventListener("disconnect", function() {
                                    return timingObjectUpdater.cancel();
                                });
                            case 14:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this);
                }));
                function init(_x3, _x4, _x5) {
                    return _init.apply(this, arguments);
                }
                return init;
            }()
        },
        {
            key: "updateTimingObject",
            value: function() {
                var _updateTimingObject = asyncToGenerator(/*#__PURE__*/ regenerator.mark(function _callee3(timingObject, player) {
                    return regenerator.wrap(function _callee3$(_context3) {
                        while(true)switch(_context3.prev = _context3.next){
                            case 0:
                                _context3.t0 = timingObject;
                                _context3.next = 3;
                                return player.getCurrentTime();
                            case 3:
                                _context3.t1 = _context3.sent;
                                _context3.next = 6;
                                return player.getPaused();
                            case 6:
                                if (!_context3.sent) {
                                    _context3.next = 10;
                                    break;
                                }
                                _context3.t2 = 0;
                                _context3.next = 13;
                                break;
                            case 10:
                                _context3.next = 12;
                                return player.getPlaybackRate();
                            case 12:
                                _context3.t2 = _context3.sent;
                            case 13:
                                _context3.t3 = _context3.t2;
                                _context3.t4 = {
                                    position: _context3.t1,
                                    velocity: _context3.t3
                                };
                                _context3.t0.update.call(_context3.t0, _context3.t4);
                            case 16:
                            case "end":
                                return _context3.stop();
                        }
                    }, _callee3);
                }));
                function updateTimingObject(_x6, _x7) {
                    return _updateTimingObject.apply(this, arguments);
                }
                return updateTimingObject;
            }()
        },
        {
            key: "updatePlayer",
            value: function() {
                var _updatePlayer = asyncToGenerator(/*#__PURE__*/ regenerator.mark(function _callee5(timingObject, player, options) {
                    var _timingObject$query, position, velocity;
                    return regenerator.wrap(function _callee5$(_context5) {
                        while(true)switch(_context5.prev = _context5.next){
                            case 0:
                                _timingObject$query = timingObject.query(), position = _timingObject$query.position, velocity = _timingObject$query.velocity;
                                if (typeof position === "number") player.setCurrentTime(position);
                                if (!(typeof velocity === "number")) {
                                    _context5.next = 25;
                                    break;
                                }
                                if (!(velocity === 0)) {
                                    _context5.next = 11;
                                    break;
                                }
                                _context5.next = 6;
                                return player.getPaused();
                            case 6:
                                _context5.t0 = _context5.sent;
                                if (!(_context5.t0 === false)) {
                                    _context5.next = 9;
                                    break;
                                }
                                player.pause();
                            case 9:
                                _context5.next = 25;
                                break;
                            case 11:
                                if (!(velocity > 0)) {
                                    _context5.next = 25;
                                    break;
                                }
                                _context5.next = 14;
                                return player.getPaused();
                            case 14:
                                _context5.t1 = _context5.sent;
                                if (!(_context5.t1 === true)) {
                                    _context5.next = 19;
                                    break;
                                }
                                _context5.next = 18;
                                return player.play().catch(/*#__PURE__*/ function() {
                                    var _ref2 = asyncToGenerator(/*#__PURE__*/ regenerator.mark(function _callee4(err) {
                                        return regenerator.wrap(function _callee4$(_context4) {
                                            while(true)switch(_context4.prev = _context4.next){
                                                case 0:
                                                    if (!(err.name === "NotAllowedError" && options.autoPlayMuted)) {
                                                        _context4.next = 5;
                                                        break;
                                                    }
                                                    _context4.next = 3;
                                                    return player.setMuted(true);
                                                case 3:
                                                    _context4.next = 5;
                                                    return player.play().catch(function(err2) {
                                                        return console.error("Couldn't play the video from TimingSrcConnector. Error:", err2);
                                                    });
                                                case 5:
                                                case "end":
                                                    return _context4.stop();
                                            }
                                        }, _callee4);
                                    }));
                                    return function(_x11) {
                                        return _ref2.apply(this, arguments);
                                    };
                                }());
                            case 18:
                                this.updatePlayer(timingObject, player, options);
                            case 19:
                                _context5.next = 21;
                                return player.getPlaybackRate();
                            case 21:
                                _context5.t2 = _context5.sent;
                                _context5.t3 = velocity;
                                if (!(_context5.t2 !== _context5.t3)) {
                                    _context5.next = 25;
                                    break;
                                }
                                player.setPlaybackRate(velocity);
                            case 25:
                            case "end":
                                return _context5.stop();
                        }
                    }, _callee5, this);
                }));
                function updatePlayer(_x8, _x9, _x10) {
                    return _updatePlayer.apply(this, arguments);
                }
                return updatePlayer;
            }()
        },
        {
            key: "maintainPlaybackPosition",
            value: function maintainPlaybackPosition(timingObject, player, options) {
                var _this3 = this;
                var allowedDrift = options.allowedDrift, maxAllowedDrift = options.maxAllowedDrift, minCheckInterval = options.minCheckInterval, maxRateAdjustment = options.maxRateAdjustment, maxTimeToCatchUp = options.maxTimeToCatchUp;
                var syncInterval = Math.min(maxTimeToCatchUp, Math.max(minCheckInterval, maxAllowedDrift)) * 1000;
                var check = /*#__PURE__*/ function() {
                    var _ref3 = asyncToGenerator(/*#__PURE__*/ regenerator.mark(function _callee6() {
                        var diff, diffAbs, min, max, adjustment;
                        return regenerator.wrap(function _callee6$(_context6) {
                            while(true)switch(_context6.prev = _context6.next){
                                case 0:
                                    _context6.t0 = timingObject.query().velocity === 0;
                                    if (_context6.t0) {
                                        _context6.next = 6;
                                        break;
                                    }
                                    _context6.next = 4;
                                    return player.getPaused();
                                case 4:
                                    _context6.t1 = _context6.sent;
                                    _context6.t0 = _context6.t1 === true;
                                case 6:
                                    if (!_context6.t0) {
                                        _context6.next = 8;
                                        break;
                                    }
                                    return _context6.abrupt("return");
                                case 8:
                                    _context6.t2 = timingObject.query().position;
                                    _context6.next = 11;
                                    return player.getCurrentTime();
                                case 11:
                                    _context6.t3 = _context6.sent;
                                    diff = _context6.t2 - _context6.t3;
                                    diffAbs = Math.abs(diff);
                                    _this3.log("Drift: ".concat(diff));
                                    if (!(diffAbs > maxAllowedDrift)) {
                                        _context6.next = 22;
                                        break;
                                    }
                                    _context6.next = 18;
                                    return _this3.adjustSpeed(player, 0);
                                case 18:
                                    player.setCurrentTime(timingObject.query().position);
                                    _this3.log("Resync by currentTime");
                                    _context6.next = 29;
                                    break;
                                case 22:
                                    if (!(diffAbs > allowedDrift)) {
                                        _context6.next = 29;
                                        break;
                                    }
                                    min = diffAbs / maxTimeToCatchUp;
                                    max = maxRateAdjustment;
                                    adjustment = min < max ? (max - min) / 2 : max;
                                    _context6.next = 28;
                                    return _this3.adjustSpeed(player, adjustment * Math.sign(diff));
                                case 28:
                                    _this3.log("Resync by playbackRate");
                                case 29:
                                case "end":
                                    return _context6.stop();
                            }
                        }, _callee6);
                    }));
                    return function check() {
                        return _ref3.apply(this, arguments);
                    };
                }();
                var interval = setInterval(function() {
                    return check();
                }, syncInterval);
                return {
                    cancel: function cancel() {
                        return clearInterval(interval);
                    }
                };
            }
        },
        {
            key: "log",
            value: function log(msg) {
                var _this$logger;
                (_this$logger = this.logger) === null || _this$logger === void 0 || _this$logger.call(this, "TimingSrcConnector: ".concat(msg));
            }
        },
        {
            key: "waitForTOReadyState",
            /**
     * @param {TimingObject} timingObject
     * @param {TConnectionState} state
     * @return {Promise<void>}
     */ value: function waitForTOReadyState(timingObject, state) {
                return new Promise(function(resolve) {
                    var check1 = function check() {
                        if (timingObject.readyState === state) resolve();
                        else timingObject.addEventListener("readystatechange", check, {
                            once: true
                        });
                    };
                    check1();
                });
            }
        }
    ]);
    return TimingSrcConnector1;
}(/*#__PURE__*/ wrapNativeSuper(EventTarget));
var playerMap = new WeakMap();
var readyMap = new WeakMap();
var screenfull = {};
var Player = /*#__PURE__*/ function() {
    /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */ function Player1(element) {
        var _this = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        classCallCheck(this, Player1);
        /* global jQuery */ if (window.jQuery && element instanceof jQuery) {
            if (element.length > 1 && window.console && console.warn) console.warn("A jQuery object with multiple elements was passed, using the first element.");
            element = element[0];
        } // Find an element by ID
        if (typeof document !== "undefined" && typeof element === "string") element = document.getElementById(element);
         // Not an element!
        if (!isDomElement(element)) throw new TypeError("You must pass either a valid element or a valid id.");
         // Already initialized an embed in this div, so grab the iframe
        if (element.nodeName !== "IFRAME") {
            var iframe = element.querySelector("iframe");
            if (iframe) element = iframe;
        } // iframe url is not a Vimeo url
        if (element.nodeName === "IFRAME" && !isVimeoUrl(element.getAttribute("src") || "")) throw new Error("The player element passed isn\u2019t a Vimeo embed.");
         // If there is already a player object in the map, return that
        if (playerMap.has(element)) return playerMap.get(element);
        this._window = element.ownerDocument.defaultView;
        this.element = element;
        this.origin = "*";
        var readyPromise = new npo_src(function(resolve, reject) {
            _this._onMessage = function(event) {
                if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) return;
                if (_this.origin === "*") _this.origin = event.origin;
                var data = parseMessageData(event.data);
                var isError = data && data.event === "error";
                var isReadyError = isError && data.data && data.data.method === "ready";
                if (isReadyError) {
                    var error = new Error(data.data.message);
                    error.name = data.data.name;
                    reject(error);
                    return;
                }
                var isReadyEvent = data && data.event === "ready";
                var isPingResponse = data && data.method === "ping";
                if (isReadyEvent || isPingResponse) {
                    _this.element.setAttribute("data-ready", "true");
                    resolve();
                    return;
                }
                processData(_this, data);
            };
            _this._window.addEventListener("message", _this._onMessage);
            if (_this.element.nodeName !== "IFRAME") {
                var params = getOEmbedParameters(element, options);
                var url = getVimeoUrl(params);
                getOEmbedData(url, params, element).then(function(data) {
                    var iframe = createEmbed(data, element); // Overwrite element with the new iframe,
                    // but store reference to the original element
                    _this.element = iframe;
                    _this._originalElement = element;
                    swapCallbacks(element, iframe);
                    playerMap.set(_this.element, _this);
                    return data;
                }).catch(reject);
            }
        }); // Store a copy of this Player in the map
        readyMap.set(this, readyPromise);
        playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if
        // the player is already ready.
        if (this.element.nodeName === "IFRAME") postMessage(this, "ping");
        if (screenfull.isEnabled) {
            var exitFullscreen = function exitFullscreen() {
                return screenfull.exit();
            };
            this.fullscreenchangeHandler = function() {
                if (screenfull.isFullscreen) storeCallback(_this, "event:exitFullscreen", exitFullscreen);
                else removeCallback(_this, "event:exitFullscreen", exitFullscreen);
                 // eslint-disable-next-line
                _this.ready().then(function() {
                    postMessage(_this, "fullscreenchange", screenfull.isFullscreen);
                });
            };
            screenfull.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
    }
    /**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */ createClass(Player1, [
        {
            key: "callMethod",
            value: function callMethod(name) {
                var _this2 = this;
                var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return new npo_src(function(resolve, reject) {
                    // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return
                    return _this2.ready().then(function() {
                        storeCallback(_this2, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this2, name, args);
                    }).catch(reject);
                });
            }
        },
        {
            key: "get",
            value: function get(name) {
                var _this3 = this;
                return new npo_src(function(resolve, reject) {
                    name = getMethodName(name, "get"); // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return
                    return _this3.ready().then(function() {
                        storeCallback(_this3, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this3, name);
                    }).catch(reject);
                });
            }
        },
        {
            key: "set",
            value: function set(name, value) {
                var _this4 = this;
                return new npo_src(function(resolve, reject) {
                    name = getMethodName(name, "set");
                    if (value === undefined || value === null) throw new TypeError("There must be a value to set.");
                     // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return
                    return _this4.ready().then(function() {
                        storeCallback(_this4, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this4, name, value);
                    }).catch(reject);
                });
            }
        },
        {
            key: "on",
            value: function on(eventName, callback) {
                if (!eventName) throw new TypeError("You must pass an event name.");
                if (!callback) throw new TypeError("You must pass a callback function.");
                if (typeof callback !== "function") throw new TypeError("The callback must be a function.");
                var callbacks = getCallbacks(this, "event:".concat(eventName));
                if (callbacks.length === 0) this.callMethod("addEventListener", eventName).catch(function() {
                // will trigger the error callback if they are listening.
                });
                storeCallback(this, "event:".concat(eventName), callback);
            }
        },
        {
            key: "off",
            value: function off(eventName, callback) {
                if (!eventName) throw new TypeError("You must pass an event name.");
                if (callback && typeof callback !== "function") throw new TypeError("The callback must be a function.");
                var lastCallback = removeCallback(this, "event:".concat(eventName), callback); // If there are no callbacks left, remove the listener
                if (lastCallback) this.callMethod("removeEventListener", eventName).catch(function(e) {
                // will trigger the error callback if they are listening.
                });
            }
        },
        {
            key: "loadVideo",
            value: function loadVideo(options) {
                return this.callMethod("loadVideo", options);
            }
        },
        {
            key: "ready",
            value: function ready() {
                var readyPromise = readyMap.get(this) || new npo_src(function(resolve, reject) {
                    reject(new Error("Unknown player. Probably unloaded."));
                });
                return npo_src.resolve(readyPromise);
            }
        },
        {
            key: "addCuePoint",
            value: function addCuePoint(time) {
                var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.callMethod("addCuePoint", {
                    time: time,
                    data: data
                });
            }
        },
        {
            key: "removeCuePoint",
            value: function removeCuePoint(id) {
                return this.callMethod("removeCuePoint", id);
            }
        },
        {
            key: "enableTextTrack",
            value: function enableTextTrack(language, kind) {
                if (!language) throw new TypeError("You must pass a language.");
                return this.callMethod("enableTextTrack", {
                    language: language,
                    kind: kind
                });
            }
        },
        {
            key: "disableTextTrack",
            value: function disableTextTrack() {
                return this.callMethod("disableTextTrack");
            }
        },
        {
            key: "pause",
            value: function pause() {
                return this.callMethod("pause");
            }
        },
        {
            key: "play",
            value: function play() {
                return this.callMethod("play");
            }
        },
        {
            key: "requestFullscreen",
            value: function requestFullscreen() {
                if (screenfull.isEnabled) return screenfull.request(this.element);
                return this.callMethod("requestFullscreen");
            }
        },
        {
            key: "exitFullscreen",
            value: function exitFullscreen() {
                if (screenfull.isEnabled) return screenfull.exit();
                return this.callMethod("exitFullscreen");
            }
        },
        {
            key: "getFullscreen",
            value: function getFullscreen() {
                if (screenfull.isEnabled) return npo_src.resolve(screenfull.isFullscreen);
                return this.get("fullscreen");
            }
        },
        {
            key: "requestPictureInPicture",
            value: function requestPictureInPicture() {
                return this.callMethod("requestPictureInPicture");
            }
        },
        {
            key: "exitPictureInPicture",
            value: function exitPictureInPicture() {
                return this.callMethod("exitPictureInPicture");
            }
        },
        {
            key: "getPictureInPicture",
            value: function getPictureInPicture() {
                return this.get("pictureInPicture");
            }
        },
        {
            key: "remotePlaybackPrompt",
            value: function remotePlaybackPrompt() {
                return this.callMethod("remotePlaybackPrompt");
            }
        },
        {
            key: "unload",
            value: function unload() {
                return this.callMethod("unload");
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this5 = this;
                return new npo_src(function(resolve) {
                    readyMap.delete(_this5);
                    playerMap.delete(_this5.element);
                    if (_this5._originalElement) {
                        playerMap.delete(_this5._originalElement);
                        _this5._originalElement.removeAttribute("data-vimeo-initialized");
                    }
                    if (_this5.element && _this5.element.nodeName === "IFRAME" && _this5.element.parentNode) {
                        // If we've added an additional wrapper div, remove that from the DOM.
                        // If not, just remove the iframe element.
                        if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
                        else _this5.element.parentNode.removeChild(_this5.element);
                    } // If the clip is private there is a case where the element stays the
                    // div element. Destroy should reset the div and remove the iframe child.
                    if (_this5.element && _this5.element.nodeName === "DIV" && _this5.element.parentNode) {
                        _this5.element.removeAttribute("data-vimeo-initialized");
                        var iframe = _this5.element.querySelector("iframe");
                        if (iframe && iframe.parentNode) {
                            // If we've added an additional wrapper div, remove that from the DOM.
                            // If not, just remove the iframe element.
                            if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) iframe.parentNode.parentNode.removeChild(iframe.parentNode);
                            else iframe.parentNode.removeChild(iframe);
                        }
                    }
                    _this5._window.removeEventListener("message", _this5._onMessage);
                    if (screenfull.isEnabled) screenfull.off("fullscreenchange", _this5.fullscreenchangeHandler);
                    resolve();
                });
            }
        },
        {
            key: "getAutopause",
            value: function getAutopause() {
                return this.get("autopause");
            }
        },
        {
            key: "setAutopause",
            value: function setAutopause(autopause) {
                return this.set("autopause", autopause);
            }
        },
        {
            key: "getBuffered",
            value: function getBuffered() {
                return this.get("buffered");
            }
        },
        {
            key: "getCameraProps",
            value: function getCameraProps() {
                return this.get("cameraProps");
            }
        },
        {
            key: "setCameraProps",
            value: function setCameraProps(camera) {
                return this.set("cameraProps", camera);
            }
        },
        {
            key: "getChapters",
            value: function getChapters() {
                return this.get("chapters");
            }
        },
        {
            key: "getCurrentChapter",
            value: function getCurrentChapter() {
                return this.get("currentChapter");
            }
        },
        {
            key: "getColor",
            value: function getColor() {
                return this.get("color");
            }
        },
        {
            key: "getColors",
            value: function getColors() {
                return npo_src.all([
                    this.get("colorOne"),
                    this.get("colorTwo"),
                    this.get("colorThree"),
                    this.get("colorFour")
                ]);
            }
        },
        {
            key: "setColor",
            value: function setColor(color) {
                return this.set("color", color);
            }
        },
        {
            key: "setColors",
            value: function setColors(colors) {
                if (!Array.isArray(colors)) return new npo_src(function(resolve, reject) {
                    return reject(new TypeError("Argument must be an array."));
                });
                var nullPromise = new npo_src(function(resolve) {
                    return resolve(null);
                });
                var colorPromises = [
                    colors[0] ? this.set("colorOne", colors[0]) : nullPromise,
                    colors[1] ? this.set("colorTwo", colors[1]) : nullPromise,
                    colors[2] ? this.set("colorThree", colors[2]) : nullPromise,
                    colors[3] ? this.set("colorFour", colors[3]) : nullPromise
                ];
                return npo_src.all(colorPromises);
            }
        },
        {
            key: "getCuePoints",
            value: function getCuePoints() {
                return this.get("cuePoints");
            }
        },
        {
            key: "getCurrentTime",
            value: function getCurrentTime() {
                return this.get("currentTime");
            }
        },
        {
            key: "setCurrentTime",
            value: function setCurrentTime(currentTime) {
                return this.set("currentTime", currentTime);
            }
        },
        {
            key: "getDuration",
            value: function getDuration() {
                return this.get("duration");
            }
        },
        {
            key: "getEnded",
            value: function getEnded() {
                return this.get("ended");
            }
        },
        {
            key: "getLoop",
            value: function getLoop() {
                return this.get("loop");
            }
        },
        {
            key: "setLoop",
            value: function setLoop(loop) {
                return this.set("loop", loop);
            }
        },
        {
            key: "setMuted",
            value: function setMuted(muted) {
                return this.set("muted", muted);
            }
        },
        {
            key: "getMuted",
            value: function getMuted() {
                return this.get("muted");
            }
        },
        {
            key: "getPaused",
            value: function getPaused() {
                return this.get("paused");
            }
        },
        {
            key: "getPlaybackRate",
            value: function getPlaybackRate() {
                return this.get("playbackRate");
            }
        },
        {
            key: "setPlaybackRate",
            value: function setPlaybackRate(playbackRate) {
                return this.set("playbackRate", playbackRate);
            }
        },
        {
            key: "getPlayed",
            value: function getPlayed() {
                return this.get("played");
            }
        },
        {
            key: "getQualities",
            value: function getQualities() {
                return this.get("qualities");
            }
        },
        {
            key: "getQuality",
            value: function getQuality() {
                return this.get("quality");
            }
        },
        {
            key: "setQuality",
            value: function setQuality(quality) {
                return this.set("quality", quality);
            }
        },
        {
            key: "getRemotePlaybackAvailability",
            value: function getRemotePlaybackAvailability() {
                return this.get("remotePlaybackAvailability");
            }
        },
        {
            key: "getRemotePlaybackState",
            value: function getRemotePlaybackState() {
                return this.get("remotePlaybackState");
            }
        },
        {
            key: "getSeekable",
            value: function getSeekable() {
                return this.get("seekable");
            }
        },
        {
            key: "getSeeking",
            value: function getSeeking() {
                return this.get("seeking");
            }
        },
        {
            key: "getTextTracks",
            value: function getTextTracks() {
                return this.get("textTracks");
            }
        },
        {
            key: "getVideoEmbedCode",
            value: function getVideoEmbedCode() {
                return this.get("videoEmbedCode");
            }
        },
        {
            key: "getVideoId",
            value: function getVideoId() {
                return this.get("videoId");
            }
        },
        {
            key: "getVideoTitle",
            value: function getVideoTitle() {
                return this.get("videoTitle");
            }
        },
        {
            key: "getVideoWidth",
            value: function getVideoWidth() {
                return this.get("videoWidth");
            }
        },
        {
            key: "getVideoHeight",
            value: function getVideoHeight() {
                return this.get("videoHeight");
            }
        },
        {
            key: "getVideoUrl",
            value: function getVideoUrl() {
                return this.get("videoUrl");
            }
        },
        {
            key: "getVolume",
            value: function getVolume() {
                return this.get("volume");
            }
        },
        {
            key: "setVolume",
            value: function setVolume(volume) {
                return this.set("volume", volume);
            }
        },
        {
            key: "setTimingSrc",
            value: function() {
                var _setTimingSrc = asyncToGenerator(/*#__PURE__*/ regenerator.mark(function _callee(timingObject, options) {
                    var _this6 = this;
                    var connector;
                    return regenerator.wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                if (timingObject) {
                                    _context.next = 2;
                                    break;
                                }
                                throw new TypeError("A Timing Object must be provided.");
                            case 2:
                                _context.next = 4;
                                return this.ready();
                            case 4:
                                connector = new TimingSrcConnector(this, timingObject, options);
                                postMessage(this, "notifyTimingObjectConnect");
                                connector.addEventListener("disconnect", function() {
                                    return postMessage(_this6, "notifyTimingObjectDisconnect");
                                });
                                return _context.abrupt("return", connector);
                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function setTimingSrc(_x, _x2) {
                    return _setTimingSrc.apply(this, arguments);
                }
                return setTimingSrc;
            }()
        }
    ]);
    return Player1;
}(); // Setup embed only if this is not a node environment
if (!isNode) {
    screenfull = initializeScreenfull();
    initializeEmbeds();
    resizeEmbeds();
    initAppendVideoMetadata();
    checkUrlTimeParam();
}
exports.default = Player;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lAb0D":[function(require,module,exports) {
var debounce = require("./debounce"), isObject = require("./isObject");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */ function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
    });
}
module.exports = throttle;

},{"./debounce":"bv6vy","./isObject":"cGhqJ"}],"bv6vy":[function(require,module,exports) {
var isObject = require("./isObject"), now = require("./now"), toNumber = require("./toNumber");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) return trailingEdge(time);
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) return invokeFunc(time);
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) clearTimeout(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) return leadingEdge(lastCallTime);
            if (maxing) {
                // Handle invocations in a tight loop.
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
module.exports = debounce;

},{"./isObject":"cGhqJ","./now":"kOH6e","./toNumber":"12NaH"}],"cGhqJ":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
module.exports = isObject;

},{}],"kOH6e":[function(require,module,exports) {
var root = require("./_root");
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
module.exports = now;

},{"./_root":"dSYUs"}],"dSYUs":[function(require,module,exports) {
var freeGlobal = require("./_freeGlobal");
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
module.exports = root;

},{"./_freeGlobal":"kAk32"}],"kAk32":[function(require,module,exports) {
var global = arguments[3];
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
module.exports = freeGlobal;

},{}],"12NaH":[function(require,module,exports) {
var baseTrim = require("./_baseTrim"), isObject = require("./isObject"), isSymbol = require("./isSymbol");
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == "number") return value;
    if (isSymbol(value)) return NAN;
    if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = toNumber;

},{"./_baseTrim":"eUJZ3","./isObject":"cGhqJ","./isSymbol":"i3BHC"}],"eUJZ3":[function(require,module,exports) {
var trimmedEndIndex = require("./_trimmedEndIndex");
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
module.exports = baseTrim;

},{"./_trimmedEndIndex":"hHJmS"}],"hHJmS":[function(require,module,exports) {
/** Used to match a single whitespace character. */ var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && reWhitespace.test(string.charAt(index)));
    return index;
}
module.exports = trimmedEndIndex;

},{}],"i3BHC":[function(require,module,exports) {
var baseGetTag = require("./_baseGetTag"), isObjectLike = require("./isObjectLike");
/** `Object#toString` result references. */ var symbolTag = "[object Symbol]";
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;

},{"./_baseGetTag":"lOnbo","./isObjectLike":"3BLi4"}],"lOnbo":[function(require,module,exports) {
var Symbol = require("./_Symbol"), getRawTag = require("./_getRawTag"), objectToString = require("./_objectToString");
/** `Object#toString` result references. */ var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

},{"./_Symbol":"7lsL9","./_getRawTag":"995sO","./_objectToString":"bmE3g"}],"7lsL9":[function(require,module,exports) {
var root = require("./_root");
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;

},{"./_root":"dSYUs"}],"995sO":[function(require,module,exports) {
var Symbol = require("./_Symbol");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
module.exports = getRawTag;

},{"./_Symbol":"7lsL9"}],"bmE3g":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;

},{}],"3BLi4":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == "object";
}
module.exports = isObjectLike;

},{}]},["5rKFT","fFZ34"], "fFZ34", "parcelRequired7c6")

//# sourceMappingURL=02-video.a74b541c.js.map
