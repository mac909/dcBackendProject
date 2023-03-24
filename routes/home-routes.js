const express = require("express");
const bodyParser = require("body-parser");

const {
	indexView,
	aboutView,
	loginView,
	signUpView,
	productView,
	menuView,
	cartView,
	productAdded,
	clearCart,
	clearItemCart,
	newUser,
	cartCount,
} = require("../controllers/homeController");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/", indexView);
router.get("/about", aboutView);
router.get("/menu", menuView);
router.get("/product/:id", productView);
router.get("/cart", cartView);
router.get("/login", loginView);
router.get("/signup", signUpView);
router.get("/cart/count", cartCount);

router.delete("/clearItemCart/:id", clearItemCart);

router.post("/clear", clearCart);
router.post("/add-to-cart/:id", productAdded);
router.post("/signup/newuser", newUser);

module.exports = {
	routes: router,
};
