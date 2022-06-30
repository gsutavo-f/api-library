import Book from '../models/Book.js';

class BookController {

   static getBooks(req, res) {
      Book.find((err, books) => {
         res.status(200).json(books);
      });
   }

   static getBookById(req, res) {
      const {id} = req.params;
      Book.findById(id, (err, book) => {
         if (err) {
            res.status(400).send(
               {
                  message: `${err.message} - id not found!`
               }
            );
         } else {
            res.status(200).send(book.toJSON());
         }
      });
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

   static updateBook(req, res) {
      const {id} = req.params;
      Book.findByIdAndUpdate(id, {$set: req.body}, (err) => {
         if (!err) {
            res.status(200).send(
               {
                  message: 'Value updated!'
               }
            );
         } else {
            res.status(500).send(
               {
                  message: err.message
               }
            );
         }
      });
   }

   static deleteBook(req, res) {
      const {id} = req.params;
      Book.findByIdAndDelete(id, (err) => {
         if (!err) {
            res.status(200).send(
               {
                  message: 'Value deleted!'
               }
            );
         } else {
            res.status(400).send(
               {
                  message: err.message
               }
            );
         }
      });
   }

}

export default BookController;