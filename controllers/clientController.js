const Client = require("../models/Client");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const createClient = async (req, res) => {
  const client = await Client.create(req.body);
  res.status(StatusCodes.CREATED).json({ client });
};

const getClients = async (req, res) => {
  const clients = await Client.find({});
  res.status(StatusCodes.OK).json({ clients, count: clients.length });
};

const getClient = async (req, res) => {
  const { id: clientId } = req.params;
  const client = await Client.findOne({ _id: clientId });
  if (!client) {
    throw new CustomError.NotFoundError(`No client with id : ${clientId}`);
  }
  res.status(StatusCodes.OK).json({ client });
};

const updateClient = async (req, res) => {
  const { id: clientId } = req.params;

  const client = await Client.findOne({ _id: clientId });
  if (!client) {
    throw new CustomError.NotFoundError(`No client with id : ${clientId}`);
  }
  const updatedClient = await Client.findOneAndUpdate({_id: clientId}, req.body, { new: true, runValidators: true });
  res.status(StatusCodes.OK).json({ updatedClient });
};

module.exports = { createClient, getClients, getClient, updateClient };
