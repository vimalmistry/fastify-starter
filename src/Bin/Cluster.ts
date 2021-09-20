import cluster from "cluster";
import os from "os";

const CLUSTER_COUNT = 0; // os.cpus().length;

export default (cb: () => void) => {
   if (CLUSTER_COUNT <= 0) {
      return cb();
   }

   if (cluster.isPrimary) {
      // Fork workers.
      for (let i = 0; i < CLUSTER_COUNT; i++) {
         cluster.fork();
      }
      cluster.on("exit", (worker, _code, _signal) => {
         console.log("worker " + worker.process.pid + " died");
         cluster.fork();
      });
   } else {
      return cb();
   }
};
