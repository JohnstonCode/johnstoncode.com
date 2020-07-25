import { handle } from "../utils/handlebars.ts";
import { RouterContext } from "../deps.ts";

export const blog = async (context: RouterContext) => {
  context.response.body = await handle.renderView("blog");
};
