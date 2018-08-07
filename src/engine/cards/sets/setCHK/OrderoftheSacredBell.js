"use strict";
const Constants = require ("../../../Constants");
const OrderoftheSacredBellBase = require("../set9ED/OrderoftheSacredBell");

class OrderoftheSacredBell extends OrderoftheSacredBellBase {
  constructor (game) {
    super(game, "Order of the Sacred Bell", "Champions of Kamigawa", "CHK");
  }
}

module.exports = OrderoftheSacredBell;
