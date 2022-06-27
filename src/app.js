import express from 'express';

const app = express();
app.use(express.json());

const books = [
   {
      id: 1,
      "title": "Clockwork Orange"
   },
   {
      id: 2,
      "title": "The Simpsons and Their Mathematical Secrets"
   }
]

app.get('/', (req, res) => {
   res.status(200).send('This is your server :)');
});

app.get('/books', (req, res) => {
   res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
   const {id} = req.params;
   const index = findBook(id);
   res.status(302).json(books[index]);
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