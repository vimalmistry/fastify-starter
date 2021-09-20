import FastifyApp, { fastify } from "fastify";

import FastifyAutoload from "fastify-autoload";
import { db } from "./Prisma";
import { join } from "path";

// "build" path becouse we run directly compiled code everytime
const ROOT = join(process.env.PWD as string, "build");
const PORT = process.env.PORT || 3000;

export default async function runApp() {
   db.$connect();
   const app = await bootstrap();
   try {
      await app.listen(PORT);
      if (app.inDev) {
         //@ts-ignore
         console.log(app.routes);
      } else {
         console.log(`Server listening at http://127.0.0.1:${PORT}`);
      }
   } catch (err) {
      app.log.error(err);
      process.exit(1);
   }
}

async function bootstrap() {
   ///
   const fastify = FastifyApp({
      logger:
         process.env.NODE_ENV == "development" ? { prettyPrint: true } : false,
   });
   await fastify.register(FastifyAutoload, {
      dir: join(ROOT, "/Plugins"),
      ignorePattern: /.*(_).js/,
      //   options: Object.assign({}, opts),
   });
   // Then, we'll load all of our routes.
   await fastify.register(FastifyAutoload, {
      dir: join(ROOT, "/Routes"),
      dirNameRoutePrefix: false,
      ignorePattern: /.*(_).js/,
      //   options: Object.assign({}, opts),
   });

   return fastify;
}
