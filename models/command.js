const mongoose = require("mongoose");
const commandSchema = new mongoose.Schema({ reference: String, date: { type: Date, default: Date.now }, cardNumber: String, cardHolder: String, expDate: Date, CVV: int, });
const Command = mongoose.model("command", commandSchema);
module.exports = Command;