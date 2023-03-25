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
				firstName: "Guest",
				lastName: "guest",
				email: "guest@email.com",
				password: "guest",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
