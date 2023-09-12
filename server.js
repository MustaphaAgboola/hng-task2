const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./database/connect");
const router = require('./routes/routes')

dotenv.config();
const app = express();
connectDB();

// Parse JSON bodies
app.use(express.json());


app.use('/api', router )

let PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
