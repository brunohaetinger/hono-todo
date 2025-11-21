import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: "./src/infrastructure/adapters/data/sqlite/schema.ts",
  out: "./drizzle",
  driver: "better-sqlite3",
  dbCredentials: {
    url: "./data/database.sqlite",
  }
});
