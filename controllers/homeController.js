const Sequelize = require("sequelize");
const { customerMenu } = require("../models");
const { carts } = require("../models");
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
	res.json(req.body);
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



const clearCart = async(req, res, next) => {
	console.log("did I make it to clear cart");
	const item = await carts.destroy({
		where: {},
		truncate: true
	  })
	  res.status(200);
	  res.redirect('/cart');
	};

const clearItemCart = async(req, res, next) => {
		console.log("did I make it to clear item cart");
		const item = await carts.destroy({
			where: {
				id: req.params.id
			}
		  })
		  res.status(200).send("success");		};	

const cartView = async (req, res, next) => {
	const cart = await carts.findAll({
		where: {
			customerId: 1,
		},
	});
	res.render("cart", { list: cart });
	next();
};

const addToCartView = async (req, res, next) => {
	const product = await customerMenu.findOne({
		where: {
			id: req.body.id,
		},
	});
	
	console.log("What is the product here  ? "+product);
	console.log("the req.body "+JSON.stringify(req.body));
	
	const item = await carts.create({
		customerName: "lucas",
		customerId: 1,
		productName: product.name,
		productId: req.body.id,
		price: product.price,
		status: "Active",
		quantity: 1,
		productDescription: product.description,
		productImage: product.imageURL	
	});

	res.status(200);
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
	clearItemCart
};
