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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ImageCursor: function() { return /* binding */ ImageCursor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-motion-value.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_IMG_5573_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/IMG_5573.jpg */ \"(app-pages-browser)/./public/IMG_5573.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ ImageCursor auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ImageCursor() {\n    _s();\n    const spring = {\n        stiffness: 150,\n        damping: 15,\n        mass: 0.1\n    };\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValue)(0);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValue)(0);\n    const moveMouse = (e)=>{\n        const { clientX, clientY } = e;\n        x.set(clientX);\n        y.set(clientY);\n        console.log(\"Mouse Position:\", e.clientX, e.clientY);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        window.addEventListener(\"mousemove\", moveMouse);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", moveMouse);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        onMouseMove: moveMouse,\n        className: \"h-[30vw] w-[25vw] absolute z-50\",\n        style: {\n            x,\n            y\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            src: _public_IMG_5573_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            alt: \"Hover Africa Image\",\n            layout: \"fill\",\n            objectFit: \"cover\",\n            className: \"w-full h-full\"\n        }, void 0, false, {\n            fileName: \"/Users/ahmedghaddah/Desktop/cursor-animation/app/components/ImageCursor.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ahmedghaddah/Desktop/cursor-animation/app/components/ImageCursor.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageCursor, \"mMMykp0qxCJW8XV9IptySD0nTFU=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValue\n    ];\n});\n_c = ImageCursor;\nvar _c;\n$RefreshReg$(_c, \"ImageCursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0ltYWdlQ3Vyc29yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3VDO0FBQ21CO0FBQzNCO0FBQ2dCO0FBQ2I7QUFFM0IsU0FBU0s7O0lBQ2QsTUFBTUMsU0FBUztRQUNiQyxXQUFXO1FBQ1hDLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBRUEsTUFBTUMsSUFBSVQsNkRBQWNBLENBQUM7SUFDekIsTUFBTVUsSUFBSVYsNkRBQWNBLENBQUM7SUFFekIsTUFBTVcsWUFBWSxDQUFDQztRQUNqQixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFLEdBQUdGO1FBQzdCSCxFQUFFTSxHQUFHLENBQUNGO1FBQ05ILEVBQUVLLEdBQUcsQ0FBQ0Q7UUFDTkUsUUFBUUMsR0FBRyxDQUFDLG1CQUFtQkwsRUFBRUMsT0FBTyxFQUFFRCxFQUFFRSxPQUFPO0lBQ3JEO0lBRUFYLGdEQUFTQSxDQUFDO1FBQ1JlLE9BQU9DLGdCQUFnQixDQUFDLGFBQWFSO1FBQ3JDLE9BQU87WUFDTE8sT0FBT0UsbUJBQW1CLENBQUMsYUFBYVQ7UUFDMUM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1osaURBQU1BLENBQUNzQixHQUFHO1FBQ1RDLGFBQWFYO1FBQ2JZLFdBQVU7UUFDVkMsT0FBTztZQUFFZjtZQUFHQztRQUFFO2tCQUVkLDRFQUFDVCxrREFBS0E7WUFDSndCLEtBQUt2Qiw0REFBTUE7WUFDWHdCLEtBQUk7WUFDSkMsUUFBTztZQUNQQyxXQUFVO1lBQ1ZMLFdBQVU7Ozs7Ozs7Ozs7O0FBSWxCO0dBdkNnQm5COztRQU9KSix5REFBY0E7UUFDZEEseURBQWNBOzs7S0FSVkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSW1hZ2VDdXJzb3IudHN4PzFjNTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlTW90aW9uVmFsdWUsIHVzZVNwcmluZyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBhZnJpY2EgZnJvbSBcIi4uLy4uL3B1YmxpYy9JTUdfNTU3My5qcGdcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gSW1hZ2VDdXJzb3IoKSB7XG4gIGNvbnN0IHNwcmluZyA9IHtcbiAgICBzdGlmZm5lc3M6IDE1MCxcbiAgICBkYW1waW5nOiAxNSxcbiAgICBtYXNzOiAwLjEsXG4gIH07XG5cbiAgY29uc3QgeCA9IHVzZU1vdGlvblZhbHVlKDApO1xuICBjb25zdCB5ID0gdXNlTW90aW9uVmFsdWUoMCk7XG5cbiAgY29uc3QgbW92ZU1vdXNlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZTtcbiAgICB4LnNldChjbGllbnRYKTtcbiAgICB5LnNldChjbGllbnRZKTtcbiAgICBjb25zb2xlLmxvZyhcIk1vdXNlIFBvc2l0aW9uOlwiLCBlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlTW91c2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlTW91c2UpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBvbk1vdXNlTW92ZT17bW92ZU1vdXNlfVxuICAgICAgY2xhc3NOYW1lPVwiaC1bMzB2d10gdy1bMjV2d10gYWJzb2x1dGUgei01MFwiXG4gICAgICBzdHlsZT17eyB4LCB5IH19XG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17YWZyaWNhfVxuICAgICAgICBhbHQ9XCJIb3ZlciBBZnJpY2EgSW1hZ2VcIlxuICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbiAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsXCJcbiAgICAgIC8+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInVzZU1vdGlvblZhbHVlIiwiSW1hZ2UiLCJhZnJpY2EiLCJ1c2VFZmZlY3QiLCJJbWFnZUN1cnNvciIsInNwcmluZyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJtYXNzIiwieCIsInkiLCJtb3ZlTW91c2UiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJvbk1vdXNlTW92ZSIsImNsYXNzTmFtZSIsInN0eWxlIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ImageCursor.tsx\n"));

/***/ })

});