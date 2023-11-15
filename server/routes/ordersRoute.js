const express = require("express");
const cors = require("cors");

const orderModel = require("../models/orderModel");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51OBCUEHPEWRDpvGITfCrTH98VxbBEnZbVPDDit7kwSynd5WnSX3vgTJxNTHMN1KuES6nTfutS7fxWRIaLyuKyGbi00LrYfSeHr"
);
const { v4: uuid } = require("uuid");
const app = express();
app.use(cors());
router.post("/checkoutOrder", async (req, res) => {
  const { token, toplamfiyat, currentUser, cartItems } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.paymentIntents.create(
      {
        amount: toplamfiyat * 100,
        currency: "TRY",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuid(),
      }
    );
    if (payment) {
      const newOrder = new orderModel({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser._id,
        orderItems: cartItems,
        orderAmount: toplamfiyat,
        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          zipCode: token.card.address_zip,
        },
        transactionId: payment.source_id,
      });

      console.log(newOrder);

      newOrder.save();
      res.send("Ödeme başarılı.");
    } else {
      res.send("Bir şeyler ters gitti");
    }
  } catch (error) {
    res.status(400).json({ message: "Ödeme başarısız", error });
  }
});

router.post("/getOrdersByUser", async (req, res) => {
  const { userid } = req.body;
  console.log("User ID: ", userid);
  try {
    const orders = await orderModel.find({ userid: userid });
    res.send(orders);
    console.log(orders);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

//get all orders
router.get("/getAllOrders", async (req, res) => {
  const orders = await orderModel.find();
  res.json(orders);
});
module.exports = router;
