import { FastifyInstance } from "fastify";
import JwtMiddleware from "@Middlewares/JwtMiddleware";
import MainController from "@Controllers/MainController";

export default async (fastify: FastifyInstance) => {
   fastify.log.info("ROUTES - main loaded.");

   ///- Middleware
   // fastify.addHook("preValidation", JwtMiddleware(fastify));

   const controller = new MainController(fastify);

   fastify.get("/", controller.home);
   fastify.get("/prisma", controller.prisma);
   fastify.get("/hello", controller.hello);

   fastify.post(
      "/upload",
      { preHandler: fastify.upload.single("file") },
      controller.upload,
   );

   fastify.post(
      "/upload-many",
      { preHandler: fastify.upload.array("file", 12) },
      controller.uploadMany,
   );
};
