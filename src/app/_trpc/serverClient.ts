import { httpBatchLink } from "@trpc/client";
import { appRouter } from "@/server";

export const serverClient = appRouter.createCaller({
   links: [
      httpBatchLink({
         url: `${process.env.SERVER_URL}/api/trpc`,
      })
   ]
})
