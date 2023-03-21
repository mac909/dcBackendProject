const Sequelize = require("sequelize");
const { customerMenu } = require("../models");
const bodyParser = require("body-parser");

const indexView = async (req, res, next) => {
	const menuItems = await customerMenu.findAll();
	res.render("home", { list: menuItems });
	next();
};

const productView = async (req, res, next) => {
	const item = await customerMenu.findOne({
		where: {
			id: req.params.id,
		},
	});
	res.render("product", { item: item });
	next();
};

const aboutView = (req, res, next) => {
	res.render("about");
};

const iconView = (req, res, next) => {
	res.render("icon");
};

const entreeView = (req, res, next) => {
	res.render("entrees");
};

const ordernowView = (req, res, next) => {
	res.render("Ordernow");
};

const loginView = (req, res, next) => {
	res.render("login");
};

const signUpView = (req, res, next) => {
	res.render("signup");
};

module.exports = {
	indexView,
	iconView,
	aboutView,
	entreeView,
	ordernowView,
	loginView,
	signUpView,
	productView,
};
