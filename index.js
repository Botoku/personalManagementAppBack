const express = require("express");
const app = express();
const todos = require("./routes/todo");
const tobuy = require("./routes/tobuy");
const meals = require("./routes/meal");
const ideas = require("./routes/idea");
const expenses = require("./routes/expenses");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();
// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/todo", todos);
app.use("/api/v1/tobuy", tobuy);
app.use("/api/v1/meals", meals);
app.use("/api/v1/ideas", ideas);
app.use("/api/v1/expenses", expenses);
// NOT FOUND ROUTES
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(4000, (req, res) => {
      console.log("server initialized on port 4000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
