const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    twoWheeler: {
      type: Number,
    },
    fourWheeler: {
      type: Number,
    },
    lattitude: {
      type: Number,
    },
    longitude: {
        type: Number,
    },
    twoWheelerBookedSpace: {
      type: Number,
    },
    fourWheelerBookedSpace: {
      type: Number,
    },
    twoWheelerRate: {
      type: Number,
    },
    fourWheelerRate: {
      type: Number,
    },
  },
  { timestamps: true }
);
parkingSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

parkingSchema.set("toJSON", {
  virtuals: true,
});
module.exports = mongoose.model("Parking", parkingSchema);