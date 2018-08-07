"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnifiedLunge extends UnimplementedCard {
  constructor (game) {
    super(game, "Unified Lunge", "Face the Hydra", "TFTH");
  }
}

module.exports = UnifiedLunge;
