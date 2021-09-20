import FastifyEnv from "fastify-env";
import { FastifyInstance } from "fastify";
import Plugin from "fastify-plugin";
import S from "fluent-json-schema";

async function EnvLoader(fastify: FastifyInstance) {
   fastify.log.info("PLUGIN - Env loaded.");
   // load .env and validate
   await fastify.register(FastifyEnv, {
      dotenv: true,
      schema: S.object()
         .prop("NODE_ENV", S.string().required())
         .prop("DATABASE_URL", S.string().required())
         .prop("ACCESS_TOKEN_SECRET", S.string().required())
         .valueOf(),
   });
   // environment checker
   fastify.decorate("inDev", fastify.config.NODE_ENV == "develpment");
}

export default Plugin(EnvLoader);
