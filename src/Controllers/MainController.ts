import Controller from "@Bin/Controller";
import { RequestHandler } from "@Bin/Types";
import { db } from "@Bin/Prisma";

export default class MainController extends Controller {
   /**
    * Upload Single File Example
    */
   upload: RequestHandler = (req, res) => {
      console.log("file single", req.file, typeof req.file);
      console.log("body", req.body);
      res.send(`${req.url} home page.`);
   };
   /**
    * Upload Multiple Files Example
    */
   uploadMany: RequestHandler = (req, res) => {
      console.log("files", req.files, typeof req.files);
      console.log("body", req.body);
      res.send(`${req.url} home page.`);
   };

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
