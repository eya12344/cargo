const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://eya:eya1234@cluster0.cjgynju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const conn = mongoose.connection;
conn.once('open', () => {
    console.log("connected");
})
conn.on('error', () => {
    console.log("error ");
})

module.exports = conn;