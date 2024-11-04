import express from 'express';
import connection from '../db/connect.js'; 
import bcrypt from 'bcrypt'; 
const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10); 
        await connection.execute('INSERT INTO Users (username, password, email) VALUES (?, ?, ?)', [username, hashedPassword, email]);
        res.status(201).json({ message: 'User registered successfully'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await connection.query('SELECT * FROM Users WHERE email = ?', [email]);
        
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const user = rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        res.status(200).json({ message: 'Login successful', userId: user.user_id, username: user.username });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


export default router;