"use strict";
const Constants = require ("../../../Constants");
const GoblinRaiderBase = require("../set9ED/GoblinRaider");

class GoblinRaider extends GoblinRaiderBase {
  constructor (game) {
    super(game, "Goblin Raider", "Eighth Edition", "8ED");
  }
}

module.exports = GoblinRaider;
