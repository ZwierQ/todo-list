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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\nh1,\nh2 {\n  padding: 0;\n  margin: 0;\n}\n\nbody {\n  font-family: sans-serif;\n  background-color: #1d1d1d;\n}\n\n#content {\n  height: 100vh;\n  color: #d6d6d6;\n  display: grid;\n  grid-template: auto / 325px auto;\n  grid-template-areas: \"sidebar todos\";\n}\n\ndialog {\n  border: solid 1px #80808069;\n  outline: none;\n  border-radius: 8px;\n  background-color: #303030;\n  color: #d6d6d6;\n}\n\ndialog::backdrop {\n  backdrop-filter: blur(4px);\n}\n\n#modal {\n  display: flex;\n  flex-direction: column;\n  gap: 50px;\n\n  & .modal__buttons {\n    display: flex;\n    justify-content: space-around;\n  }\n}\n\n#modal:not([open]) {\n  display: none;\n}\n\n.modal__heading {\n  padding: 20px;\n  font-size: 1.4rem;\n}\n\n.modal__button {\n  width: 150px;\n  padding: 12px;\n  border: none;\n  outline: none;\n  background-color: #1d1d1d;\n  color: #d6d6d6;\n  font-size: 1rem;\n  border-radius: 8px;\n}\n\ninput[type=\"checkbox\"] {\n  width: 22px;\n  height: 22px;\n  accent-color: #ffa600;\n  cursor: pointer;\n}\n\n.heading {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 20px;\n  padding: 20px;\n  background-color: #303030;\n  font-size: 2.7rem;\n}\n\n.logo {\n  width: 80px;\n  height: auto;\n}\n\n.title {\n  white-space: nowrap;\n}\n\n.todo-form__input-container {\n  position: relative;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  justify-content: space-between;\n  white-space: nowrap;\n}\n\n.todo-list {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  margin: 35px 25px 25px 120px;\n  width: min(50vw, 1200px);\n  justify-self: center;\n}\n\n.todo {\n  display: grid;\n  grid-template-columns: 6fr 1fr;\n  align-items: center;\n  padding: 5px;\n  border-radius: 8px;\n  gap: 25px;\n  background-color: #303030;\n}\n\n.todo__info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.todo__delete-button {\n  height: 25px;\n  background-color: inherit;\n  border: none;\n  outline: none;\n  padding: 0;\n}\n\n.todo__description {\n  padding: 5px;\n  border-right: #80808069 solid 1px;\n}\n\n.todo__date {\n  white-space: nowrap;\n}\n\n.low {\n  border-left: 8px solid #fffb00;\n}\n\n.medium {\n  border-left: 8px solid #ffa600;\n}\n\n.high {\n  border-left: 8px solid #ff0000;\n}\n\n.checked {\n  border-left: 8px solid #008000;\n}\n\n.todo-delete {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: none;\n  outline: none;\n  border: none;\n}\n\n.close-icon {\n  width: 25px;\n  height: auto;\n  cursor: pointer;\n}\n\n.menu {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: #303030;\n  padding-bottom: 10px;\n}\n\n.menu__button {\n  width: fit-content;\n  height: fit-content;\n  margin: 0;\n  padding: 0;\n  border: none;\n  outline: none;\n  background-color: #303030;\n  cursor: pointer;\n}\n\n.menu__icon {\n  width: 25px;\n  height: auto;\n}\n\n.menu__icon.selected {\n  filter: invert(30%) sepia(80%) saturate(774%) hue-rotate(354deg)\n    brightness(102%) contrast(98%);\n}\n\n.todo-form {\n  grid-area: sidebar;\n  background-color: #303030;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n}\n\n.todo-form__input {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 12px 10px;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n}\n\ninput[type=\"date\"] {\n  width: auto;\n}\n\n.todo-form__button {\n  height: 30px;\n  padding: 5px;\n  background-color: #1d1d1d;\n  color: #d6d6d6;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.todo-form__button:active {\n  transform: scale(1.02);\n}\n\n.form-heading {\n  padding-top: 15px;\n}\n\n.select-list,\n.create-todo,\n.create-list,\n.delete-list {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  overflow: hidden;\n  opacity: 0;\n  height: 0;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.create-todo.selected {\n  opacity: 100%;\n  padding: 5px 20px 15px 20px;\n  height: auto;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.select-list.selected {\n  opacity: 100%;\n  height: auto;\n  padding: 0 20px 15px 20px;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.create-list.selected {\n  opacity: 100%;\n  padding: 5px 20px 15px 20px;\n  height: auto;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.delete-list.selected {\n  opacity: 100%;\n  padding: 0 20px 15px 20px;\n  height: auto;\n  transition: opacity 0.3s ease-in-out;\n}\n\n.todo-form__input.error {\n  outline: solid 3px red;\n}\n\n.error-message {\n  display: none;\n}\n\n.error-message.error {\n  display: block;\n  position: absolute;\n  bottom: -9px;\n  left: 6px;\n  font-size: 0.7rem;\n  background-color: red;\n  color: white;\n  border-radius: 5px;\n  padding: 2px 5px;\n  margin: 0;\n}\n\n@media screen and (max-width: 800px) {\n  #content {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .heading {\n    font-size: 1.5rem;\n    padding-bottom: 10px;\n  }\n\n  .logo {\n    width: 40px;\n    height: auto;\n  }\n\n  .create-todo {\n    display: grid;\n    grid-template-areas:\n      \"description description\"\n      \"date priority\"\n      \"button button\";\n    gap: 15px;\n    transition: height 0.2s ease-in-out;\n  }\n\n  .create-todo.selected {\n    height: 140px;\n  }\n\n  .create-todo__description {\n    grid-area: description;\n  }\n\n  .create-todo__due-date {\n    grid-area: date;\n  }\n\n  .create-todo__priority {\n    grid-area: priority;\n  }\n\n  .create-todo > .todo-form__button {\n    grid-area: button;\n  }\n\n  .select-list {\n    transition: height 0.2s ease-in-out;\n  }\n\n  .select-list.selected {\n    height: 45px;\n  }\n\n  .create-list {\n    gap: 12px;\n    transition: height 0.2s ease-in-out;\n  }\n\n  .create-list.selected {\n    height: 87px;\n  }\n\n  .delete-list {\n    transition: height 0.2s ease-in-out;\n  }\n\n  .delete-list.selected {\n    height: 30px;\n  }\n\n  .todo-form > *.selected {\n    opacity: 100%;\n    padding: 8px 20px 15px 20px;\n    transition-property: height, opacity;\n    transition-duration: 0.2s, 0.8s;\n    transition-timing-function: ease-in-out;\n    transition-delay: 0, 0.3s;\n  }\n\n  .todo-list {\n    width: auto;\n    margin: 25px;\n  }\n\n  .todo {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0;\n    padding: 0;\n  }\n\n  .todo__description {\n    border-right: none;\n    border-bottom: #80808069 solid 1px;\n    padding: 10px 0;\n    margin: 0 15px;\n  }\n\n  .todo__info {\n    width: inherit;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    gap: 20px;\n    padding: 10px 15px;\n  }\n\n  .todo__status {\n    order: 1;\n    align-self: center;\n    margin-right: auto;\n  }\n\n  .todo__date {\n    order: 2;\n  }\n\n  .todo__delete-button {\n    padding: 0;\n    order: 3;\n  }\n\n  .form-heading {\n    display: none;\n  }\n\n  dialog {\n    max-width: 350px;\n  }\n\n  .menu__icon {\n    width: 20px;\n    height: auto;\n  }\n\n  input[type=\"date\"] {\n    width: 100%;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/index.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_add_to_shopping_list_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/add-to-shopping-list.svg */ \"./src/images/add-to-shopping-list.svg\");\n/* harmony import */ var _images_page_list_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/page-list.svg */ \"./src/images/page-list.svg\");\n/* harmony import */ var _images_remove_from_shopping_list_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/remove-from-shopping-list.svg */ \"./src/images/remove-from-shopping-list.svg\");\n/* harmony import */ var _images_todo_add_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/todo-add.svg */ \"./src/images/todo-add.svg\");\n\n\n\n\n\nconst Menu = (parentElement) => {\n  const mobileMenu = document.createElement(\"div\");\n  mobileMenu.classList.add(\"menu\");\n\n  mobileMenu.innerHTML = `\n    <button type=\"button\" class=\"tab-add-todo menu__button\" data-menu-button>\n      <img src=${_images_todo_add_svg__WEBPACK_IMPORTED_MODULE_3__} class=\"tab-add-todo menu__icon\">\n    </button>\n    <button type=\"button\" class=\"tab-select-list menu__button\" data-menu-button>\n      <img src=${_images_page_list_svg__WEBPACK_IMPORTED_MODULE_1__} class=\"tab-select-list menu__icon\">\n    </button>\n    <button type=\"button\" class=\"tab-add-list menu__button\" data-menu-button>\n      <img src=${_images_add_to_shopping_list_svg__WEBPACK_IMPORTED_MODULE_0__} class=\"tab-add-list menu__icon\">\n    </button>\n    <button type=\"button\" class=\"tab-delete-list menu__button\" data-menu-button>\n      <img src=${_images_remove_from_shopping_list_svg__WEBPACK_IMPORTED_MODULE_2__} class=\"tab-delete-list menu__icon\">\n    </button>\n  `;\n\n  parentElement.appendChild(mobileMenu);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n\n//# sourceURL=webpack://todo-list/./src/components/Menu.js?");

/***/ }),

/***/ "./src/components/Modal.js":
/*!*********************************!*\
  !*** ./src/components/Modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Modal = (parentElement) => {\n  const modal = document.createElement(\"dialog\");\n  modal.id = \"modal\";\n\n  modal.innerHTML = `\n    <div class=\"modal__heading\">\n      Are you sure you want to delete current list?\n    </div>\n    <div class=\"modal__buttons\">\n      <button type=\"button\" class=\"modal__button\" data-confirm>Confirm</button>\n      <button type=\"button\" class=\"modal__button\" data-cancel>Cancel</button>\n    </div>\n  `;\n\n  parentElement.appendChild(modal);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n\n//# sourceURL=webpack://todo-list/./src/components/Modal.js?");

/***/ }),

/***/ "./src/components/Todo.js":
/*!********************************!*\
  !*** ./src/components/Todo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_close_one_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/close-one.svg */ \"./src/images/close-one.svg\");\n/* harmony import */ var _libs_formatDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/formatDate */ \"./src/libs/formatDate.js\");\n\n\n\nconst Todo = (todo, ID) => {\n  return `\n    <div \n      class=\"todo \n      ${todo.importance} \n      ${todo.state ? \"checked\" : \"\"}\" \n      id=\"${ID}\"\n    >\n      <div class=\"todo__description\">${todo.description}</div>\n      <div class=\"todo__info\">\n        <div class=\"todo__date\">${(0,_libs_formatDate__WEBPACK_IMPORTED_MODULE_1__.formatDate)(todo.dueDate)}</div>\n        <input type=\"checkbox\" class=\"todo__status\" name=\"status\" value=\"done\" ${\n          todo.state ? \"checked\" : \"\"\n        }>\n        <button type=\"button\" class=\"todo__delete-button\">\n          <img src=${_images_close_one_svg__WEBPACK_IMPORTED_MODULE_0__} class=\"close-icon\">\n        </button>\n      </div>\n    </div>\n  `;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n\n//# sourceURL=webpack://todo-list/./src/components/Todo.js?");

/***/ }),

/***/ "./src/components/TodoForm.js":
/*!************************************!*\
  !*** ./src/components/TodoForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _libs_getMinDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/getMinDate */ \"./src/libs/getMinDate.js\");\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Heading */ \"./src/components/Heading.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/components/Menu.js\");\n\n\n\n\nconst TodoForm = (parentElement) => {\n  const todoForm = document.createElement(\"div\");\n  todoForm.classList.add(\"todo-form\");\n\n  (0,_Heading__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(todoForm);\n  (0,_Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todoForm);\n\n  todoForm.innerHTML += `\n    <div class=\"select-list tab-select-list\">\n      <h2 class=\"form-heading\">Select List</h2>\n      <div class=\"todo-form__input-container todo-lists\">\n        <select name=\"todo-projects\" id=\"todo-lists\" class=\"todo-form__input\">\n        </select>\n      </div>\n    </div>\n    <div class=\"create-todo tab-add-todo\">\n      <h2 class=\"form-heading\">Create New To-Do</h2>\n      <div class=\"todo-form__input-container create-todo__description\">\n        <input type=\"text\" id=\"todo-description\" class=\"todo-form__input\" placeholder=\"Task Description\">\n        <p class=\"error-message\" data-description-error>Please Add Description</p>\n      </div>\n      <div class=\"todo-form__input-container create-todo__due-date\">\n        <label for=\"todo-due-date\">Due Date</label>\n        <input type=\"date\" id=\"todo-due-date\" class=\"todo-form__input\" value=${(0,_libs_getMinDate__WEBPACK_IMPORTED_MODULE_0__.getMinDate)()} min=${(0,_libs_getMinDate__WEBPACK_IMPORTED_MODULE_0__.getMinDate)()}>\n      </div>\n      <div class=\"todo-form__input-container create-todo__priority\">\n        <label for=\"todo-priority\">Priority</label>\n        <select name=\"todo-priority\" id=\"todo-priority\" class=\"todo-form__input\"> \n          <option value=\"low\" class=\"todo-form__input\">Low</option>\n          <option value=\"medium\" class=\"todo-form__input\">Medium</option>\n          <option value=\"high\" class=\"todo-form__input\">High</option>\n        </select>\n      </div>\n      <button class=\"todo-form__button\" type=\"button\" data-add-todo >Add To-Do</button>\n    </div>\n    <div class=\"create-list tab-add-list\">\n      <h2 class=\"form-heading\">Create New List</h2>\n      <div class=\"todo-form__input-container list-name\">\n        <input type=\"text\" id=\"create-list\" class=\"todo-form__input\" placeholder=\"List Name\">\n        <p class=\"error-message\" data-add-list-error></p>\n      </div>\n      <button class=\"todo-form__button\" type=\"button\" data-add-list>Create List</button>\n    </div>\n    <div class=\"delete-list tab-delete-list\">\n      <h2 class=\"form-heading\">Delete Current List</h2>\n      <button class=\"todo-form__button\" type=\"button\" data-list-delete>Delete Current List</button>\n    </div>\n  `;\n\n  parentElement.appendChild(todoForm);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoForm);\n\n\n//# sourceURL=webpack://todo-list/./src/components/TodoForm.js?");

/***/ }),

/***/ "./src/components/TodoList.js":
/*!************************************!*\
  !*** ./src/components/TodoList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst TodoList = (parentElement) => {\n  const todoList = document.createElement(\"div\");\n  todoList.classList.add(\"todo-container\");\n\n  todoList.innerHTML = `\n      <div class=\"todo-list\" data-todo-list></div>\n  `;\n\n  parentElement.appendChild(todoList);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\n\n\n//# sourceURL=webpack://todo-list/./src/components/TodoList.js?");

/***/ }),

/***/ "./src/components/UI.js":
/*!******************************!*\
  !*** ./src/components/UI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   content: () => (/* binding */ content),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ \"./src/components/Modal.js\");\n/* harmony import */ var _TodoForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoForm */ \"./src/components/TodoForm.js\");\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ \"./src/components/TodoList.js\");\n\n\n\n\nconst content = document.getElementById(\"content\");\n\nconst UI = () => {\n  (0,_TodoForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n  (0,_TodoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n  (0,_Modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(content);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);\n\n\n//# sourceURL=webpack://todo-list/./src/components/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/UI */ \"./src/components/UI.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _libs_EventsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/EventsController */ \"./src/libs/EventsController.js\");\n\n\n\n\n(0,_components_UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_libs_EventsController__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/libs/EventsController.js":
/*!**************************************!*\
  !*** ./src/libs/EventsController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ScreenController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScreenController */ \"./src/libs/ScreenController.js\");\n\n\nconst EventsController = () => {\n  const screenController = (0,_ScreenController__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const addTodoButton = document.querySelector(\"[data-add-todo]\");\n  const addListButton = document.querySelector(\"[data-add-list]\");\n  const deleteListButton = document.querySelector(\"[data-list-delete]\");\n  const confirmListDelete = document.querySelector(\"[data-confirm]\");\n  const cancelListDelete = document.querySelector(\"[data-cancel]\");\n  const tabButtons = document.querySelectorAll(\"[data-menu-button]\");\n  const todoLists = document.getElementById(\"todo-lists\");\n  const todoList = document.querySelector(\"[data-todo-list]\");\n\n  const addList = () => {\n    const newListNameValue = screenController.getNewListNameValue();\n    const existingLists = screenController.getList();\n    const newListIndex = existingLists.length;\n\n    // If new list name is empty return without adding list\n    if (newListNameValue === \"\") {\n      screenController.emptyListNameError();\n      return;\n    }\n\n    // If new list name is not unique return without adding list\n    if (\n      existingLists.findIndex((list) => list.name === newListNameValue) !== -1\n    ) {\n      screenController.invalidListNameError();\n      return;\n    }\n\n    screenController.displayNewList(newListNameValue, newListIndex);\n  };\n\n  const deleteList = () => {\n    screenController.closeModal();\n    screenController.rerenderList();\n  };\n\n  const addTodo = () => {\n    // If todos description or due date are empty return without adding todo\n    if (screenController.getTodoDescription() === \"\") {\n      screenController.todoNameError();\n      return;\n    }\n\n    screenController.displayNewTodo();\n  };\n\n  const deleteTodo = (event) => {\n    // deletes todo on \"close-icon\" click\n    if (event.target.classList.contains(\"close-icon\")) {\n      const selectedTodoID = event.target.closest(\".todo\").id;\n\n      screenController.removeDisplayedTodo(selectedTodoID);\n    }\n  };\n\n  const changeTodoState = (event) => {\n    // change status on checkbox click\n    if (event.target.classList.contains(\"todo__status\")) {\n      const todo = event.target.closest(\".todo\").id;\n\n      screenController.changeTodoState(todo);\n    }\n  };\n\n  const selectTab = (event) => {\n    const selectedTab = event.target.classList[0];\n    const tabElements = document.querySelectorAll(`.${selectedTab}`);\n\n    screenController.selectTab(tabElements, tabButtons, selectedTab);\n    screenController.removeErrors();\n  };\n\n  // Initial render on page load\n  window.addEventListener(\"load\", () => screenController.initialRender());\n\n  todoLists.addEventListener(\"change\", () => screenController.displayTodos());\n\n  addTodoButton.addEventListener(\"click\", () => addTodo());\n\n  todoList.addEventListener(\"click\", (event) => {\n    deleteTodo(event), changeTodoState(event);\n  });\n\n  addListButton.addEventListener(\"click\", () => addList());\n\n  deleteListButton.addEventListener(\"click\", () =>\n    screenController.displayModal()\n  );\n\n  confirmListDelete.addEventListener(\"click\", () => deleteList());\n\n  cancelListDelete.addEventListener(\"click\", () =>\n    screenController.closeModal()\n  );\n\n  tabButtons.forEach((button) => {\n    button.addEventListener(\"click\", (event) => selectTab(event));\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventsController);\n\n\n//# sourceURL=webpack://todo-list/./src/libs/EventsController.js?");

/***/ }),

/***/ "./src/libs/ScreenController.js":
/*!**************************************!*\
  !*** ./src/libs/ScreenController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Todo */ \"./src/components/Todo.js\");\n/* harmony import */ var _libs_TodosController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/TodosController */ \"./src/libs/TodosController.js\");\n/* harmony import */ var _getMinDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getMinDate */ \"./src/libs/getMinDate.js\");\n\n\n\n\nconst ScreenController = () => {\n  const todosController = (0,_libs_TodosController__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  const todoDescription = document.getElementById(\"todo-description\");\n  const todoDueDate = document.getElementById(\"todo-due-date\");\n  const todoPriority = document.getElementById(\"todo-priority\");\n  const todoList = document.querySelector(\"[data-todo-list]\");\n  const todoLists = document.getElementById(\"todo-lists\");\n  const descriptionError = document.querySelector(\"[data-description-error]\");\n  const addListError = document.querySelector(\"[data-add-list-error]\");\n  const newListName = document.getElementById(\"create-list\");\n  const modal = document.getElementById(\"modal\");\n\n  const getCurrentList = () => todoLists.selectedIndex;\n  const getListToRender = () => todosController.getTodos(getCurrentList());\n  const getNewListNameValue = () => newListName.value;\n  const getTodoDescription = () => todoDescription.value;\n\n  const displayTodos = () => {\n    const list = getListToRender();\n    const listTitle = todosController.getList()[getCurrentList()].name;\n\n    todoList.innerHTML = `<h1>${listTitle}</h1>`;\n\n    // If list array is empty return without render todos\n    if (getCurrentList() === -1) return;\n\n    list.forEach((todo, index) => {\n      todoList.innerHTML += (0,_components_Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo, index);\n    });\n  };\n\n  const addErrors = (borderToChange, errorMessage) => {\n    borderToChange.classList.add(\"error\");\n    errorMessage.classList.add(\"error\");\n  };\n\n  const removeErrors = () => {\n    const displayedErrors = [\n      todoDescription,\n      descriptionError,\n      newListName,\n      addListError,\n    ];\n\n    displayedErrors.forEach((error) => error.classList.remove(\"error\"));\n  };\n\n  const emptyListNameError = () => {\n    addErrors(newListName, addListError);\n    addListError.innerHTML = \"Please Name Your List\";\n  };\n\n  const invalidListNameError = () => {\n    addErrors(newListName, addListError);\n    addListError.innerHTML = \"There Is A List With That Name\";\n\n    newListName.value = \"\";\n  };\n\n  const todoNameError = () => {\n    addErrors(todoDescription, descriptionError);\n  };\n\n  const renderListsOptions = () => {\n    const todosLists = todosController.getList();\n\n    todoLists.innerHTML = \"\";\n\n    todosLists.forEach((list) => {\n      todoLists.innerHTML += `\n      <option value=\"${list.name}\">${list.name}</option>\n      `;\n    });\n  };\n\n  const initialRender = () => {\n    renderListsOptions();\n    displayTodos();\n  };\n\n  const displayModal = () => modal.showModal();\n\n  const closeModal = () => modal.close();\n\n  const resetValues = (inputField, errorMessage) => {\n    inputField.value = \"\";\n    removeErrors(inputField, errorMessage);\n  };\n\n  const displayNewList = (listName, listIndex) => {\n    todosController.addList(listName);\n    renderListsOptions();\n    todoLists.selectedIndex = listIndex;\n    displayTodos();\n    resetValues(newListName, addListError);\n  };\n\n  const rerenderList = () => {\n    todosController.deleteList(getCurrentList());\n    renderListsOptions();\n    displayTodos();\n  };\n\n  const displayNewTodo = () => {\n    todosController.addTodo(\n      getCurrentList(),\n      todoDescription.value,\n      todoPriority.value,\n      todoDueDate.value\n    );\n\n    displayTodos();\n    todoDueDate.value = (0,_getMinDate__WEBPACK_IMPORTED_MODULE_2__.getMinDate)();\n    todoPriority.selectedIndex = 0;\n    resetValues(todoDescription, descriptionError);\n  };\n\n  const removeDisplayedTodo = (todoID) => {\n    todosController.deleteTodo(getCurrentList(), todoID);\n    displayTodos();\n  };\n\n  const changeTodoState = (todo) => {\n    todosController.changeTodoState(getCurrentList(), todo);\n    displayTodos();\n  };\n\n  const selectTab = (tabs, buttons, selectedTab) => {\n    tabs.forEach((item) => {\n      const itemClasses = item.classList;\n      // toggle \"selected\" class on given tab\n      itemClasses.contains(\"selected\")\n        ? itemClasses.remove(\"selected\")\n        : itemClasses.add(\"selected\");\n    });\n\n    // Removing \"selected\" class from other tabs buttons\n    buttons.forEach((button) => {\n      const buttonClass = button.classList[0];\n      const otherButtons = document.querySelectorAll(`.${buttonClass}`);\n\n      if (buttonClass === selectedTab) return;\n\n      otherButtons.forEach((item) => item.classList.remove(\"selected\"));\n    });\n  };\n\n  return {\n    initialRender,\n    displayTodos,\n    displayModal,\n    closeModal,\n    emptyListNameError,\n    invalidListNameError,\n    todoNameError,\n    rerenderList,\n    removeErrors,\n    displayNewList,\n    displayNewTodo,\n    removeDisplayedTodo,\n    getNewListNameValue,\n    changeTodoState,\n    getTodoDescription,\n    selectTab,\n    getList: todosController.getList,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScreenController);\n\n\n//# sourceURL=webpack://todo-list/./src/libs/ScreenController.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/libs/Todo.js\");\n\n\nconst TodosController = () => {\n  const defaultValue = [\n    {\n      name: \"My List\",\n      todos: [],\n    },\n  ];\n\n  let todosLists =\n    localStorage.getItem(\"myList\") !== null\n      ? JSON.parse(localStorage.getItem(\"myList\"))\n      : defaultValue;\n\n  const storeList = () => {\n    const storedList = JSON.stringify(todosLists);\n    localStorage.setItem(\"myList\", storedList);\n  };\n\n  const getList = () => todosLists;\n\n  const addList = (name) => {\n    todosLists.push({ name: name, todos: [] });\n    storeList();\n  };\n\n  const deleteList = (listIndex) => {\n    todosLists = todosLists.filter(\n      (list) => todosLists.indexOf(list) !== parseInt(listIndex)\n    );\n\n    if (todosLists.length === 0) {\n      localStorage.clear();\n      todosLists = defaultValue;\n    }\n    storeList();\n  };\n\n  const getTodos = (listIndex) =>\n    // getTodos if array is not empty\n    listIndex !== -1 && todosLists[listIndex].todos;\n\n  const addTodo = (listIndex, description, priority, dueDate) => {\n    const todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](description, priority, dueDate);\n    todosLists[listIndex].todos.push(todo);\n    storeList();\n  };\n\n  const deleteTodo = (listIndex, todoID) => {\n    todosLists[listIndex].todos = todosLists[listIndex].todos.filter(\n      (item) => todosLists[listIndex].todos.indexOf(item) !== parseInt(todoID)\n    );\n    storeList();\n  };\n\n  const changeTodoState = (listIndex, todo) => {\n    todosLists[listIndex].todos[todo].state =\n      !todosLists[listIndex].todos[todo].state;\n    storeList();\n  };\n\n  return {\n    getList,\n    addList,\n    deleteList,\n    getTodos,\n    addTodo,\n    deleteTodo,\n    changeTodoState,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodosController);\n\n\n//# sourceURL=webpack://todo-list/./src/libs/TodosController.js?");

/***/ }),

/***/ "./src/libs/formatDate.js":
/*!********************************!*\
  !*** ./src/libs/formatDate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDate: () => (/* binding */ formatDate)\n/* harmony export */ });\nconst formatDate = (date) =>\n  date.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, \"$3-$2-$1\");\n\n\n//# sourceURL=webpack://todo-list/./src/libs/formatDate.js?");

/***/ }),

/***/ "./src/libs/getMinDate.js":
/*!********************************!*\
  !*** ./src/libs/getMinDate.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMinDate: () => (/* binding */ getMinDate)\n/* harmony export */ });\nconst getMinDate = () => new Date().toISOString().slice(0, 10);\n\n\n//# sourceURL=webpack://todo-list/./src/libs/getMinDate.js?");

/***/ }),

/***/ "./src/images/add-to-shopping-list.svg":
/*!*********************************************!*\
  !*** ./src/images/add-to-shopping-list.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"466efee7e4805fb5ddf6.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/add-to-shopping-list.svg?");

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

/***/ }),

/***/ "./src/images/page-list.svg":
/*!**********************************!*\
  !*** ./src/images/page-list.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"59ae5ed91e4df1872b8e.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/page-list.svg?");

/***/ }),

/***/ "./src/images/remove-from-shopping-list.svg":
/*!**************************************************!*\
  !*** ./src/images/remove-from-shopping-list.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e2d0014e9c64afe66842.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/remove-from-shopping-list.svg?");

/***/ }),

/***/ "./src/images/todo-add.svg":
/*!*********************************!*\
  !*** ./src/images/todo-add.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dfc9bea96529b7cee05f.svg\";\n\n//# sourceURL=webpack://todo-list/./src/images/todo-add.svg?");

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