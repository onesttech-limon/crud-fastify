import TodoModel from "../models/Todo";

const getTodo = async () => {
  try {
    return await TodoModel.find({});
  } catch (err) {
    return { status: true, message: "Something went wrong" };
  }
};

const createTodo = async (input: any) => {
  try {
    // console.log("Creating todo with title:", request.body.title);
    const createdTodo = await new TodoModel({ title: input.title }).save();
    return createdTodo;
  } catch (error) {
    console.log("Error creating todo:", error); // Log the entire error object
    throw new Error("Error creating todo: " + error);
  }
};

const TodoServices = {
  getTodo,
  createTodo,
};

export default TodoServices;
