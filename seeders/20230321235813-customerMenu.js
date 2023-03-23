"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("customerMenus", [
			{
				imageURL: "/assets/food/steak.jpg",
				name: "T-Bone Steak",
				type: "Entree",
				price: 15.99,
				description:
					"A tender 13 oz. seasoned T-Bone steak. Served with one side and a dinner roll.",
				additions: [
					"radio",
					"rare",
					"med-rare",
					"medium",
					"med-well",
					"well",
				],
				quantityAv: 25,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				imageURL: "/assets/food/country fried steak.jpg",
				name: "Country Fried Steak",
				type: "Entree",
				price: 12.59,
				description:
					"Two golden-fried chopped beef steaks smothered in country gravy. Served with your choice of one side and a dinner roll.",
				additions: ["checkbox", "no gravy", "no roll"],
				quantityAv: 50,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				imageURL: "/assets/food/cheeseburger pic.jpg",
				name: "Double Cheeseburger",
				type: "Entree",
				price: 10.69,
				description:
					"Cheddar cheese tops two hand-pressed 100% beef patties. Served with lettuce, tomato, red onions and pickles on a brioche bun. Served with fries, or substitute another side.",
				additions: [
					"checkbox",
					"no lettuce",
					"no tomato",
					"no onions",
					"no pickles",
				],
				quantityAv: 50,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				imageURL: "/assets/food/chicken tenders.jpg",
				name: "Chicken Tenders",
				type: "Entree",
				price: 11.19,
				description:
					"Five golden brown breaded chicken tenders, served with barbeque sauce, and your choice of one side.",
				additions: [
					"checkbox",
					"no sauce",
					"sub ranch",
					"sub honey mustard",
					"sub buffalo",
				],
				quantityAv: 25,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				imageURL: "/assets/food/corn.jpg",
				name: "Corn",
				type: "Side",
				price: 2.99,
				description: "Side of corn.",
				additions: ["checkbox", "extra butter", "add seasoning"],
				quantityAv: 25,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				imageURL: "/assets/food/mac and cheese.jpg",
				name: "Mac & Cheese",
				type: "Side",
				price: 3.99,
				description: "Side of creamy mac and cheese.",
				additions: ["checkbox", "extra cheese", "add hot sauce"],
				quantityAv: 100,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				imageURL: "/assets/food/Vegetable+Medley.jpg",
				name: "Vegetable Medly",
				type: "Side",
				price: 2.99,
				description: "Side of mixed veggies.",
				additions: ["checkbox", "extra veggies", "add seasoning"],
				quantityAv: 100,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				imageURL: "/assets/food/Wavy+Cut+French+Fries.jpg",
				name: "Wavy Cut Fries",
				type: "Side",
				price: 3.99,
				description: "Side of crispy, wavy-cut french fries.",
				additions: ["checkbox", "extra fries", "no salt", "extra salt"],
				quantityAv: 250,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("customerMenus", null, {});
	},
};
