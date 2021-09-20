import { PrismaClient } from "@prisma/client";

const db = new PrismaClient({ log: ["query", "info", "warn", "error"] });

db.$use(async (params: any, next: any) => {
   const before = Date.now();
   const result = await next(params);
   const after = Date.now();
   console.log(
      `Query ${params.model}.${params.action} took ${after - before}ms`,
   );
   return result;
});

const { user: User } = db;

export { db, User };
