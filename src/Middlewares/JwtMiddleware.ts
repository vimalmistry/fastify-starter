import { FastifyInstance } from "fastify";
import { RequestHandler } from "@Bin/Types";

export default (fastify: FastifyInstance): RequestHandler => {
   fastify.log.info("MIDDLEWARE - Jwt middleware loaded.");
   return async (req, res) => {
      try {
         req.payload = await fastify.jwtService.parseAndVerify(
            req.headers["authorization"] as string,
         );
         console.log("jwt payload..", req.payload);
         return;
      } catch (e) {
         return res.unauthorized();
         throw new Error("Abort");
      }
   };
};
