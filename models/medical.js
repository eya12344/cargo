const mongoose = require("mongoose"); const medicalSchema = new mongoose.Schema({ name: String, price: double, });

const Medical = mongoose.model("medical", medicalSchema); module.exports = Medical;