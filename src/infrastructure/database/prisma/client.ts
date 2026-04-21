import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../../../generated/prisma/client";

const connectionString = process.env.DATABASE_URL;

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

prisma.$extends({
  query: {
    $allModels: {
      async $allOperations({ args, model, operation, query }) {
        console.log(`Query: ${model}.${operation}`);
        return query(args);
      },
    },
  },
});

export { prisma };
