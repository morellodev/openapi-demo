import { uuid } from "@app/core/random";
import * as jsonServer from "json-server";
import { db } from "./db";

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const port = 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use((req, res, next) => {
  const requestTime = new Date().toISOString();

  if (req.method === "POST") {
    req.body.id = uuid();
    req.body.createdAt = requestTime;
  }

  next();
});

server.use(router);
server.listen(port, () => {
  console.log(`🚀 JSON Server is running on http://localhost:${port}`);
});
