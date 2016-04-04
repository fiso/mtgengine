"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrderoftheSacredBellBase = require("../setCHK/OrderoftheSacredBell.js");

class OrderoftheSacredBell extends OrderoftheSacredBellBase {
  constructor(game) {
    super(game, "Order of the Sacred Bell", "Ninth Edition", "9ED");
  }
}

module.exports = OrderoftheSacredBell;
