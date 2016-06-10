"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AcidicDagger extends UnimplementedCard {
  constructor (game) {
    super(game, "Acidic Dagger", "Mirage", "MIR");
  }
}

module.exports = AcidicDagger;
