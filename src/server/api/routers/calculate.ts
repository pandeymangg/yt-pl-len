import { google } from "googleapis";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { calculateDuration } from "../services/calculate.service";

export const calculateRouter = createTRPCRouter({
  calculate: publicProcedure
    .input(
      z.object({
        playlistId: z.string(),
        playbackSpeed: z.number().optional().default(1),
      })
    )
    .mutation(async ({ input }) => {
      const { playbackSpeed, playlistId } = input;

      const response = await calculateDuration({
        playlistId,
        playbackSpeed,
      });

      return response;
    }),
});
