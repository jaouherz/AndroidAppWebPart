import express from 'express';
import {     fetchAllInfractions,
    fetchStatsByLocation,
    fetchStatsByDate,
    fetchStatsByNumserie } from '../controllers/infractionController.js';

const router = express.Router();
router.get('/', fetchAllInfractions);
router.get('/stats/location', fetchStatsByLocation);
router.get('/stats/date', fetchStatsByDate);
router.get('/stats/numserie', fetchStatsByNumserie);

export default router;