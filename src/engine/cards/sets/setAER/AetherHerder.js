"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherHerder extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Herder", "Aether Revolt", "AER");
  }
}

module.exports = AetherHerder;
