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
	loginView,
	signUpView,
};
