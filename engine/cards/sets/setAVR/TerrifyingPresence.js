"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TerrifyingPresence extends Card {
  constructor(game) {
    super(game, "Terrifying Presence", "Avacyn Restored", "AVR");
  }
}

module.exports = TerrifyingPresence;
