require("dotenv").config();
const express = require("express");
const session = require("express-session");
const checkForSession = require("./middlewares/checkForSession");
const swagController = require("./controllers/swagController");

const app = express();

let { SERVER_PORT, SESSION_SECRET } = process.env;

// Middleware
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(checkForSession);

// Endpoints
app.get("/api/swag", swagController.read);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});
