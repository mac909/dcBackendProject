const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const { customerMenu, Users, customerOrders } = require("../models");
const bodyParser = require("body-parser");
const session = require("express-session");

const menuView = async (req, res, next) => {
	const menuItems = await customerMenu.findAll();
	// res.json(req.session);
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

const cartCount = async (req, res, next) => {
	const count = await customerOrders.count();
	res.json(count);
	next();
};

const checkLogin = async (req, res, next) => {
	const guestID = await Users.findOne({
		where: {
			firstName: "Guest",
		},
	}).then((user) => {
		if (!req.session.email || !req.session.name) {
			req.session.name = "Guest";
			req.session.id = user.id;
			res.json(req.session.name);
		} else {
			res.json(req.session.name);
		}
	});
};

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
		password: await bcrypt.hash(req.body.password, 10),
	});
	res.send(req.body);
	next();
};

const existingUser = async (req, res, next) => {
	const findUser = await Users.findOne({
		where: {
			email: req.body.email,
		},
	})
		.then((user) => {
			if (!user) {
				res.send("User not found");
			} else if (bcrypt.compare(req.body.password, user.password)) {
				// User with the specified email exists
				req.session.email = user.email;
				req.session.name = user.firstName;
				req.session.userID = user.id;
				res.render("welcome", {
					user: user,
					userInfo: req.session.name,
				});
			} else {
				res.send("Password does not match!");
			}
		})
		.catch((error) => {
			// Handle any errors that occur while querying the database
			res.send("There was an unhandled error");
		});
	next();
};

const accountView = async (req, res, next) => {
	const account = await Users.findOne({
		where: {
			id: req.session.userID,
		},
	}).then((user) => {
		res.render("account", { list: user });
	});
	// .catch((error) => {
	// 	// Handle any errors that occur while querying the database
	// 	res.send("There was an unhandled error");
	// });
};

module.exports = {
	indexView,
	aboutView,
	menuView,
	loginView,
	signUpView,
	productView,
	cartView,
	productAdded,
	cartCount,
	clearCart,
	clearItemCart,
	newUser,
	existingUser,
	checkLogin,
	accountView,
};
