import FastifyCompress from "fastify-compress";
import FastifyCors from "fastify-cors";
import { FastifyInstance } from "fastify";
import FastifyMiddie from "middie";
import FastifySensible from "fastify-sensible";
import Plugin from "fastify-plugin";

async function Essentials(fastify: FastifyInstance) {
   fastify.log.info("PLUGIN - Essentials loaded.");
   // for middleware support
   await fastify.register(FastifyMiddie);
   // for better error
   await fastify.register(FastifySensible);
   // for compress output
   await fastify.register(FastifyCompress, {
      global: true,
      encodings: ["deflate", "gzip", "br"],
   });

   // avoid on production
   if (fastify.inDev) {
      await fastify.register(FastifyCors);
   }
}

export default Plugin(Essentials);
