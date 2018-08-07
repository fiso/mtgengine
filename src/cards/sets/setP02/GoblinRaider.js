"use strict";
const Constants = require ("../../../Constants");
const GoblinRaiderBase = require("../set9ED/GoblinRaider");

class GoblinRaider extends GoblinRaiderBase {
  constructor (game) {
    super(game, "Goblin Raider", "Portal Second Age", "P02");
  }
}

module.exports = GoblinRaider;
