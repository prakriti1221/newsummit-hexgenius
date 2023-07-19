const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
    },
    package: {
      type: String,
      enum: ["Monthly", "Weekly"],
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);
subscriptionSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

subscriptionSchema.set("toJSON", {
  virtuals: true,
});
module.exports = mongoose.model("Subscription", subscriptionSchema);