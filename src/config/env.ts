import  dotenv from "dotenv";
import path from "path";


const paths = `.env.${process.env.NODE_ENV ?? "development"}`


const envPath = path.resolve(process.cwd(), paths);


dotenv.config({ path: envPath });


interface Env {
    DATABASE_URL: string;
    JWT_SECRET: string;
    NODE_ENV:string
    PORT: string;
    REDIS_URL: string;
}   


export const env: Env = {
    DATABASE_URL: process.env.DB_URL ?? "mongodb://localhost:27017/mydatabase",
    JWT_SECRET: process.env.JWT_SECRET ?? "your_jwt_secret_key",
    NODE_ENV: process.env.NODE_ENV ?? "development",
    PORT: process.env.PORT ?? "3000",
    REDIS_URL: process.env.REDIS_URL ?? "redis://localhost:6379",
};

