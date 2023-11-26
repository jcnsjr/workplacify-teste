/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from "../trpc";
import { cloudinaryRouter } from "./cloudinary";
import { floorRouter } from "./floor";
import { officeRouter } from "./office";
import { onboardingSelectionRouter } from "./onboardingSelection";
import { organizationRouter } from "./organization";
import { postRouter } from "./post";
import { scheduleRouter } from "./schedule";
import { userRouter } from "./user";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => "yay!"),
  office: officeRouter,
  onboardingSelection: onboardingSelectionRouter,
  cloudinary: cloudinaryRouter,
  floor: floorRouter,
  organization: organizationRouter,
  user: userRouter,
  schedule: scheduleRouter,
  post: postRouter,
});

export type AppRouter = typeof appRouter;
