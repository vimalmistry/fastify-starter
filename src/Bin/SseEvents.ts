import { EventEmitter, Transform } from "stream";

const sseEvents = new EventEmitter();

class SSEStream extends Transform {
   constructor() {
      super({ writableObjectMode: true });
   }
   _transform(data: any, _encoding: any, done: () => void) {
      this.push(`data: ${JSON.stringify(data)}\n\n`);
      done();
   }
}

export { sseEvents, SSEStream };
