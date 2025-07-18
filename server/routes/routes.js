import express from 'express';
import { uploadImage } from '../controllers/img-controller.js';
import upload from '../utils/upload.js';
import { getImage } from '../controllers/img-controller.js';

const router = express.Router();

router.post('/upload',upload.single('file'),uploadImage);
router.get('/file/:fileid',getImage);

export default router;

