import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// collection definitions
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./blog" }),
  schema: z.object({
    title: z.string(),
    layout: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    draft: z.boolean(),
    categories: z.array(z.string()),
    tags: z.array(z.string())
  })
});

export const collections = { blog };
