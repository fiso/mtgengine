"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WalkingBallista extends UnimplementedCard {
  constructor (game) {
    super(game, "Walking Ballista", "Aether Revolt", "AER");
  }
}

module.exports = WalkingBallista;
