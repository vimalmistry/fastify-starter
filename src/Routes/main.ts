import { FastifyInstance } from "fastify";
import MainController from "@Controllers/MainController";

export default async (app: FastifyInstance) => {
   const controller = new MainController();
   app.get("/", controller.home);
   app.get("/prisma", controller.prisma);
   app.get("/hello", controller.hello);
};
