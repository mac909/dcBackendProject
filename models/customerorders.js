"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class customerOrders extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			customerOrders.belongsTo(models.customerMenu, {
				foreignKey: "productID",
				onDelete: "CASCADE",
			});
		}
	}
	customerOrders.init(
		{
			customerID: DataTypes.INTEGER,
			productID: DataTypes.INTEGER,
			addons: DataTypes.ARRAY(DataTypes.STRING),
			status: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "customerOrders",
		}
	);
	return customerOrders;
};
