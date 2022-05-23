import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import { getPing } from "./handlers/ping.ts";
import { getTags } from "./handlers/v1/tags.ts";

const router = new Router();
router.get("/ping", getPing).get("/v1/tags", getTags);

export const routes = router.routes();
