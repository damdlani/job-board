import { createServer } from "node:http";
import { healthBody } from "./health.js";

const PORT = Number(process.env.PORT ?? 4000);

const server = createServer((request, response) => {
  if (request.method === "GET" && request.url === "/health") {
    response.writeHead(200, { "content-type": "application/json" });
    response.end(JSON.stringify(healthBody));
    return;
  }

  response.writeHead(404, { "content-type": "application/json" });
  response.end(JSON.stringify({ error: "Not found" }));
});

server.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
