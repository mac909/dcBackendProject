const indexView = (req, res, next) => {
	res.render("home");
};

const iconView = (req, res, next) => {
	res.render("icon");
};

module.exports = {
	indexView,
	iconView,
};
