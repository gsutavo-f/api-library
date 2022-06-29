import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://gsutavo:root@cluster0.2ftsl.mongodb.net/gsutavo");

export default mongoose.connection;