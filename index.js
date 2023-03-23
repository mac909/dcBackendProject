const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const homeRoutes = require("./routes/home-routes");
const winston = require("winston");
const app = express();

app.use(expressLayouts);
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoutes.routes);

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
