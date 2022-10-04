
const mongoose = require("mongoose");

const dotenv = require('dotenv');


// Conneting to the database

const connection = async () => mongoose.connect(process.env.MONGO_URI,

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },

)


export default connection;