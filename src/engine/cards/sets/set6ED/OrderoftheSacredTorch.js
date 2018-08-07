"use strict";
const Constants = require ("../../../Constants");
const OrderoftheSacredTorchBase = require("../setME2/OrderoftheSacredTorch");

class OrderoftheSacredTorch extends OrderoftheSacredTorchBase {
  constructor (game) {
    super(game, "Order of the Sacred Torch", "Classic Sixth Edition", "6ED");
  }
}

module.exports = OrderoftheSacredTorch;
