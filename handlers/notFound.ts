import { Context, Status } from "https://deno.land/x/oak@v10.5.1/mod.ts";

export function notFound(context: Context) {
  context.response.status = Status.NotFound;
  context.response.type = "application/json";
  context.response.body = JSON.stringify({ error: true, message: "not found" });
}
