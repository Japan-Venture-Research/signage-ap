import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";

export const getPing = (context: Context) => {
  context.response.type = "application/json";
  context.response.body = JSON.stringify({ data: "pong" });
};
