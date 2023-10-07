import * as jsonServer from "json-server";
import { db } from "./db";

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const port = 3000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`🚀 JSON Server is running on http://localhost:${port}`);
});
