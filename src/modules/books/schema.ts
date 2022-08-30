import { gql } from 'apollo-server';

const schema = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    getAll(title: String, author: String): [Book!]!
    getById(id: ID!): Book!
  }

  type Mutation {
    create(title: String, author: String): Book!
    updateById(id: ID!, title: String!, author: String!): Book!
    deleteById(id: ID!): String!
  }
`;

export default schema;