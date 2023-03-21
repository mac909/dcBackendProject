const express = require("express");
const bodyParser = require("body-parser");

const {
	indexView,
	iconView,
	aboutView,
	entreeView,
	ordernowView,
	loginView,
	signUpView,
	productView,
} = require("../controllers/homeController");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/home", indexView);
router.get("/icon", iconView);
router.get("/about", aboutView);
router.get("/entrees", entreeView);
router.get("/ordernow", ordernowView);
router.get("/product/:id", productView);

router.get("/", loginView);
router.get("/signup", signUpView);

module.exports = {
	routes: router,
};
