const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bookingSchema = new mongoose.Schema(
  {
    bookingStatus: {
      type: String,
      default: "Not Processed",
      enum: ["Not Processed", "Processing", "Cancelled", "Completed"],
    },
    isParked: {
      type: String,
      default: "Parking",
      enum: ["Parking", "Completed"],
    },
    reserveSpace: {
      type: Number,
      default: 0,
    },
    entryTime: {
      type: String,
    },
    outingTime: {
      type: String,
    },
    amount: {
      type: Number,
    },
    userId: {
      type: ObjectId,
      ref: "User",
    },
    vehicelId: {
      type: ObjectId,
      ref: "Vehicle",
    },
    receivedBy: {
      type: ObjectId,
      ref: "Parking",
    },
  },
  { timestamps: true }
);

bookingSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

bookingSchema.set("toJSON", {
  virtuals: true,
});
module.exports = mongoose.model("Booking", bookingSchema);
