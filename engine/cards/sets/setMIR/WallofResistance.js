"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WallofResistance extends UnimplementedCard {
  constructor(game) {
    super(game, "Wall of Resistance", "Mirage", "MIR");
  }
}

module.exports = WallofResistance;
