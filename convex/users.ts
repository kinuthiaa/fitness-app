import { mutation } from "./_generated/server";
import { v } from 'convex/values';


export const syncUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        clerkId: v.string(),
        image: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        
        const existUser = await ctx.db.query("users").filter((q) => q.eq(q.field("clerkId"), args.clerkId)).first();
        if(existUser) return;

        /* Insert the context(ctx) to the database along with the arguments */
        return await ctx.db.insert("users", args);

    }
})