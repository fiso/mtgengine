"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoercedConfession extends UnimplementedCard {
  constructor (game) {
    super(game, "Coerced Confession", "Gatecrash", "GTC");
  }
}

module.exports = CoercedConfession;
