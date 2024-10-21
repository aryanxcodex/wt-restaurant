import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',    
    password: 'your_password', 
    database: 'your_database'  
});

connection.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
});

export default connection;
