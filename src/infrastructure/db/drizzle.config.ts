import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  dialect: 'sqlite',
  schema: './src/infrastructure/adapters/data/sqlite/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: './database.sqlite',
  },
});
