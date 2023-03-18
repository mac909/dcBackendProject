const express = require("express");

const {
	indexView,
	iconView,
	loginView,
	signUpView,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/home", indexView);
router.get("/icon", iconView);
router.get("/", loginView);
router.get("/signup", signUpView);

module.exports = {
	routes: router,
};
