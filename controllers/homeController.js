const indexView = (req, res, next) => {
	res.render("home");
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

module.exports = {
	indexView,
	iconView,
	aboutView,
	entreeView,
	ordernowView
};
