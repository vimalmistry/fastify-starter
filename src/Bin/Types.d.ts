import { FastifyReply, FastifyRequest } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";

import { RouteGenericInterface } from "fastify/types/route";

export type Middleware = (
   req: IncomingMessage,
   res: ServerResponse,
   next: () => void,
) => void;

export type RequestHandler = (
   req: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>,
   res: FastifyReply<
      Server,
      IncomingMessage,
      ServerResponse,
      RouteGenericInterface,
      unknown
   >,
) => void;

export type RequestHandler = (
   req: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>,
   res: FastifyReply<
      Server,
      IncomingMessage,
      ServerResponse,
      RouteGenericInterface,
      unknown
   >,
   next:()=>void
) => void;

