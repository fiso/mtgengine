"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StriketheWeakSpot extends UnimplementedCard {
  constructor (game) {
    super(game, "Strike the Weak Spot", "Face the Hydra", "TFTH");
  }
}

module.exports = StriketheWeakSpot;
