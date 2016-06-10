"use strict";
const Constants = require ("../../../Constants");
const OrderoftheSacredBellBase = require("../setCHK/OrderoftheSacredBell");

class OrderoftheSacredBell extends OrderoftheSacredBellBase {
  constructor (game) {
    super(game, "Order of the Sacred Bell", "Ninth Edition", "9ED");
  }
}

module.exports = OrderoftheSacredBell;
