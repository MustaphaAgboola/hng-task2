const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./connect");
const { postController, getController, patchController, deleteController } = require('./controller/controller')

dotenv.config();
const app = express();
connectDB();

// Parse JSON bodies
app.use(express.json());

app.post("/api", postController );


app.get('/api/:id', getController);

app.patch('/api/:id', patchController );

app.delete("/api/:id", deleteController );


let PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
