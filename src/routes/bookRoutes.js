import express from 'express';
import BookController from "../controllers/bookController.js";

const router = express.Router();

router
   .get('/books', BookController.getBooks)
   .get('/books/search', BookController.getBooksByTitle)
   .get('/books/:id', BookController.getBookById)
   .post('/books', BookController.insertBook)
   .put('/books/:id', BookController.updateBook)
   .delete('/books/:id', BookController.deleteBook);

export default router;