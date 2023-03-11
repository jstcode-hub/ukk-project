import express from 'express';
import { signin, signup } from '../controllers/users.js';

// konfigurasi
const router = express.Router();

// routing
router.post('/signin', signin);
router.post('/signup', signup);

export default router;
