"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_autoload_1 = __importDefault(require("fastify-autoload"));
const Prisma_1 = require("./Prisma");
const path_1 = require("path");
// "build" path becouse we run directly compiled code everytime
const ROOT = (0, path_1.join)(process.env.PWD, "build");
async function runApp() {
    Prisma_1.db.$connect();
    const app = await bootstrap();
    try {
        await app.listen(process.env.PORT || 3000);
        // console.log({ routes: fastify.route });
    }
    catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}
exports.default = runApp;
async function bootstrap() {
    ///
    const fastify = (0, fastify_1.default)({
        logger: { prettyPrint: true },
    });
    await fastify.register(fastify_autoload_1.default, {
        dir: (0, path_1.join)(ROOT, "/Plugins"),
        ignorePattern: /.*(_).js/,
        //   options: Object.assign({}, opts),
    });
    // Then, we'll load all of our routes.
    await fastify.register(fastify_autoload_1.default, {
        dir: (0, path_1.join)(ROOT, "/Routes"),
        dirNameRoutePrefix: false,
        ignorePattern: /.*(_).js/,
        //   options: Object.assign({}, opts),
    });
    return fastify;
}
//# sourceMappingURL=App.js.map