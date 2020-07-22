import { Router } from 'https://deno.land/x/oak/mod.ts';
import { home } from "../controllers/homeController.ts";
import { blog } from "../controllers/blogController.ts";

export const router = new Router();

router
    .get("/", home)
    // .get("/blog", blog)
;
