const express = require("express");
const app = express();
const todos = require("./routes/todo");
const connectDB = require("./db/connect");
require('dotenv').config()
// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/todo", todos);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(4000, (req, res) => {
      console.log("server initialized on port 4000");
    });
  } catch (error) {
    console.log(error)
  }
};

start()