"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherInspector extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Inspector", "Aether Revolt", "AER");
  }
}

module.exports = AetherInspector;
