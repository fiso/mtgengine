"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpikeWeaver extends Card {
  constructor(game) {
    super(game, "Spike Weaver", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SpikeWeaver;
