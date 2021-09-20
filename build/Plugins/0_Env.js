"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_env_1 = __importDefault(require("fastify-env"));
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const fluent_json_schema_1 = __importDefault(require("fluent-json-schema"));
async function EnvLoader(fastify) {
    fastify.log.info("PLUGIN - Env loaded.");
    // load .env and validate
    await fastify.register(fastify_env_1.default, {
        dotenv: true,
        schema: fluent_json_schema_1.default.object()
            .prop("NODE_ENV", fluent_json_schema_1.default.string().required())
            .prop("DATABASE_URL", fluent_json_schema_1.default.string().required())
            .prop("ACCESS_TOKEN_SECRET", fluent_json_schema_1.default.string().required())
            .valueOf(),
    });
    // environment checker
    fastify.decorate("inDev", fastify.config.NODE_ENV == "develpment");
}
exports.default = (0, fastify_plugin_1.default)(EnvLoader);
//# sourceMappingURL=0_Env.js.map