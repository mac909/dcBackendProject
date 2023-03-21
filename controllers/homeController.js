const Sequelize = require("sequelize");
const { customerMenu } = require("../models");
const bodyParser = require("body-parser");

const menuView = async (req, res, next) => {
	const menuItems = await customerMenu.findAll();
	res.render("menu", { list: menuItems });
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

const indexView = (req, res, next) => {
	res.render("home");
};

const iconView = (req, res, next) => {
	res.render("icon");
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
	menuView,
	loginView,
	signUpView,
	productView,
};
