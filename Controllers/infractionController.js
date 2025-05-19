import { getAllInfractions,
    getInfractionStatsByLocation,
    getInfractionStatsByDate,
    getInfractionStatsByNumserie } from '../services/infractionService.js';

export async function fetchAllInfractions(req, res) {
    try {
        const data = await getAllInfractions();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function fetchStatsByLocation(req, res) {
    try {
        const stats = await getInfractionStatsByLocation();
        res.status(200).json(stats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function fetchStatsByDate(req, res) {
    try {
        const stats = await getInfractionStatsByDate();
        res.status(200).json(stats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export async function fetchStatsByNumserie(req, res) {
    try {
        const stats = await getInfractionStatsByNumserie();
        res.status(200).json(stats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
