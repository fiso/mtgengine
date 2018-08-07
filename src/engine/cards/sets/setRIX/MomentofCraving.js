"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MomentofCraving extends UnimplementedCard {
  constructor (game) {
    super(game, "Moment of Craving", "Rivals of Ixalan", "RIX");
  }
}

module.exports = MomentofCraving;
