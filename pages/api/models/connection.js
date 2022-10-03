
const mongoose = require("mongoose");

const dotenv = require('dotenv');

console.log(process.env.MONGO_URI)

const connection = async () => mongoose.connect(process.env.MONGO_URI,)


/*

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },


*/

export default connection