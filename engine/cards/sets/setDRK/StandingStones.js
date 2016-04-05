"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StandingStones extends UnimplementedCard {
  constructor(game) {
    super(game, "Standing Stones", "The Dark", "DRK");
  }
}

module.exports = StandingStones;
