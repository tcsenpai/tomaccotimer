// bun run server.js  (PORT env optional, default 3000)
const port = Number(process.env.PORT) || 3000;
Bun.serve({
  port,
  fetch(req) {
    const path = new URL(req.url).pathname === "/" ? "/index.html" : new URL(req.url).pathname;
    const file = Bun.file("." + path);
    return file.exists().then(ok => ok ? new Response(file) : new Response("404", { status: 404 }));
  },
});
console.log(`Tomacco serving on http://localhost:${port}`);
