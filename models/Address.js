const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema(
  {
    street: {
      type: String,
    },
    buildingNumber: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
        type: String,
      },
  },
  { timestamps: true }
);

module.exports = AddressSchema;
