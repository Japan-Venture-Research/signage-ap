import { Application } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import logger from "https://deno.land/x/oak_logger@1.0.0/mod.ts";

import { routes } from "./routes.ts";
import { notFound } from "./handlers/notFound.ts";

const app = new Application();

app.use(logger.logger);
app.use(logger.responseTime);

app.use(routes);
app.use(notFound);

await app.listen({ port: 8080 });
