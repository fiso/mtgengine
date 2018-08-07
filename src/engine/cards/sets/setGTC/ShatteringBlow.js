"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShatteringBlow extends UnimplementedCard {
  constructor (game) {
    super(game, "Shattering Blow", "Gatecrash", "GTC");
  }
}

module.exports = ShatteringBlow;
