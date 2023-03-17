const express = require("express");

const { indexView, iconView, aboutView, entreeView, ordernowView } = require("../controllers/homeController");
const router = express.Router();

router.get("/", indexView);
router.get("/icon", iconView);
router.get("/about", aboutView);
router.get("/entrees", entreeView);
router.get("/ordernow", ordernowView);



module.exports = {
	routes: router,
};
