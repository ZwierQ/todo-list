/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\ninput,\nh2 {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: sans-serif;\n  background-color: #1d1d1d;\n}\n\n.todo-form input {\n  width: 100%;\n  padding: 2px 10px;\n}\n\ndialog {\n  border: solid 1px #80808069;\n  outline: none;\n  border-radius: 8px;\n  background-color: #303030;\n  color: #d6d6d6;\n}\n\ndialog::backdrop {\n  backdrop-filter: blur(4px);\n}\n\n#modal {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n\n  & .confirm-buttons {\n    display: flex;\n    justify-content: space-around;\n  }\n}\n\n#modal:not([open]) {\n  display: none;\n}\n\n.confirm-delete {\n  padding: 20px;\n  font-size: 1.4rem;\n}\n\n.modal-button {\n  width: 150px;\n  padding: 12px;\n  outline: none;\n  font-size: 1rem;\n  border-radius: 8px;\n}\n\nbutton {\n  padding: 5px;\n  background-color: #1d1d1d;\n  color: #d6d6d6;\n  border: none;\n  cursor: pointer;\n}\n\nbutton:active {\n  transform: scale(1.02);\n}\n\ninput[type=\"checkbox\"] {\n  width: 22px;\n  height: 22px;\n  accent-color: #ffa600;\n  cursor: pointer;\n}\n\n#content {\n  height: 100vh;\n  color: #d6d6d6;\n  display: grid;\n  grid-template: 100px auto / 1fr 5fr;\n  grid-template-areas:\n    \"heading heading\"\n    \"sidebar todos\";\n}\n\n.heading {\n  grid-area: heading;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 20px;\n  padding: 20px;\n  background-color: #303030;\n  font-size: 2.7rem;\n}\n\n.logo {\n  width: 80px;\n  height: auto;\n}\n\n.todo-form {\n  grid-area: sidebar;\n  background-color: #303030;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  padding: 20px;\n}\n\n.select-list,\n.create-todo,\n.create-list,\n.delete-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.todo-lists,\n.todo-description,\n.todo-due-date,\n.todo-importance,\n.list-name {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: space-between;\n  white-space: nowrap;\n}\n\n.todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin: 25px;\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: 6fr 1fr;\n  align-items: center;\n  padding: 5px;\n  border-radius: 8px;\n  gap: 25px;\n  background-color: #303030;\n}\n\n.todo-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.description {\n  padding: 5px;\n  border-right: #80808069 solid 1px;\n}\n\n.date {\n  white-space: nowrap;\n}\n\n.low {\n  border-left: 8px solid #fffb00;\n}\n\n.medium {\n  border-left: 8px solid #ffa600;\n}\n\n.high {\n  border-left: 8px solid #ff0000;\n}\n\n.checked {\n  border-left: 8px solid #008000;\n}\n\n.todo-delete {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  outline: none;\n  border: none;\n}\n\n.close-icon {\n  width: 25px;\n  height: auto;\n  cursor: pointer;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/Heading.js":
/*!***********************************!*\
  !*** ./src/components/Heading.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_list_todo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/list-todo.svg */ \"./src/images/list-todo.svg\");\n\n\nconst Heading = (parentElement) => {\n  const heading = document.createElement(\"heading\");\n  heading.classList.add(\"heading\");\n\n  heading.innerHTML = `\n    <img src=${_images_list_todo_svg__WEBPACK_IMPORTED_MODULE_0__} class=\"logo\">\n    <div class=\"title\">My To-Do</div>\n  `;\n\n  parentElement.appendChild(heading);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n\n\n//# sourceURL=webpack://todo-list/./src/components/Heading.js?");

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Modal = (parentElement) => {\n  const modal = document.createElement(\"dialog\");\n  modal.id = \"modal\";\n\n  modal.innerHTML = `\n    <div class=\"confirm-delete\">\n      Are you sure you want to delete current list?\n    </div>\n    <div class=\"confirm-buttons\">\n      <button type=\"button\" class=\"modal-button confirm\">Confirm</button>\n      <button type=\"button\" class=\"modal-button cancel\">Cancel</button>\n    </div>\n  `;\n\n  parentElement.appendChild(modal);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n\n//# sourceURL=webpack://todo-list/./src/components/Modal.js?");

/***/ }),

/***/ "./src/components/TodoForm.js":
/*!************************************!*\
  !*** ./src/components/TodoForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_getMinDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/getMinDate */ \"./src/libs/getMinDate.js\");\n\n\nconst TodoForm = (parentElement) => {\n  const todoForm = document.createElement(\"div\");\n  todoForm.classList.add(\"todo-form\");\n\n  todoForm.innerHTML = `\n    <div class=\"select-list\">\n      <h2>Select List</h2>\n      <div class=\"todo-lists\">\n        <label for=\"todo-lists\">List Name</label>\n        <select name=\"todo-projects\" id=\"todo-lists\">\n        </select>\n      </div>\n    </div>\n    <div class=\"create-todo\">\n      <h2>Create New To-Do</h2>\n      <div class=\"todo-description\">\n        <input type=\"text\" id=\"todo-description\" placeholder=\"Task Description\">\n      </div>\n      <div class=\"todo-due-date\">\n        <label for=\"todo-due-date\">Due Date</label>\n        <input type=\"date\" id=\"todo-due-date\" value=${(0,_libs_getMinDate__WEBPACK_IMPORTED_MODULE_0__.getMinDate)()} min=${(0,_libs_getMinDate__WEBPACK_IMPORTED_MODULE_0__.getMinDate)()}>\n      </div>\n      <div class=\"todo-importance\">\n        <label for=\"todo-importance\">Importance</label>\n        <select name=\"todo-importance\" id=\"todo-importance\">\n          <option value=\"low\">Low</option>\n          <option value=\"medium\">Medium</option>\n          <option value=\"high\">High</option>\n        </select>\n      </div>\n      <button class=\"todo-add\" type=\"button\">Add To-Do</button>\n    </div>\n    <div class=\"create-list\">\n      <h2>Create New List</h2>\n      <div class=\"list-name\">\n        <input type=\"text\" id=\"create-list\" placeholder=\"List Name\">\n      </div>\n      <button class=\"add-list\" type=\"button\">Create List</button>\n    </div>\n    <div class=\"delete-list\">\n      <h2>Delete Current List</h2>\n      <button class=\"list-delete\" type=\"button\">Delete Current List</button>\n    </div>\n  `;\n\n  parentElement.appendChild(todoForm);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoForm);\n\n\n//# sourceURL=webpack://todo-list/./src/components/TodoForm.js?");

/***/ }),

/***/ "./src/components/TodoList.js":
/*!************************************!*\
  !*** ./src/components/TodoList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TodoList = (parentElement) => {\n  const todoList = document.createElement(\"div\");\n  todoList.classList.add(\"todo-container\");\n\n  todoList.innerHTML = `\n      <div class=\"todo-list\"></div>\n  `;\n\n  parentElement.appendChild(todoList);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\n\n\n//# sourceURL=webpack://todo-list/./src/components/TodoList.js?");

/***/ }),

/***/ "./src/components/UI.js":
/*!******************************!*\
  !*** ./src/components/UI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Heading */ \"./src/components/Heading.js\");\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ \"./src/components/Modal.js\");\n/* harmony import */ var _TodoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoForm */ \"./src/components/TodoForm.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoList */ \"./src/components/TodoList.js\");\n\n\n\n\n\nconst content = document.getElementById(\"content\");\n\nconst UI = () => {\n  (0,_Heading__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\n  (0,_TodoForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n  (0,_TodoList__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n  (0,_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n\n//# sourceURL=webpack://todo-list/./src/components/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _components_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/UI */ \"./src/components/UI.js\");\n/* harmony import */ var _libs_ScreenController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/ScreenController */ \"./src/libs/ScreenController.js\");\n\n\n\n\n(0,_components_UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_libs_ScreenController__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/libs/ScreenController.js":
/*!**************************************!*\
  !*** ./src/libs/ScreenController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_close_one_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/close-one.svg */ \"./src/images/close-one.svg\");\n/* harmony import */ var _libs_TodosController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/TodosController */ \"./src/libs/TodosController.js\");\n/* harmony import */ var _getMinDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMinDate */ \"./src/libs/getMinDate.js\");\n\n\n\n\nconst ScreenController = () => {\n  const todosController = (0,_libs_TodosController__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  const todoDescription = document.getElementById(\"todo-description\");\n  const todoDueDate = document.getElementById(\"todo-due-date\");\n  const todoImportance = document.getElementById(\"todo-importance\");\n  const addTodoButton = document.querySelector(\".todo-add\");\n  const todoList = document.querySelector(\".todo-list\");\n  const todoLists = document.getElementById(\"todo-lists\");\n  const addListButton = document.querySelector(\".add-list\");\n  const deleteListButton = document.querySelector(\".list-delete\");\n  const newListName = document.getElementById(\"create-list\");\n  const modal = document.getElementById(\"modal\");\n  const confirmListDelete = document.querySelector(\".confirm\");\n  const cancelListDelete = document.querySelector(\".cancel\");\n\n  const getCurrentList = () => todoLists.selectedIndex;\n  const getListToRender = () => todosController.getTodos(getCurrentList());\n\n  const formatDate = (date) =>\n    date.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, \"$3-$2-$1\");\n\n  const displayTodos = (list) => {\n    todoList.innerHTML = \"\";\n\n    // If list array is empty return without render todos\n    if (getCurrentList() === -1) return;\n\n    list.forEach((todo, index) => {\n      todoList.innerHTML += `\n      <div class=\"todo ${todo.importance}${\n        todo.state ? \" checked\" : \"\"\n      }\" id=\"${index}\">\n        <div class=\"description\">${todo.description}</div>\n        <div class=\"todo-info\">\n          <div class=\"date\">${formatDate(todo.dueDate)}</div>\n          <input type=\"checkbox\" class=\"status\" name=\"status\" value=\"done\" ${\n            todo.state ? \"checked\" : \"\"\n          }>\n          <button type=\"button\" class=\"todo-delete\">\n            <img src=${_images_close_one_svg__WEBPACK_IMPORTED_MODULE_0__} class=\"close-icon\">\n          </button>\n        </div>\n      </div>\n      `;\n    });\n  };\n\n  const renderListsOptions = () => {\n    const todosLists = todosController.getList();\n\n    todoLists.innerHTML = \"\";\n\n    todosLists.forEach((list) => {\n      todoLists.innerHTML += `\n      <option value=\"${list.name}\">${list.name}</option>\n      `;\n    });\n  };\n\n  const addList = () => {\n    const newListNameValue = newListName.value;\n    const existingLists = todosController.getList();\n    const newListIndex = existingLists.length;\n\n    // If new list name is empty return without adding list\n    if (newListNameValue === \"\") return;\n\n    // If new name is not unique return without adding list\n    if (\n      existingLists.findIndex((list) => list.name === newListNameValue) !== -1\n    )\n      return;\n\n    todosController.addList(newListNameValue);\n    renderListsOptions();\n    todoLists.selectedIndex = newListIndex;\n    displayTodos(getListToRender());\n    todosController.storeList();\n    newListName.value = \"\";\n  };\n\n  const deleteList = () => {\n    todosController.deleteList(getCurrentList());\n    renderListsOptions();\n    displayTodos(getListToRender());\n    todosController.storeList();\n    modal.close();\n  };\n\n  const addTodo = () => {\n    // If todos description or due date are empty return without adding todo\n    if (todoDescription.value === \"\") return;\n\n    todosController.addTodo(\n      getCurrentList(),\n      todoDescription.value,\n      todoImportance.value,\n      todoDueDate.value\n    );\n    displayTodos(getListToRender());\n    todosController.storeList();\n    todoDescription.value = \"\";\n    todoDueDate.value = (0,_getMinDate__WEBPACK_IMPORTED_MODULE_2__.getMinDate)();\n    todoImportance.selectedIndex = 0;\n  };\n\n  const deleteTodo = (event) => {\n    const selectedTodoID = event.target.closest(\".todo\").id;\n    // deletes todo if we click close icon\n    if (event.target.classList.contains(\"close-icon\")) {\n      todosController.deleteTodo(getCurrentList(), selectedTodoID);\n      displayTodos(getListToRender());\n      todosController.storeList();\n    }\n  };\n\n  const changeTodoState = (event) => {\n    const todo = event.target.closest(\".todo\").id;\n    // change status if we click checkbox\n    if (event.target.classList.contains(\"status\")) {\n      todosController.changeTodoState(getCurrentList(), todo);\n      todosController.storeList();\n      displayTodos(getListToRender());\n    }\n  };\n\n  todoLists.addEventListener(\"change\", () => displayTodos(getListToRender()));\n  addTodoButton.addEventListener(\"click\", () => addTodo());\n  todoList.addEventListener(\"click\", (event) => {\n    deleteTodo(event), changeTodoState(event);\n  });\n  addListButton.addEventListener(\"click\", () => addList());\n  deleteListButton.addEventListener(\"click\", () => modal.showModal());\n  confirmListDelete.addEventListener(\"click\", () => deleteList());\n  cancelListDelete.addEventListener(\"click\", () => closeModal());\n\n  // Initial Lists Options selector render\n  renderListsOptions();\n  // Initial Todos render\n  displayTodos(getListToRender());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenController);\n\n\n//# sourceURL=webpack://todo-list/./src/libs/ScreenController.js?");

/***/ }),

/***/ "./src/libs/Todo.js":
/*!**************************!*\
  !*** ./src/libs/Todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n  constructor(description, importance, dueDate) {\n    this.description = description;\n    this.importance = importance;\n    this.dueDate = dueDate;\n    this.state = false;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://todo-list/./src/libs/Todo.js?");

/***/ }),

/***/ "./src/libs/TodosController.js":
/*!*************************************!*\
  !*** ./src/libs/TodosController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/libs/Todo.js\");\n\n\nconst TodosController = () => {\n  let todosLists =\n    localStorage.getItem(\"myList\") !== null\n      ? JSON.parse(localStorage.getItem(\"myList\"))\n      : [\n          {\n            name: \"Default List\",\n            todos: [],\n          },\n        ];\n\n  const storeList = () => {\n    const storedList = JSON.stringify(todosLists);\n    localStorage.setItem(\"myList\", storedList);\n  };\n\n  const getList = () => todosLists;\n\n  const addList = (name) => {\n    todosLists.push({ name: name, todos: [] });\n  };\n\n  const deleteList = (listIndex) => {\n    todosLists = todosLists.filter(\n      (list) => todosLists.indexOf(list) !== parseInt(listIndex)\n    );\n  };\n\n  const getTodos = (listIndex) =>\n    // getTodos if array is not empty\n    listIndex !== -1 && todosLists[listIndex].todos;\n\n  const addTodo = (listIndex, description, importance, dueDate) => {\n    const todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](description, importance, dueDate);\n    todosLists[listIndex].todos.push(todo);\n  };\n\n  const deleteTodo = (listIndex, todoID) => {\n    todosLists[listIndex].todos = todosLists[listIndex].todos.filter(\n      (item) => todosLists[listIndex].todos.indexOf(item) !== parseInt(todoID)\n    );\n  };\n\n  const changeTodoState = (listIndex, todo) => {\n    todosLists[listIndex].todos[todo].state =\n      !todosLists[listIndex].todos[todo].state;\n  };\n\n  return {\n    storeList,\n    getList,\n    addList,\n    deleteList,\n    getTodos,\n    addTodo,\n    deleteTodo,\n    changeTodoState,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodosController);\n\n\n//# sourceURL=webpack://todo-list/./src/libs/TodosController.js?");

/***/ }),

/***/ "./src/libs/getMinDate.js":
/*!********************************!*\
  !*** ./src/libs/getMinDate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMinDate: () => (/* binding */ getMinDate)\n/* harmony export */ });\nconst getMinDate = () => new Date().toISOString().slice(0, 10);\n\n\n//# sourceURL=webpack://todo-list/./src/libs/getMinDate.js?");

/***/ }),

/***/ "./src/images/close-one.svg":
/*!**********************************!*\
  !*** ./src/images/close-one.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"81252ec285a818660e60.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/close-one.svg?");

/***/ }),

/***/ "./src/images/list-todo.svg":
/*!**********************************!*\
  !*** ./src/images/list-todo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af439e577b7ed12f2194.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/list-todo.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;