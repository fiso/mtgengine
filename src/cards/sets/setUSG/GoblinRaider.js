"use strict";
const Constants = require ("../../../Constants");
const GoblinRaiderBase = require("../set8ED/GoblinRaider");

class GoblinRaider extends GoblinRaiderBase {
  constructor(game) {
    super(game, "Goblin Raider", "Urza's Saga", "USG");
  }
}

module.exports = GoblinRaider;
