import Book from '../models/Book.js';

class BookController {

   static getBooks(req, res) {
      Book.find((err, books) => {
         res.status(200).json(books);
      });
   }

   static getBookById(req, res) {
      const {id} = req.body;
      Book.findById(id, (err, books) => {
         res.status(302).json(books);
      })
   }

   static insertBook(req, res) {
      let book = new Book(req.body);
      book.save((err) => {
         if (err) {
            res.status(500).send(
               {
                  message: `${err.message} - fail to register book`
               }
            );
         } else {
            res.status(201).send(book.toJSON());
         }
      });
   }

}

export default BookController;