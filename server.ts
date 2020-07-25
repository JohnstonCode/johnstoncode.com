import { Application, Status, Context, send } from "./deps.ts";
import { router } from './routes/routes.ts';

const app = new Application();

function notFound(context: Context) {
  context.response.status = Status.NotFound;
  context.response.body = `<html><body><h1>404 - Not Found</h1><p>Path <code>${context.request.url}</code> not found.`;
}

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (context, next) => {
  try {
    await send(context, context.request.url.pathname, {
      root: `${Deno.cwd()}/public`
    });
  } catch (err) {
    await next();
  }
});

app.use(notFound);

app.addEventListener("listen", ({ hostname, port }) => {
  console.log(`Listening at: http://${hostname}:${port}`);
});

await app.listen({ hostname: "localhost", port: 3000 });
