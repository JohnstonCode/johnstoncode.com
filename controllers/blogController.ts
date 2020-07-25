import { handle } from "../utils/handlebars.ts";
import { Context } from "../deps.ts";

export const blog = async (context: Context) => {
  context.response.body = await handle.renderView("blog");
};
