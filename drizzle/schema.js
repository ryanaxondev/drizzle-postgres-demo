// drizzle/schema.js
const { pgTable, serial, varchar } = require('drizzle-orm/pg-core');

/**
 * Define the "users" table schema
 */
const userTable = pgTable('users', {
  id: serial().primaryKey(), // Auto-incrementing primary key
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

module.exports = { userTable };
