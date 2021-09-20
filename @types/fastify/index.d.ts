import fastify from 'fastify';

declare module 'fastify' {
  export interface FastifyInstance<
    HttpServer = Server,
    HttpRequest = IncomingMessage,
    HttpResponse = ServerResponse,
  > {
    config: Record<string,any>;
    inDev:boolean;
  }
}