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

/***/ "(app-pages-browser)/./app/components/Cursor.tsx":
/*!***********************************!*\
  !*** ./app/components/Cursor.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cursor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Cursor() {\n    _s();\n    const size = 30;\n    const circle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const mouse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        x: 0,\n        y: 0\n    });\n    const manageMouseMove = (e)=>{\n        const { clientX, clientY } = e;\n        mouse.current = {\n            x: clientX,\n            y: clientY\n        };\n        moveCircle(clientX, clientY);\n    };\n    const moveCircle = (x, y)=>{\n        gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(circle.current, {\n            x,\n            y\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"mousemove\", manageMouseMove);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", manageMouseMove);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: circle,\n        className: \"fixed top-0 left-0 rounded-full bg-orange-500\",\n        style: {\n            width: size,\n            height: size\n        }\n    }, void 0, false, {\n        fileName: \"/Users/ahmedghaddah/Desktop/cursor-animation/app/components/Cursor.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Cursor, \"XGcu8VKXbWEdzubH6QimiPUy6Qw=\");\n_c = Cursor;\nvar _c;\n$RefreshReg$(_c, \"Cursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0N1cnNvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNzRDtBQUM5QjtBQUNULFNBQVNJOztJQUN0QixNQUFNQyxPQUFPO0lBQ2IsTUFBTUMsU0FBU0osNkNBQU1BLENBQWlCO0lBRXRDLE1BQU1LLFFBQVFMLDZDQUFNQSxDQUFDO1FBQUVNLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBRWxDLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFLEdBQUdGO1FBQzdCSixNQUFNTyxPQUFPLEdBQUc7WUFBRU4sR0FBR0k7WUFBU0gsR0FBR0k7UUFBUTtRQUN6Q0UsV0FBV0gsU0FBU0M7SUFDdEI7SUFFQSxNQUFNRSxhQUFhLENBQUNQLEdBQVdDO1FBQzdCTiw0Q0FBSUEsQ0FBQ2EsR0FBRyxDQUFDVixPQUFPUSxPQUFPLEVBQUU7WUFBRU47WUFBR0M7UUFBRTtJQUNsQztJQUVBUixnREFBU0EsQ0FBQztRQUNSZ0IsT0FBT0MsZ0JBQWdCLENBQUMsYUFBYVI7UUFDckMsT0FBTztZQUNMTyxPQUFPRSxtQkFBbUIsQ0FBQyxhQUFhVDtRQUMxQztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDVTtRQUNDQyxLQUFLZjtRQUNMZ0IsV0FBVTtRQUNWQyxPQUFPO1lBQ0xDLE9BQU9uQjtZQUNQb0IsUUFBUXBCO1FBQ1Y7Ozs7OztBQUdOO0dBakN3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQ3Vyc29yLnRzeD8wYTQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXJzb3IoKSB7XG4gIGNvbnN0IHNpemUgPSAzMDtcbiAgY29uc3QgY2lyY2xlID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBtb3VzZSA9IHVzZVJlZih7IHg6IDAsIHk6IDAgfSk7XG5cbiAgY29uc3QgbWFuYWdlTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGU7XG4gICAgbW91c2UuY3VycmVudCA9IHsgeDogY2xpZW50WCwgeTogY2xpZW50WSB9O1xuICAgIG1vdmVDaXJjbGUoY2xpZW50WCwgY2xpZW50WSk7XG4gIH07XG5cbiAgY29uc3QgbW92ZUNpcmNsZSA9ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xuICAgIGdzYXAuc2V0KGNpcmNsZS5jdXJyZW50LCB7IHgsIHkgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtYW5hZ2VNb3VzZU1vdmUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtYW5hZ2VNb3VzZU1vdmUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17Y2lyY2xlfVxuICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHJvdW5kZWQtZnVsbCBiZy1vcmFuZ2UtNTAwXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJnc2FwIiwiQ3Vyc29yIiwic2l6ZSIsImNpcmNsZSIsIm1vdXNlIiwieCIsInkiLCJtYW5hZ2VNb3VzZU1vdmUiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJjdXJyZW50IiwibW92ZUNpcmNsZSIsInNldCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Cursor.tsx\n"));

/***/ })

});