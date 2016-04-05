"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BreakingWave extends UnimplementedCard {
  constructor(game) {
    super(game, "Breaking Wave", "Invasion", "INV");
  }
}

module.exports = BreakingWave;
