"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("@Bin/Controller"));
const Prisma_1 = require("@Bin/Prisma");
class MainController extends Controller_1.default {
    /**
     * Sample Home Request
     */
    home = (req, res) => {
        res.send(`${req.url} home page.`);
    };
    /**
     * Prisma Sample
     */
    prisma = (_req, _res) => {
        return Prisma_1.db.user.findMany();
    };
    /**
     * Hello
     */
    hello = (_req, _res) => {
        return "Hello";
    };
}
exports.default = MainController;
//# sourceMappingURL=MainController.js.map