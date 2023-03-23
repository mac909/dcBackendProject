"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class customerMenu extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	customerMenu.init(
		{
			imageURL: DataTypes.STRING,
			name: DataTypes.STRING,
			type: DataTypes.STRING,
			price: DataTypes.FLOAT,
			description: DataTypes.STRING,
			additions: DataTypes.ARRAY(DataTypes.STRING),
			quantityAv: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "customerMenu",
		}
	);
	return customerMenu;
};
