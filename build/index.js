"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Module Resolution
 * Check tsconfig.json => basepath and paths section
 * Check package.json => _moduleAliases section
 * They have to be identical
 */
require("module-alias/register");
const Cluster_1 = __importDefault(require("@Bin/Cluster"));
const App_1 = __importDefault(require("@Bin/App"));
(0, Cluster_1.default)(App_1.default);
//# sourceMappingURL=index.js.map