"use strict";
const Constants = require ("../../../Constants");
const OrderoftheSacredTorchBase = require("../set6ED/OrderoftheSacredTorch");

class OrderoftheSacredTorch extends OrderoftheSacredTorchBase {
  constructor (game) {
    super(game, "Order of the Sacred Torch", "Ice Age", "ICE");
  }
}

module.exports = OrderoftheSacredTorch;
