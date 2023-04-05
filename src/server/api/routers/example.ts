import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({
  
  all: protectedProcedure.query(async({ctx}) => {

    const todos = await ctx.prisma.todo.findMany({
      where:{
        userId:ctx.session.user.id
      }
    })
    return [
      {
        id:'fake',
        text:'fake text',
        done:false
      },
      {
        id:'fake2',
        text:'fake text2',
        done:false
      }
    ];
  }),
});
