// db/index.js
require('dotenv/config');
const { drizzle } = require('drizzle-orm/node-postgres');
const { Pool } = require('pg');

// Create a connection pool for PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Determine if we're in development mode
const isDev = process.env.NODE_ENV !== 'production';

// Attempt connection and log status
pool
  .connect()
  .then(client => {
    if (isDev) console.log('✅ Database connected successfully');
    client.release();
  })
  .catch(err => {
    console.error('❌ Failed to connect to the database:', err.message);
  });

// Initialize Drizzle ORM instance
const db = drizzle(pool);

module.exports = db;
