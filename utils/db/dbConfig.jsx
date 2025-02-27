import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://neondb_owner:npg_Hnoeh0SXl9VB@ep-misty-breeze-a8ebrgbt-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
);
export const db = drizzle(sql, { schema });