"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BreakingWave extends Card {
  constructor(game) {
    super(game, "Breaking Wave", "Invasion", "INV");
  }
}

module.exports = BreakingWave;
