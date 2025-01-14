import express, { application } from "express";
import mongoose from "mongoose";
import Product from "./models/product.models.js";
import routerProduct from "./routes/product.route.js";
import healthRouter from "./routes/health.routes.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = 3000;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", routerProduct);
app.use("/api/health", healthRouter);

app.get("/", (req, res) => {
  res.send("Hari Om Bapu");
});

mongoose
  .connect(
    `${process.env.MONGODB_URI}`
    // 'mongodb+srv://16gsanket:sanket@cluster0.p2bcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log("database connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("not connected to databse");
  });
