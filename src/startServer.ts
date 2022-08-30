import { ApolloServer } from 'apollo-server';
import { Database } from './database/database';

export const startServer = async ({ typeDefs, resolvers }: any) => {
  Database.connect();

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`Servidor rodando na ${url}`));
}