'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  carts.init({
    customerName: DataTypes.STRING,
    productid: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    status: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    productDescription: DataTypes.STRING,
    imageURL: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'carts',
  });
  return carts;
};