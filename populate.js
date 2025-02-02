require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");
const jsonProduct = require("./products.json");

const start = async (req, res) => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProduct);

    console.log("SUCCESS");
    process.exit(0);
  } catch (error) {
    console.log(error, "There was an Error");
    process.exit(1);
  }
};

start();
