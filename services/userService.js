// services/usersService.js
import { collection, query, where, getDocs  } from 'firebase/firestore';
import db from '../firebaseConfig.js';
import CryptoJS from 'crypto-js';

export async function getAllUsers() {
    const usersCol = collection(db, 'users');  // 'users' is your collection name
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return usersList;
}


function hashPassword(password) {
    return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
}

// Get user by username (for Firestore)
export async function getUserByUsername(username) {
    const usersCol = collection(db, 'users');
    const q = query(usersCol, where('username', '==', username));
    const snapshot = await getDocs(q);

    if (snapshot.empty) return null;

    const doc = snapshot.docs[0];
    return { id: doc.id, ...doc.data() };
}

// Verify login
export async function verifyLogin(username, password) {
    const user = await getUserByUsername(username);
    if (!user) return false;

    const hashedInputPassword = hashPassword(password);
    return user.password === hashedInputPassword;
}