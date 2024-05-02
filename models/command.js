const mongoose = require("mongoose");

const commandSchema = new mongoose.Schema({
    reference: String,
    date: { type: Date, default: Date.now },
    cardNumber: String,
    cardHolder: String,
    expDate: Date,
    CVV: Number, 
    ship: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ship" 
    },
    receiver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    },
    delivered: Boolean
});

const Command = mongoose.model("Command", commandSchema);

module.exports = Command;
