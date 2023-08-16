import fastify from "fastify";
import connectDB from "./config/db";
import dataRoutes from "./routes/data.route";

const app = fastify({
  logger: false,
});

app.get("/", async (request, reply) => {
  return "Hello there! 👋";
});

app.get("/data", async (request, reply) => {
  return "Data";
});
app.register(dataRoutes);
app.listen(8080, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  connectDB(
    "mongodb+srv://onestdev104:onestdev104@cluster0.cien8a4.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log(`Started server at ${address}`);
});
