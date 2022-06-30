import express from 'express';
import BookController from "../controllers/bookController.js";

const router = express.Router();

router
   .get('/books', BookController.getBooks)
   .get('/books/:id', BookController.getBookById)
   .post('/books', BookController.insertBook)
   .put('/books/:id', BookController.updateBook);

export default router;