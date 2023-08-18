import mercurius from "mercurius";
import { todoSchema } from "./graphql/todo.schema";
import { todoResolvers } from "./graphql/todo.resolvers";

export const graphqlStart = async (app: any) => {
  app.register(mercurius, {
    schema: [todoSchema],
    //   schema,
    resolvers: {
      Query: {
        ...todoResolvers.Query,
      },
      Mutation: {
        ...todoResolvers.Mutation,
      },
    },

    url: "/graphql",
  });
};
