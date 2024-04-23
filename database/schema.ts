import { pgTable, text, varchar, date } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
    id: varchar("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    password: text("password").notNull(),
    created_at: date("created_at").defaultNow(),
    updated_at: date("updated_at").defaultNow(),
  });

export const files = pgTable("files", {
    id: varchar("id").primaryKey(),
    fileName: text("name").notNull(),
    uploadedBy: text("uploadedBy").notNull().references(()=>users.id),
    password: text("password"),
    created_at: date("created_at").defaultNow(),
    updated_at: date("updated_at").defaultNow(),
})