import type { Config } from "drizzle-kit";
import { config } from "dotenv";
config({ path: ".env.local" });

export default {
	schema: "./src/**/*.schema.ts",
	driver: "pg",
	out: "./migrations",
	dbCredentials: {
		connectionString: process.env.DATABASE_URI!,
	},
} satisfies Config;
