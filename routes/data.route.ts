import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import DataServices from "../services/data.services";

const dataRoutes = async (fastify: FastifyInstance) => {
  fastify.get(
    "/getdata",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const data = await DataServices.getData();
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  fastify.post(
    "/createdata",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        const data = await DataServices.createData(request, reply);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  );
};

export default dataRoutes;
