import express from 'express';

import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/complaints.js';

const router = express.Router();
import auth from '../middleware/auth.js';

router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/', auth, createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

export default router;
