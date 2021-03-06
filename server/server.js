const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.URI;
mongoose.set("useUnifiedTopology", true);
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB database connection established successfully ");
});

// Middle ware
app.use(cors());
app.use(express.json());

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});