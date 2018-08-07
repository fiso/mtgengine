"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MetallicMimic extends UnimplementedCard {
  constructor (game) {
    super(game, "Metallic Mimic", "Aether Revolt", "AER");
  }
}

module.exports = MetallicMimic;
