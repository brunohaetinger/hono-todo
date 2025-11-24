import * as Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

import * as schema from "../adapters/data/sqlite/schema";

const sqlite = new Database('data/database.sqlite');

export const db = drizzle(sqlite, { schema });
