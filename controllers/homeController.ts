import { handle } from '../utils/handlebars.ts';
import { Context } from 'https://deno.land/x/oak/mod.ts';

export const home = async ({ response } : Context) => {
    response.body = await handle.renderView('home');
};
