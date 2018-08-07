"use strict";
const Constants = require ("../../../Constants");
const OrderoftheWhiteShieldBase = require("../setME2/OrderoftheWhiteShield");

class OrderoftheWhiteShield extends OrderoftheWhiteShieldBase {
  constructor (game) {
    super(game, "Order of the White Shield", "Anthologies", "ATH");
  }
}

module.exports = OrderoftheWhiteShield;
