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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ImageCursor: function() { return /* binding */ ImageCursor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-motion-value.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_IMG_5573_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/IMG_5573.jpg */ \"(app-pages-browser)/./public/IMG_5573.jpg\");\n/* __next_internal_client_entry_do_not_use__ ImageCursor auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ImageCursor() {\n    _s();\n    const mousePosition = {\n        x: (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue)(0),\n        y: (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue)(0)\n    };\n    const moveMouse = (e)=>{\n        const { clientX, clientY } = e;\n        mousePosition.x.set(clientX);\n        mousePosition.y.set(clientY);\n    };\n    const { x, y } = mousePosition;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        onMouseMove: moveMouse,\n        className: \"h-[30vw] w-[25vw] absolute\",\n        style: {\n            x,\n            y\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            src: _public_IMG_5573_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            alt: \"Hover Africa Image\",\n            layout: \"fill\",\n            objectFit: \"cover\",\n            className: \"w-full h-full\"\n        }, void 0, false, {\n            fileName: \"/Users/ahmedghaddah/Desktop/cursor-animation/app/components/ImageCursor.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ahmedghaddah/Desktop/cursor-animation/app/components/ImageCursor.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageCursor, \"eVN11Q88MsSc5i2srZItqXec2MA=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useMotionValue\n    ];\n});\n_c = ImageCursor;\nvar _c;\n$RefreshReg$(_c, \"ImageCursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0ltYWdlQ3Vyc29yLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUN1QztBQUNRO0FBQ2hCO0FBQ2dCO0FBRXhDLFNBQVNJOztJQUNkLE1BQU1DLGdCQUFnQjtRQUNwQkMsR0FBR0wsNkRBQWNBLENBQUM7UUFDbEJNLEdBQUdOLDZEQUFjQSxDQUFDO0lBQ3BCO0lBRUEsTUFBTU8sWUFBWSxDQUFDQztRQUNqQixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFLEdBQUdGO1FBQzdCSixjQUFjQyxDQUFDLENBQUNNLEdBQUcsQ0FBQ0Y7UUFDcEJMLGNBQWNFLENBQUMsQ0FBQ0ssR0FBRyxDQUFDRDtJQUN0QjtJQUVBLE1BQU0sRUFBRUwsQ0FBQyxFQUFFQyxDQUFDLEVBQUUsR0FBR0Y7SUFFakIscUJBQ0UsOERBQUNMLGlEQUFNQSxDQUFDYSxHQUFHO1FBQ1RDLGFBQWFOO1FBQ2JPLFdBQVU7UUFDVkMsT0FBTztZQUFFVjtZQUFHQztRQUFFO2tCQUVkLDRFQUFDTCxrREFBS0E7WUFDSmUsS0FBS2QsNERBQU1BO1lBQ1hlLEtBQUk7WUFDSkMsUUFBTztZQUNQQyxXQUFVO1lBQ1ZMLFdBQVU7Ozs7Ozs7Ozs7O0FBSWxCO0dBN0JnQlg7O1FBRVRILHlEQUFjQTtRQUNkQSx5REFBY0E7OztLQUhMRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9JbWFnZUN1cnNvci50c3g/MWM1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBhZnJpY2EgZnJvbSBcIi4uLy4uL3B1YmxpYy9JTUdfNTU3My5qcGdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEltYWdlQ3Vyc29yKCkge1xuICBjb25zdCBtb3VzZVBvc2l0aW9uID0ge1xuICAgIHg6IHVzZU1vdGlvblZhbHVlKDApLFxuICAgIHk6IHVzZU1vdGlvblZhbHVlKDApLFxuICB9O1xuXG4gIGNvbnN0IG1vdmVNb3VzZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGU7XG4gICAgbW91c2VQb3NpdGlvbi54LnNldChjbGllbnRYKTtcbiAgICBtb3VzZVBvc2l0aW9uLnkuc2V0KGNsaWVudFkpO1xuICB9O1xuXG4gIGNvbnN0IHsgeCwgeSB9ID0gbW91c2VQb3NpdGlvbjtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICBvbk1vdXNlTW92ZT17bW92ZU1vdXNlfVxuICAgICAgY2xhc3NOYW1lPVwiaC1bMzB2d10gdy1bMjV2d10gYWJzb2x1dGVcIlxuICAgICAgc3R5bGU9e3sgeCwgeSB9fVxuICAgID5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2FmcmljYX1cbiAgICAgICAgYWx0PVwiSG92ZXIgQWZyaWNhIEltYWdlXCJcbiAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbFwiXG4gICAgICAvPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJ1c2VNb3Rpb25WYWx1ZSIsIkltYWdlIiwiYWZyaWNhIiwiSW1hZ2VDdXJzb3IiLCJtb3VzZVBvc2l0aW9uIiwieCIsInkiLCJtb3ZlTW91c2UiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJzZXQiLCJkaXYiLCJvbk1vdXNlTW92ZSIsImNsYXNzTmFtZSIsInN0eWxlIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwib2JqZWN0Rml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ImageCursor.tsx\n"));

/***/ })

});