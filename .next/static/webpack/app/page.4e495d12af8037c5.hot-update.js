"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/ImageCursor.tsx":
/*!****************************************!*\
  !*** ./app/components/ImageCursor.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ImageCursor: function() { return /* binding */ ImageCursor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-spring.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_IMG_5573_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/IMG_5573.jpg */ \"(app-pages-browser)/./public/IMG_5573.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ ImageCursor auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ImageCursor() {\n    _s();\n    const spring = {\n        stiffness: 100,\n        damping: 15,\n        mass: 0.1\n    };\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)(0, spring);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)(0, spring);\n    const moveMouse = (e)=>{\n        const { clientX, clientY } = e;\n        const targetX = e.clientX - window.innerWidth * 0.1; // 5% of window width\n        const targetY = e.clientY - window.innerHeight * 0.1; // 5% of window height\n        x.set(targetX);\n        y.set(targetY);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        window.addEventListener(\"mousemove\", moveMouse);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", moveMouse);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        onMouseMove: moveMouse,\n        className: \"h-[20vw] w-[15vw] flex overflow-hidden fixed items-center justify-center\",\n        style: {\n            x,\n            y\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            src: _public_IMG_5573_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            alt: \"Hover Africa Image\",\n            layout: \"fill\",\n            objectFit: \"cover\",\n            className: \"w-full h-full\"\n        }, void 0, false, {\n            fileName: \"/Users/ahmedghaddah/Desktop/cursor-animation/app/components/ImageCursor.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ahmedghaddah/Desktop/cursor-animation/app/components/ImageCursor.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageCursor, \"Hu/Rh4HDwQ69Rg0E2rde2nuiCBI=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring\n    ];\n});\n_c = ImageCursor;\nvar _c;\n$RefreshReg$(_c, \"ImageCursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0ltYWdlQ3Vyc29yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3VDO0FBQ21CO0FBQzNCO0FBQ2dCO0FBQ2I7QUFFM0IsU0FBU0s7O0lBQ2QsTUFBTUMsU0FBUztRQUNiQyxXQUFXO1FBQ1hDLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBRUEsTUFBTUMsSUFBSVQsd0RBQVNBLENBQUMsR0FBR0s7SUFDdkIsTUFBTUssSUFBSVYsd0RBQVNBLENBQUMsR0FBR0s7SUFFdkIsTUFBTU0sWUFBWSxDQUFDQztRQUNqQixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFLEdBQUdGO1FBQzdCLE1BQU1HLFVBQVVILEVBQUVDLE9BQU8sR0FBR0csT0FBT0MsVUFBVSxHQUFHLEtBQUsscUJBQXFCO1FBQzFFLE1BQU1DLFVBQVVOLEVBQUVFLE9BQU8sR0FBR0UsT0FBT0csV0FBVyxHQUFHLEtBQUssc0JBQXNCO1FBRTVFVixFQUFFVyxHQUFHLENBQUNMO1FBQ05MLEVBQUVVLEdBQUcsQ0FBQ0Y7SUFDUjtJQUVBZixnREFBU0EsQ0FBQztRQUNSYSxPQUFPSyxnQkFBZ0IsQ0FBQyxhQUFhVjtRQUNyQyxPQUFPO1lBQ0xLLE9BQU9NLG1CQUFtQixDQUFDLGFBQWFYO1FBQzFDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNaLGlEQUFNQSxDQUFDd0IsR0FBRztRQUNUQyxhQUFhYjtRQUNiYyxXQUFVO1FBQ1ZDLE9BQU87WUFBRWpCO1lBQUdDO1FBQUU7a0JBRWQsNEVBQUNULGtEQUFLQTtZQUNKMEIsS0FBS3pCLDREQUFNQTtZQUNYMEIsS0FBSTtZQUNKQyxRQUFPO1lBQ1BDLFdBQVU7WUFDVkwsV0FBVTs7Ozs7Ozs7Ozs7QUFJbEI7R0F6Q2dCckI7O1FBT0pKLG9EQUFTQTtRQUNUQSxvREFBU0E7OztLQVJMSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9JbWFnZUN1cnNvci50c3g/MWM1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VNb3Rpb25WYWx1ZSwgdXNlU3ByaW5nIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGFmcmljYSBmcm9tIFwiLi4vLi4vcHVibGljL0lNR181NTczLmpwZ1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBJbWFnZUN1cnNvcigpIHtcbiAgY29uc3Qgc3ByaW5nID0ge1xuICAgIHN0aWZmbmVzczogMTAwLFxuICAgIGRhbXBpbmc6IDE1LFxuICAgIG1hc3M6IDAuMSxcbiAgfTtcblxuICBjb25zdCB4ID0gdXNlU3ByaW5nKDAsIHNwcmluZyk7XG4gIGNvbnN0IHkgPSB1c2VTcHJpbmcoMCwgc3ByaW5nKTtcblxuICBjb25zdCBtb3ZlTW91c2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBlO1xuICAgIGNvbnN0IHRhcmdldFggPSBlLmNsaWVudFggLSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuMTsgLy8gNSUgb2Ygd2luZG93IHdpZHRoXG4gICAgY29uc3QgdGFyZ2V0WSA9IGUuY2xpZW50WSAtIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMTsgLy8gNSUgb2Ygd2luZG93IGhlaWdodFxuXG4gICAgeC5zZXQodGFyZ2V0WCk7XG4gICAgeS5zZXQodGFyZ2V0WSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlTW91c2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlTW91c2UpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBvbk1vdXNlTW92ZT17bW92ZU1vdXNlfVxuICAgICAgY2xhc3NOYW1lPVwiaC1bMjB2d10gdy1bMTV2d10gZmxleCBvdmVyZmxvdy1oaWRkZW4gZml4ZWQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgIHN0eWxlPXt7IHgsIHkgfX1cbiAgICA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXthZnJpY2F9XG4gICAgICAgIGFsdD1cIkhvdmVyIEFmcmljYSBJbWFnZVwiXG4gICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGxcIlxuICAgICAgLz5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibW90aW9uIiwidXNlU3ByaW5nIiwiSW1hZ2UiLCJhZnJpY2EiLCJ1c2VFZmZlY3QiLCJJbWFnZUN1cnNvciIsInNwcmluZyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJtYXNzIiwieCIsInkiLCJtb3ZlTW91c2UiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJ0YXJnZXRYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInRhcmdldFkiLCJpbm5lckhlaWdodCIsInNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2Iiwib25Nb3VzZU1vdmUiLCJjbGFzc05hbWUiLCJzdHlsZSIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ImageCursor.tsx\n"));

/***/ })

});