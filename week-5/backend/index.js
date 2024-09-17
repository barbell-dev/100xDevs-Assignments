// import { z } from "zod";
const { z } = require("zod");
const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/user");
const cors = require("cors");
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
// app.use(router);
app.get("/");
app.post("/login", router.post("/login"));
app.post("/signup", router.post("/signup"));
//  start writing your routes here

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
