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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=responsiveFontSizes!=!./node_modules/@mui/material/index.js":
/*!*********************************************************************************************!*\
  !*** __barrel_optimize__?names=responsiveFontSizes!=!./node_modules/@mui/material/index.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   responsiveFontSizes: () => (/* reexport safe */ _workspace_web3_fundraising_platform_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__.responsiveFontSizes)
/* harmony export */ });
/* harmony import */ var _workspace_web3_fundraising_platform_node_modules_mui_material_styles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@mui/material/styles/index.js */ "./node_modules/@mui/material/styles/index.js");



/***/ }),

/***/ "./src/components/Page.js":
/*!********************************!*\
  !*** ./src/components/Page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page),\n/* harmony export */   useDarkMode: () => (/* binding */ useDarkMode)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! theme */ \"./src/theme/index.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos */ \"aos\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst useDarkMode = ()=>{\n    const [themeMode, setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"light\");\n    const [mountedComponent, setMountedComponent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const setMode = (mode)=>{\n        try {\n            window.localStorage.setItem(\"themeMode\", mode);\n        } catch  {\n        /* do nothing */ }\n        setTheme(mode);\n    };\n    const themeToggler = ()=>{\n        themeMode === \"light\" ? setMode(\"dark\") : setMode(\"light\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        try {\n            const localTheme = window.localStorage.getItem(\"themeMode\");\n            localTheme ? setTheme(localTheme) : setMode(\"light\");\n        } catch  {\n            setMode(\"light\");\n        }\n        setMountedComponent(true);\n    }, []);\n    return [\n        themeMode,\n        themeToggler,\n        mountedComponent\n    ];\n};\nfunction Page({ children }) {\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        // Remove the server-side injected CSS.\n        const jssStyles = document.querySelector(\"#jss-server-side\");\n        if (jssStyles) {\n            jssStyles.parentElement.removeChild(jssStyles);\n        }\n        aos__WEBPACK_IMPORTED_MODULE_7___default().init({\n            once: true,\n            delay: 0,\n            duration: 800,\n            offset: 0,\n            easing: \"ease-in-out\"\n        });\n    }, []);\n    const [themeMode, themeToggler, mountedComponent] = useDarkMode();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_7___default().refresh();\n    }, [\n        mountedComponent,\n        themeMode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n        theme: (0,theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(themeMode, themeToggler),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n                fileName: \"/workspace/web3-fundraising-platform/src/components/Page.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4___default()), {\n                elevation: 0,\n                children: children\n            }, void 0, false, {\n                fileName: \"/workspace/web3-fundraising-platform/src/components/Page.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/web3-fundraising-platform/src/components/Page.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\nPage.propTypes = {\n    children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNoQjtBQUNrQjtBQUNiO0FBQ1k7QUFDdkI7QUFDUDtBQUVmLE1BQU1TLGNBQWM7SUFDekIsTUFBTSxDQUFDQyxXQUFXQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1csa0JBQWtCQyxvQkFBb0IsR0FBR1osK0NBQVFBLENBQUM7SUFFekQsTUFBTWEsVUFBVSxDQUFDQztRQUNmLElBQUk7WUFDRkMsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsYUFBYUg7UUFDM0MsRUFBRSxPQUFNO1FBQ04sY0FBYyxHQUNoQjtRQUVBSixTQUFTSTtJQUNYO0lBRUEsTUFBTUksZUFBZTtRQUNuQlQsY0FBYyxVQUFVSSxRQUFRLFVBQVVBLFFBQVE7SUFDcEQ7SUFFQVosZ0RBQVNBLENBQUM7UUFDUixJQUFJO1lBQ0YsTUFBTWtCLGFBQWFKLE9BQU9DLFlBQVksQ0FBQ0ksT0FBTyxDQUFDO1lBQy9DRCxhQUFhVCxTQUFTUyxjQUFjTixRQUFRO1FBQzlDLEVBQUUsT0FBTTtZQUNOQSxRQUFRO1FBQ1Y7UUFFQUQsb0JBQW9CO0lBQ3RCLEdBQUcsRUFBRTtJQUVMLE9BQU87UUFBQ0g7UUFBV1M7UUFBY1A7S0FBaUI7QUFDcEQsRUFBRTtBQUVhLFNBQVNVLEtBQUssRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDdkIsc0RBQWUsQ0FBQztRQUNkLHVDQUF1QztRQUN2QyxNQUFNd0IsWUFBWUMsU0FBU0MsYUFBYSxDQUFDO1FBQ3pDLElBQUlGLFdBQVc7WUFDYkEsVUFBVUcsYUFBYSxDQUFDQyxXQUFXLENBQUNKO1FBQ3RDO1FBRUFoQiwrQ0FBUSxDQUFDO1lBQ1BzQixNQUFNO1lBQ05DLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxRQUFRO1lBQ1JDLFFBQVE7UUFDVjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU0sQ0FBQ3hCLFdBQVdTLGNBQWNQLGlCQUFpQixHQUFHSDtJQUVwRFAsZ0RBQVNBLENBQUM7UUFDUk0sa0RBQVc7SUFDYixHQUFHO1FBQUNJO1FBQWtCRjtLQUFVO0lBRWhDLHFCQUNFLDhEQUFDTiwrREFBYUE7UUFBQ2dDLE9BQU83QixpREFBUUEsQ0FBQ0csV0FBV1M7OzBCQUV4Qyw4REFBQ2Isa0VBQVdBOzs7OzswQkFDWiw4REFBQ0QsNERBQUtBO2dCQUFDZ0MsV0FBVzswQkFBSWQ7Ozs7Ozs7Ozs7OztBQUc1QjtBQUVBRCxLQUFLZ0IsU0FBUyxHQUFHO0lBQ2ZmLFVBQVVwQix3REFBYyxDQUFDcUMsVUFBVTtBQUNyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYjMtZnVuZHJhaXNpbmctcGxhdGZvcm0vLi9zcmMvY29tcG9uZW50cy9QYWdlLmpzP2E4ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmltcG9ydCBQYXBlciBmcm9tIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgZ2V0VGhlbWUgZnJvbSBcInRoZW1lXCI7XG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcblxuZXhwb3J0IGNvbnN0IHVzZURhcmtNb2RlID0gKCkgPT4ge1xuICBjb25zdCBbdGhlbWVNb2RlLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImxpZ2h0XCIpO1xuICBjb25zdCBbbW91bnRlZENvbXBvbmVudCwgc2V0TW91bnRlZENvbXBvbmVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2V0TW9kZSA9IChtb2RlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lTW9kZVwiLCBtb2RlKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8qIGRvIG5vdGhpbmcgKi9cbiAgICB9XG5cbiAgICBzZXRUaGVtZShtb2RlKTtcbiAgfTtcblxuICBjb25zdCB0aGVtZVRvZ2dsZXIgPSAoKSA9PiB7XG4gICAgdGhlbWVNb2RlID09PSBcImxpZ2h0XCIgPyBzZXRNb2RlKFwiZGFya1wiKSA6IHNldE1vZGUoXCJsaWdodFwiKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2NhbFRoZW1lID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVNb2RlXCIpO1xuICAgICAgbG9jYWxUaGVtZSA/IHNldFRoZW1lKGxvY2FsVGhlbWUpIDogc2V0TW9kZShcImxpZ2h0XCIpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgc2V0TW9kZShcImxpZ2h0XCIpO1xuICAgIH1cblxuICAgIHNldE1vdW50ZWRDb21wb25lbnQodHJ1ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gW3RoZW1lTW9kZSwgdGhlbWVUb2dnbGVyLCBtb3VudGVkQ29tcG9uZW50XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoeyBjaGlsZHJlbiB9KSB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqc3Mtc2VydmVyLXNpZGVcIik7XG4gICAgaWYgKGpzc1N0eWxlcykge1xuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG5cbiAgICBBT1MuaW5pdCh7XG4gICAgICBvbmNlOiB0cnVlLFxuICAgICAgZGVsYXk6IDAsXG4gICAgICBkdXJhdGlvbjogODAwLFxuICAgICAgb2Zmc2V0OiAwLFxuICAgICAgZWFzaW5nOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbdGhlbWVNb2RlLCB0aGVtZVRvZ2dsZXIsIG1vdW50ZWRDb21wb25lbnRdID0gdXNlRGFya01vZGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIEFPUy5yZWZyZXNoKCk7XG4gIH0sIFttb3VudGVkQ29tcG9uZW50LCB0aGVtZU1vZGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtnZXRUaGVtZSh0aGVtZU1vZGUsIHRoZW1lVG9nZ2xlcil9PlxuICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8UGFwZXIgZWxldmF0aW9uPXswfT57Y2hpbGRyZW59PC9QYXBlcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG5cblBhZ2UucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb3BUeXBlcyIsIlRoZW1lUHJvdmlkZXIiLCJQYXBlciIsIkNzc0Jhc2VsaW5lIiwiZ2V0VGhlbWUiLCJBT1MiLCJ1c2VEYXJrTW9kZSIsInRoZW1lTW9kZSIsInNldFRoZW1lIiwibW91bnRlZENvbXBvbmVudCIsInNldE1vdW50ZWRDb21wb25lbnQiLCJzZXRNb2RlIiwibW9kZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0aGVtZVRvZ2dsZXIiLCJsb2NhbFRoZW1lIiwiZ2V0SXRlbSIsIlBhZ2UiLCJjaGlsZHJlbiIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImluaXQiLCJvbmNlIiwiZGVsYXkiLCJkdXJhdGlvbiIsIm9mZnNldCIsImVhc2luZyIsInJlZnJlc2giLCJ0aGVtZSIsImVsZXZhdGlvbiIsInByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Page.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Page */ \"./src/components/Page.js\");\n/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-lazy-load-image-component/src/effects/blur.css */ \"./node_modules/react-lazy-load-image-component/src/effects/blur.css\");\n/* harmony import */ var react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component_src_effects_blur_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-image-lightbox/style.css */ \"./node_modules/react-image-lightbox/style.css\");\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/web3-fundraising-platform/src/pages/_app.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"crypto charity\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/web3-fundraising-platform/src/pages/_app.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/web3-fundraising-platform/src/pages/_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/workspace/web3-fundraising-platform/src/pages/_app.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/web3-fundraising-platform/src/pages/_app.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/web3-fundraising-platform/src/pages/_app.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\nApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType).isRequired,\n    pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object).isRequired\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDUztBQUNOO0FBQ1M7QUFDd0I7QUFDdEI7QUFDTTtBQUNOO0FBQ2Q7QUFFWCxTQUFTSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDTix1REFBYzs7MEJBQ2IsOERBQUNFLGtEQUFJQTs7a0NBQ0gsOERBQUNNO3dCQUNDQyxNQUFLO3dCQUNMQyxTQUFROzs7Ozs7a0NBRVYsOERBQUNDO2tDQUFNOzs7Ozs7Ozs7Ozs7MEJBRVQsOERBQUNSLHdEQUFJQTswQkFDSCw0RUFBQ0U7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFDQUYsSUFBSVEsU0FBUyxHQUFHO0lBQ2RQLFdBQVdKLCtEQUFxQixDQUFDYSxVQUFVO0lBQzNDUixXQUFXTCwwREFBZ0IsQ0FBQ2EsVUFBVTtBQUN4QyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYjMtZnVuZHJhaXNpbmctcGxhdGZvcm0vLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBQYWdlIGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCBcInJlYWN0LWxhenktbG9hZC1pbWFnZS1jb21wb25lbnQvc3JjL2VmZmVjdHMvYmx1ci5jc3NcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5pbXBvcnQgXCJyZWFjdC1pbWFnZS1saWdodGJveC9zdHlsZS5jc3NcIjtcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRpdGxlPmNyeXB0byBjaGFyaXR5PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxQYWdlPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1BhZ2U+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG4gIHBhZ2VQcm9wczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkhlYWQiLCJQYWdlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiRnJhZ21lbnQiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJ0aXRsZSIsInByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _barrel_optimize_names_responsiveFontSizes_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=responsiveFontSizes!=!@mui/material */ \"__barrel_optimize__?names=responsiveFontSizes!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shadows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shadows */ \"./src/theme/shadows.js\");\n/* harmony import */ var _palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./palette */ \"./src/theme/palette.js\");\n\n\n\n\nconst getTheme = (mode, themeToggler)=>(0,_barrel_optimize_names_responsiveFontSizes_mui_material__WEBPACK_IMPORTED_MODULE_3__.responsiveFontSizes)((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n        palette: mode === \"light\" ? _palette__WEBPACK_IMPORTED_MODULE_2__.light : _palette__WEBPACK_IMPORTED_MODULE_2__.dark,\n        shadows: (0,_shadows__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mode),\n        typography: {\n            fontFamily: '\"Inter\", sans-serif',\n            button: {\n                textTransform: \"none\",\n                fontWeight: \"medium\"\n            }\n        },\n        zIndex: {\n            appBar: 1200,\n            drawer: 1300\n        },\n        components: {\n            MuiButton: {\n                styleOverrides: {\n                    root: {\n                        fontWeight: 400,\n                        borderRadius: 5,\n                        paddingTop: 10,\n                        paddingBottom: 10\n                    },\n                    containedSecondary: mode === \"light\" ? {\n                        color: \"white\"\n                    } : {}\n                }\n            },\n            MuiInputBase: {\n                styleOverrides: {\n                    root: {\n                        borderRadius: 5\n                    }\n                }\n            },\n            MuiOutlinedInput: {\n                styleOverrides: {\n                    root: {\n                        borderRadius: 5\n                    },\n                    input: {\n                        borderRadius: 5\n                    }\n                }\n            },\n            MuiCard: {\n                styleOverrides: {\n                    root: {\n                        borderRadius: 8\n                    }\n                }\n            }\n        },\n        themeToggler\n    }));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTheme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9EO0FBQ0Q7QUFDbkI7QUFDUTtBQUV4QyxNQUFNSyxXQUFXLENBQUNDLE1BQU1DLGVBQ3RCUCw0R0FBbUJBLENBQ2pCQyxpRUFBV0EsQ0FBQztRQUNWTyxTQUFTRixTQUFTLFVBQVVILDJDQUFLQSxHQUFHQywwQ0FBSUE7UUFDeENGLFNBQVNBLG9EQUFPQSxDQUFDSTtRQUNqQkcsWUFBWTtZQUNWQyxZQUFZO1lBQ1pDLFFBQVE7Z0JBQ05DLGVBQWU7Z0JBQ2ZDLFlBQVk7WUFDZDtRQUNGO1FBQ0FDLFFBQVE7WUFDTkMsUUFBUTtZQUNSQyxRQUFRO1FBQ1Y7UUFDQUMsWUFBWTtZQUNWQyxXQUFXO2dCQUNUQyxnQkFBZ0I7b0JBQ2RDLE1BQU07d0JBQ0pQLFlBQVk7d0JBQ1pRLGNBQWM7d0JBQ2RDLFlBQVk7d0JBQ1pDLGVBQWU7b0JBQ2pCO29CQUNBQyxvQkFBb0JsQixTQUFTLFVBQVU7d0JBQUVtQixPQUFPO29CQUFRLElBQUksQ0FBQztnQkFDL0Q7WUFDRjtZQUNBQyxjQUFjO2dCQUNaUCxnQkFBZ0I7b0JBQ2RDLE1BQU07d0JBQ0pDLGNBQWM7b0JBQ2hCO2dCQUNGO1lBQ0Y7WUFDQU0sa0JBQWtCO2dCQUNoQlIsZ0JBQWdCO29CQUNkQyxNQUFNO3dCQUNKQyxjQUFjO29CQUNoQjtvQkFDQU8sT0FBTzt3QkFDTFAsY0FBYztvQkFDaEI7Z0JBQ0Y7WUFDRjtZQUNBUSxTQUFTO2dCQUNQVixnQkFBZ0I7b0JBQ2RDLE1BQU07d0JBQ0pDLGNBQWM7b0JBQ2hCO2dCQUNGO1lBQ0Y7UUFDRjtRQUNBZDtJQUNGO0FBR0osaUVBQWVGLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIzLWZ1bmRyYWlzaW5nLXBsYXRmb3JtLy4vc3JjL3RoZW1lL2luZGV4LmpzPzg5YzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzcG9uc2l2ZUZvbnRTaXplcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IHNoYWRvd3MgZnJvbSBcIi4vc2hhZG93c1wiO1xuaW1wb3J0IHsgbGlnaHQsIGRhcmsgfSBmcm9tIFwiLi9wYWxldHRlXCI7XG5cbmNvbnN0IGdldFRoZW1lID0gKG1vZGUsIHRoZW1lVG9nZ2xlcikgPT5cbiAgcmVzcG9uc2l2ZUZvbnRTaXplcyhcbiAgICBjcmVhdGVUaGVtZSh7XG4gICAgICBwYWxldHRlOiBtb2RlID09PSBcImxpZ2h0XCIgPyBsaWdodCA6IGRhcmssXG4gICAgICBzaGFkb3dzOiBzaGFkb3dzKG1vZGUpLFxuICAgICAgdHlwb2dyYXBoeToge1xuICAgICAgICBmb250RmFtaWx5OiAnXCJJbnRlclwiLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgYnV0dG9uOiB7XG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXG4gICAgICAgICAgZm9udFdlaWdodDogXCJtZWRpdW1cIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB6SW5kZXg6IHtcbiAgICAgICAgYXBwQmFyOiAxMjAwLFxuICAgICAgICBkcmF3ZXI6IDEzMDAsXG4gICAgICB9LFxuICAgICAgY29tcG9uZW50czoge1xuICAgICAgICBNdWlCdXR0b246IHtcbiAgICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgICAgICAgcGFkZGluZ1RvcDogMTAsXG4gICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDEwLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRhaW5lZFNlY29uZGFyeTogbW9kZSA9PT0gXCJsaWdodFwiID8geyBjb2xvcjogXCJ3aGl0ZVwiIH0gOiB7fSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBNdWlJbnB1dEJhc2U6IHtcbiAgICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIE11aU91dGxpbmVkSW5wdXQ6IHtcbiAgICAgICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICAgICAgcm9vdDoge1xuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBNdWlDYXJkOiB7XG4gICAgICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRoZW1lVG9nZ2xlcixcbiAgICB9KSxcbiAgKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0VGhlbWU7XG4iXSwibmFtZXMiOlsicmVzcG9uc2l2ZUZvbnRTaXplcyIsImNyZWF0ZVRoZW1lIiwic2hhZG93cyIsImxpZ2h0IiwiZGFyayIsImdldFRoZW1lIiwibW9kZSIsInRoZW1lVG9nZ2xlciIsInBhbGV0dGUiLCJ0eXBvZ3JhcGh5IiwiZm9udEZhbWlseSIsImJ1dHRvbiIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwiekluZGV4IiwiYXBwQmFyIiwiZHJhd2VyIiwiY29tcG9uZW50cyIsIk11aUJ1dHRvbiIsInN0eWxlT3ZlcnJpZGVzIiwicm9vdCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiY29udGFpbmVkU2Vjb25kYXJ5IiwiY29sb3IiLCJNdWlJbnB1dEJhc2UiLCJNdWlPdXRsaW5lZElucHV0IiwiaW5wdXQiLCJNdWlDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/index.js\n");

/***/ }),

/***/ "./src/theme/palette.js":
/*!******************************!*\
  !*** ./src/theme/palette.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dark: () => (/* binding */ dark),\n/* harmony export */   light: () => (/* binding */ light)\n/* harmony export */ });\nconst light = {\n    alternate: {\n        main: \"#f4efea\",\n        dark: \"#edf1f7\"\n    },\n    cardShadow: \"rgba(23, 70, 161, .11)\",\n    mode: \"light\",\n    primary: {\n        main: \"#171717\",\n        light: \"#454545\",\n        dark: \"#454545\",\n        contrastText: \"#fff\"\n    },\n    secondary: {\n        light: \"#ffb74d\",\n        main: \"#f9b934\",\n        dark: \"#FF9800\",\n        contrastText: \"rgba(0, 0, 0, 0.87)\"\n    },\n    text: {\n        primary: \"#1e2022\",\n        secondary: \"#677788\"\n    },\n    divider: \"rgba(0, 0, 0, 0.12)\",\n    background: {\n        paper: \"#ffffff\",\n        default: \"#ffffff\",\n        level2: \"#f5f5f5\",\n        level1: \"#ffffff\"\n    }\n};\nconst dark = {\n    alternate: {\n        main: \"#1a2138\",\n        dark: \"#151a30\"\n    },\n    cardShadow: \"rgba(0, 0, 0, .11)\",\n    common: {\n        black: \"#000\",\n        white: \"#fff\"\n    },\n    mode: \"dark\",\n    primary: {\n        main: \"#1976d2\",\n        light: \"#2196f3\",\n        dark: \"#0d47a1\",\n        contrastText: \"#fff\"\n    },\n    secondary: {\n        light: \"#FFEA41\",\n        main: \"#FFE102\",\n        dark: \"#DBBE01\",\n        contrastText: \"rgba(0, 0, 0, 0.87)\"\n    },\n    text: {\n        primary: \"#EEEEEF\",\n        secondary: \"#AEB0B4\"\n    },\n    divider: \"rgba(255, 255, 255, 0.12)\",\n    background: {\n        paper: \"#222B45\",\n        default: \"#222B45\",\n        level2: \"#333\",\n        level1: \"#2D3748\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvcGFsZXR0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLFFBQVE7SUFDbkJDLFdBQVc7UUFDVEMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQUMsWUFBWTtJQUNaQyxNQUFNO0lBQ05DLFNBQVM7UUFDUEosTUFBTTtRQUNORixPQUFPO1FBQ1BHLE1BQU07UUFDTkksY0FBYztJQUNoQjtJQUNBQyxXQUFXO1FBQ1RSLE9BQU87UUFDUEUsTUFBTTtRQUNOQyxNQUFNO1FBQ05JLGNBQWM7SUFDaEI7SUFDQUUsTUFBTTtRQUNKSCxTQUFTO1FBQ1RFLFdBQVc7SUFDYjtJQUNBRSxTQUFTO0lBQ1RDLFlBQVk7UUFDVkMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLFFBQVE7UUFDUkMsUUFBUTtJQUNWO0FBQ0YsRUFBRTtBQUVLLE1BQU1aLE9BQU87SUFDbEJGLFdBQVc7UUFDVEMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQUMsWUFBWTtJQUNaWSxRQUFRO1FBQ05DLE9BQU87UUFDUEMsT0FBTztJQUNUO0lBQ0FiLE1BQU07SUFDTkMsU0FBUztRQUNQSixNQUFNO1FBQ05GLE9BQU87UUFDUEcsTUFBTTtRQUNOSSxjQUFjO0lBQ2hCO0lBQ0FDLFdBQVc7UUFDVFIsT0FBTztRQUNQRSxNQUFNO1FBQ05DLE1BQU07UUFDTkksY0FBYztJQUNoQjtJQUNBRSxNQUFNO1FBQ0pILFNBQVM7UUFDVEUsV0FBVztJQUNiO0lBQ0FFLFNBQVM7SUFDVEMsWUFBWTtRQUNWQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsUUFBUTtRQUNSQyxRQUFRO0lBQ1Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViMy1mdW5kcmFpc2luZy1wbGF0Zm9ybS8uL3NyYy90aGVtZS9wYWxldHRlLmpzP2Y3MzIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGxpZ2h0ID0ge1xuICBhbHRlcm5hdGU6IHtcbiAgICBtYWluOiBcIiNmNGVmZWFcIixcbiAgICBkYXJrOiBcIiNlZGYxZjdcIixcbiAgfSxcbiAgY2FyZFNoYWRvdzogXCJyZ2JhKDIzLCA3MCwgMTYxLCAuMTEpXCIsXG4gIG1vZGU6IFwibGlnaHRcIixcbiAgcHJpbWFyeToge1xuICAgIG1haW46IFwiIzE3MTcxN1wiLFxuICAgIGxpZ2h0OiBcIiM0NTQ1NDVcIixcbiAgICBkYXJrOiBcIiM0NTQ1NDVcIixcbiAgICBjb250cmFzdFRleHQ6IFwiI2ZmZlwiLFxuICB9LFxuICBzZWNvbmRhcnk6IHtcbiAgICBsaWdodDogXCIjZmZiNzRkXCIsXG4gICAgbWFpbjogXCIjZjliOTM0XCIsXG4gICAgZGFyazogXCIjRkY5ODAwXCIsXG4gICAgY29udHJhc3RUZXh0OiBcInJnYmEoMCwgMCwgMCwgMC44NylcIixcbiAgfSxcbiAgdGV4dDoge1xuICAgIHByaW1hcnk6IFwiIzFlMjAyMlwiLFxuICAgIHNlY29uZGFyeTogXCIjNjc3Nzg4XCIsXG4gIH0sXG4gIGRpdmlkZXI6IFwicmdiYSgwLCAwLCAwLCAwLjEyKVwiLFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgcGFwZXI6IFwiI2ZmZmZmZlwiLFxuICAgIGRlZmF1bHQ6IFwiI2ZmZmZmZlwiLFxuICAgIGxldmVsMjogXCIjZjVmNWY1XCIsXG4gICAgbGV2ZWwxOiBcIiNmZmZmZmZcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBkYXJrID0ge1xuICBhbHRlcm5hdGU6IHtcbiAgICBtYWluOiBcIiMxYTIxMzhcIixcbiAgICBkYXJrOiBcIiMxNTFhMzBcIixcbiAgfSxcbiAgY2FyZFNoYWRvdzogXCJyZ2JhKDAsIDAsIDAsIC4xMSlcIixcbiAgY29tbW9uOiB7XG4gICAgYmxhY2s6IFwiIzAwMFwiLFxuICAgIHdoaXRlOiBcIiNmZmZcIixcbiAgfSxcbiAgbW9kZTogXCJkYXJrXCIsXG4gIHByaW1hcnk6IHtcbiAgICBtYWluOiBcIiMxOTc2ZDJcIixcbiAgICBsaWdodDogXCIjMjE5NmYzXCIsXG4gICAgZGFyazogXCIjMGQ0N2ExXCIsXG4gICAgY29udHJhc3RUZXh0OiBcIiNmZmZcIixcbiAgfSxcbiAgc2Vjb25kYXJ5OiB7XG4gICAgbGlnaHQ6IFwiI0ZGRUE0MVwiLFxuICAgIG1haW46IFwiI0ZGRTEwMlwiLFxuICAgIGRhcms6IFwiI0RCQkUwMVwiLFxuICAgIGNvbnRyYXN0VGV4dDogXCJyZ2JhKDAsIDAsIDAsIDAuODcpXCIsXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBwcmltYXJ5OiBcIiNFRUVFRUZcIixcbiAgICBzZWNvbmRhcnk6IFwiI0FFQjBCNFwiLFxuICB9LFxuICBkaXZpZGVyOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMilcIixcbiAgYmFja2dyb3VuZDoge1xuICAgIHBhcGVyOiBcIiMyMjJCNDVcIixcbiAgICBkZWZhdWx0OiBcIiMyMjJCNDVcIixcbiAgICBsZXZlbDI6IFwiIzMzM1wiLFxuICAgIGxldmVsMTogXCIjMkQzNzQ4XCIsXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbImxpZ2h0IiwiYWx0ZXJuYXRlIiwibWFpbiIsImRhcmsiLCJjYXJkU2hhZG93IiwibW9kZSIsInByaW1hcnkiLCJjb250cmFzdFRleHQiLCJzZWNvbmRhcnkiLCJ0ZXh0IiwiZGl2aWRlciIsImJhY2tncm91bmQiLCJwYXBlciIsImRlZmF1bHQiLCJsZXZlbDIiLCJsZXZlbDEiLCJjb21tb24iLCJibGFjayIsIndoaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/palette.js\n");

/***/ }),

/***/ "./src/theme/shadows.js":
/*!******************************!*\
  !*** ./src/theme/shadows.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n\nconst shadows = (themeMode = \"light\")=>{\n    const rgb = themeMode === \"light\" ? \"#8c98a4\" : \"#000000\";\n    return [\n        \"none\",\n        `0 3px 6px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.25)}`,\n        `0 12px 15px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.1)}`,\n        `0 6px 24px 0 ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.125)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`,\n        `0 10px 40px 10px ${(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.alpha)(rgb, 0.175)}`\n    ];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shadows);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUvc2hhZG93cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDN0MsTUFBTUMsVUFBVSxDQUFDQyxZQUFZLE9BQU87SUFDbEMsTUFBTUMsTUFBTUQsY0FBYyxVQUFVLFlBQVk7SUFFaEQsT0FBTztRQUNMO1FBQ0EsQ0FBQyxZQUFZLEVBQUVGLDJEQUFLQSxDQUFDRyxLQUFLLE1BQU0sQ0FBQztRQUNqQyxDQUFDLFlBQVksRUFBRUgsMkRBQUtBLENBQUNHLEtBQUssS0FBSyxDQUFDO1FBQ2hDLENBQUMsYUFBYSxFQUFFSCwyREFBS0EsQ0FBQ0csS0FBSyxPQUFPLENBQUM7UUFDbkMsQ0FBQyxpQkFBaUIsRUFBRUgsMkRBQUtBLENBQUNHLEtBQUssT0FBTyxDQUFDO1FBQ3ZDLENBQUMsaUJBQWlCLEVBQUVILDJEQUFLQSxDQUFDRyxLQUFLLE9BQU8sQ0FBQztRQUN2QyxDQUFDLGlCQUFpQixFQUFFSCwyREFBS0EsQ0FBQ0csS0FBSyxPQUFPLENBQUM7UUFDdkMsQ0FBQyxpQkFBaUIsRUFBRUgsMkRBQUtBLENBQUNHLEtBQUssT0FBTyxDQUFDO1FBQ3ZDLENBQUMsaUJBQWlCLEVBQUVILDJEQUFLQSxDQUFDRyxLQUFLLE9BQU8sQ0FBQztRQUN2QyxDQUFDLGlCQUFpQixFQUFFSCwyREFBS0EsQ0FBQ0csS0FBSyxPQUFPLENBQUM7UUFDdkMsQ0FBQyxpQkFBaUIsRUFBRUgsMkRBQUtBLENBQUNHLEtBQUssT0FBTyxDQUFDO1FBQ3ZDLENBQUMsaUJBQWlCLEVBQUVILDJEQUFLQSxDQUFDRyxLQUFLLE9BQU8sQ0FBQztRQUN2QyxDQUFDLGlCQUFpQixFQUFFSCwyREFBS0EsQ0FBQ0csS0FBSyxPQUFPLENBQUM7UUFDdkMsQ0FBQyxpQkFBaUIsRUFBRUgsMkRBQUtBLENBQUNHLEtBQUssT0FBTyxDQUFDO1FBQ3ZDLENBQUMsaUJBQWlCLEVBQUVILDJEQUFLQSxDQUFDRyxLQUFLLE9BQU8sQ0FBQztRQUN2QyxDQUFDLGlCQUFpQixFQUFFSCwyREFBS0EsQ0FBQ0csS0FBSyxPQUFPLENBQUM7UUFDdkMsQ0FBQyxpQkFBaUIsRUFBRUgsMkRBQUtBLENBQUNHLEtBQUssT0FBTyxDQUFDO1FBQ3ZDLENBQUMsaUJBQWlCLEVBQUVILDJEQUFLQSxDQUFDRyxLQUFLLE9BQU8sQ0FBQztRQUN2QyxDQUFDLGlCQUFpQixFQUFFSCwyREFBS0EsQ0FBQ0csS0FBSyxPQUFPLENBQUM7UUFDdkMsQ0FBQyxpQkFBaUIsRUFBRUgsMkRBQUtBLENBQUNHLEtBQUssT0FBTyxDQUFDO1FBQ3ZDLENBQUMsaUJBQWlCLEVBQUVILDJEQUFLQSxDQUFDRyxLQUFLLE9BQU8sQ0FBQztRQUN2QyxDQUFDLGlCQUFpQixFQUFFSCwyREFBS0EsQ0FBQ0csS0FBSyxPQUFPLENBQUM7UUFDdkMsQ0FBQyxpQkFBaUIsRUFBRUgsMkRBQUtBLENBQUNHLEtBQUssT0FBTyxDQUFDO1FBQ3ZDLENBQUMsaUJBQWlCLEVBQUVILDJEQUFLQSxDQUFDRyxLQUFLLE9BQU8sQ0FBQztRQUN2QyxDQUFDLGlCQUFpQixFQUFFSCwyREFBS0EsQ0FBQ0csS0FBSyxPQUFPLENBQUM7S0FDeEM7QUFDSDtBQUVBLGlFQUFlRixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViMy1mdW5kcmFpc2luZy1wbGF0Zm9ybS8uL3NyYy90aGVtZS9zaGFkb3dzLmpzPzEwNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxwaGEgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9zdHlsZXNcIjtcbmNvbnN0IHNoYWRvd3MgPSAodGhlbWVNb2RlID0gXCJsaWdodFwiKSA9PiB7XG4gIGNvbnN0IHJnYiA9IHRoZW1lTW9kZSA9PT0gXCJsaWdodFwiID8gXCIjOGM5OGE0XCIgOiBcIiMwMDAwMDBcIjtcblxuICByZXR1cm4gW1xuICAgIFwibm9uZVwiLFxuICAgIGAwIDNweCA2cHggMCAke2FscGhhKHJnYiwgMC4yNSl9YCxcbiAgICBgMCAxMnB4IDE1cHggJHthbHBoYShyZ2IsIDAuMSl9YCxcbiAgICBgMCA2cHggMjRweCAwICR7YWxwaGEocmdiLCAwLjEyNSl9YCxcbiAgICBgMCAxMHB4IDQwcHggMTBweCAke2FscGhhKHJnYiwgMC4xNzUpfWAsXG4gICAgYDAgMTBweCA0MHB4IDEwcHggJHthbHBoYShyZ2IsIDAuMTc1KX1gLFxuICAgIGAwIDEwcHggNDBweCAxMHB4ICR7YWxwaGEocmdiLCAwLjE3NSl9YCxcbiAgICBgMCAxMHB4IDQwcHggMTBweCAke2FscGhhKHJnYiwgMC4xNzUpfWAsXG4gICAgYDAgMTBweCA0MHB4IDEwcHggJHthbHBoYShyZ2IsIDAuMTc1KX1gLFxuICAgIGAwIDEwcHggNDBweCAxMHB4ICR7YWxwaGEocmdiLCAwLjE3NSl9YCxcbiAgICBgMCAxMHB4IDQwcHggMTBweCAke2FscGhhKHJnYiwgMC4xNzUpfWAsXG4gICAgYDAgMTBweCA0MHB4IDEwcHggJHthbHBoYShyZ2IsIDAuMTc1KX1gLFxuICAgIGAwIDEwcHggNDBweCAxMHB4ICR7YWxwaGEocmdiLCAwLjE3NSl9YCxcbiAgICBgMCAxMHB4IDQwcHggMTBweCAke2FscGhhKHJnYiwgMC4xNzUpfWAsXG4gICAgYDAgMTBweCA0MHB4IDEwcHggJHthbHBoYShyZ2IsIDAuMTc1KX1gLFxuICAgIGAwIDEwcHggNDBweCAxMHB4ICR7YWxwaGEocmdiLCAwLjE3NSl9YCxcbiAgICBgMCAxMHB4IDQwcHggMTBweCAke2FscGhhKHJnYiwgMC4xNzUpfWAsXG4gICAgYDAgMTBweCA0MHB4IDEwcHggJHthbHBoYShyZ2IsIDAuMTc1KX1gLFxuICAgIGAwIDEwcHggNDBweCAxMHB4ICR7YWxwaGEocmdiLCAwLjE3NSl9YCxcbiAgICBgMCAxMHB4IDQwcHggMTBweCAke2FscGhhKHJnYiwgMC4xNzUpfWAsXG4gICAgYDAgMTBweCA0MHB4IDEwcHggJHthbHBoYShyZ2IsIDAuMTc1KX1gLFxuICAgIGAwIDEwcHggNDBweCAxMHB4ICR7YWxwaGEocmdiLCAwLjE3NSl9YCxcbiAgICBgMCAxMHB4IDQwcHggMTBweCAke2FscGhhKHJnYiwgMC4xNzUpfWAsXG4gICAgYDAgMTBweCA0MHB4IDEwcHggJHthbHBoYShyZ2IsIDAuMTc1KX1gLFxuICAgIGAwIDEwcHggNDBweCAxMHB4ICR7YWxwaGEocmdiLCAwLjE3NSl9YCxcbiAgXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoYWRvd3M7XG4iXSwibmFtZXMiOlsiYWxwaGEiLCJzaGFkb3dzIiwidGhlbWVNb2RlIiwicmdiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/theme/shadows.js\n");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/Paper":
/*!**************************************!*\
  !*** external "@mui/material/Paper" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/useThemeProps");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "aos":
/*!**********************!*\
  !*** external "aos" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("aos");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui","vendor-chunks/@babel","vendor-chunks/slick-carousel","vendor-chunks/react-lazy-load-image-component","vendor-chunks/react-image-lightbox","vendor-chunks/aos"], () => (__webpack_exec__("./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();