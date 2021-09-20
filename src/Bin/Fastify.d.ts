import JwtService from '@Services/JwtService';
import fastify from 'fastify';

declare module 'fastify' {
  export interface FastifyInstance<
    HttpServer = Server,
    HttpRequest = IncomingMessage,
    HttpResponse = ServerResponse,
  > {
    config: Record<string,any>;
    inDev:boolean;
    jwtService: JwtService;
    route: Map
  }

   export interface FastifyRequest<
      HttpServer = Server,
      HttpRequest = IncomingMessage,
  > {
    payload: Record<string,any> | null |undefined;
  }

}