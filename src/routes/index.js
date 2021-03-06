import express from "express";
import books from "../routes/bookRoutes.js";
import authors from "../routes/authorRoutes.js";
import publisher from "../routes/publisherRoutes.js";

function routes(app) {
   app.route('/').get((req, res) => {
      res.status(200).send(
         {
            title: "This is your server :)"
         }
      );
   });

   app.use(
      express.json(),
      books,
      authors,
      publisher
   );
}

export default routes;