import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

const connection = mysql.createConnection({
    host: dbHost,
    user: dbUser,    
    password: dbPass, 
    database: dbName,  
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
});

export default connection;
