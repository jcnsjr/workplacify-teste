/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from "../trpc";
import { cloudinaryRouter } from "./cloudinary";
import { officeRouter } from "./office";
import { onboardingSelectionRouter } from "./onboardingSelection";
import { postRouter } from "./post";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => "yay!"),
  office: officeRouter,
  onboardingSelection: onboardingSelectionRouter,
  cloudinary: cloudinaryRouter,
  post: postRouter,
});

export type AppRouter = typeof appRouter;
