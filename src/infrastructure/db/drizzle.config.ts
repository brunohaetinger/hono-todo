import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: "sqlite",
  schema: "./src/infrastructure/adapters/data/sqlite/schema.ts",
  out: "./drizzle",
  driver: "durable-sqlite",
  dbCredentials: {
    url: "./data/database.sqlite",
  }
});
