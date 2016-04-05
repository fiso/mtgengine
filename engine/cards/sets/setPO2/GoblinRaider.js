"use strict";
const Constants = require ("../../../Constants");
const GoblinRaiderBase = require("../set8ED/GoblinRaider");

class GoblinRaider extends GoblinRaiderBase {
  constructor(game) {
    super(game, "Goblin Raider", "Portal Second Age", "PO2");
  }
}

module.exports = GoblinRaider;
