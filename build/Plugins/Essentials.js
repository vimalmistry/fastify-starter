"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_compress_1 = __importDefault(require("fastify-compress"));
const fastify_cors_1 = __importDefault(require("fastify-cors"));
const middie_1 = __importDefault(require("middie"));
const fastify_sensible_1 = __importDefault(require("fastify-sensible"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
async function Essentials(fastify) {
    fastify.log.info("PLUGIN - Essentials loaded.");
    // for middleware support
    await fastify.register(middie_1.default);
    // for better error
    await fastify.register(fastify_sensible_1.default);
    // for compress output
    await fastify.register(fastify_compress_1.default, {
        global: true,
        encodings: ["deflate", "gzip", "br"],
    });
    // avoid on production
    if (fastify.inDev) {
        await fastify.register(fastify_cors_1.default);
    }
}
exports.default = (0, fastify_plugin_1.default)(Essentials);
//# sourceMappingURL=Essentials.js.map