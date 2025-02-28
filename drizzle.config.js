export default {
    dialect: "postgresql",
    schema: "./src/utils/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
      url: "postgresql://neondb_owner:npg_Hnoeh0SXl9VB@ep-misty-breeze-a8ebrgbt-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
      connectionString:
        "postgresql://neondb_owner:npg_Hnoeh0SXl9VB@ep-misty-breeze-a8ebrgbt-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
    },
  };
  