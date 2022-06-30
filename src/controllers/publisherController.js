import Publisher from '../models/Publisher.js';

class PublisherController {

   static getPublishers(req, res) {
      Publisher.find((err, publishers) => {
         res.status(200).json(publishers);
      });
   }

   static getPublisherById(req, res) {
      const {id} = req.params;
      Publisher.findById(id, (err, publisher) => {
         if (err) {
            res.status(400).send(
               {
                  message: `${err.message} - id not found!`
               }
            );
         } else {
            res.status(200).send(publisher.toJSON());
         }
      });
   }

   static insertPublisher(req, res) {
      let publisher = new Publisher(req.body);
      publisher.save((err) => {
         if (err) {
            res.status(500).send(
               {
                  message: `${err.message} - fail to register Publisher`
               }
            );
         } else {
            res.status(201).send(publisher.toJSON());
         }
      });
   }

   static updatePublisher(req, res) {
      const {id} = req.params;
      Publisher.findByIdAndUpdate(id, {$set: req.body}, (err) => {
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

   static deletePublisher(req, res) {
      const {id} = req.params;
      Publisher.findByIdAndDelete(id, (err) => {
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

export default PublisherController;