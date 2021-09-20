"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster_1 = __importDefault(require("cluster"));
const CLUSTER_COUNT = 0; // os.cpus().length;
exports.default = (cb) => {
    if (CLUSTER_COUNT <= 0) {
        return cb();
    }
    if (cluster_1.default.isPrimary) {
        // Fork workers.
        for (let i = 0; i < CLUSTER_COUNT; i++) {
            cluster_1.default.fork();
        }
        cluster_1.default.on("exit", (worker, _code, _signal) => {
            console.log("worker " + worker.process.pid + " died");
            cluster_1.default.fork();
        });
    }
    else {
        return cb();
    }
};
//# sourceMappingURL=Cluster.js.map