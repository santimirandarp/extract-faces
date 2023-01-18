/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_esm_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib-esm/index */ \"../lib-esm/index.js\");\n\n\nasync function run() {\n  const options = await (0,_lib_esm_index__WEBPACK_IMPORTED_MODULE_0__.nnOptions)({\n    modelOptions: new _lib_esm_index__WEBPACK_IMPORTED_MODULE_0__.TinyFaceDetectorOptions({ scoreThreshold: 0.5 }),\n    modelsPath: './models',\n  });\n  const result = await (0,_lib_esm_index__WEBPACK_IMPORTED_MODULE_0__.extractFaces)(\n    './images/testThreeFaces.jpg',\n    options,\n  );\n\n  const p = document.createElement('p');\n  p.innerText = JSON.stringify(result);\n  document.body.appendChild(p);\n}\n\nrun().catch((e) => console.error(e));\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "../lib-esm/extractFaces.js":
/*!**********************************!*\
  !*** ../lib-esm/extractFaces.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SsdMobilenetv1Options\": () => (/* reexport safe */ _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_4__.SsdMobilenetv1Options),\n/* harmony export */   \"TinyFaceDetectorOptions\": () => (/* reexport safe */ _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_4__.TinyFaceDetectorOptions),\n/* harmony export */   \"extractFaces\": () => (/* binding */ extractFaces),\n/* harmony export */   \"nnOptions\": () => (/* binding */ nnOptions)\n/* harmony export */ });\n/* harmony import */ var _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vladmandic/face-api */ \"../node_modules/@vladmandic/face-api/dist/face-api.esm.js\");\n/* harmony import */ var browser_or_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser-or-node */ \"../node_modules/browser-or-node/lib/index.js\");\n/* harmony import */ var image_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! image-js */ \"../node_modules/image-js/src/index.js\");\n/* harmony import */ var _utils_loadBrowserNN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/loadBrowserNN */ \"../lib-esm/utils/loadBrowserNN.js\");\n/* harmony import */ var _utils_loadNodeNN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/loadNodeNN */ \"../lib-esm/utils/loadNodeNN.js\");\n\n\n\n\n\nasync function nnOptions(options = {}) {\n    // defaults\n    const newOptions = {\n        modelOptions: options.modelOptions || new _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_4__.SsdMobilenetv1Options({ minConfidence: 0.5 }),\n        modelsPath: options.modelsPath || '../models',\n    };\n    if (browser_or_node__WEBPACK_IMPORTED_MODULE_0__.isBrowser) {\n        await (0,_utils_loadBrowserNN__WEBPACK_IMPORTED_MODULE_2__.loadBrowserNN)(newOptions);\n    }\n    else {\n        await (0,_utils_loadNodeNN__WEBPACK_IMPORTED_MODULE_3__.setEnvironment)(newOptions);\n    }\n    return newOptions;\n}\nasync function extractFaces(inputImage, options) {\n    const image = (await image_js__WEBPACK_IMPORTED_MODULE_1__.Image.load(inputImage)).getCanvas();\n    const detection = await (0,_vladmandic_face_api__WEBPACK_IMPORTED_MODULE_4__.detectAllFaces)(image, options.modelOptions);\n    return detection;\n}\n\n/**\nasync function run() {\n  const options = await nnOptions();\n  const res = await extractFaces(\n    './__tests__/images/testThreeFaces.jpg',\n    options,\n  );\n  console.log(res);\n}\nrun().catch((e) => console.log(e));\n\n*/\n//# sourceMappingURL=extractFaces.js.map\n\n//# sourceURL=webpack:///../lib-esm/extractFaces.js?");

/***/ }),

/***/ "../lib-esm/index.js":
/*!***************************!*\
  !*** ../lib-esm/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SsdMobilenetv1Options\": () => (/* reexport safe */ _extractFaces__WEBPACK_IMPORTED_MODULE_0__.SsdMobilenetv1Options),\n/* harmony export */   \"TinyFaceDetectorOptions\": () => (/* reexport safe */ _extractFaces__WEBPACK_IMPORTED_MODULE_0__.TinyFaceDetectorOptions),\n/* harmony export */   \"extractFaces\": () => (/* reexport safe */ _extractFaces__WEBPACK_IMPORTED_MODULE_0__.extractFaces),\n/* harmony export */   \"nnOptions\": () => (/* reexport safe */ _extractFaces__WEBPACK_IMPORTED_MODULE_0__.nnOptions)\n/* harmony export */ });\n/* harmony import */ var _extractFaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extractFaces */ \"../lib-esm/extractFaces.js\");\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///../lib-esm/index.js?");

/***/ }),

/***/ "../lib-esm/utils/loadBrowserNN.js":
/*!*****************************************!*\
  !*** ../lib-esm/utils/loadBrowserNN.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadBrowserNN\": () => (/* binding */ loadBrowserNN)\n/* harmony export */ });\n/* harmony import */ var _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vladmandic/face-api */ \"../node_modules/@vladmandic/face-api/dist/face-api.esm.js\");\n\nasync function loadBrowserNN(opts) {\n    const { modelOptions, modelsPath } = opts;\n    if (modelOptions instanceof _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_0__.TinyFaceDetectorOptions) {\n        await _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_0__.nets.tinyFaceDetector.loadFromUri(modelsPath);\n    }\n    else if (modelOptions instanceof _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_0__.SsdMobilenetv1Options) {\n        await _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_0__.nets.ssdMobilenetv1.loadFromUri(modelsPath);\n    }\n    else {\n        throw new Error('No NN found in options');\n    }\n}\n//# sourceMappingURL=loadBrowserNN.js.map\n\n//# sourceURL=webpack:///../lib-esm/utils/loadBrowserNN.js?");

/***/ }),

/***/ "../lib-esm/utils/loadNodeNN.js":
/*!**************************************!*\
  !*** ../lib-esm/utils/loadNodeNN.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setEnvironment\": () => (/* binding */ setEnvironment)\n/* harmony export */ });\n/* harmony import */ var _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vladmandic/face-api */ \"../node_modules/@vladmandic/face-api/dist/face-api.esm.js\");\n/* harmony import */ var canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! canvas */ \"../node_modules/canvas/browser.js\");\n\n\n/**\n * Modifies global settings\n * @param opts - FaceDetectionOptions\n * @param models - absolute path to models\n * @returns\n */\nasync function setEnvironment(opts) {\n    monkeyPatch();\n    await loadNetNode(opts);\n}\nasync function loadNetNode(opts) {\n    const { modelOptions, modelsPath } = opts;\n    if (modelOptions instanceof _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_1__.TinyFaceDetectorOptions) {\n        await _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_1__.nets.tinyFaceDetector.loadFromDisk(modelsPath);\n    }\n    else if (modelOptions instanceof _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_1__.SsdMobilenetv1Options) {\n        await _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_1__.nets.ssdMobilenetv1.loadFromDisk(modelsPath);\n    }\n    else {\n        throw new Error('No NN found in options');\n    }\n}\nfunction monkeyPatch() {\n    _vladmandic_face_api__WEBPACK_IMPORTED_MODULE_1__.env.monkeyPatch({ Canvas: canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas, Image: canvas__WEBPACK_IMPORTED_MODULE_0__.Image, ImageData: canvas__WEBPACK_IMPORTED_MODULE_0__.ImageData });\n}\n//# sourceMappingURL=loadNodeNN.js.map\n\n//# sourceURL=webpack:///../lib-esm/utils/loadNodeNN.js?");

/***/ }),

/***/ "../node_modules/@vladmandic/face-api/dist sync recursive":
/*!*******************************************************!*\
  !*** ../node_modules/@vladmandic/face-api/dist/ sync ***!
  \*******************************************************/
/***/ ((module) => {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = () => ([]);\nwebpackEmptyContext.resolve = webpackEmptyContext;\nwebpackEmptyContext.id = \"../node_modules/@vladmandic/face-api/dist sync recursive\";\nmodule.exports = webpackEmptyContext;\n\n//# sourceURL=webpack:///../node_modules/@vladmandic/face-api/dist/_sync?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_vladmandic_face-api_dist_face-api_esm_js-node_modules_browser-or-node_li-7cbb43"], () => (__webpack_require__("./main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;