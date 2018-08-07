"use strict";
const Constants = require ("../../../Constants");
const TreasureMageBase = require("../setDDU/TreasureMage");

class TreasureMage extends TreasureMageBase {
  constructor (game) {
    super(game, "Treasure Mage", "Mirrodin Besieged Promos", "PMBS");
  }
}

module.exports = TreasureMage;
