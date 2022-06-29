import express from 'express';
import BookController from "../controllers/bookController.js";

const router = express.Router();

router
   .get('/books', BookController.getBooks)
   .get('/books/:id', BookController.getBookById)
   .post('/books', BookController.insertBook);

export default router;