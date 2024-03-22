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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cursor; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Cursor(param) {\n    let { isHovered } = param;\n    _s();\n    const size = isHovered ? 300 : 30;\n    let value = 10;\n    const lerp = (x, y, a)=>x * (1 - a) + y * a;\n    value = lerp(value, 0, 0.1);\n    const circle = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const mouse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        x: 0,\n        y: 0\n    });\n    const delayedMouse = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({\n        x: 0,\n        y: 0\n    });\n    const manageMouseMove = (e)=>{\n        const { clientX, clientY } = e;\n        mouse.current = {\n            x: clientX,\n            y: clientY\n        };\n        moveCircle(mouse.current.x, mouse.current.y);\n    };\n    const moveCircle = (x, y)=>{\n        gsap__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(circle.current, {\n            x,\n            y,\n            xPercent: -50,\n            yPercent: -50\n        });\n    };\n    const animation = ()=>{\n        const { x, y } = delayedMouse.current;\n        delayedMouse.current = {\n            x: lerp(x, mouse.current.x, 0.075),\n            y: lerp(y, mouse.current.y, 0.075)\n        };\n        moveCircle(delayedMouse.current.x, delayedMouse.current.y);\n        window.requestAnimationFrame(animation);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        animation();\n        window.addEventListener(\"mousemove\", manageMouseMove);\n        return ()=>{\n            window.removeEventListener(\"mousemove\", manageMouseMove);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: circle,\n        className: \"fixed top-0 left-0 rounded-full bg-orange-500 mix-blend-difference pointer-events-none\",\n        style: {\n            width: size,\n            height: size\n        }\n    }, void 0, false, {\n        fileName: \"/Users/ahmedghaddah/Desktop/cursor-animation/app/components/Cursor.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_s(Cursor, \"UjKtIHstOpRj/VzhNZ9wFZE4CAc=\");\n_c = Cursor;\nvar _c;\n$RefreshReg$(_c, \"Cursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0N1cnNvci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNzRDtBQUM5QjtBQU1ULFNBQVNJLE9BQU8sS0FBMEI7UUFBMUIsRUFBRUMsU0FBUyxFQUFlLEdBQTFCOztJQUM3QixNQUFNQyxPQUFPRCxZQUFZLE1BQU07SUFFL0IsSUFBSUUsUUFBUTtJQUNaLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBV0MsR0FBV0MsSUFBY0YsSUFBSyxLQUFJRSxDQUFBQSxJQUFLRCxJQUFJQztJQUVwRUosUUFBUUMsS0FBS0QsT0FBTyxHQUFHO0lBQ3ZCLE1BQU1LLFNBQVNWLDZDQUFNQSxDQUFpQjtJQUV0QyxNQUFNVyxRQUFRWCw2Q0FBTUEsQ0FBQztRQUFFTyxHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUVsQyxNQUFNSSxlQUFlWiw2Q0FBTUEsQ0FBQztRQUFFTyxHQUFHO1FBQUdDLEdBQUc7SUFBRTtJQUV6QyxNQUFNSyxrQkFBa0IsQ0FBQ0M7UUFDdkIsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRSxHQUFHRjtRQUM3QkgsTUFBTU0sT0FBTyxHQUFHO1lBQUVWLEdBQUdRO1lBQVNQLEdBQUdRO1FBQVE7UUFDekNFLFdBQVdQLE1BQU1NLE9BQU8sQ0FBQ1YsQ0FBQyxFQUFFSSxNQUFNTSxPQUFPLENBQUNULENBQUM7SUFDN0M7SUFFQSxNQUFNVSxhQUFhLENBQUNYLEdBQVdDO1FBQzdCUCw0Q0FBSUEsQ0FBQ2tCLEdBQUcsQ0FBQ1QsT0FBT08sT0FBTyxFQUFFO1lBQUVWO1lBQUdDO1lBQUdZLFVBQVUsQ0FBQztZQUFJQyxVQUFVLENBQUM7UUFBRztJQUNoRTtJQUVBLE1BQU1DLFlBQVk7UUFDaEIsTUFBTSxFQUFFZixDQUFDLEVBQUVDLENBQUMsRUFBRSxHQUFHSSxhQUFhSyxPQUFPO1FBRXJDTCxhQUFhSyxPQUFPLEdBQUc7WUFDckJWLEdBQUdELEtBQUtDLEdBQUdJLE1BQU1NLE9BQU8sQ0FBQ1YsQ0FBQyxFQUFFO1lBQzVCQyxHQUFHRixLQUFLRSxHQUFHRyxNQUFNTSxPQUFPLENBQUNULENBQUMsRUFBRTtRQUM5QjtRQUVBVSxXQUFXTixhQUFhSyxPQUFPLENBQUNWLENBQUMsRUFBRUssYUFBYUssT0FBTyxDQUFDVCxDQUFDO1FBQ3pEZSxPQUFPQyxxQkFBcUIsQ0FBQ0Y7SUFDL0I7SUFFQXZCLGdEQUFTQSxDQUFDO1FBQ1J1QjtRQUNBQyxPQUFPRSxnQkFBZ0IsQ0FBQyxhQUFhWjtRQUNyQyxPQUFPO1lBQ0xVLE9BQU9HLG1CQUFtQixDQUFDLGFBQWFiO1FBQzFDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNjO1FBQ0NDLEtBQUtsQjtRQUNMbUIsV0FBVTtRQUNWQyxPQUFPO1lBQ0xDLE9BQU8zQjtZQUNQNEIsUUFBUTVCO1FBQ1Y7Ozs7OztBQUdOO0dBckR3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQ3Vyc29yLnRzeD8wYTQ4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBnc2FwIGZyb20gXCJnc2FwXCI7XG5cbmludGVyZmFjZSBDdXJzb3JQcm9wcyB7XG4gIGlzSG92ZXJlZDogYm9vbGVhbjsgLy8gU3BlY2lmeSB0aGUgdHlwZSBmb3IgaXNIb3ZlcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1cnNvcih7IGlzSG92ZXJlZCB9OiBDdXJzb3JQcm9wcykge1xuICBjb25zdCBzaXplID0gaXNIb3ZlcmVkID8gMzAwIDogMzA7XG5cbiAgbGV0IHZhbHVlID0gMTA7XG4gIGNvbnN0IGxlcnAgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGE6IG51bWJlcikgPT4geCAqICgxIC0gYSkgKyB5ICogYTtcblxuICB2YWx1ZSA9IGxlcnAodmFsdWUsIDAsIDAuMSk7XG4gIGNvbnN0IGNpcmNsZSA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgbW91c2UgPSB1c2VSZWYoeyB4OiAwLCB5OiAwIH0pO1xuXG4gIGNvbnN0IGRlbGF5ZWRNb3VzZSA9IHVzZVJlZih7IHg6IDAsIHk6IDAgfSk7XG5cbiAgY29uc3QgbWFuYWdlTW91c2VNb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGU7XG4gICAgbW91c2UuY3VycmVudCA9IHsgeDogY2xpZW50WCwgeTogY2xpZW50WSB9O1xuICAgIG1vdmVDaXJjbGUobW91c2UuY3VycmVudC54LCBtb3VzZS5jdXJyZW50LnkpO1xuICB9O1xuXG4gIGNvbnN0IG1vdmVDaXJjbGUgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICBnc2FwLnNldChjaXJjbGUuY3VycmVudCwgeyB4LCB5LCB4UGVyY2VudDogLTUwLCB5UGVyY2VudDogLTUwIH0pO1xuICB9O1xuXG4gIGNvbnN0IGFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IGRlbGF5ZWRNb3VzZS5jdXJyZW50O1xuXG4gICAgZGVsYXllZE1vdXNlLmN1cnJlbnQgPSB7XG4gICAgICB4OiBsZXJwKHgsIG1vdXNlLmN1cnJlbnQueCwgMC4wNzUpLFxuICAgICAgeTogbGVycCh5LCBtb3VzZS5jdXJyZW50LnksIDAuMDc1KSxcbiAgICB9O1xuXG4gICAgbW92ZUNpcmNsZShkZWxheWVkTW91c2UuY3VycmVudC54LCBkZWxheWVkTW91c2UuY3VycmVudC55KTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhbmltYXRpb24oKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtYW5hZ2VNb3VzZU1vdmUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtYW5hZ2VNb3VzZU1vdmUpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17Y2lyY2xlfVxuICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHJvdW5kZWQtZnVsbCBiZy1vcmFuZ2UtNTAwIG1peC1ibGVuZC1kaWZmZXJlbmNlIHBvaW50ZXItZXZlbnRzLW5vbmVcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IHNpemUsXG4gICAgICAgIGhlaWdodDogc2l6ZSxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsImdzYXAiLCJDdXJzb3IiLCJpc0hvdmVyZWQiLCJzaXplIiwidmFsdWUiLCJsZXJwIiwieCIsInkiLCJhIiwiY2lyY2xlIiwibW91c2UiLCJkZWxheWVkTW91c2UiLCJtYW5hZ2VNb3VzZU1vdmUiLCJlIiwiY2xpZW50WCIsImNsaWVudFkiLCJjdXJyZW50IiwibW92ZUNpcmNsZSIsInNldCIsInhQZXJjZW50IiwieVBlcmNlbnQiLCJhbmltYXRpb24iLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Cursor.tsx\n"));

/***/ })

});