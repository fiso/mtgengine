"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CherishedHatchling extends UnimplementedCard {
  constructor (game) {
    super(game, "Cherished Hatchling", "Rivals of Ixalan", "RIX");
  }
}

module.exports = CherishedHatchling;
