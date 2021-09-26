(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/boilerplate-backend/src/app/controllers/app.controller.ts":
/*!**********************************************************************!*\
  !*** ./apps/boilerplate-backend/src/app/controllers/app.controller.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ../services/app.service */ "./apps/boilerplate-backend/src/app/services/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getVersion() {
        return this.appService.getVersion();
    }
    getHealth() {
        return null;
    }
};
tslib_1.__decorate([
    common_1.Get('/version'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", String)
], AppController.prototype, "getVersion", null);
tslib_1.__decorate([
    common_1.Get('/health'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getHealth", null);
AppController = tslib_1.__decorate([
    common_1.Controller(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./apps/boilerplate-backend/src/app/modules/app.module.ts":
/*!**************************************************************!*\
  !*** ./apps/boilerplate-backend/src/app/modules/app.module.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ../controllers/app.controller */ "./apps/boilerplate-backend/src/app/controllers/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ../services/app.service */ "./apps/boilerplate-backend/src/app/services/app.service.ts");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const config_service_1 = __webpack_require__(/*! ../services/config.service */ "./apps/boilerplate-backend/src/app/services/config.service.ts");
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot(config_service_1.configService.getTypeOrmConfig())],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/boilerplate-backend/src/app/services/app.service.ts":
/*!****************************************************************!*\
  !*** ./apps/boilerplate-backend/src/app/services/app.service.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const package_json_1 = __webpack_require__(/*! ../../../../../package.json */ "./package.json");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getVersion() {
        return package_json_1.version;
    }
};
AppService = tslib_1.__decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./apps/boilerplate-backend/src/app/services/config.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/boilerplate-backend/src/app/services/config.service.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
const dotenv_1 = __webpack_require__(/*! dotenv */ "dotenv");
dotenv_1.config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }
    getPort() {
        return this.getValue('PORT', true);
    }
    isProduction() {
        const mode = this.getValue('MODE', false);
        return mode != 'DEV';
    }
    getTypeOrmConfig() {
        return {
            type: 'postgres',
            host: this.getValue('POSTGRES_HOST'),
            port: parseInt(this.getValue('POSTGRES_PORT')),
            username: this.getValue('POSTGRES_USER'),
            password: this.getValue('POSTGRES_PASSWORD'),
            database: this.getValue('POSTGRES_DATABASE'),
            entities: ['**/*.entity{.ts,.js}'],
            migrationsTableName: 'migration',
            migrations: ['src/migration/*.ts'],
            cli: {
                migrationsDir: 'src/migration',
            },
            ssl: this.isProduction(),
        };
    }
}
const configService = new ConfigService(process.env).ensureValues([
    'POSTGRES_HOST',
    'POSTGRES_PORT',
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DATABASE',
]);
exports.configService = configService;


/***/ }),

/***/ "./apps/boilerplate-backend/src/main.ts":
/*!********************************************!*\
  !*** ./apps/boilerplate-backend/src/main.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app/modules/app.module */ "./apps/boilerplate-backend/src/app/modules/app.module.ts");
function bootstrap() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        yield app.listen(port, () => {
            common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, lint-staged, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"boilerplate\",\"version\":\"0.1.0\",\"scripts\":{\"start\":\"nx serve\",\"build\":\"nx build\",\"test\":\"nx test\",\"prepare\":\"husky install\"},\"private\":true,\"dependencies\":{\"@nestjs/common\":\"^8.0.0\",\"@nestjs/core\":\"^8.0.0\",\"@nestjs/platform-express\":\"^8.0.0\",\"@nestjs/typeorm\":\"^8.0.2\",\"core-js\":\"^3.6.5\",\"dotenv\":\"^10.0.0\",\"pg\":\"^8.7.1\",\"react\":\"17.0.2\",\"react-dom\":\"17.0.2\",\"reflect-metadata\":\"^0.1.13\",\"regenerator-runtime\":\"0.13.7\",\"rxjs\":\"~7.2.0\",\"tslib\":\"^2.0.0\",\"typeorm\":\"^0.2.37\"},\"devDependencies\":{\"@nestjs/schematics\":\"^8.0.0\",\"@nestjs/testing\":\"^8.0.0\",\"@nrwl/cli\":\"12.9.0\",\"@nrwl/cypress\":\"12.9.0\",\"@nrwl/eslint-plugin-nx\":\"12.9.0\",\"@nrwl/jest\":\"12.9.0\",\"@nrwl/linter\":\"12.9.0\",\"@nrwl/nest\":\"^12.9.0\",\"@nrwl/node\":\"12.9.0\",\"@nrwl/react\":\"12.9.0\",\"@nrwl/tao\":\"12.9.0\",\"@nrwl/web\":\"12.9.0\",\"@nrwl/workspace\":\"12.9.0\",\"@testing-library/react\":\"11.2.6\",\"@testing-library/react-hooks\":\"7.0.1\",\"@types/jest\":\"26.0.24\",\"@types/node\":\"14.14.33\",\"@types/react\":\"17.0.3\",\"@types/react-dom\":\"17.0.3\",\"@typescript-eslint/eslint-plugin\":\"~4.28.3\",\"@typescript-eslint/parser\":\"~4.28.3\",\"babel-jest\":\"27.0.6\",\"cypress\":\"^8.3.0\",\"eslint\":\"7.22.0\",\"eslint-config-prettier\":\"8.1.0\",\"eslint-plugin-cypress\":\"^2.10.3\",\"eslint-plugin-import\":\"2.22.1\",\"eslint-plugin-jsx-a11y\":\"6.4.1\",\"eslint-plugin-react\":\"7.23.1\",\"eslint-plugin-react-hooks\":\"4.2.0\",\"husky\":\"^7.0.2\",\"jest\":\"27.0.3\",\"lint-staged\":\"^11.1.2\",\"nodemon\":\"^2.0.12\",\"prettier\":\"^2.4.1\",\"ts-jest\":\"27.0.3\",\"ts-node\":\"^10.2.1\",\"typescript\":\"~4.3.5\"},\"lint-staged\":{\"*.{css,scss,graphql,js,json,ts,tsx,jsx,md,html,htm,xhtml}\":[\"nx format uncommited\"]}}");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./apps/boilerplate-backend/src/main.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/nx-boilerplate/boilerplate/apps/boilerplate-backend/src/main.ts */"./apps/boilerplate-backend/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map