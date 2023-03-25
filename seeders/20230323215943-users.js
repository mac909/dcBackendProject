"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("Users", [
			{
				firstName: "Admin",
				lastName: "admin",
				email: "admin@email.com",
				password: "admin",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				firstName: "User",
				lastName: "user",
				email: "user@email.com",
				password: "user",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
