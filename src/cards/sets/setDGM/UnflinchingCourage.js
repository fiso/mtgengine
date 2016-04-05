"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnflinchingCourage extends UnimplementedCard {
  constructor(game) {
    super(game, "Unflinching Courage", "Dragon's Maze", "DGM");
  }
}

module.exports = UnflinchingCourage;
