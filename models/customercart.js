"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class customerCart extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	customerCart.init(
		{
			productID: DataTypes.INTEGER,
			productName: DataTypes.STRING,
			addons: DataTypes.ARRAY(DataTypes.STRING),
		},
		{
			sequelize,
			modelName: "customerCart",
		}
	);
	return customerCart;
};
