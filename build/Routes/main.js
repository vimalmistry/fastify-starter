"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainController_1 = __importDefault(require("@Controllers/MainController"));
exports.default = async (app) => {
    const controller = new MainController_1.default();
    app.get("/", controller.home);
    app.get("/prisma", controller.prisma);
    app.get("/hello", controller.hello);
};
//# sourceMappingURL=main.js.map