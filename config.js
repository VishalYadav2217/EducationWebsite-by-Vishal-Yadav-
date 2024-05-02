const mongoose = require('mongoose');
require('dotenv').config();
// const connect = mongoose.connect("mongodb://localhost:27017/Login-tut");
// const connect = mongoose.connect("mongodb+srv://user:user@cluster0.tyzugcr.mongodb.net/Login-tut?retryWrites=true&w=majority&appName=Cluster0");
const connect = mongoose.connect(process.env.MONGO_URL);
// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const Loginschema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
      },
    password: {
        type: String,
        required: true
    }
});



// collection part
const collection = new mongoose.model("users", Loginschema);

module.exports = collection;