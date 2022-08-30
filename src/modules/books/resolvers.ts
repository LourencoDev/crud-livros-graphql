import Book from '../../models/Book';

const resolvers = {
  Query: {
    getAll: async (_: any, args: any) => {
      const { title, author } = args;
      const response = await Book.find({
        title: { $regex: new RegExp(title as string), $options: 'i' },
        author: { $regex: new RegExp(author as string), $options: 'i' }
      });
      return response;
    },
    getById: async (_: any, args: any) => {
      const { id: _id } = args;
      const response = await Book.findOne({ _id });
      return response;
    }
  },
  Mutation: {
    create: async (_: any, args: any) => {
      const { title, author } = args;
      const response = await Book.create({
        title,
        author,
      });
      return response;
    },
    updateById: async (_: any, args: any) => {
      const { id: _id, title, author } = args;
      await Book.updateOne({ _id }, {
        title,
        author,
      });
      const response = await Book.findOne({ _id });
      return response;
    },
    deleteById: async (_: any, args: any) => {
      const { id: _id } = args;
      const book = await Book.findOne({ _id });
      
      if (!book) {
        return 'Livro não encontrado!';
      }

      await Book.deleteOne({ _id });
      return 'Livro removido com sucesso!';
    }
  }
};

export default resolvers;