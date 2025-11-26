import { Database } from 'bun:sqlite';
import { drizzle } from 'drizzle-orm/bun-sqlite';

import * as schema from "../adapters/data/sqlite/schema";

const sqlite = new Database('data/database.sqlite', { create: true });

export const db = drizzle(sqlite, { schema });
