import express, { request, response } from "express";
import mongoose from "mongoose";
//import { Book } from "./models/bookmodel.js";
import routes from "./routes/routes.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const mongoDBURL = process.env.MONGODB_URI;
const PORT = process.env.PORT;

const app = express();

//middleware for parsing request body
app.use(express.json());

// middleware for handling corse policy
// option 1 : allow all origin with default cors(*)
app.use(cors());
//option 2 custom origin
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content - Type"],
//   })
// );
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to the tutorial");
});
app.use("/books", routes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log("app is listing to port" + PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
