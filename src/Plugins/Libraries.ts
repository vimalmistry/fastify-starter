import { FastifyInstance } from "fastify";
import JwtService from "@Services/JwtService";
import Plugin from "fastify-plugin";

async function Libraries(fastify: FastifyInstance) {
   fastify.log.info("PLUGIN - Init loaded.");

   // Jwt dependancy add
   fastify.decorate("jwtService", new JwtService());
}

export default Plugin(Libraries);
