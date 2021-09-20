import FastifyCompress from "fastify-compress";
import FastifyCors from "fastify-cors";
import FastifyHelmet from "fastify-helmet";
import { FastifyInstance } from "fastify";
import FastifyMiddie from "middie";
//@ts-ignore
import FastifyRoutes from "fastify-routes";
import FastifySensible from "fastify-sensible";
import Plugin from "fastify-plugin";
import multer from "fastify-multer"; // or import multer from 'fastify-multer'

async function Essentials(fastify: FastifyInstance) {
   fastify.log.info("PLUGIN - Essentials loaded.");
   // for security headers
   await fastify.register(FastifyHelmet);
   // for middleware support @useless
   // await fastify.register(FastifyMiddie);
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
      await fastify.register(FastifyRoutes);
   }

   /**
    * File Upload
    */
   const upload = multer({ dest: "uploads/" });
   fastify.decorate("upload", upload);
   await fastify.register(multer.contentParser);
}

export default Plugin(Essentials);
