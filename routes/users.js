import express from 'express';
import { fetchAllUsers , loginUser} from '../controllers/userController.js';

const router = express.Router();

router.get('/', fetchAllUsers);
router.post('/login', loginUser);
export default router;