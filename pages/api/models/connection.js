
const mongoose = require("mongoose");


const connection = async () => mongoose.connect("mongodb://localhost/knightDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
)

export default connection