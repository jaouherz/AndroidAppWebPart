import { getAllUsers } from '../services/userService.js';

export async function fetchAllUsers(req, res) {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}