"use strict";
const Constants = require ("../../../Constants");
const OrderoftheWhiteShieldBase = require("../setATH/OrderoftheWhiteShield");

class OrderoftheWhiteShield extends OrderoftheWhiteShieldBase {
  constructor(game) {
    super(game, "Order of the White Shield", "Ice Age", "ICE");
  }
}

module.exports = OrderoftheWhiteShield;
