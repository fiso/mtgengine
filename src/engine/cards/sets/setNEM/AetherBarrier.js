"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherBarrier extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Barrier", "Nemesis", "NEM");
  }
}

module.exports = AetherBarrier;
