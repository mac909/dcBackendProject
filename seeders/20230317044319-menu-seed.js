'use strict';
new Date()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('customerMenus', [{
        imageURL: '../public/assets/food/steak.jpg',
        name: 'T-Bone Steak',
        type: 'Entree',
        price: 15.99,
        description: 'A tender 13 oz. seasoned T-Bone steak. Served with one side and a dinner roll.',
        additions: ['rare','med-rare','medium','med-well','well'],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        imageURL: '../public/assets/food/country fried steak.jpg',
        name: 'Country Fried Steak',
        type: 'Entree',
        price: 12.59,
        description: 'Two golden-fried chopped beef steaks smothered in country gravy. Served with your choice of one side and a dinner roll.',
        additions: ['no gravy','no roll',],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        imageURL: '../public/assets/food/cheeseburger pic.jpg',
        name: 'Double Cheeseburger',
        type: 'Entree',
        price: 10.69,
        description: 'Cheddar cheese tops two hand-pressed 100% beef patties. Served with lettuce, tomato, red onions and pickles on a brioche bun. Served with fries, or substitute another side.',
        additions: ['no lettuce','no tomato','no onions','no pickles',],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        imageURL: '../public/assets/food/chicken tenders.jpg',
        name: 'Chicken Tenders',
        type: 'Entree',
        price: 11.19,
        description: 'Five golden brown breaded chicken tenders, served with barbeque sauce, and your choice of one side.',
        additions: ['no sauce','sub ranch','sub honey mustard','sub buffalo'],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        imageURL: '../public/assets/food/corn.jpg',
        name: 'Corn',
        type: 'Side',
        price: 2.99,
        description: 'Side of corn.',
        additions: ['extra butter','add seasoning'],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        imageURL: '../public/assets/food/mac and cheese.jpg',
        name: 'Mac & Cheese',
        type: 'Side',
        price: 3.99,
        description: 'Side of creamy mac and cheese.',
        additions: ['extra cheese','add hot sauce'],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        imageURL: '../public/assets/food/Vegetable+Medley.jpg',
        name: 'Vegetable Medly',
        type: 'Side',
        price: 2.99,
        description: 'Side of mixed veggies.',
        additions: ['extra veggies','add seasoning'],
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        imageURL: '../public/assets/food/Wavy+Cut+French+Fries.jpg',
        name: 'Wavy Cut Fries',
        type: 'Side',
        price: 3.99,
        description: 'Side of crispy, wavy-cut french fries.',
        additions: ['extra fries','no salt','extra salt'],
        createdAt: new Date(),
        updatedAt: new Date()
      }]);

  },


  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('customerMenus', null, {});
  }
};
