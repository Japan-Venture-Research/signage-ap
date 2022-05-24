import { Context } from "https://deno.land/x/oak@v10.5.1/mod.ts";

import { summarize } from "../../lib/converter.ts";
import { data } from "../../lib/data.ts";

export const getTags = (context: Context) => {
  context.response.type = "application/json";
  context.response.body = JSON.stringify({ data: summarize(data) });
};
