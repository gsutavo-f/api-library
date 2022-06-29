import books from '../models/Book.js';

class BookController {

   static getBooks(req, res) {
      books.find((err, books) => {
         res.status(200).json(books);
      });
   }

   static getBookById(id, req, res) {
      books.findById(id, (err, books) => {
         res.status(302).json(books);
      })
   }

}

export default BookController;