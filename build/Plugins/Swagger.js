"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_swagger_1 = __importDefault(require("fastify-swagger"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
async function Swagger(fastify) {
    fastify.log.info("PLUGIN - Swagger loaded.");
    await fastify.register(fastify_swagger_1.default, {
        routePrefix: "/doc",
        swagger: {
            info: {
                title: "Fastify Starter",
                description: "Testing the Fastify swagger API",
                version: "0.1.0",
            },
            externalDocs: {
                url: "https://swagger.io",
                description: "Find more info here",
            },
            host: "localhost:3000",
            schemes: ["http", "https"],
            consumes: ["application/json"],
            produces: ["application/json"],
        },
        exposeRoute: true,
    });
}
exports.default = (0, fastify_plugin_1.default)(Swagger);
//# sourceMappingURL=Swagger.js.map