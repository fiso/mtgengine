"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpikeColony extends Card {
  constructor(game) {
    super(game, "Spike Colony", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SpikeColony;
