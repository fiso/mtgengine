"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarmindInfantry extends UnimplementedCard {
  constructor (game) {
    super(game, "Warmind Infantry", "Gatecrash", "GTC");
  }
}

module.exports = WarmindInfantry;
