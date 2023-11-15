import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const applications = pgTable("applications", {
	id: uuid("id").notNull().primaryKey(),
	name: varchar("name", { length: 256 }).notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
