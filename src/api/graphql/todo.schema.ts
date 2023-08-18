export const todoSchema = `
    type Todo {
      _id: ID!
      title: String!
    }

    input TodoInput {
      title: String!

    }

     type Query {
        todos: [Todo]!
    }

     type Mutation {
        createTodo(input: TodoInput!): Todo!
    }
`;
