"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["lazy-appNode"],{

/***/ "./src/appNode.js":
/*!************************!*\
  !*** ./src/appNode.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appNode: () => (/* binding */ appNode)\n/* harmony export */ });\nfunction loadCSSLazy(url) {\n  const style = document.createElement(\"link\");\n  style.href = url;\n  style.rel = \"stylesheet\";\n  document.head.appendChild(style);\n}\n\nconst appNode = {\n  init(data) {\n    // undesired: on-demand file is loaded up front\n    // also, today this lazy loaded CSS file is generating a JS file that does nothing\n    const loadcss = () => __webpack_require__.e(/*! import() | lazy-appNodeStyle */ \"lazy-appNodeStyle\").then(__webpack_require__.bind(__webpack_require__, /*! ./appNode.scss */ \"./src/appNode.scss\"));\n    // lazy load css with JS module\n    loadcss();\n    console.log(\">> app1 >> appNode.js >> init(), data:\", data);\n  },\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwTm9kZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDhLQUFtRTtBQUM3RjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcE5vZGUuanM/ODRjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBsb2FkQ1NTTGF6eSh1cmwpIHtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgc3R5bGUuaHJlZiA9IHVybDtcbiAgc3R5bGUucmVsID0gXCJzdHlsZXNoZWV0XCI7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5jb25zdCBhcHBOb2RlID0ge1xuICBpbml0KGRhdGEpIHtcbiAgICAvLyB1bmRlc2lyZWQ6IG9uLWRlbWFuZCBmaWxlIGlzIGxvYWRlZCB1cCBmcm9udFxuICAgIC8vIGFsc28sIHRvZGF5IHRoaXMgbGF6eSBsb2FkZWQgQ1NTIGZpbGUgaXMgZ2VuZXJhdGluZyBhIEpTIGZpbGUgdGhhdCBkb2VzIG5vdGhpbmdcbiAgICBjb25zdCBsb2FkY3NzID0gKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibGF6eS1hcHBOb2RlU3R5bGVcIiAqL1wiLi9hcHBOb2RlLnNjc3NcIik7XG4gICAgLy8gbGF6eSBsb2FkIGNzcyB3aXRoIEpTIG1vZHVsZVxuICAgIGxvYWRjc3MoKTtcbiAgICBjb25zb2xlLmxvZyhcIj4+IGFwcDEgPj4gYXBwTm9kZS5qcyA+PiBpbml0KCksIGRhdGE6XCIsIGRhdGEpO1xuICB9LFxufTtcblxuZXhwb3J0IHsgYXBwTm9kZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/appNode.js\n");

/***/ })

}]);