import { startServer } from './startServer';
import typeDefs from './modules/books/schema';
import resolvers from './modules/books/resolvers';

startServer({ typeDefs, resolvers });