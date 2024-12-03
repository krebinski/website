"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageWrapperTemplate),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Document = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n        lang: \"pt\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        charSet: \"UTF-8\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/website/src/pages/_document.tsx\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1.0\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/website/src/pages/_document.tsx\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/workspaces/website/src/pages/_document.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/website/src/pages/_document.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                        fileName: \"/workspaces/website/src/pages/_document.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                        fileName: \"/workspaces/website/src/pages/_document.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspaces/website/src/pages/_document.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspaces/website/src/pages/_document.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n\nvar serverComponentModule = /*#__PURE__*/Object.freeze({\n    __proto__: null,\n    default: Document\n});\n\n/*\n * This file is a template for the code which will be substituted when our webpack loader handles non-API files in the\n * `pages/` directory.\n *\n * We use `__SENTRY_WRAPPING_TARGET_FILE__.cjs` as a placeholder for the path to the file being wrapped. Because it's not a real package,\n * this causes both TS and ESLint to complain, hence the pragma comments below.\n */\n\n\nconst userPageModule = serverComponentModule ;\n\nconst pageComponent = userPageModule ? userPageModule.default : undefined;\n\nconst origGetInitialProps = pageComponent ? pageComponent.getInitialProps : undefined;\nconst origGetStaticProps = userPageModule ? userPageModule.getStaticProps : undefined;\nconst origGetServerSideProps = userPageModule ? userPageModule.getServerSideProps : undefined;\n\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nconst getInitialPropsWrappers = {\n  '/_app': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapAppGetInitialPropsWithSentry,\n  '/_document': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapDocumentGetInitialPropsWithSentry,\n  '/_error': _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapErrorGetInitialPropsWithSentry,\n};\n\nconst getInitialPropsWrapper = getInitialPropsWrappers['/_document'] || _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapGetInitialPropsWithSentry;\n\nif (pageComponent && typeof origGetInitialProps === 'function') {\n  pageComponent.getInitialProps = getInitialPropsWrapper(origGetInitialProps) ;\n}\n\nconst getStaticProps =\n  typeof origGetStaticProps === 'function'\n    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapGetStaticPropsWithSentry(origGetStaticProps, '/_document')\n    : undefined;\nconst getServerSideProps =\n  typeof origGetServerSideProps === 'function'\n    ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapGetServerSidePropsWithSentry(origGetServerSideProps, '/_document')\n    : undefined;\n\nconst pageWrapperTemplate = pageComponent ? _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.wrapPageComponentWithSentry(pageComponent ) : pageComponent;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTUEsUUFBVztBQUNmLHlCQUNFQyw2REFBQ0MsQ0FBQUEsK0NBQUFBLEVBQUFBO1FBQUtDLElBQUs7OzBCQUNURiw2REFBQ0csQ0FBQUEsK0NBQUFBLEVBQUFBOztrQ0FFQ0gsNkRBQUNJLENBQUFBLE1BQUFBLEVBQUFBO3dCQUFLQyxPQUFROzs7Ozs7a0NBQ2RMLDZEQUFDSSxDQUFBQSxNQUFBQSxFQUFBQTt3QkFBS0UsSUFBSzt3QkFBV0MsT0FBUTs7Ozs7O2tDQUM5QlAsNkRBQUNRLENBQUFBLE1BQUFBLEVBQUFBO3dCQUFLQyxHQUFJO3dCQUFPQyxJQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCViw2REFBQ1csQ0FBQUEsTUFBQUEsRUFBQUE7O2tDQUNDWCw2REFBQ1ksQ0FBQUEsK0NBQUFBLEVBQUFBLEVBQUFBLEVBQUFBLEtBQUFBLENBQUFBLEVBQUFBLEtBQUFBLEVBQUFBOzs7OztrQ0FDRFosNkRBQUNhLENBQUFBLHFEQUFBQSxFQUFBQSxFQUFBQSxFQUFBQSxLQUFBQSxDQUFBQSxFQUFBQSxLQUFBQSxFQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVDs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sY0FBYyxHQUFHLHFCQUFxQixFQUFFO0FBQzlDO0FBQ0EsTUFBTSxhQUFhLEdBQUcsY0FBYyxHQUFHLGNBQWMsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO0FBQzFFO0FBQ0EsTUFBTSxtQkFBbUIsR0FBRyxhQUFhLEdBQUcsYUFBYSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFDdEYsTUFBTSxrQkFBa0IsR0FBRyxjQUFjLEdBQUcsY0FBYyxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7QUFDdEYsTUFBTSxzQkFBc0IsR0FBRyxjQUFjLEdBQUcsY0FBYyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztBQUM5RjtBQUNBO0FBQ0EsTUFBTSx1QkFBdUIsR0FBRztBQUNoQyxFQUFFLE9BQU8sRUFBRSw0RUFBdUM7QUFDbEQsRUFBRSxZQUFZLEVBQUUsaUZBQTRDO0FBQzVELEVBQUUsU0FBUyxFQUFFLDhFQUF5QztBQUN0RCxDQUFDLENBQUM7QUFDRjtBQUNBLE1BQU0sc0JBQXNCLEdBQUcsdUJBQXVCLENBQUMsWUFBWSxDQUFDLElBQUkseUVBQW9DLENBQUM7QUFDN0c7QUFDQSxJQUFJLGFBQWEsSUFBSSxPQUFPLG1CQUFtQixLQUFLLFVBQVUsRUFBRTtBQUNoRSxFQUFFLGFBQWEsQ0FBQyxlQUFlLEdBQUcsc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsRUFBRTtBQUMvRSxDQUFDO0FBQ0Q7QUFDSyxNQUFDLGNBQWM7QUFDcEIsRUFBRSxPQUFPLGtCQUFrQixLQUFLLFVBQVU7QUFDMUMsTUFBTSx3RUFBbUMsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUM7QUFDM0UsTUFBTSxVQUFVO0FBQ1gsTUFBQyxrQkFBa0I7QUFDeEIsRUFBRSxPQUFPLHNCQUFzQixLQUFLLFVBQVU7QUFDOUMsTUFBTSw0RUFBdUMsQ0FBQyxzQkFBc0IsRUFBRSxZQUFZLENBQUM7QUFDbkYsTUFBTSxVQUFVO0FBQ2hCO0FBQ0ssTUFBQyxtQkFBbUIsR0FBRyxhQUFhLEdBQUcsdUVBQWtDLENBQUMsYUFBYSxFQUFFLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWF2ZXNtYy5vcmcvc3JjL3BhZ2VzL19kb2N1bWVudC50c3g/ZWI3MCIsIndlYnBhY2s6Ly9sZWF2ZXNtYy5vcmcvc2VudHJ5LXdyYXBwZXItbW9kdWxlPzZmOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5cbmNvbnN0IERvY3VtZW50ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxIdG1sIGxhbmc9XCJwdFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIHsvKiBDb25maWd1cmHDp8O1ZXMgZ2xvYmFpcywgY29tbyDDrWNvbmVzIGUgbWV0YSB0YWdzICovfVxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8TWFpbiAvPlxuICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvSHRtbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50O1xuIiwiaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gJ0BzZW50cnkvbmV4dGpzJztcbmltcG9ydCAqIGFzIHNlcnZlckNvbXBvbmVudE1vZHVsZSBmcm9tICdfX1NFTlRSWV9XUkFQUElOR19UQVJHRVRfRklMRV9fLmNqcyc7XG5leHBvcnQgKiBmcm9tICdfX1NFTlRSWV9XUkFQUElOR19UQVJHRVRfRklMRV9fLmNqcyc7XG5cbi8qXG4gKiBUaGlzIGZpbGUgaXMgYSB0ZW1wbGF0ZSBmb3IgdGhlIGNvZGUgd2hpY2ggd2lsbCBiZSBzdWJzdGl0dXRlZCB3aGVuIG91ciB3ZWJwYWNrIGxvYWRlciBoYW5kbGVzIG5vbi1BUEkgZmlsZXMgaW4gdGhlXG4gKiBgcGFnZXMvYCBkaXJlY3RvcnkuXG4gKlxuICogV2UgdXNlIGBfX1NFTlRSWV9XUkFQUElOR19UQVJHRVRfRklMRV9fLmNqc2AgYXMgYSBwbGFjZWhvbGRlciBmb3IgdGhlIHBhdGggdG8gdGhlIGZpbGUgYmVpbmcgd3JhcHBlZC4gQmVjYXVzZSBpdCdzIG5vdCBhIHJlYWwgcGFja2FnZSxcbiAqIHRoaXMgY2F1c2VzIGJvdGggVFMgYW5kIEVTTGludCB0byBjb21wbGFpbiwgaGVuY2UgdGhlIHByYWdtYSBjb21tZW50cyBiZWxvdy5cbiAqL1xuXG5cbmNvbnN0IHVzZXJQYWdlTW9kdWxlID0gc2VydmVyQ29tcG9uZW50TW9kdWxlIDtcblxuY29uc3QgcGFnZUNvbXBvbmVudCA9IHVzZXJQYWdlTW9kdWxlID8gdXNlclBhZ2VNb2R1bGUuZGVmYXVsdCA6IHVuZGVmaW5lZDtcblxuY29uc3Qgb3JpZ0dldEluaXRpYWxQcm9wcyA9IHBhZ2VDb21wb25lbnQgPyBwYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA6IHVuZGVmaW5lZDtcbmNvbnN0IG9yaWdHZXRTdGF0aWNQcm9wcyA9IHVzZXJQYWdlTW9kdWxlID8gdXNlclBhZ2VNb2R1bGUuZ2V0U3RhdGljUHJvcHMgOiB1bmRlZmluZWQ7XG5jb25zdCBvcmlnR2V0U2VydmVyU2lkZVByb3BzID0gdXNlclBhZ2VNb2R1bGUgPyB1c2VyUGFnZU1vZHVsZS5nZXRTZXJ2ZXJTaWRlUHJvcHMgOiB1bmRlZmluZWQ7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5jb25zdCBnZXRJbml0aWFsUHJvcHNXcmFwcGVycyA9IHtcbiAgJy9fYXBwJzogU2VudHJ5LndyYXBBcHBHZXRJbml0aWFsUHJvcHNXaXRoU2VudHJ5LFxuICAnL19kb2N1bWVudCc6IFNlbnRyeS53cmFwRG9jdW1lbnRHZXRJbml0aWFsUHJvcHNXaXRoU2VudHJ5LFxuICAnL19lcnJvcic6IFNlbnRyeS53cmFwRXJyb3JHZXRJbml0aWFsUHJvcHNXaXRoU2VudHJ5LFxufTtcblxuY29uc3QgZ2V0SW5pdGlhbFByb3BzV3JhcHBlciA9IGdldEluaXRpYWxQcm9wc1dyYXBwZXJzWycvX2RvY3VtZW50J10gfHwgU2VudHJ5LndyYXBHZXRJbml0aWFsUHJvcHNXaXRoU2VudHJ5O1xuXG5pZiAocGFnZUNvbXBvbmVudCAmJiB0eXBlb2Ygb3JpZ0dldEluaXRpYWxQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICBwYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGdldEluaXRpYWxQcm9wc1dyYXBwZXIob3JpZ0dldEluaXRpYWxQcm9wcykgO1xufVxuXG5jb25zdCBnZXRTdGF0aWNQcm9wcyA9XG4gIHR5cGVvZiBvcmlnR2V0U3RhdGljUHJvcHMgPT09ICdmdW5jdGlvbidcbiAgICA/IFNlbnRyeS53cmFwR2V0U3RhdGljUHJvcHNXaXRoU2VudHJ5KG9yaWdHZXRTdGF0aWNQcm9wcywgJy9fZG9jdW1lbnQnKVxuICAgIDogdW5kZWZpbmVkO1xuY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID1cbiAgdHlwZW9mIG9yaWdHZXRTZXJ2ZXJTaWRlUHJvcHMgPT09ICdmdW5jdGlvbidcbiAgICA/IFNlbnRyeS53cmFwR2V0U2VydmVyU2lkZVByb3BzV2l0aFNlbnRyeShvcmlnR2V0U2VydmVyU2lkZVByb3BzLCAnL19kb2N1bWVudCcpXG4gICAgOiB1bmRlZmluZWQ7XG5cbmNvbnN0IHBhZ2VXcmFwcGVyVGVtcGxhdGUgPSBwYWdlQ29tcG9uZW50ID8gU2VudHJ5LndyYXBQYWdlQ29tcG9uZW50V2l0aFNlbnRyeShwYWdlQ29tcG9uZW50ICkgOiBwYWdlQ29tcG9uZW50O1xuXG5leHBvcnQgeyBwYWdlV3JhcHBlclRlbXBsYXRlIGFzIGRlZmF1bHQsIGdldFNlcnZlclNpZGVQcm9wcywgZ2V0U3RhdGljUHJvcHMgfTtcbiJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIl9qc3hERVYiLCJIdG1sIiwibGFuZyIsIkhlYWQiLCJtZXRhIiwiY2hhclNldCIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJib2R5IiwiTWFpbiIsIk5leHRTY3JpcHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_document.tsx\n");

/***/ }),

/***/ "@sentry/nextjs":
/*!*********************************!*\
  !*** external "@sentry/nextjs" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.tsx")));
module.exports = __webpack_exports__;

})();