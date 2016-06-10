"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RadiantEssence extends UnimplementedCard {
  constructor (game) {
    super(game, "Radiant Essence", "Mirage", "MIR");
  }
}

module.exports = RadiantEssence;
