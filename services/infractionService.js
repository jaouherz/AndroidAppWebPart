// services/usersService.js
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseConfig.js';
// Get all infractions
export async function getAllInfractions() {
    const infractionsCol = collection(db, 'infractions');
    const infractionsSnapshot = await getDocs(infractionsCol);
    const infractionsList = infractionsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return infractionsList;
}

//  Get infraction count by location
export async function getInfractionStatsByLocation() {
    const infractions = await getAllInfractions();
    const stats = {};

    infractions.forEach(infraction => {
        const location = infraction.location || 'Unknown';
        stats[location] = (stats[location] || 0) + 1;
    });

    return stats;
}
export async function getInfractionStatsByDate() {
    const infractions = await getAllInfractions();
    const stats = {};

    infractions.forEach(({ date }) => {
        if (date) {
            const dayOnly = date.split(' ')[0]; // e.g., "2025-05-18 18:09" → "2025-05-18"
            stats[dayOnly] = (stats[dayOnly] || 0) + 1;
        }
    });

    return stats;
}

// Stats by numserie
export async function getInfractionStatsByNumserie() {
    const infractions = await getAllInfractions();
    const stats = {};

    infractions.forEach(({ numserie }) => {
        if (numserie) {
            stats[numserie] = (stats[numserie] || 0) + 1;
        }
    });

    return stats;
}