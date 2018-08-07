"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherSwooper extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Swooper", "Aether Revolt", "AER");
  }
}

module.exports = AetherSwooper;
