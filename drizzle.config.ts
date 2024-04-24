import type { Config } from "drizzle-kit";
import { config } from "dotenv";

config();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export default {
  schema: "./database/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DB_URL!,
    ssl: true
  },
} satisfies Config;