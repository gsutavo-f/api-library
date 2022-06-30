import mongoose from 'mongoose';

const publisherSchema = new mongoose.Schema(
   {
      id: {type: String},
      name: {type: String, required: true},
      country: {type: String}
   },
   {
      versionKey: false
   }
);

const Publisher = mongoose.model('publishers', publisherSchema);

export default Publisher;