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
	productAdded,
	addToCartView,
	clearCart,
	clearItemCart
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
router.post("/clear", clearCart);
router.delete("/clearItemCart/:id", clearItemCart);

router.post("/add-to-cart/:id", productAdded);

module.exports = {
	routes: router,
};
