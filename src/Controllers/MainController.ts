import Controller from "@Bin/Controller";
import { RequestHandler } from "@Bin/Types";
import { db } from "@Bin/Prisma";

export default class MainController extends Controller {
   /**
    * Sample Home Request
    */
   home: RequestHandler = (req, res) => {
      res.send(`${req.url} home page.`);
   };
   /**
    * Prisma Sample
    */
   prisma: RequestHandler = (_req, _res) => {
      return db.user.findMany();
   };
   /**
    * Hello
    */
   hello: RequestHandler = (_req, _res) => {
      return "Hello";
   };
}
