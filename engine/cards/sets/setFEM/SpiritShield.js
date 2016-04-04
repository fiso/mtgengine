"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritShield extends UnimplementedCard {
  constructor(game) {
    super(game, "Spirit Shield", "Fallen Empires", "FEM");
  }
}

module.exports = SpiritShield;
