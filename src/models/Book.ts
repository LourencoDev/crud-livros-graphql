import { model, Schema } from 'mongoose';
import { IBook } from '../interfaces/IBook';

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true
  },
});

export default model<IBook>('Book', BookSchema);