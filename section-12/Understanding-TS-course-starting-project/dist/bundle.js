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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_project_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project-input */ \"./src/components/project-input.ts\");\n/* harmony import */ var _components_project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/project-list */ \"./src/components/project-list.ts\");\n\n\nnew _components_project_input__WEBPACK_IMPORTED_MODULE_0__.ProjectInput();\nnew _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList(\"active\");\nnew _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList(\"finished\");\n\n\n//# sourceURL=webpack://Understanding-TS-course-starting-project/./src/app.ts?");

/***/ }),

/***/ "./src/components/base-components.ts":
/*!*******************************************!*\
  !*** ./src/components/base-components.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Components\": () => (/* binding */ Components)\n/* harmony export */ });\nclass Components {\n    constructor(templateId, hostElementId, insertAtStart, newElementId) {\n        this.templateElement = document.getElementById(templateId);\n        this.hostElement = document.getElementById(hostElementId);\n        const importedNode = document.importNode(this.templateElement.content, true);\n        this.element = importedNode.firstElementChild;\n        if (newElementId) {\n            this.element.id = newElementId;\n        }\n        this.attach(insertAtStart);\n    }\n    attach(insertAtStartBeginning) {\n        this.hostElement.insertAdjacentElement(insertAtStartBeginning ? \"afterbegin\" : \"beforeend\", this.element);\n    }\n}\n\n\n//# sourceURL=webpack://Understanding-TS-course-starting-project/./src/components/base-components.ts?");

/***/ }),

/***/ "./src/components/project-input.ts":
/*!*****************************************!*\
  !*** ./src/components/project-input.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectInput\": () => (/* binding */ ProjectInput)\n/* harmony export */ });\n/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-components */ \"./src/components/base-components.ts\");\n/* harmony import */ var _utils_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/validation */ \"./src/utils/validation.ts\");\n/* harmony import */ var _decorators_auto_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/auto-bind */ \"./src/decorators/auto-bind.ts\");\n/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/project-state */ \"./src/state/project-state.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\n\nclass ProjectInput extends _base_components__WEBPACK_IMPORTED_MODULE_0__.Components {\n    constructor() {\n        super(\"project-input\", \"app\", true, \"user-input\");\n        this.titleInputElement = this.element.querySelector(\"#title\");\n        this.descriptionInputElement = this.element.querySelector(\"#description\");\n        this.mandayInputElement = this.element.querySelector(\"#manday\");\n        this.configure();\n    }\n    configure() {\n        this.element.addEventListener(\"submit\", this.submitHandler);\n    }\n    renderContent() { }\n    clearInput() {\n        this.titleInputElement.value = \"\";\n        this.descriptionInputElement.value = \"\";\n        this.mandayInputElement.value = \"\";\n    }\n    gatherUserInput() {\n        const enteredTitle = this.titleInputElement.value;\n        const enteredDescription = this.descriptionInputElement.value;\n        const enteredManday = this.mandayInputElement.value;\n        const titleValidatable = {\n            value: enteredTitle,\n            required: true,\n        };\n        const descriptionValidatable = {\n            value: enteredDescription,\n            required: true,\n            minLength: 5,\n        };\n        const mandayValidatable = {\n            value: +enteredManday,\n            required: true,\n            min: 1,\n            max: 1000,\n        };\n        if (!(0,_utils_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(titleValidatable) ||\n            !(0,_utils_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(descriptionValidatable) ||\n            !(0,_utils_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(mandayValidatable)) {\n            alert(\"入力が正しくありません。もう一度やり直してください。\");\n            return;\n        }\n        else {\n            return [enteredTitle, enteredDescription, parseFloat(enteredManday)];\n        }\n    }\n    submitHandler(event) {\n        event.preventDefault();\n        const userInput = this.gatherUserInput();\n        if (Array.isArray(userInput)) {\n            const [title, desc, manday] = userInput;\n            _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.addProject(title, desc, manday);\n            this.clearInput();\n        }\n    }\n}\n__decorate([\n    _decorators_auto_bind__WEBPACK_IMPORTED_MODULE_2__.AutoBind\n], ProjectInput.prototype, \"submitHandler\", null);\n\n\n//# sourceURL=webpack://Understanding-TS-course-starting-project/./src/components/project-input.ts?");

/***/ }),

/***/ "./src/components/project-item.ts":
/*!****************************************!*\
  !*** ./src/components/project-item.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectItem\": () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _decorators_auto_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decorators/auto-bind */ \"./src/decorators/auto-bind.ts\");\n/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-components */ \"./src/components/base-components.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\nclass ProjectItem extends _base_components__WEBPACK_IMPORTED_MODULE_1__.Components {\n    get manday() {\n        if (this.project.manday < 20) {\n            return this.project.manday.toString() + \"人日\";\n        }\n        else {\n            return (this.project.manday / 20).toString() + \"人月\";\n        }\n    }\n    constructor(hostId, project) {\n        super(\"single-project\", hostId, false, project.id);\n        this.project = project;\n        this.configure();\n        this.renderContent();\n    }\n    dragStartHandler(event) {\n        event.dataTransfer.setData(\"text/plain\", this.project.id);\n        event.dataTransfer.effectAllowed = \"move\";\n    }\n    dragEndHandler(_) {\n        console.log(\"drag終了\");\n    }\n    configure() {\n        this.element.addEventListener(\"dragstart\", this.dragStartHandler);\n        this.element.addEventListener(\"dragend\", this.dragEndHandler);\n    }\n    renderContent() {\n        this.element.querySelector(\"h2\").textContent = this.project.title;\n        this.element.querySelector(\"h3\").textContent = this.manday;\n        this.element.querySelector(\"p\").textContent = this.project.description;\n    }\n}\n__decorate([\n    _decorators_auto_bind__WEBPACK_IMPORTED_MODULE_0__.AutoBind\n], ProjectItem.prototype, \"dragStartHandler\", null);\n__decorate([\n    _decorators_auto_bind__WEBPACK_IMPORTED_MODULE_0__.AutoBind\n], ProjectItem.prototype, \"dragEndHandler\", null);\n\n\n//# sourceURL=webpack://Understanding-TS-course-starting-project/./src/components/project-item.ts?");

/***/ }),

/***/ "./src/components/project-list.ts":
/*!****************************************!*\
  !*** ./src/components/project-list.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ \"./src/models/project.ts\");\n/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/project-state */ \"./src/state/project-state.ts\");\n/* harmony import */ var _decorators_auto_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/auto-bind */ \"./src/decorators/auto-bind.ts\");\n/* harmony import */ var _base_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-components */ \"./src/components/base-components.ts\");\n/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-item */ \"./src/components/project-item.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\n\n\nclass ProjectList extends _base_components__WEBPACK_IMPORTED_MODULE_3__.Components {\n    constructor(type) {\n        super(\"project-list\", \"app\", false, `${type}-projects`);\n        this.type = type;\n        this.assignedProjects = [];\n        this.configure();\n        this.renderContent();\n    }\n    dragOverHandler(event) {\n        if (event.dataTransfer && event.dataTransfer.types[0] === \"text/plain\") {\n            event.preventDefault();\n            const listEl = this.element.querySelector(\"ul\");\n            listEl.classList.add(\"droppable\");\n        }\n    }\n    dropHandler(event) {\n        const prjId = event.dataTransfer.getData(\"text/plain\");\n        _state_project_state__WEBPACK_IMPORTED_MODULE_1__.projectState.moveProject(prjId, this.type === \"active\" ? _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active : _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Finished);\n    }\n    dragLeaveHandler(_) {\n        const listEl = this.element.querySelector(\"ul\");\n        listEl.classList.remove(\"droppable\");\n    }\n    configure() {\n        this.element.addEventListener(\"dragover\", this.dragOverHandler);\n        this.element.addEventListener(\"drop\", this.dropHandler);\n        this.element.addEventListener(\"dragleave\", this.dragLeaveHandler);\n        _state_project_state__WEBPACK_IMPORTED_MODULE_1__.projectState.addListener((projects) => {\n            const relevantProjects = projects.filter((prj) => {\n                if (this.type === \"active\") {\n                    return prj.status === _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active;\n                }\n                return prj.status === _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Finished;\n            });\n            this.assignedProjects = relevantProjects;\n            this.renderProjects();\n        });\n    }\n    renderContent() {\n        const listId = `${this.type}-project-list`;\n        this.element.querySelector(\"ul\").id = listId;\n        this.element.querySelector(\"h2\").textContent =\n            this.type === \"active\" ? \"実行中のプロジェクト\" : \"完了したプロジェクト\";\n    }\n    renderProjects() {\n        const listEl = document.getElementById(`${this.type}-project-list`);\n        listEl.innerHTML = \"\";\n        for (const prjItem of this.assignedProjects) {\n            new _project_item__WEBPACK_IMPORTED_MODULE_4__.ProjectItem(listEl.id, prjItem);\n        }\n    }\n}\n__decorate([\n    _decorators_auto_bind__WEBPACK_IMPORTED_MODULE_2__.AutoBind\n], ProjectList.prototype, \"dragOverHandler\", null);\n__decorate([\n    _decorators_auto_bind__WEBPACK_IMPORTED_MODULE_2__.AutoBind\n], ProjectList.prototype, \"dropHandler\", null);\n__decorate([\n    _decorators_auto_bind__WEBPACK_IMPORTED_MODULE_2__.AutoBind\n], ProjectList.prototype, \"dragLeaveHandler\", null);\n\n\n//# sourceURL=webpack://Understanding-TS-course-starting-project/./src/components/project-list.ts?");

/***/ }),

/***/ "./src/decorators/auto-bind.ts":
/*!*************************************!*\
  !*** ./src/decorators/auto-bind.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AutoBind\": () => (/* binding */ AutoBind)\n/* harmony export */ });\nfunction AutoBind(_, _2, description) {\n    const propertyMethod = description.value;\n    const adjDescriptor = {\n        get() {\n            const boundFn = propertyMethod.bind(this);\n            return boundFn;\n        },\n    };\n    return adjDescriptor;\n}\n\n\n//# sourceURL=webpack://Understanding-TS-course-starting-project/./src/decorators/auto-bind.ts?");

/***/ }),

/***/ "./src/models/project.ts":
/*!*******************************!*\
  !*** ./src/models/project.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"ProjectStatus\": () => (/* binding */ ProjectStatus)\n/* harmony export */ });\nvar ProjectStatus;\n(function (ProjectStatus) {\n    ProjectStatus[ProjectStatus[\"Active\"] = 0] = \"Active\";\n    ProjectStatus[ProjectStatus[\"Finished\"] = 1] = \"Finished\";\n})(ProjectStatus || (ProjectStatus = {}));\nclass Project {\n    constructor(id, title, description, manday, status) {\n        this.id = id;\n        this.title = title;\n        this.description = description;\n        this.manday = manday;\n        this.status = status;\n    }\n}\n\n\n//# sourceURL=webpack://Understanding-TS-course-starting-project/./src/models/project.ts?");

/***/ }),

/***/ "./src/state/project-state.ts":
/*!************************************!*\
  !*** ./src/state/project-state.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectState\": () => (/* binding */ ProjectState),\n/* harmony export */   \"projectState\": () => (/* binding */ projectState)\n/* harmony export */ });\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project */ \"./src/models/project.ts\");\n\nclass State {\n    constructor() {\n        this.listeners = [];\n    }\n    addListener(listenerFn) {\n        this.listeners.push(listenerFn);\n    }\n}\nclass ProjectState extends State {\n    constructor() {\n        super();\n        this.projects = [];\n    }\n    static getInstance() {\n        if (this.instance) {\n            return this.instance;\n        }\n        this.instance = new ProjectState();\n        return this.instance;\n    }\n    addProject(title, description, manday) {\n        const newProject = new _models_project__WEBPACK_IMPORTED_MODULE_0__.Project(Math.random().toString(), title, description, manday, _models_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active);\n        this.projects.push(newProject);\n        this.updateListeners();\n    }\n    moveProject(projectId, newStatus) {\n        const project = this.projects.find((project) => projectId === project.id);\n        if (project && project.status !== newStatus) {\n            project.status = newStatus;\n        }\n        this.updateListeners();\n    }\n    updateListeners() {\n        for (const listenersFn of this.listeners) {\n            listenersFn(this.projects.slice());\n        }\n    }\n}\nconst projectState = ProjectState.getInstance();\n\n\n//# sourceURL=webpack://Understanding-TS-course-starting-project/./src/state/project-state.ts?");

/***/ }),

/***/ "./src/utils/validation.ts":
/*!*********************************!*\
  !*** ./src/utils/validation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validate\": () => (/* binding */ validate)\n/* harmony export */ });\nfunction validate(validatableInput) {\n    let isValidate = true;\n    if (validatableInput.required) {\n        isValidate =\n            isValidate && validatableInput.value.toString().trim().length !== 0;\n    }\n    if (validatableInput.minLength != null &&\n        typeof validatableInput.value === \"string\") {\n        isValidate =\n            isValidate &&\n                validatableInput.value.toString().length > validatableInput.minLength;\n    }\n    if (validatableInput.maxLength != null &&\n        typeof validatableInput.value === \"string\") {\n        isValidate =\n            isValidate &&\n                validatableInput.value.toString().length <= validatableInput.maxLength;\n    }\n    if (validatableInput.min && typeof validatableInput.value === \"number\") {\n        isValidate = isValidate && validatableInput.value >= validatableInput.min;\n    }\n    if (validatableInput.max && typeof validatableInput.value === \"number\") {\n        isValidate = isValidate && validatableInput.value <= validatableInput.max;\n    }\n    return isValidate;\n}\n\n\n//# sourceURL=webpack://Understanding-TS-course-starting-project/./src/utils/validation.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;