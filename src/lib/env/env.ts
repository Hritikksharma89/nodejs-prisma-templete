import * as dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config({
  path: '.env',
});

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string(),
  DATABASE_URL: z.string().url('Invalid database URL'),
  BASE_URL: z.string().url('Invalid base URL'),
});
export const env = envSchema.parse(process.env) as z.infer<typeof envSchema>;
