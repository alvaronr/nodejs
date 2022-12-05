const mongoose = require("mongoose");
const AddressSchema = require("./Address");

const ClientSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
        type: AddressSchema,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", ClientSchema);
