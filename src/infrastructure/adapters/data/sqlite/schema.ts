import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const tasks = sqliteTable("tasks", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  // description: text("description"),
  completed: integer("completed", { mode: 'boolean' }),
  createdAt: integer("created_at").notNull(),
})
