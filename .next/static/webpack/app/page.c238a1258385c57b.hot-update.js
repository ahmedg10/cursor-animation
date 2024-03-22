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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ImageCursor: function() { return /* binding */ ImageCursor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-spring.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_IMG_5573_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/IMG_5573.jpg */ \"(app-pages-browser)/./public/IMG_5573.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ ImageCursor auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ImageCursor() {\n    _s();\n    const spring = {\n        stiffness: 5,\n        damping: 15,\n        mass: 0.1\n    };\n    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)(0, spring);\n    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring)(0, spring);\n    const moveMouse = (e)=>{\n        const { clientX, clientY } = e;\n        const targetX = clientX - window.innerWidth / 2 * 1.01;\n        const targetY = clientY - window.innerWidth / 2 * 0.6;\n        x.set(targetX);\n        y.set(targetY);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        window.addEventListener(\"mousemove\", moveMouse);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", moveMouse);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        onMouseMove: moveMouse,\n        className: \"h-[20vw] w-[15vw] flex overflow-hidden fixed items-center justify-center\",\n        style: {\n            x,\n            y\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            src: _public_IMG_5573_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            alt: \"Hover Africa Image\",\n            layout: \"fill\",\n            objectFit: \"cover\",\n            className: \"w-full h-full\"\n        }, void 0, false, {\n            fileName: \"/Users/ahmedghaddah/Desktop/cursor-animation/app/components/ImageCursor.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ahmedghaddah/Desktop/cursor-animation/app/components/ImageCursor.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageCursor, \"Hu/Rh4HDwQ69Rg0E2rde2nuiCBI=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useSpring\n    ];\n});\n_c = ImageCursor;\nvar _c;\n$RefreshReg$(_c, \"ImageCursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0ltYWdlQ3Vyc29yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3VDO0FBQ21CO0FBQzNCO0FBQ2dCO0FBQ2I7QUFFM0IsU0FBU0s7O0lBQ2QsTUFBTUMsU0FBUztRQUNiQyxXQUFXO1FBQ1hDLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBRUEsTUFBTUMsSUFBSVQsd0RBQVNBLENBQUMsR0FBR0s7SUFDdkIsTUFBTUssSUFBSVYsd0RBQVNBLENBQUMsR0FBR0s7SUFFdkIsTUFBTU0sWUFBWSxDQUFDQztRQUNqQixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFLEdBQUdGO1FBQzdCLE1BQU1HLFVBQVVGLFVBQVUsT0FBUUksVUFBVSxHQUFHLElBQUs7UUFDcEQsTUFBTUMsVUFBVUosVUFBVSxPQUFRRyxVQUFVLEdBQUcsSUFBSztRQUNwRFIsRUFBRVUsR0FBRyxDQUFDSjtRQUNOTCxFQUFFUyxHQUFHLENBQUNEO0lBQ1I7SUFFQWYsZ0RBQVNBLENBQUM7UUFDUmEsT0FBT0ksZ0JBQWdCLENBQUMsYUFBYVQ7UUFDckMsT0FBTztZQUNMSyxPQUFPSyxtQkFBbUIsQ0FBQyxhQUFhVjtRQUMxQztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDWixpREFBTUEsQ0FBQ3VCLEdBQUc7UUFDVEMsYUFBYVo7UUFDYmEsV0FBVTtRQUNWQyxPQUFPO1lBQUVoQjtZQUFHQztRQUFFO2tCQUVkLDRFQUFDVCxrREFBS0E7WUFDSnlCLEtBQUt4Qiw0REFBTUE7WUFDWHlCLEtBQUk7WUFDSkMsUUFBTztZQUNQQyxXQUFVO1lBQ1ZMLFdBQVU7Ozs7Ozs7Ozs7O0FBSWxCO0dBeENnQnBCOztRQU9KSixvREFBU0E7UUFDVEEsb0RBQVNBOzs7S0FSTEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSW1hZ2VDdXJzb3IudHN4PzFjNTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlTW90aW9uVmFsdWUsIHVzZVNwcmluZyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBhZnJpY2EgZnJvbSBcIi4uLy4uL3B1YmxpYy9JTUdfNTU3My5qcGdcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gSW1hZ2VDdXJzb3IoKSB7XG4gIGNvbnN0IHNwcmluZyA9IHtcbiAgICBzdGlmZm5lc3M6IDUsXG4gICAgZGFtcGluZzogMTUsXG4gICAgbWFzczogMC4xLFxuICB9O1xuXG4gIGNvbnN0IHggPSB1c2VTcHJpbmcoMCwgc3ByaW5nKTtcbiAgY29uc3QgeSA9IHVzZVNwcmluZygwLCBzcHJpbmcpO1xuXG4gIGNvbnN0IG1vdmVNb3VzZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGU7XG4gICAgY29uc3QgdGFyZ2V0WCA9IGNsaWVudFggLSAod2luZG93LmlubmVyV2lkdGggLyAyKSAqIDEuMDE7XG4gICAgY29uc3QgdGFyZ2V0WSA9IGNsaWVudFkgLSAod2luZG93LmlubmVyV2lkdGggLyAyKSAqIDAuNjtcbiAgICB4LnNldCh0YXJnZXRYKTtcbiAgICB5LnNldCh0YXJnZXRZKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVNb3VzZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmVNb3VzZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIG9uTW91c2VNb3ZlPXttb3ZlTW91c2V9XG4gICAgICBjbGFzc05hbWU9XCJoLVsyMHZ3XSB3LVsxNXZ3XSBmbGV4IG92ZXJmbG93LWhpZGRlbiBmaXhlZCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgc3R5bGU9e3sgeCwgeSB9fVxuICAgID5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2FmcmljYX1cbiAgICAgICAgYWx0PVwiSG92ZXIgQWZyaWNhIEltYWdlXCJcbiAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiXG4gICAgICAvPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ1c2VTcHJpbmciLCJJbWFnZSIsImFmcmljYSIsInVzZUVmZmVjdCIsIkltYWdlQ3Vyc29yIiwic3ByaW5nIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsIm1hc3MiLCJ4IiwieSIsIm1vdmVNb3VzZSIsImUiLCJjbGllbnRYIiwiY2xpZW50WSIsInRhcmdldFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwidGFyZ2V0WSIsInNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2Iiwib25Nb3VzZU1vdmUiLCJjbGFzc05hbWUiLCJzdHlsZSIsInNyYyIsImFsdCIsImxheW91dCIsIm9iamVjdEZpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ImageCursor.tsx\n"));

/***/ })

});