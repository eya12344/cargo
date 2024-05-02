const mongoose = require("mongoose");
const shipSchema = new mongoose.Schema({
    reference: String,
    type: {
        type: String,
        enum: ["air", "sea"],
    },
    free: Boolean
});
const Ship = mongoose.model("user", shipSchema);
module.exports = Ship;
