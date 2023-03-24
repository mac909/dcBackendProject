const Sequelize = require("sequelize");
const { customerMenu, Users, customerOrders } = require("../models");
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

const productAdded = async (req, res, next) => {
	const item = await customerMenu.findOne({
		where: {
			id: req.params.id,
		},
	});
	if (typeof req.body.selection == "string") {
		const addToOrder = await customerOrders.create({
			customerID: 1,
			productID: req.params.id,
			addons: [req.body.selection],
			status: "Incomplete",
		});
	} else {
		const addToOrder = await customerOrders.create({
			customerID: 1,
			productID: req.params.id,
			addons: req.body.selection,
			status: "Incomplete",
		});
	}
	res.redirect("/menu");
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

const clearCart = async (req, res, next) => {
	console.log("did I make it to clear cart");
	const item = await customerOrders.destroy({
		where: {},
		truncate: true,
	});
	res.status(200);
	res.redirect("/cart");
};

const clearItemCart = async (req, res, next) => {
	console.log("did I make it to clear item cart");
	const item = await customerOrders.destroy({
		where: {
			id: req.params.id,
		},
	});
	res.status(200).send("success");
};

const cartView = async (req, res, next) => {
	const cart = await customerOrders.findAll({
		include: [
			{
				model: customerMenu,
			},
		],
	});
	res.render("cart", { list: cart });
	next();
};

const addToCartView = async (req, res, next) => {};

const newUser = async (req, res, next) => {
	// const newUser = await Users.findOne({
	// 	where: {
	// 		email: req.body.email,
	// 	},
	// });
	// if (req.body.email != req.body.confirmEmail) {
	// 	res.send("Please check your email and try again");
	const createUser = await Users.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
	});
	res.send(req.body);
};

module.exports = {
	indexView,
	iconView,
	aboutView,
	menuView,
	loginView,
	signUpView,
	productView,
	cartView,
	productAdded,
	addToCartView,
	clearCart,
	clearItemCart,
	newUser,
};
