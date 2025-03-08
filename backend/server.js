const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoConnection = require("./connection/dbConnection");
const userRoute= require("./routers/userRoutes")
const app = express();

var corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users/",userRoute)

app.get("/", (req, res) => {
  res.json({ message: "Welcome Jaisika" });
});

mongoConnection();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});