import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAcpVtcMDQhgwI3nOLTawKzVcMLGpHH4",
    authDomain: "mobileproj-11791.firebaseapp.com",
    projectId: "mobileproj-11791",
    storageBucket: "mobileproj-11791.firebasestorage.app",
    messagingSenderId: "733542148981",
    appId: "1:733542148981:web:a39b340f900fd4e4cd813c",
    measurementId: "G-SEVBEDXY3H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;  // <--- default export