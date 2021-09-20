import { FastifyInstance } from "fastify";
import FastifySwagger from "fastify-swagger";
import Plugin from "fastify-plugin";

async function Swagger(fastify: FastifyInstance) {
   fastify.log.info("PLUGIN - Swagger loaded.");

   await fastify.register(FastifySwagger, {
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

export default Plugin(Swagger);
