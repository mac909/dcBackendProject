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
    customerId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    price: DataTypes.FLOAT,
    status: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    productDescription: DataTypes.STRING,
    productImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'carts',
  });
  return carts;
};