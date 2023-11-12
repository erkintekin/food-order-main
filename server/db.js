const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://admin:1234@cluster1.wa9mzxk.mongodb.net/food-order?retryWrites=true&w=majority"
);

// mongoose.connect(
//   "mongodb+srv://admin:1234@foodordercluster.q2b9vvc.mongodb.net/food-order?retryWrites=true&w=majority",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 20000, // Örnek olarak 5 saniye olarak belirtildi, siz değeri artırabilirsiniz
//     socketTimeoutMS: 45000, // Örnek olarak 45 saniye olarak belirtildi, siz değeri artırabilirsiniz
//   }
// );

//connection'on açık veya kapalı iki farklı opsiyon verdiğimiz haliyle veritabanını dinleyen metot.
var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongo DB Bağlantısı Başarılı.");
});

db.on("error", () => {
  console.log("Mongo DB Bağlantı Hatası.");
});

module.exports = mongoose;
