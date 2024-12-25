import { createYoga } from 'graphql-yoga';
import { schema } from './module/schema';
import type { Context } from 'egg';  

const yoga = createYoga<Context>({
    schema: schema as any,
});  

export const graphqlHandler = async (ctx: Context) => {
    const response = await yoga.handleNodeRequestAndResponse(ctx.req, ctx.res, ctx);  

    ctx.status = response.status;
    ctx.body = response.body;
};