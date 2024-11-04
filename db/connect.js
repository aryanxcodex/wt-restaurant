import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

const connection = await mysql.createConnection({
    host: dbHost,
    user: dbUser,
    database: dbName,
    password: dbPass
  });

export default connection;
