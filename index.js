// index.js
require('dotenv/config');
const db = require('./db');
const { userTable } = require('./drizzle/schema');

/**
 * Fetch all users from the database
 */
async function getAllUsers() {
  const users = await db.select().from(userTable);
  console.log('👥 Users in DB:', users);
  return users;
}

/**
 * Insert a new user into the database
 * @param {Object} user - User data
 * @param {string} user.name - User name
 * @param {string} user.email - User email address
 */
async function createUser({ name, email }) {
  try {
    await db.insert(userTable).values({ name, email });
    console.log(`✅ User "${name}" added successfully.`);
  } catch (error) {
    if (error.code === '23505') {
      console.warn(`⚠️ Email "${email}" already exists, skipping.`);
    } else {
      console.error('❌ Failed to insert user:', error.message);
    }
  }
}

/**
 * Main function to run database operations
 */
async function main() {
  try {
    await createUser({ name: 'Ryan', email: 'ryancarter@example.com' });
    await createUser({ name: 'Dylan', email: 'dylanwhite@example.com' });

    await getAllUsers();
  } catch (error) {
    console.error('❌ Error while running main function:', error);
  }
}

// Run the main function
main();
