import { SSEStream, sseEvents } from "@Bin/SseEvents";

import { FastifyInstance } from "fastify";
import Plugin from "fastify-plugin";

// import EventEmitter from "events";
// const events = new EventEmitter();
const events = sseEvents;
// events.setMaxListeners(0);

const sampleData = {
   id: "ok",
   title: "Title Check",
   timestamp: Date.now(),
};

setTimeout(() => events.emit("data", sampleData), 5000);

export const autoload = false;

async function Libraries(fastify: FastifyInstance) {
   fastify.log.info("PLUGIN - Sse loaded.");

   fastify.get("/sse", async (req, res) => {
      req.socket.setTimeout(0);
      req.socket.setNoDelay(true);
      req.socket.setKeepAlive(true);

      res.headers({
         "Content-Type": "text/event-stream",
         "Cache-Control": "no-cache",
         Connection: "keep-alive",
      });

      const stream = new SSEStream();
      res.statusCode = 200;
      res.send(stream);

      const listener = (data: any) => {
         stream.write(data);
      };

      events.on("data", listener);

      stream.on("close", () => {
         events.off("data", listener);
      });
   });
}

export default Plugin(Libraries);
