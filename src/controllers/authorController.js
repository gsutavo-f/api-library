import Author from '../models/Author.js';

class AuthorController {

   static getAuthors(req, res) {
      Author.find((err, authors) => {
         res.status(200).json(authors);
      });
   }

   static getAuthorById(req, res) {
      const {id} = req.params;
      Author.findById(id, (err, author) => {
         if (err) {
            res.status(400).send(
               {
                  message: `${err.message} - id not found!`
               }
            );
         } else {
            res.status(200).send(author.toJSON());
         }
      });
   }

   static insertAuthor(req, res) {
      let author = new Author(req.body);
      author.save((err) => {
         if (err) {
            res.status(500).send(
               {
                  message: `${err.message} - fail to register Author`
               }
            );
         } else {
            res.status(201).send(author.toJSON());
         }
      });
   }

   static updateAuthor(req, res) {
      const {id} = req.params;
      Author.findByIdAndUpdate(id, {$set: req.body}, (err) => {
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

   static deleteAuthor(req, res) {
      const {id} = req.params;
      Author.findByIdAndDelete(id, (err) => {
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

export default AuthorController;