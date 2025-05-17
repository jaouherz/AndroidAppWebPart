// services/usersService.js
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseConfig.js';

export async function getAllUsers() {
    const usersCol = collection(db, 'users');  // 'users' is your collection name
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return usersList;
}

// Get a user by username (if needed)
export const getUserByUsername = async (username) => {
    const usersRef = ref(db, 'users');
    const snapshot = await get(usersRef);
    if (!snapshot.exists()) return null;

    const users = snapshot.val();
    const user = Object.values(users).find(u => u.username === username);
    return user || null;
};