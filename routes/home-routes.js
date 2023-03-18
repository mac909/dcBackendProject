const express = require("express");

const {
	indexView,
	iconView,
	aboutView,
	entreeView,
	ordernowView,
	loginView,
	signUpView,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/home", indexView);
router.get("/icon", iconView);
router.get("/about", aboutView);
router.get("/entrees", entreeView);
router.get("/ordernow", ordernowView);

router.get("/", loginView);
router.get("/signup", signUpView);

module.exports = {
	routes: router,
};
