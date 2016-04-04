"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrderoftheSacredTorchBase = require("../set6ED/OrderoftheSacredTorch.js");

class OrderoftheSacredTorch extends OrderoftheSacredTorchBase {
  constructor(game) {
    super(game, "Order of the Sacred Torch", "Fifth Edition", "5ED");
  }
}

module.exports = OrderoftheSacredTorch;
