"use strict";

const { DataTypes } = require("sequelize");
const customermenu = require("../models/customermenu");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("customerOrders", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			customerID: {
				type: Sequelize.INTEGER,
			},
			productID: {
				type: Sequelize.INTEGER,
				references: {
					model: "customerMenus",
					key: "id",
					as: "productID",
				},
			},
			addons: {
				type: Sequelize.ARRAY(DataTypes.STRING),
			},
			status: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("customerOrders");
	},
};
