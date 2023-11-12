const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    name: { type: String, require },
    mail: { type: String, require },
    password: { type: String, require },
    orderItems: [],
    shippingAddress: { type: Object },
    orderAmount: { type: Number, require },
    isDelivered: { type: Boolean, default: false },
    transactionId: { type: String, require },
  },
  { timestamps: true }
);
const orderModel = mongoose.model("orders", orderSchema);
module.exports = orderModel;
