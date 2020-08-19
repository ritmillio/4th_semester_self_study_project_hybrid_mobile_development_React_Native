const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

//Middleware
app.use(cors());
app.use(express.json());

//MongoDB connection
mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0-jfeqw.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("mongoose.connect passed");
  })
  .catch((err) => console.log(`mongoose.connect error : ${err.message}`));

mongoose.connection.once("open", () => {
  console.log("Mongo DB connection established successfully");
});

const itemRouter = require("./routes/ItemRoute");

app.use("/items", itemRouter);

//Listener
process.setMaxListeners(0); // => 0 == no limit
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
