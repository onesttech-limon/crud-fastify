import DataModel from "../models/Data";

const getData = async () => {
  try {
    return await DataModel.find({});
  } catch (err) {
    return { status: true, message: "Something went wrong" };
  }
};

const createData = async (request: { body: any }, reply: any) => {
  try {
    return new DataModel(request.body).save().then((data) => data);
  } catch (error) {
    return { status: true, message: "Something went wrong" };
  }
};

const DataServices = {
  getData,
  createData,
};

export default DataServices;
