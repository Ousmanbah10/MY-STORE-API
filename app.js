require("dotenv").config();
// async errors

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const port = process.env.PORT || 3500;

// Middle ware
app.use(express.json());

// ROUTES
app.get("/", (req, res, next) => {
  res.send("HEY WHAT YOU DOING");
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const start = async (req, res, next) => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log("server has started"));
  } catch (error) {
    console.log(error);
  }
};

start();
