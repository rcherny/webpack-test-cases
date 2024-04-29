/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/app1.js":
/*!*********************!*\
  !*** ./src/app1.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app1_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app1.scss */ \"./src/app1.scss\");\n// has never been supported\n// const url = new URL(\"./app1.scss\", import.meta.url);\n// console.log('app1.js > css url?', url);\n\n\nconsole.log(\">> app1.js (mini-remove)\");\n\nconst appNodeLoader = {\n  init() {\n    console.log(\"00\");\n    const nodeEl = document.querySelector(\".appNode\");\n    if (nodeEl) {\n      console.log(\"01\");\n      nodeEl.querySelector(\"a\").addEventListener(\"click\", (e) => {\n        e.preventDefault();\n        const aData = e.target?.dataset.info;\n        console.log(\"02\");\n        function loadStuff(d) {\n          Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./appNode.js */ \"./src/appNode.js\")).then(\n            (module) => {\n              module.appNode.init(d);\n              console.log(\">> app1 >> done\");\n            },\n          );\n        }\n        loadStuff(aData);\n      });\n    } else {\n      console.log(\"03\");\n    }\n  },\n};\nappNodeLoader.init();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appNodeLoader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwMS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUM4RDs7QUFFOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsNEhBQTZEO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwMS5qcz9hYTQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGhhcyBuZXZlciBiZWVuIHN1cHBvcnRlZFxuLy8gY29uc3QgdXJsID0gbmV3IFVSTChcIi4vYXBwMS5zY3NzXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBjb25zb2xlLmxvZygnYXBwMS5qcyA+IGNzcyB1cmw/JywgdXJsKTtcbmltcG9ydCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNodW5rLWNzcy1hcHAxXCIgKi8gXCIuL2FwcDEuc2Nzc1wiO1xuXG5jb25zb2xlLmxvZyhcIj4+IGFwcDEuanMgKG1pbmktcmVtb3ZlKVwiKTtcblxuY29uc3QgYXBwTm9kZUxvYWRlciA9IHtcbiAgaW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIjAwXCIpO1xuICAgIGNvbnN0IG5vZGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwTm9kZVwiKTtcbiAgICBpZiAobm9kZUVsKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIjAxXCIpO1xuICAgICAgbm9kZUVsLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGFEYXRhID0gZS50YXJnZXQ/LmRhdGFzZXQuaW5mbztcbiAgICAgICAgY29uc29sZS5sb2coXCIwMlwiKTtcbiAgICAgICAgZnVuY3Rpb24gbG9hZFN0dWZmKGQpIHtcbiAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsYXp5LWFwcE5vZGVcIiAqLyBcIi4vYXBwTm9kZS5qc1wiKS50aGVuKFxuICAgICAgICAgICAgKG1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgICBtb2R1bGUuYXBwTm9kZS5pbml0KGQpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4+IGFwcDEgPj4gZG9uZVwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkU3R1ZmYoYURhdGEpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiMDNcIik7XG4gICAgfVxuICB9LFxufTtcbmFwcE5vZGVMb2FkZXIuaW5pdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhcHBOb2RlTG9hZGVyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/app1.js\n");

/***/ }),

/***/ "./src/appNode.js":
/*!************************!*\
  !*** ./src/appNode.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appNode: () => (/* binding */ appNode)\n/* harmony export */ });\nfunction loadCSSLazy(url) {\n  const style = document.createElement(\"link\");\n  style.href = url;\n  style.rel = \"stylesheet\";\n  document.head.appendChild(style);\n}\n\nconst appNode = {\n  init(data) {\n    // undesired: on-demand file is loaded up front\n    // also, today this lazy loaded CSS file is generating a JS file that does nothing\n    const loadcss = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./appNode.scss */ \"./src/appNode.scss\"));\n    // lazy load css with JS module\n    loadcss();\n    console.log(\">> app1 >> appNode.js >> init(), data:\", data);\n  },\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwTm9kZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdJQUFtRTtBQUM3RjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcE5vZGUuanM/ODRjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkQ1NTTGF6eSh1cmwpIHtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgc3R5bGUuaHJlZiA9IHVybDtcbiAgc3R5bGUucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5jb25zdCBhcHBOb2RlID0ge1xuICBpbml0KGRhdGEpIHtcbiAgICAvLyB1bmRlc2lyZWQ6IG9uLWRlbWFuZCBmaWxlIGlzIGxvYWRlZCB1cCBmcm9udFxuICAgIC8vIGFsc28sIHRvZGF5IHRoaXMgbGF6eSBsb2FkZWQgQ1NTIGZpbGUgaXMgZ2VuZXJhdGluZyBhIEpTIGZpbGUgdGhhdCBkb2VzIG5vdGhpbmdcbiAgICBjb25zdCBsb2FkY3NzID0gKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibGF6eS1hcHBOb2RlU3R5bGVcIiAqL1wiLi9hcHBOb2RlLnNjc3NcIik7XG4gICAgLy8gbGF6eSBsb2FkIGNzcyB3aXRoIEpTIG1vZHVsZVxuICAgIGxvYWRjc3MoKTtcbiAgICBjb25zb2xlLmxvZyhcIj4+IGFwcDEgPj4gYXBwTm9kZS5qcyA+PiBpbml0KCksIGRhdGE6XCIsIGRhdGEpO1xuICB9LFxufTtcblxuZXhwb3J0IHsgYXBwTm9kZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/appNode.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"main.js\");\n\nPromise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./app1.js */ \"./src/app1.js\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxzSEFBMkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz81NmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwibWFpbi5qc1wiKTtcblxuaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY2h1bmstanMtYXBwMVwiICovIFwiLi9hcHAxLmpzXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval-source-map devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 
