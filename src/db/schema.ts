import { serial, text, pgTable } from "drizzle-orm/pg-core";
import { drizzle } from 'drizzle-orm/postgres-js'
import { eq } from "drizzle-orm";
import postgres from "postgres";

export const users = pgTable('users', {
   id: serial('id').primaryKey(),
   username: text('username').notNull(),
   email: text('email').notNull(),
   password: text('password'),
   last_login: text('last_login'),
   updated_at: text('updated_at'),
})
const connectionString = process.env.DATABASE_URL

const client = postgres(connectionString!)
export const db = drizzle(client);

export const getUserByEmail = async (email: string) =>
    await db.select().from(users).where(eq(users.email, email));
