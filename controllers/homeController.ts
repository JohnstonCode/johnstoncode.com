import { handle } from '../utils/handlebars.ts';
import { Context } from '../deps.ts';

export const home = async ({ response } : Context) => {
    response.body = await handle.renderView('home');
};
