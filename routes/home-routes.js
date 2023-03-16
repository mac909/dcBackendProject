const express = require("express");

const { indexView, iconView } = require("../controllers/homeController");
const router = express.Router();

router.get("/", indexView);
router.get("/icon", iconView);

module.exports = {
	routes: router,
};
