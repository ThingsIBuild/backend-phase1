import app from "./app";
import { env } from "./config/env";
import { prisma } from "./infrastructure/database/prisma/client";

const PORT = env.PORT;

async function startServer() {
  try {
    await prisma.$connect();

    const isConnected: { db_name: string }[] = await prisma.$queryRaw`SELECT current_database() AS db_name;`;

    console.log(
      isConnected[0].db_name
        ? `Connected to database: ${isConnected[0].db_name}`
        : "Database connection established, but unable to retrieve database name.",
    );

    app.listen(PORT, () => {
      console.log(`
[BOOT]
Environment: ${env.NODE_ENV},
Database: ${isConnected[0].db_name || "Unknown"},,
PORT: ${PORT}
isConnected: ${isConnected[0].db_name ? "Yes" : "No"}
        `);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1); // Exit with failure code
  }
}

void startServer();
