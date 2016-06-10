"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrystalGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Crystal Golem", "Mirage", "MIR");
  }
}

module.exports = CrystalGolem;
