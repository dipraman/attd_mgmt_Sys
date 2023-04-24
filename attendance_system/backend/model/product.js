var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// productSchema = new Schema( {
// 	name: String,
// 	desc: String,
// 	price: String,
// 	image: String,
// 	discount: String,
// 	user_id: Schema.ObjectId,
// 	is_delete: { type: Boolean, default: false },
// 	date : { type : Date, default: Date.now }
// }),
(productSchema = new Schema({
  name: {
    type: String,
  },
  desc: {
    type: String,
  },
  price: {
    type: String,
  },
  discount: {
    type: String,
  },
})),
  (product = mongoose.model("product", productSchema));

module.exports = product;
