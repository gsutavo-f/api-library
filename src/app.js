import express from 'express';
import db from './config/dbConnection.js';
import books from './models/Book.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console,"Connection Error"));
db.once("open", () => {
   console.log("Connection Succeed")
});

const app = express();
app.use(express.json());
routes(app);

app.get('/books/:id', (req, res) => {
   const {id} = req.params;
   books.findById(id, (err, books) => {
      res.status(302).json(books);
   });
});

app.post('/books', (req, res) => {
   books.push(req.body);
   res.status(201).send('Values inserted!');
});

app.put('/books/:id', (req, res) => {
   const {id} = req.params;
   const {title} = req.body;
   const index = findBook(id);
   books[index].title = title;
   res.status(202).json(books);
});

app.delete('/books/:id', (req, res) => {
   const {id} = req.params;
   const index = findBook(id);
   books.splice(index, 1);
   res.status(200).send("Book removed!");
})

function findBook(id) {
   return books.findIndex(book => book.id === parseInt(id));
}

export default app;