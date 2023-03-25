const express = require("express");
const session = require("express-session");
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
	existingUser,
	checkLogin,
	accountView,
	updateInfo,
} = require("../controllers/homeController");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(
	session({
		secret: "qweasdzxcrfv",
		resave: false,
		saveUninitialized: true,
	})
);

router.get("/", indexView);
router.get("/about", aboutView);
router.get("/menu", menuView);
router.get("/product/:id", productView);
router.get("/cart", cartView);
router.get("/login", loginView);
router.get("/signup", signUpView);
router.get("/cart/count", cartCount);
router.get("/checkLogin", checkLogin);
router.get("/account", accountView);

router.delete("/clearItemCart/:id", clearItemCart);

router.put("/update/user", updateInfo);

router.post("/clear", clearCart);
router.post("/add-to-cart/:id", productAdded);
router.post("/signup/newuser", newUser);
router.post("/login/existingUser", existingUser);

module.exports = {
	routes: router,
};
