"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.db = void 0;
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient({ log: ["query", "info", "warn", "error"] });
exports.db = db;
db.$use(async (params, next) => {
    const before = Date.now();
    const result = await next(params);
    const after = Date.now();
    console.log(`Query ${params.model}.${params.action} took ${after - before}ms`);
    return result;
});
const { user: User } = db;
exports.User = User;
//# sourceMappingURL=Prisma.js.map