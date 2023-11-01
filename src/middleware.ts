import { defineMiddleware } from "astro:middleware";
import zlib from "zlib";

export const onRequest = defineMiddleware(async ({ request }, next) => {
  if (!request.headers.get("accept-encoding")?.includes("gzip")) {
    return next();
  }
  const response = await next();
  const buffer = await response.arrayBuffer();
  const gzipData = zlib.gzipSync(Buffer.from(buffer));

  response.headers.set("Content-Encoding", "gzip");
  return new Response(gzipData, response);
});
