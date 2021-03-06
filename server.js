const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
var timeout = require("connect-timeout");

const app = express();

const PORT = process.env.PORT || 3000;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(timeout(15000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use('/', routes);
app.listen(process.env.PORT || 3000, function() {
  console.log("App now listening at localhost:" + PORT);
});