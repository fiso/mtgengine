"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherTide extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Tide", "Exodus", "EXO");
  }
}

module.exports = AetherTide;
