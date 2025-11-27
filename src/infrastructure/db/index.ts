import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';
import * as schema from "../adapters/data/sqlite/schema";
import { join } from "path";

const dbPath = join(process.cwd(), "database.sqlite");

const sqlite = new Database(dbPath, { create: true });
export const db = drizzle(sqlite, { schema });
