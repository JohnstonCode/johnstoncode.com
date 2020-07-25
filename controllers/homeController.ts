import { handle } from "../utils/handlebars.ts";
import { RouterContext } from "../deps.ts";

export const home = async ({ response }: RouterContext) => {
  response.body = await handle.renderView("home");
};
