import { FastifyInstance } from "fastify";

export const autoPrefix = "/auth";

export default async (fastify: FastifyInstance) => {
   fastify.log.info("ROUTES - auth loaded.");

   fastify.get("/", (req, res) => {
      res.send("ok..");
   });
};
