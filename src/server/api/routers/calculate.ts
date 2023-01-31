import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { calculateDuration } from "../services/calculate.service";

export const calculateRouter = createTRPCRouter({
  calculate: publicProcedure
    .input(
      z.object({
        playlistId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { playlistId } = input;

      const response = await calculateDuration({
        playlistId,
      });

      return response;
    }),
});
