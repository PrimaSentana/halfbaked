import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod'

const reviewSchema = z.object({
  title: z.string(),
  creator: z.string(),
  year: z.number(),
  rating: z.number().min(1).max(10),
  tags: z.array(z.string()).default([]),
  date: z.date(),
  excerpt: z.string(),
  cover: z.string().optional()
});

const movies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/movies' }),
  schema: reviewSchema,
});

const music = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/music' }),
  schema: reviewSchema,
});

export const collections = { movies, music };
