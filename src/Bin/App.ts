import FastifyApp from "fastify";
import FastifyAutoload from "fastify-autoload";
import { db } from "./Prisma";
import { join } from "path";

// "build" path becouse we run directly compiled code everytime
const ROOT = join(process.env.PWD as string, "build");

export default async function runApp() {
   db.$connect();

   const app = await bootstrap();
   try {
      await app.listen(process.env.PORT || 3000);
      // console.log({ routes: fastify.route });
   } catch (err) {
      app.log.error(err);
      process.exit(1);
   }
}

async function bootstrap() {
   ///
   const fastify = FastifyApp({
      logger: { prettyPrint: true },
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
