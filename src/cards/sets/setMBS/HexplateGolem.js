"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HexplateGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Hexplate Golem", "Mirrodin Besieged", "MBS");
  }
}

module.exports = HexplateGolem;
