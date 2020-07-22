import { handle } from '../utils/handlebars.ts';
import { Context } from 'https://deno.land/x/oak/mod.ts';

export const blog = async (context: Context) => {
    context.response.body = await handle.renderView('blog');
};