const mongoose = require("mongoose");



const mongo = process.env.MONGODB_URI
console.log(mongo);

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongDB connect successfully: ${connect.connection.host}`);
    
  } catch(error) {
    console.log(`Unable to connect ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB
