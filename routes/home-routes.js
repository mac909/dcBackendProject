const express = require("express");
const bodyParser = require("body-parser");

const {
	indexView,
	iconView,
	aboutView,
	loginView,
	signUpView,
	productView,
	menuView,
	cartView,
	addToCartView
} = require("../controllers/homeController");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/", indexView);
router.get("/icon", iconView);
router.get("/about", aboutView);
router.get("/menu", menuView);
router.get("/product/:id", productView);
router.get("/cart", cartView);
router.post("/carts", addToCartView);

router.get("/login", loginView);
router.get("/signup", signUpView);

module.exports = {
	routes: router,
};
