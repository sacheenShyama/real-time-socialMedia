import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

const port = 5000;
//to serve images for public
app.use(express.static("public"));
app.use("/images", express.static("images"));

import AuthRoute from "./Routes/AuthRouth.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import UploadRoute from "./Routes/UploadRoute.js";
//Router

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();
mongoose
  .connect(
    process.env.MONGO_DB,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => app.listen(port, () => console.log(`Listening ${port}`)))
  .catch((error) => {
    console.log(error);
  });

//usage of route
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);
