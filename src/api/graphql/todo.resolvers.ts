import { GraphQLResolveInfo } from "graphql";
import TodoServices from "../../services/todo.services";

export const todoResolvers = {
  Query: {
    todos: async () => {
      try {
        return await TodoServices.getTodo();
      } catch (error) {
        console.log(error);
      }
    },
  },

  Mutation: {
    createTodo: async (_: any, input: any) => {
      try {
        console.log("Input received:", input); // Log the input
        const createdTodo = await TodoServices.createTodo(input);
        return createdTodo; // Return the created todo
      } catch (error) {
        console.log(error);
        throw new Error("Error creating todo");
      }
    },
  },
};
